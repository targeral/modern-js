import type { PluginConfig, NewPluginConfig } from '../../loadPlugins';

export type { PluginConfig, NewPluginConfig };

export type DefaultUserConfig = { plugins?: [] };

export type ConfigParam<UserConfig extends DefaultUserConfig> =
  | UserConfig
  | Promise<UserConfig>
  | ((env: any) => UserConfig | Promise<UserConfig>);

export interface LoadedConfig<UserConfig> {
  config: UserConfig;
  filePath: string | false;
  dependencies: string[];
  pkgConfig: UserConfig;
  jsConfig: UserConfig;
}
