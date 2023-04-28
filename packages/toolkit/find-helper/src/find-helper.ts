import type { FindHelperConfig } from './config';
import { find } from './find';
import { pnpmFindAction } from './findActions/pnpm';
import { findMonorepoRoot } from './utils/monorepo';

export const findHelper = (config: FindHelperConfig) => {
  const { strategy } = config;
  const cwd = config.cwd ?? findMonorepoRoot(process.cwd());

  if (strategy === 'pnpm') {
    return find(pnpmFindAction, {
      startPath: cwd,
    });
  }

  return [];
};
