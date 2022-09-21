import {
  signale as logger,
  createDebugger,
  getPort,
  isDev,
  PLUGIN_SCHEMAS,
  chalk,
  isPlainObject,
  getServerConfig,
  getPackageManager,
} from '@modern-js/utils';
import { mergeWith } from '@modern-js/utils/lodash';
import type { ErrorObject } from '@modern-js/utils/ajv';
import { loadConfig } from '../load-configs';

import { repeatKeyWarning } from '../utils/repeatKeyWarning';
import { mergeConfig, NormalizedConfig } from './mergeConfig';
import { patchSchema, PluginValidateSchema } from './schema';
import type { ConfigParam, LoadedConfig, DefaultUserConfig } from './types';

const debug = createDebugger('resolve-config');

export const defaultsConfig = {};
export * from './mergeConfig';
export * from './types';
export * from './schema';

export const addServerConfigToDeps = async (
  dependencies: string[],
  appDirectory: string,
  serverConfigFile: string,
) => {
  const serverConfig = await getServerConfig(appDirectory, serverConfigFile);
  if (serverConfig) {
    dependencies.push(serverConfig);
  }
};

export const defineConfig = <UserConfig extends DefaultUserConfig>(
  config: ConfigParam<UserConfig>,
): ConfigParam<UserConfig> => config;

/**
 * Assign the pkg config into the user config.
 */

export const assignPkgConfig = <UserConfig extends DefaultUserConfig>(
  userConfig: UserConfig | DefaultUserConfig = {},
  pkgConfig: ConfigParam<UserConfig> | ConfigParam<DefaultUserConfig> = {},
) =>
  mergeWith({}, userConfig, pkgConfig, (objValue, srcValue) => {
    // mergeWith can not merge object with symbol, but plugins object contains symbol,
    // so we need to handle it manually.
    if (objValue === undefined && isPlainObject(srcValue)) {
      return { ...srcValue };
    }
    // return undefined to use the default behavior of mergeWith
    return undefined;
  });

export const isUserConfigFunction = <UserConfig>(
  config: unknown,
): config is (env: any) => UserConfig | Promise<UserConfig> =>
  typeof config === 'function';

export const loadUserConfig = async <UserConfig extends DefaultUserConfig>(
  appDirectory: string,
  filePath?: string,
  packageJsonConfig?: string,
): Promise<LoadedConfig<UserConfig | DefaultUserConfig>> => {
  const loaded = await loadConfig<ConfigParam<UserConfig>>(
    appDirectory,
    filePath,
    packageJsonConfig,
  );

  let config: UserConfig | undefined | DefaultUserConfig = {};
  if (loaded) {
    config = isUserConfigFunction<UserConfig>(loaded.config)
      ? await loaded.config(0)
      : await loaded.config;
  }

  return {
    config: assignPkgConfig(config, loaded?.pkgConfig),
    jsConfig: config || {},
    pkgConfig: (loaded?.pkgConfig || {}) as UserConfig,
    filePath: loaded?.path,
    dependencies: loaded?.dependencies || [],
  };
};

const showAdditionalPropertiesError = async (error: ErrorObject) => {
  if (
    error.keyword === 'additionalProperties' &&
    error.params.additionalProperty
  ) {
    const target = [
      error.instancePath.slice(1),
      error.params.additionalProperty,
    ]
      .filter(Boolean)
      .join('.');

    const name = Object.keys(PLUGIN_SCHEMAS).find(key =>
      (PLUGIN_SCHEMAS as Record<string, any>)[key].some(
        (schemaItem: any) => schemaItem.target === target,
      ),
    );

    if (name) {
      const packageManager = await getPackageManager();
      logger.warn(
        `The configuration of ${chalk.bold(
          target,
        )} is provided by plugin ${chalk.bold(name)}. Please use ${chalk.bold(
          `${packageManager} run new`,
        )} to enable the corresponding capability.\n`,
      );
    }
  }
};

export const resolveConfig = async <UserConfig>(
  loaded: LoadedConfig<UserConfig | DefaultUserConfig>,
  configs: UserConfig[],
  schemas: PluginValidateSchema[],
  restartWithExistingPort: number,
  argv: string[],
  onSchemaError: (
    error: ErrorObject,
  ) => void | Promise<void> = showAdditionalPropertiesError,
): Promise<NormalizedConfig<UserConfig | DefaultUserConfig>> => {
  const { default: Ajv } = await import('@modern-js/utils/ajv');
  const { default: ajvKeywords } = await import(
    '@modern-js/utils/ajv-keywords'
  );
  const { default: betterAjvErrors } = await import(
    '@modern-js/utils/better-ajv-errors'
  );

  const { config: userConfig, jsConfig, pkgConfig } = loaded;

  const ajv = new Ajv({ $data: true, strict: false });

  ajvKeywords(ajv);

  const validateSchema = patchSchema(schemas);

  const validate = ajv.compile(validateSchema);

  repeatKeyWarning(validateSchema, jsConfig, pkgConfig);

  // validate user config.
  const valid = validate(userConfig);

  if (!valid && validate.errors?.length) {
    await onSchemaError(validate?.errors[0]);

    const errors = betterAjvErrors(
      validateSchema,
      userConfig,
      validate.errors?.map(e => ({
        ...e,
        dataPath: e.instancePath,
      })),
      {
        indent: 2,
      },
    );

    logger.log(errors);
    throw new Error(`Validate configuration error`);
  }

  // validate config from plugins.
  for (const config of configs) {
    if (!validate(config)) {
      logger.error(validate.errors);
      throw new Error(`Validate configuration error.`);
    }
  }
  const resolved = mergeConfig([defaultsConfig, ...configs, userConfig]);

  resolved._raw = loaded.config;

  type WithServerConfig = { server?: { port?: number } };

  if (
    isDev() &&
    argv[0] === 'dev' &&
    (resolved as WithServerConfig)?.server?.port
  ) {
    if (restartWithExistingPort > 0) {
      // dev server is restarted, should use existing port number
      (resolved as unknown as Required<WithServerConfig>).server.port =
        restartWithExistingPort;
    } else {
      // get port for new dev server
      (resolved as unknown as Required<WithServerConfig>).server.port =
        await getPort(
          (resolved as unknown as Required<WithServerConfig>).server.port!,
        );
    }
  }

  debug('resolved %o', resolved);

  return resolved;
};
