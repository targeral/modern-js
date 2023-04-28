import path from 'path';
import { FileSystem, JsonFile } from '@rushstack/node-core-library';
import { globby, GlobbyOptions } from '@modern-js/utils';
import pMap from 'p-map';
import { WORKSPACE_FILE } from '../constants';

// const useLerna = (monorepoRootPath: string) => {
//   if (FileSystem.exists(path.join(monorepoRootPath, WORKSPACE_FILE.LERNA))) {
//     return true;
//   }
//   return false;
// };

const checkYarnWorkspaces = (monorepoRootPath: string) => {
  if (!FileSystem.exists(path.join(monorepoRootPath, WORKSPACE_FILE.YARN))) {
    return false;
  }
  const json = JsonFile.load(path.join(monorepoRootPath, WORKSPACE_FILE.YARN));
  if ('workspaces' in json && json.workspaces.packages) {
    return true;
  }
  return false;
};

const checkPnpmWorkspaces = (monorepoRootPath: string) => {
  if (FileSystem.exists(path.join(monorepoRootPath, WORKSPACE_FILE.PNPM))) {
    return true;
  }
  return false;
};

const isMonorepo = (monorepoRootPath: string, strategy?: 'pnpm' | 'yarn') => {
  if (strategy === 'pnpm') {
    return checkPnpmWorkspaces(monorepoRootPath);
  }

  if (strategy === 'yarn') {
    return checkYarnWorkspaces(monorepoRootPath);
  }

  if (
    checkPnpmWorkspaces(monorepoRootPath) ||
    // useLerna(monorepoRootPath) ||
    checkYarnWorkspaces(monorepoRootPath)
  ) {
    return true;
  }
  return false;
};

export const findMonorepoRoot = (starFindPath: string) => {
  let inMonorepo = false;
  let findPath = starFindPath;

  while (findPath !== '/') {
    if (isMonorepo(findPath)) {
      inMonorepo = true;
      break;
    }
    findPath = path.dirname(findPath);
  }

  if (inMonorepo) {
    return findPath;
  }

  throw new Error('Not found monorepo root path, please pass `cwd` option.');
};

// export const getWorkspaceFile = (startFindPath: string) => {
//   const rootPath = findMonorepoRoot(startFindPath);
//   if (!rootPath) {
//     throw new Error(
//       '[Auto Find Mode]: not find any monorepo workspace file, you can set `packagesMatchs.workspaceFile`',
//     );
//   }
//   if (checkPnpmWorkspaces(rootPath)) {
//     return WORKSPACE_FILE.PNPM;
//   } else if (useLerna(rootPath)) {
//     return WORKSPACE_FILE.LERNA;
//   } else if (checkYarnWorkspaces(rootPath)) {
//     return WORKSPACE_FILE.YARN;
//   } else {
//     throw new Error(
//       '[Auto Find Mode]: not find any monorepo workspace file, you can set `packagesMatchs.workspaceFile`',
//     );
//   }
// };

export type PackageManagerType = 'pnpm' | 'yarn' | 'npm';

// export const packageManagerFlag = {
//   pnpm: [WORKSPACE_FILE.PNPM, 'pnpm-lock.yaml'],
//   yarn: ['yarn.lock', useYarnWorkspaces],
//   npm: [() => true],
// };

// const usePnpmPackageManager = (monorepoRootPath: string) =>
//   packageManagerFlag.pnpm.some(flag =>
//     FileSystem.exists(path.join(monorepoRootPath, flag)),
//   );

// const useYarnPackageManager = (monorepoRootPath: string) =>
//   packageManagerFlag.yarn.some(flag => {
//     if (typeof flag === 'function') {
//       return flag(monorepoRootPath);
//     }

//     return FileSystem.exists(path.join(monorepoRootPath, flag));
//   });

// export const getPackageManager = (
//   monorepoRootPath: string,
// ): PackageManagerType => {
//   if (usePnpmPackageManager(monorepoRootPath)) {
//     return 'pnpm';
//   } else if (useYarnPackageManager(monorepoRootPath)) {
//     return 'yarn';
//   }

//   return 'npm';
// };

