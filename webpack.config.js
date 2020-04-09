const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const isProduction = process.env.NODE_ENV === 'production';

dotenv.config();

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
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: ['react-hot-loader/babel'],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({ dev: !isProduction }),
        new webpack.DefinePlugin({
            GAID: JSON.stringify(process.env.GAID),
        }),
        new HtmlWebPackPlugin({
            template: 'src/index.ejs',
            filename: '../index.html',
            templateParameters: {
                gaid: process.env.GAID,
            },
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
