// import path from 'path';
import { defineConfig } from '@modern-js/self';

export default defineConfig({
  source: {
    alias: {
      '@src': './src',
    },
  },
  buildPreset({ preset }) {
    return {
      ...preset.BASE_CONFIG,
      path: './dist/bundleless/object',
    };
  },
});
