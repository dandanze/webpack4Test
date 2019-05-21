const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');

const config = require('../config/index');
const baseConfig = require('./webpack.base');

const devConfig = {
    mode:'development',
    entry: {
        index: [
            'webpack-hot-middleware/client',
            path.resolve(config.srcDir, './index.js')
        ]
    },
    output: {
        path: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(config.srcDir, './index.html')
        })
    ]
}
module.exports = function (app) {
    const webpackconfig = merge(baseConfig, devConfig); 

    const compiler = webpack(webpackconfig);
    
    app.use(devMiddleWare(compiler, {
        stats:{
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    }));
    app.use(hotMiddleWare(compiler));
    return app;
}
