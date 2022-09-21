import { mergeWith } from '@modern-js/utils/lodash';
import { isFunction } from '@modern-js/utils';
import { DefaultUserConfig } from './types';

export type NormalizedConfig<UserConfig> = {
  cliOptions?: Record<string, any>;
  _raw: UserConfig | DefaultUserConfig;
};

/**
 * merge configuration from  modern.config.js and plugins.
 *
 * @param configs - Configuration from modern.config.ts or plugin's config hook.
 * @returns - normalized user config.
 */
export const mergeConfig = <UserConfig>(
  configs: Array<UserConfig | NormalizedConfig<UserConfig>>,
  customMergeFn?: (target: any, source: any, key: string) => any,
): NormalizedConfig<UserConfig> =>
  mergeWith({}, ...configs, (target: any, source: any, key: string) => {
    if (typeof customMergeFn === 'function') {
      return customMergeFn(target, source, key);
    }

    if (Array.isArray(target)) {
      if (Array.isArray(source)) {
        return [...target, ...source];
      } else {
        return source !== undefined ? [...target, source] : target;
      }
    } else if (isFunction(target) || isFunction(source)) {
      if (source === undefined) {
        return target;
      }
      if (target === undefined) {
        return source;
      }
      return [target, source];
    }

    return undefined;
  });
