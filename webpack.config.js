const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    name: 'build resume',
    devtool: isProduction ? 'hidden-source-map' : 'eval',
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    entry: {
        app: path.join(__dirname, 'src', 'jsx', 'index'),
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env', '@babel/react'],
                //     plugins: ['react-hot-loader/babel'],
                // },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
            // {
            //     test: /\.tsx?$/,
            //     // loader: 'ts-loader',
            //     // options: {
            //     //     configFile: 'tsconfig.client.json',
            //     // },
            //     loader: 'awesome-typescript-loader',
            //     options: {
            //         configFileName: 'tsconfig.json',
            //     },
            //     // exclude: path.join(__dirname, 'node_modules'),
            //     // exclude: /node_moduels/,
            // },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ dev: !isProduction }),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: '../index.html',
            inject: false,
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'docs/dist'),
        publicPath: '/dist/',
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve('docs'),
        historyApiFallback: true,
        hot: true,
        inline: true,
        publicPath: '/',
    },
};
