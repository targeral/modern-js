import path from 'path';
import { address } from '@modern-js/utils';
import { createContext, Context } from '@modern-js/plugin';
import type { IAppContext } from '@modern-js/types';
import { NormalizedConfig } from './config/mergeConfig';
import type { LoadedPlugin } from './loadPlugins';

export type { IAppContext };

export const createAllContext = <UserConfig>() => {
  const AppContext: Context<IAppContext> = createContext<IAppContext>(
    {} as IAppContext,
  );

  const ConfigContext = createContext<UserConfig>({} as UserConfig);

  const ResolvedConfigContext = createContext<NormalizedConfig<UserConfig>>(
    {} as NormalizedConfig<UserConfig>,
  );

  return {
    AppContext,
    ConfigContext,
    ResolvedConfigContext,
  };
};

export const created = createContext<boolean>(false);
let contextO: unknown;

export const getAllContextAPI = <UserConfig>() => {
  if (!created.get()) {
    created.set(true);
    contextO = createAllContext<UserConfig>();
  }
  const { AppContext, ConfigContext, ResolvedConfigContext } = contextO as {
    AppContext: Context<IAppContext>;
    ConfigContext: Context<UserConfig>;
    ResolvedConfigContext: Context<NormalizedConfig<UserConfig>>;
  };

  /**
   * Set app context.
   * @param value new app context. It will override previous app context.
   */
  const setAppContext = (value: IAppContext) => AppContext.set(value);

  /**
   * Get app context, including directories, plugins and some static infos.
   */
  const useAppContext = () => AppContext.use().value;

  /**
   * Get original content of user config.
   */
  const useConfigContext = () => ConfigContext.use().value;

  /**
   * Get normalized content of user config.
   */
  const useResolvedConfigContext = () => ResolvedConfigContext.use().value;

  return {
    AppContext,
    ConfigContext,
    ResolvedConfigContext,
    setAppContext,
    useAppContext,
    useConfigContext,
    useResolvedConfigContext,
  };
};

export const initAppContext = ({
  appDirectory,
  plugins,
  configFile,
  options,
  serverConfigFile,
}: {
  appDirectory: string;
  plugins: LoadedPlugin[];
  configFile: string | false;
  options?: {
    metaName?: string;
    srcDir?: string;
    distDir?: string;
    sharedDir?: string;
  };
  serverConfigFile: string;
}): IAppContext => {
  const {
    metaName = 'modern-js',
    srcDir = 'src',
    distDir = '',
    sharedDir = 'shared',
  } = options || {};

  return {
    metaName,
    appDirectory,
    configFile,
    serverConfigFile,
    ip: address.ip(),
    port: 0,
    packageName: require(path.resolve(appDirectory, './package.json')).name,
    srcDirectory: path.resolve(appDirectory, srcDir),
    distDirectory: distDir,
    sharedDirectory: path.resolve(appDirectory, sharedDir),
    nodeModulesDirectory: path.resolve(appDirectory, './node_modules'),
    internalDirectory: path.resolve(
      appDirectory,
      `./node_modules/.${metaName}`,
    ),
    plugins,
    htmlTemplates: {},
    serverRoutes: [],
    entrypoints: [],
    checkedEntries: [],
    apiOnly: false,
    internalDirAlias: `@_${metaName.replace(/-/g, '_')}_internal`,
    internalSrcAlias: `@_${metaName.replace(/-/g, '_')}_src`,
  };
};
