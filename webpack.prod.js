const common = require('./webpack.common');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path'); //path module belongs to node

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js'
  },
  plugins: [new CleanWebpackPlugin()]
});
