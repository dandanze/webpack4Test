'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    mode: 'development',
    entry:{
        index:'./src/index.js'
        // website:'./src/page/website/index.js',
        // bigData:'./src/page/bigData/index.js',
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'[name].bundle.[hash].js'
    },
    // resolve:{
    //     extensions:['.js','.vue','json','.css','.scss'],
    //     alias:{
    //         '@':path.join(__dirname,'./src')
    //     }
    // },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,//只在生产环境下使用 CSS 提取，这将便于开发环境下进行热重载
                    //MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 10*1024,
                        outputPath:'images/',
                    },
                }
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader'
                    : MiniCssExtractPlugin.loader,
                    //MiniCssExtractPlugin.loader,//link
                    //'style-loader', // style
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            fileName:'index.html',
            template:'./src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     fileName:'[name].index.html',
        //     title:'this is website test',
        //     template:'./src/page/website/index.html'
        // }),
        // new HtmlWebpackPlugin({
        //     fileName:'[name].index.html',
        //     title:'this is bigData test',
        //     template:'./src/page/bigData/index.html'
        // }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new StyleLintPlugin({
            files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        })
    ],
    stats:{
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }
}
