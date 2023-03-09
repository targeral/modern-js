// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable max-lines */
import path from 'path';
import type { Compiler, Compilation } from 'webpack';
import type { BuilderPluginAPI } from '@modern-js/builder-webpack-provider';
import {
  mergeRegex,
  JS_REGEX,
  TS_REGEX,
  BuilderPlugin,
  getBrowserslistWithDefault,
  logger,
  isUsingHMR,
} from '@modern-js/builder-shared';
import { merge } from '@modern-js/utils/lodash';
import { chalk, getCoreJsVersion, isBeyondReact17 } from '@modern-js/utils';
import { JsMinifyOptions } from '@modern-js/swc-plugins';
import { minify, minifyCss } from './binding';
import { CssMinifyOptions, PluginSwcOptions, TransformConfig } from './config';

const PLUGIN_NAME = 'builder-plugin-swc';
const BUILDER_SWC_DEBUG_MODE = 'BUILDER_SWC_DEBUG_MODE';

/**
 * In this plugin, we do:
 * - Remove Babel loader if exists
 * - Add our own swc loader
 * - Remove JS minifier
 * - Add swc minifier plugin
 */
export const builderPluginSwc = (
  pluginConfig: PluginSwcOptions = {},
): BuilderPlugin => ({
  name: PLUGIN_NAME,

  setup(api: BuilderPluginAPI) {
    const CORE_JS_PATH = require.resolve('core-js/package.json');
    const SWC_HELPERS_PATH = require.resolve('@swc/helpers/package.json');

    // Find if babel & ts loader exists
    api.modifyWebpackChain(async (chain, utils) => {
      const { target, CHAIN_ID, isProd } = utils;

      const config = api.getNormalizedConfig();
      const { rootPath } = api.context;

      chain.module.rule(CHAIN_ID.RULE.JS).uses.delete(CHAIN_ID.USE.BABEL);
      chain.module.delete(CHAIN_ID.RULE.TS);

      const builderConfig = api.getNormalizedConfig();
      determinePresetReact(rootPath, pluginConfig);

      const swc: TransformConfig = {
        jsc: {
          transform: {
            react: {
              refresh: isUsingHMR(config, utils),
            },
          },
        },
        env: pluginConfig.presetEnv || {},
        extensions: { ...pluginConfig.extensions },
        cwd: rootPath,
      };

      if (pluginConfig.presetReact) {
        swc.jsc!.transform!.react = {
          ...swc.jsc!.transform!.react,
          ...pluginConfig.presetReact,
        };
      }

      const { polyfill } = builderConfig.output;
      if (
        swc.env!.mode === undefined &&
        polyfill !== 'ua' &&
        polyfill !== 'off'
      ) {
        swc.env!.mode = polyfill;
      }

      if (!swc.env!.coreJs) {
        swc.env!.coreJs = getCoreJsVersion(CORE_JS_PATH);
      }

      // If `targets` is not specified manually, we get `browserslist` from project.
      if (!swc.env!.targets) {
        swc.env!.targets = await getBrowserslistWithDefault(
          api.context.rootPath,
          builderConfig,
          target,
        );
      }

      /**
       * SWC can't use latestDecorator in TypeScript file for now
       */
      if (builderConfig.output.enableLatestDecorators) {
        logger.warn('Cannot use latestDecorator in SWC compiler.');
      }

      const { extensions } = swc;

      extensions!.lockCorejsVersion ??= {
        corejs: path.dirname(CORE_JS_PATH),
        swcHelpers: path.dirname(SWC_HELPERS_PATH),
      };

      const rule = chain.module.rule(CHAIN_ID.RULE.JS);
      // Insert swc loader and plugin
      rule
        .test(mergeRegex(JS_REGEX, TS_REGEX))
        .use(CHAIN_ID.USE.SWC)
        .loader(path.resolve(__dirname, './loader'))
        .options(swc);

      if (chain.module.rules.get(CHAIN_ID.RULE.JS_DATA_URI)) {
        chain.module
          .rule(CHAIN_ID.RULE.JS_DATA_URI)
          .uses.delete(CHAIN_ID.USE.BABEL)
          .end()
          .use(CHAIN_ID.USE.SWC)
          .loader(path.resolve(__dirname, './loader'))
          .options(swc);
      }

      if (isDebugMode()) {
        const { CheckPolyfillPlugin } = await import('./checkPolyfillPlugin');

        chain
          .plugin(CHAIN_ID.PLUGIN.SWC_POLYFILL_CHECKER)
          .use(new CheckPolyfillPlugin(swc));
      }

      if (
        isProd &&
        !builderConfig.output.disableMinimize &&
        (pluginConfig.jsMinify !== false || pluginConfig.cssMinify !== false)
      ) {
        // Insert swc minify plugin
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error webpack-chain missing minimizers type
        const minimizersChain = chain.optimization.minimizers;

        if (pluginConfig.jsMinify !== false) {
          minimizersChain.delete(CHAIN_ID.MINIMIZER.JS).end();
        }

        if (pluginConfig.cssMinify !== false) {
          minimizersChain.delete(CHAIN_ID.MINIMIZER.CSS).end();
        }

        minimizersChain
          .end()
          .minimizer(CHAIN_ID.MINIMIZER.SWC)
          .use(SwcMinimizerPlugin, [
            {
              jsMinify: pluginConfig.jsMinify,
              cssMinify: pluginConfig.cssMinify,
            },
          ]);
      }
    });
  },
});

/**
 * @deprecated Using builderPluginSwc instead.
 */
export const PluginSwc = builderPluginSwc;

export interface Output {
  code: string;
  map?: string;
}

const defaultMinifyOptions: JsMinifyOptions = {
  compress: {},
  mangle: true,
};

