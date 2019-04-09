var path = require('path');
var webpackConfig = require('../webpack.dev.config');

webpackConfig.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
};

module.exports = webpackConfig;
