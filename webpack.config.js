const glob = require('glob');
const merge = require('webpack-merge');
const { resolve } = require('path');

const {
  setMode,
  setEntry,
  setOutput,
  setSourcemapMode,
  devServer,
  loadJSX,
  loadCSS,
  extractCSS,
  loadImages,
  loadFonts,
  notify,
  purifyCSS,
  extensions,
  alias,
  getAssets,
  cleanDist,
} = require('./config/webpack/fragments');

module.exports = (env) => merge([
  env.dev && setMode('development'),
  env.prod && setMode('production'),
  setEntry(['@babel/polyfill', resolve('src', 'index.jsx')]),
  setOutput(resolve('dist')),
  env.dev && setSourcemapMode('development'),
  env.prod && setSourcemapMode('production'),
  env.dev && devServer({
    host: 'localhost',
    port: 5000,
  }),
  loadJSX({
    include: resolve('src'),
    exclude: /node_modules/,
  }),
  env.dev && loadCSS({
    include: resolve('src'),
    exclude: /node_modules/,
  }),
  env.prod && extractCSS({
    include: resolve('src'),
    exclude: /node_modules/,
  }),
  loadImages({
    include: resolve('src'),
    exclude: /node_modules/,
    options: {
      limit: 25000,
      name: '[name].[hash].[ext]',
    },
  }),
  loadFonts(),
  notify(),
  purifyCSS(glob.sync(resolve('src', '**', '*'), {
    nodir: true,
  })),
  extensions(),
  alias(),
  getAssets(),
  env.prod && cleanDist(),
]);
