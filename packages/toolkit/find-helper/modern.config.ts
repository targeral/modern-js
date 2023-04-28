import moduleTools, { defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [
    moduleTools(),
    {
      setup() {
        return {
          beforeBuildTask(config) {
            config.disableSwcTransform = true;
            return config;
          },
        };
      },
    },
  ],
  buildPreset: 'npm-library',
});
