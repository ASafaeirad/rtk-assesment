const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    test: true,
    typescript: {
      parserProject: ['./tsconfig.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
});
