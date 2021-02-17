const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const CopyPlugin = require('copy-webpack-plugin');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

const projectRootDir = path.resolve(__dirname, '..');

module.exports = {
    name: 'build resume',
    devtool: isProduction ? 'hidden-source-map' : 'eval',
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: {
        app: path.join(projectRootDir, 'src', 'index'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            plugins: [
                                !isProduction && 'react-refresh/babel',
                                isProduction && [
                                    'transform-remove-console',
                                    { exclude: ['error', 'warn'] },
                                ],
                            ].filter(Boolean),
                        },
                    },
                ].filter(Boolean),
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
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(projectRootDir, 'public'),
                    to: '../',
                },
            ],
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.join(projectRootDir, 'docs/dist'),
        publicPath: '/dist/',
    },
};
