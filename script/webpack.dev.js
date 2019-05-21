const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleWare = require('webpack-hot-middleware');
const config = require('../config/index');
const baseConfig = require('./webpack.base');


const DefinePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
});

const devConfig = {
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
        DefinePlugin,
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(config.srcDir, './index.html')
        })
    ]
}
module.exports = function (app) {
    let webpackconfig = merge(baseConfig, devConfig); 
    console.log(webpackconfig);

    var compiler = webpack(webpackconfig);
    
    app.use(devMiddleWare(compiler, {
        publicPath: '/',
        stats: {
            colors: true,
            chunks: false
        }
    }));
    app.use(hotMiddleWare(compiler));
    return app;
}
