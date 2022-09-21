import type { CommonAPI } from '@modern-js/plugin';
import type { CliHooks } from './manager';
import { getAllContextAPI } from './context';

const {
  setAppContext,
  useAppContext,
  useConfigContext,
  useResolvedConfigContext,
  AppContext,
  ConfigContext,
  ResolvedConfigContext,
} = getAllContextAPI();

export const pluginAPI = {
  setAppContext,
  useAppContext,
  useConfigContext,
  useResolvedConfigContext,
};

export type { IAppContext } from '@modern-js/types';

/** all apis for cli plugin */
export type PluginAPI<
  UserConfig = Record<string, any>,
  ExtendHooks = Record<string, any>,
> = typeof pluginAPI & CommonAPI<CliHooks<UserConfig> & ExtendHooks>;

// TODO: only export types after refactor all plugins
export {
  AppContext,
  ConfigContext,
  ResolvedConfigContext,
  useAppContext,
  useConfigContext,
  useResolvedConfigContext,
};
