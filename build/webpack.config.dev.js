const webpack = require('webpack');
const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const baseConfig = require('./webpack.config');

// const { getResume } = require('../netlify/functions/resume');

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
        port: 3000,
        historyApiFallback: true,
        hot: true,
        liveReload: false,
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: path.resolve('out'),
        },
        // onBeforeSetupMiddleware: (devServer) => {
        //     if (!devServer) {
        //         throw new Error('webpack-dev-server is not defined');
        //     }

        //     devServer.app.get('/api/resume', async (req, res) => {
        //         try {
        //             const response = await getResume('bbon');

        //             return res.json(response);
        //         } catch (error) {
        //             console.error('[DEBUG][ERROR] error', error.message);
        //             return res.status(500).json({ statusCode: 500, message: error.message });
        //         }
        //     });
        // },
    },
};
