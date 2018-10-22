const glob = require('glob');
const path = require('path');
const config = require('../build/config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let args = process.argv.splice(2);
let runProject = '';

if(!args){
    console.error('请指定项目名称')
    return false;
}else{
    runProject = args[0];
}


/**
 * 获取符合条件的entries
 *
 * @method getEntries
 * @param {String} expr 入口地址
 * @param {String} base 基础路径
 */
let getEntries = function(expr, base) {
    let entries = {};
    let globpaths = path.join(base, expr);
     
    //获取当前目录下匹配的所有路径
    glob.sync(globpaths).forEach(function(entry) {
        let moduleName = entry.match(/(\w+).\w+$/)[1];
        if (base) {
            // 获取相对路径
            let temp = path.relative(base, entry);
            moduleName = temp.replace(path.extname(entry), "");
        }
        entries[moduleName] = entry;
    });
    return entries;
};

/**
 * 获取入口js
 */
let getJS = function(){
    return getEntries(path.join(runProject,'js/*.js'), config.src)
}

/**
 * 获取 webpackhtmlplugin 插件生成的页面配置
 */

let getPages = function(){
    let temp = [];
    let pages = getEntries(path.join(runProject,'*.html'), config.src);
    for (var page in pages) {
        if (page.substr(-4) == '.art') continue
        let conf = {
            filename: page + '.html',
            template: pages[page],
            inject: true,
            chunkSortMode: 'dependency',
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            chunks: Object.keys(getJS()).filter(x => {
                return x.replace(/js[\/\\]*/, '') === page.replace(/(html)?[\/\\]*/, '')
            }).concat(['vendors','commons']),
        }
        temp.push(new HtmlWebpackPlugin(conf))
    }
    return temp;
}

/**
 * 获取当前运行环境（开发or生产）对应的资源地址
 */
let getAsset = function(){
    return process.env.NODE_ENV === 'production' ? config.staticAsset.formal : config.staticAsset.test;
}

module.exports = {getJS,getPages,getAsset};