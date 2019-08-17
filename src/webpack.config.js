const webpack = require('webpack');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    name: 'build resume',
    devtool: isProduction ? 'hidden-source-map' : 'eval',
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: path.join(__dirname, 'jsx', 'index.jsx'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env', '@babel/react'],
                //     plugins: ['react-hot-loader/babel'],
                // },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
    plugins: [new webpack.LoaderOptionsPlugin({ dev: !isProduction })],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
    },
};
