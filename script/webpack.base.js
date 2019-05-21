'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
    externals:{
        echarts:'echarts'
    },
    resolve:{
        extensions:['.js','.vue','json','.css','.scss'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    },
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
                test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 10*1024,
                        outputPath:'images/',
                    },
                }
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
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
