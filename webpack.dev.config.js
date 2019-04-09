var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
);

module.exports = webpackConfig;
