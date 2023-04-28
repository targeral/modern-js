const { findHelper } = require('../');

(async () => {
  const result = await findHelper({ strategy: 'pnpm' });
  console.info('result', result.length);
  console.dir(result);
})();
