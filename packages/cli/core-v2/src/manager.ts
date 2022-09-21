import {
  ToThreads,
  ToRunners,
  AsyncSetup,
  PluginOptions,
  AsyncWorkflow,
  AsyncWaterfall,
  ParallelWorkflow,
  createAsyncManager,
  createAsyncWorkflow,
  createAsyncWaterfall,
  createParallelWorkflow,
  createContext,
  AsyncManager,
} from '@modern-js/plugin';
import { compatRequire } from '@modern-js/utils';
import type { Hooks } from './types';
import type { Command } from './utils/commander';
import type { NormalizedConfig } from './config/mergeConfig';
import { pluginAPI } from './pluginAPI';
import type { IAppContext } from './context';

export type HooksRunner<UserConfig> = ToRunners<{
  config: ParallelWorkflow<void, UserConfig>;
  resolvedConfig: AsyncWaterfall<{
    resolved: NormalizedConfig<UserConfig>;
  }>;
  validateSchema: ParallelWorkflow<void>;
  prepare: AsyncWorkflow<void, void>;
  commands: AsyncWorkflow<
    {
      program: Command;
    },
    void
  >;
  watchFiles: ParallelWorkflow<void>;
  fileChange: AsyncWorkflow<
    {
      filename: string;
      eventType: 'add' | 'change' | 'unlink';
    },
    void
  >;
  beforeExit: AsyncWorkflow<void, void>;
  beforeRestart: AsyncWorkflow<void, void>;
}>;

export type BaseHooks<UserConfig> = {
  config: ReturnType<typeof createParallelWorkflow<void, UserConfig>>;
  resolvedConfig: ReturnType<
    typeof createAsyncWaterfall<{
      resolved: NormalizedConfig<UserConfig>;
    }>
  >;
  validateSchema: ReturnType<typeof createParallelWorkflow<void>>;
  prepare: ReturnType<typeof createAsyncWorkflow<void, void>>;
  commands: ReturnType<
    typeof createAsyncWorkflow<
      {
        program: Command;
      },
      void
    >
  >;
  watchFiles: ReturnType<typeof createParallelWorkflow<void>>;
  fileChange: ReturnType<
    typeof createAsyncWorkflow<
      {
        filename: string;
        eventType: 'add' | 'change' | 'unlink';
      },
      void
    >
  >;
  beforeExit: ReturnType<typeof createAsyncWorkflow<void, void>>;
  beforeRestart: ReturnType<typeof createAsyncWorkflow<void, void>>;
};

/** All hooks of cli plugin. */
export type CliHooks<UserConfig> = BaseHooks<UserConfig> & Hooks;

/** All hook callbacks of cli plugin. */
export type CliHookCallbacks<UserConfig> = ToThreads<CliHooks<UserConfig>>;

let manager_: unknown;
export const created = createContext<boolean>(false);
export const getManagerAPI = <UserConfig>() => {
  if (!created.get()) {
    created.set(true);
    const baseHooks = {
      config: createParallelWorkflow<void, UserConfig>(),
      resolvedConfig: createAsyncWaterfall<{
        resolved: NormalizedConfig<UserConfig>;
      }>(),
      validateSchema: createParallelWorkflow(),
      prepare: createAsyncWorkflow<void, void>(),
      commands: createAsyncWorkflow<
        {
          program: Command;
        },
        void
      >(),
      watchFiles: createParallelWorkflow(),
      fileChange: createAsyncWorkflow<
        {
          filename: string;
          eventType: 'add' | 'change' | 'unlink';
        },
        void
      >(),
      beforeExit: createAsyncWorkflow<void, void>(),
      beforeRestart: createAsyncWorkflow<void, void>(),
    };
    manager_ = createAsyncManager<CliHooks<UserConfig>, typeof pluginAPI>(
      baseHooks,
      pluginAPI,
    );
  }
  const manager = manager_ as AsyncManager<
    CliHooks<UserConfig>,
    {
      setAppContext: (value: IAppContext) => void;
      useAppContext: () => IAppContext;
      useConfigContext: () => UserConfig;
      useResolvedConfigContext: () => NormalizedConfig<UserConfig>;
    }
  >;
  const { createPlugin, registerHook, useRunner: mountHook } = manager;

  return {
    createPlugin,
    registerHook,
    mountHook,
    manager,
  };
};

/** Plugin options of a cli plugin. */
// eslint-disable-next-line @typescript-eslint/ban-types
export type CliPlugin<UserConfig = {}, ExtendHooks = {}> = PluginOptions<
  CliHooks<UserConfig>,
  AsyncSetup<CliHooks<UserConfig> & ExtendHooks, typeof pluginAPI>,
  ExtendHooks
>;

export const usePlugins = <UserConfig>(plugins: string[]) =>
  plugins.forEach(pluginPath => {
    const module = compatRequire(require.resolve(pluginPath));
    const { manager } = getManagerAPI<UserConfig>();
    manager.usePlugin(module);
  });