// export const getMonorepoBaseData = (root: string = process.cwd()) => {
//   const rootPath = findMonorepoRoot(root);
//   if (!rootPath) {
//     throw new Error(
//       'not find any monorepo, you can add lerna、pnpm or yarn workspace file',
//     );
//   }
//   return {
//     rootPath,
//     packageManager: getPackageManager(rootPath),
//   };
// };

const normalize = (results: string[]) =>
  results.map((fp: string) => path.normalize(fp));

const getGlobOpts = (
  rootPath: string,
  packageConfigs: string[],
  ignore: string[] = [],
): GlobbyOptions => {
  const globOpts: any = {
    cwd: rootPath,
    absolute: true,
    expandDirectories: false,
    followSymbolicLinks: false,
  };

  if (packageConfigs.some((cfg: string) => cfg.includes('**'))) {
    if (packageConfigs.some((cfg: string) => cfg.includes('node_modules'))) {
      throw new Error(
        'An explicit node_modules package path does not allow globstars (**)',
      );
    }

    globOpts.ignore = [
      // allow globs like "packages/**",
      // but avoid picking up node_modules/**/package.json and dist/**/package.json
      '**/dist/**',
      '**/node_modules/**',
      ...(ignore || []),
    ];
  }

  return globOpts;
};

const makeFileFinder = (
  rootPath: string,
  packageConfigs: string[],
  ignoreConfigs: string[] = [],
) => {
  const globOpts = getGlobOpts(rootPath, packageConfigs, ignoreConfigs);

  return async <FileMapperType>(
    fileName: string,
    fileMapper: (filepath: string[]) => Promise<FileMapperType[]>,
    customGlobOpts: GlobbyOptions = {},
  ) => {
    const options = { ...customGlobOpts, ...globOpts };
    const promise = pMap(
      Array.from(packageConfigs).sort(),
      async (globPath: string) => {
        let result = await globby(path.posix.join(globPath, fileName), options);

        // fast-glob does not respect pattern order, so we re-sort by absolute path
        result = result.sort();
        // POSIX results always need to be normalized
        result = normalize(result);

        return fileMapper(result);
      },
      { concurrency: packageConfigs.length || Infinity },
    );

    // always flatten the results
    const results = await promise;

    return results.reduce((acc, result) => acc.concat(result), []);
  };
};

export const getProjectPathList = async (options: {
  rootPath: string;
  packagesConfig: string[];
  ignoreConfigs?: string[];
}) => {
  const { rootPath, packagesConfig, ignoreConfigs = [] } = options;
  const finder = makeFileFinder(rootPath, packagesConfig, ignoreConfigs);
  const fileName = 'package.json';
  const mapper = (packageConfigPath: string) => path.dirname(packageConfigPath);
  const projects = await finder(
    fileName,
    filePaths =>
      pMap(filePaths, mapper, { concurrency: filePaths.length || Infinity }),
    {},
  );

  return projects;
};

const makeSyncFileFinder = (
  rootPath: string,
  packageConfigs: string[],
  ignoreConfigs: string[] = [],
) => {
  const globOpts = getGlobOpts(rootPath, packageConfigs, ignoreConfigs);

  return <FileMapperType>(
    fileName: string,
    fileMapper: (filepath: string[]) => FileMapperType[],
    customGlobOpts: GlobbyOptions = {},
  ) => {
    const results: FileMapperType[][] = [];

    const options = { ...customGlobOpts, ...globOpts };
    for (const globPath of Array.from(packageConfigs).sort()) {
      let result = globby.sync(path.posix.join(globPath, fileName), options);
      // fast-glob does not respect pattern order, so we re-sort by absolute path
      result = result.sort();
      // POSIX results always need to be normalized
      result = normalize(result);

      results.push(fileMapper(result));
    }

    return results.reduce((acc, result) => acc.concat(result), []);
  };
};

export const syncGetProjectsByPackageConfig = (
  rootPath: string,
  packagesConfig: string[],
  ignoreConfigs: string[],
) => {
  const finder = makeSyncFileFinder(rootPath, packagesConfig, ignoreConfigs);
  const fileName = 'package.json';
  const mapper = (packageConfigPath: string) => path.dirname(packageConfigPath);
  const projects = finder(
    fileName,
    filePaths => filePaths.map(filePath => mapper(filePath)),
    {},
  );

  return projects;
};
