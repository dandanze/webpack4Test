const path = require('path');
const merge = require('webpack-merge');
const config = require('../config/index');
const baseConfig = require('./webpack.base');
const { AutoWebPlugin } = require('web-webpack-plugin');

debugger
const pagesDir = path.join(config.srcDir,'./page');
const template = path.join(config.srcDir,'./template.html');
//自动寻找 pages 目录下的所有目录，把每一个目录看成一个单页应用
const autoWebPlugin = new AutoWebPlugin(pagesDir,{
    template,
    postEntrys:[],
    // 提取出所有页面公共的代码
    commonsChunk: {
        name: 'common',// 提取出公共代码 Chunk 的名称
    },
})
module.exports = merge(baseConfig,{
    mode: 'development',
    entry:autoWebPlugin.entry({}),
    plugins: [
        autoWebPlugin,
    ]
})

