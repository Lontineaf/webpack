const path = require('path');
const root = path.resolve(__dirname,'../../');
/**
 * 全局配置文件
 */
let config = {
    host:'localhost',//开发ip
    port:3000,//端口号
    root:root,//项目根目录
    src:path.join(root,'src'),//项目源码目录
    outputPath:path.resolve(root,'dist'),//打包输出目录
    autoRefresh:true,//开发环境下是否启用浏览器自动刷新
    staticAsset:{//静态资源地址
        test:'http://www.baidu.com',
        formal:'https://www.baidu.com'
    }
}

module.exports = config