export interface NormalizedSwcMinifyOption {
  jsMinify?: JsMinifyOptions;
  cssMinify?: CssMinifyOptions;
}

const JS_RE = /\.js$/;
const CSS_RE = /\.css$/;

const normalize = <T>(
  v: T | boolean | undefined,
  defaultValue: T,
): T | undefined => {
  if (v === true || v === undefined) {
    return defaultValue;
  } else if (v === false) {
    return undefined;
  } else {
    return v;
  }
};

export class SwcMinimizerPlugin {
  private readonly minifyOptions: NormalizedSwcMinifyOption;

  constructor(
    options: {
      jsMinify?: boolean | JsMinifyOptions;
      cssMinify?: boolean | CssMinifyOptions;
    } = {},
  ) {
    this.minifyOptions = {
      jsMinify: merge(defaultMinifyOptions, normalize(options.jsMinify, {})),
      cssMinify: normalize(options.cssMinify, {}),
    };
  }

  apply(compiler: Compiler): void {
    const meta = JSON.stringify({
      name: 'swc-minify',
      options: this.minifyOptions,
    });

    compiler.hooks.compilation.tap(PLUGIN_NAME, async compilation => {
      const { Compilation } = compiler.webpack;
      const { devtool } = compilation.options;
      const { jsMinify, cssMinify } = this.minifyOptions;

      const enableMinify =
        typeof devtool === 'string'
          ? devtool.includes('source-map')
          : Boolean(devtool);
      const inlineSourceContent =
        typeof devtool === 'string' && devtool.includes('inline');

      if (jsMinify) {
        jsMinify.sourceMap = enableMinify;
        jsMinify.inlineSourcesContent = inlineSourceContent;
      }

      if (cssMinify) {
        cssMinify.sourceMap = enableMinify;
        cssMinify.inlineSourceContent = inlineSourceContent;
      }

      compilation.hooks.chunkHash.tap(PLUGIN_NAME, (_, hash) =>
        hash.update(meta),
      );

      compilation.hooks.processAssets.tapPromise(
        {
          name: PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
        },
        async () => {
          try {
            await this.updateAssets(compilation);
          } catch (e) {
            compilation.errors.push(
              new compiler.webpack.WebpackError(`[SWC Minify]: ${e}`),
            );
          }
        },
      );
    });
  }

  async updateAssets(compilation: Compilation): Promise<void[]> {
    const cache = compilation.getCache(PLUGIN_NAME);

    const { SourceMapSource, RawSource } = compilation.compiler.webpack.sources;
    const assets = compilation
      .getAssets()
      .filter(
        asset =>
          !asset.info.minimized &&
          (JS_RE.test(asset.name) || CSS_RE.test(asset.name)),
      );

    const assetsWithCache = await Promise.all(
      assets.map(async ({ name, info, source }) => {
        const eTag = cache.getLazyHashedEtag(source);
        const cacheItem = cache.getItemCache(name, eTag);
        return {
          name,
          info,
          source,
          cacheItem,
        };
      }),
    );

    const { cssMinify, jsMinify } = this.minifyOptions;
    return Promise.all(
      assetsWithCache.map(async asset => {
        const cache = await asset.cacheItem.getPromise<{
          minifiedSource: InstanceType<
            typeof SourceMapSource | typeof RawSource
          >;
        }>();

        let minifiedSource = cache ? cache.minifiedSource : null;

        if (!minifiedSource) {
          const { source, map } = asset.source.sourceAndMap();
          let minifyResult: Output | undefined;
          let needSourceMap = false;
          const filename = asset.name;

          if (jsMinify && filename.endsWith('.js')) {
            needSourceMap = jsMinify.sourceMap!;
            minifyResult = await minifyWithTimeout(filename, () => {
              return minify(filename, source.toString(), jsMinify);
            });
          } else if (cssMinify && filename.endsWith('.css')) {
            needSourceMap = cssMinify.sourceMap!;
            minifyResult = await minifyWithTimeout(filename, () => {
              return minifyCss(filename, source.toString(), cssMinify);
            });
          }

          if (minifyResult) {
            minifiedSource =
              needSourceMap && minifyResult.map
                ? new SourceMapSource(
                    minifyResult.code,
                    asset.name,
                    minifyResult.map,
                    source.toString(),
                    map,
                    true,
                  )
                : new RawSource(minifyResult.code || '');
          }
        }

        if (minifiedSource) {
          await asset.cacheItem.storePromise({
            minifiedSource,
          });

          compilation.updateAsset(asset.name, minifiedSource, {
            ...asset.info,
            minimized: true,
          });
        }
      }),
    );
  }
}

/**
 * Determin react runtime mode based on react version
 */
function determinePresetReact(root: string, pluginConfig: PluginSwcOptions) {
  const presetReact =
    pluginConfig.presetReact || (pluginConfig.presetReact = {});

  presetReact.runtime ??= isBeyondReact17(root) ? 'automatic' : 'classic';
}

function isDebugMode(): boolean {
  return process.env[BUILDER_SWC_DEBUG_MODE] !== undefined;
}

/**
 * Currently SWC minify is not stable as we expected, there is a
 * change that it can never ends, so add a warning if it hangs too long.
 */
function minifyWithTimeout(
  filename: string,
  minify: () => Promise<Output>,
): Promise<Output> {
  const timer = setTimeout(() => {
    logger.warn(
      `SWC minimize has running for over 180 seconds for a single file: ${filename}\n
It is likely that you've encountered a ${chalk.red(
        'SWC internal bug',
      )}, please contact us at https://github.com/web-infra-dev/modern.js/issues`,
    );
  }, 180_000);

  const outputPromise = minify();

  outputPromise.finally(() => {
    clearTimeout(timer);
  });

  return outputPromise;
}