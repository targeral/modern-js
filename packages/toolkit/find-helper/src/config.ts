import type { Project } from './project';

export type StrategyItem = 'pnpm' | 'yarn' | 'rush' | 'emo' | 'find.json';

export interface FindHelperConfig {
  strategy: StrategyItem[] | StrategyItem;
  cwd?: string;
}

export interface FindAction {
  get?: (options: { startPath: string }) => string[] | Promise<string[]>;
  filter?: (ps: string[]) => string[];
  struct?: (ps: string[]) => Project[];
}
