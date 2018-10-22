/**
 * webpack 开发环境配置
 */
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = require("./index");

if (config.autoRefresh) {
  //在 node 模式下运行浏览器自动刷新 需要给入口文件添加以下配置
  Object.getOwnPropertyNames(baseConfig.entry || {}).map(function(name) {
    baseConfig.entry[name] = []
      .concat("webpack/hot/dev-server")
      //添加webpack-dev-server客户端
      .concat(
        "webpack-dev-server/client?http://" + config.host + ":" + config.port
      )
      .concat(baseConfig.entry[name]);
  });
}

let devConfig = {
  mode: "development",
  devtool: "#source-map",
  output: {
    filename: "[name].js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(baseConfig, devConfig);
