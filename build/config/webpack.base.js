/**
 * webpack 基础配置文件
 */
const tools = require("../../tools");
const config = require("./index");
let path = require('path');

let baseConfig = {
  entry: tools.getJS(),//获取所有页面的入口
  output: {
    path: config.outputPath
  },
  resolve: {
    extensions: [".js", ".json", "."],
    alias: {
      "@src": config.src,
      "@common":path.join(config.src,'common')
    }
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        loader:'babel-loader'
      },
      {
        test: /\.html$/,
        use: [{
            loader: path.resolve(__dirname, 'html-parm-loader.js'),
            options: {
                asset:tools.getAsset()
            }
        }]
    }
    ]
  },
  plugins:tools.getPages()//获取所有使用webpackhtmlplugins生成的页面
};
module.exports = baseConfig;
