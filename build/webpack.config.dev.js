const webpack = require('webpack');
const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const baseConfig = require('./webpack.config');

module.exports = {
    ...baseConfig,
    mode: 'development',
    devtool: 'eval',
    resolve: {
        ...baseConfig.resolve,
    },
    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshPlugin(),
    ],
    devServer: {
        port: 9200,
        host: '0.0.0.0',
        contentBase: path.resolve('docs'),
        historyApiFallback: true,
        hot: true,
        hotOnly: true,
        inline: true,
        publicPath: '/',
        watchContentBase: true,
        writeToDisk: true,
    },
};
