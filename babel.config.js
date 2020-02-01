module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    'emotion',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-optional-chaining',
      {
        loose: false,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: false,
      },
    ],
  ],
};
