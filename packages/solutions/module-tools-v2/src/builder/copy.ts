import path from 'path';
import type { CopyConfig, CopyPattern } from '../types/copy';

export const runPatterns = (
  pattern: CopyPattern,
  options: {
    appDirectory: string;
  },
) => {
  const { appDirectory } = options;
  const { from, context = appDirectory } = pattern;
  const normalizedFrom = path.normalize(from);
  let absoluteFrom;
  if (path.isAbsolute(normalizedFrom)) {
    absoluteFrom = normalizedFrom;
  } else {
    absoluteFrom = path.resolve(context, normalizedFrom);
  }
};

// export const copyTask = async (
//   copyConfig: CopyConfig,
//   options: {
//     appDirectory: string;
//   },
// ) => {
//   if (!copyConfig.patterns || copyConfig.patterns.length === 0) {
//     return;
//   }

//   const { fastGlob, globby, slash, fs } = await import('@modern-js/utils');
//   const { default: normalizePath } = await import(
//     '../../compiled/normalize-path'
//   );
//   const { default: pMap } = await import('../../compiled/p-map');
//   const { appDirectory } = options;
//   const concurrency = copyConfig?.options?.concurrency || 100;
//   console.info('copying');
//   try {
//     await pMap(
//       copyConfig.patterns,
//       async copyOption => {
//         const {
//           context = appDirectory,
//           from: source,
//           to,
//           globOptions = {},
//         } = copyOption;
//         const glob = path.isAbsolute(source)
//           ? source
//           : path.posix.join(
//               fastGlob.escapePath(normalizePath(path.resolve(context))),
//               source,
//             );

//         const sourceFilePaths = await globby(slash(glob), globOptions);
//         if (!sourceFilePaths.length) {
//           return;
//         }

//         const dest = path.join(context, path.normalize(to ? to : ''));
//         sourceFilePaths.forEach(sourceFilePath => {
//           fs.copySync(
//             sourceFilePath,
//             path.extname(dest) === ''
//               ? path.join(dest, path.relative(context, sourceFilePath))
//               : dest,
//           );
//         });
//       },
//       { concurrency },
//     );
//   } catch (e) {
//     if (e instanceof Error) {
//       console.error(`copy error: ${e.message}`);
//     }
//   }
// };
