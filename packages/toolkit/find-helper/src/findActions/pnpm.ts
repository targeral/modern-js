// find all project path in pnpm workspace
import path from 'path';
import { FileSystem, JsonFile } from '@rushstack/node-core-library';
import { fs, yaml } from '@modern-js/utils';
import { WORKSPACE_FILE } from '../constants';
import { getProjectPathList } from '../utils';
import type { IPnpmWorkSpace } from '../type';
import type { FindAction } from '../config';

export const get = async (monorepoRootPath: string) => {
  const yamlString = await FileSystem.readFileAsync(
    path.resolve('/', monorepoRootPath, WORKSPACE_FILE.PNPM),
  ).then(data => data.toString());
  const pnpmWorkspace = yaml.load(yamlString) as IPnpmWorkSpace;
  const packagesConfig = pnpmWorkspace.packages || [];
  const projectPathList = await getProjectPathList({
    rootPath: monorepoRootPath,
    packagesConfig,
    ignoreConfigs: ['tests/**/*'],
  });
  return projectPathList;
};

export const pnpmFindAction: FindAction = {
  async get(options) {
    const { startPath } = options;
    return await get(startPath);
  },
};
