/**
 * webpack 生产环境配置
 */
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

let baseConfig = require("./webpack.base");
let config = require("./index");

let proConfig = {
  mode: "production",
  output: {
    filename: "[name].[chunkhash:8].js",
    chunkFilename: "chunks/[name].[chunkhash:8].js",
    publicPath: "../../" // html相对于输出目录的路径
  },
  plugins: [
    new CleanWebpackPlugin(config.outputPath, {
      root: config.root,
      verbose: true
    })
  ],
  optimization: {
    //代码分隔优化设置
    minimize: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          minChunks: 1,
          name: "vendors"
        },
        commons: {
          test: path.join(config.root, "src/common"),
          priority: -10,
          minChunks: 1,
          minSize: 0,
          name: "commons"
        }
      }
    }
  }
};
module.exports = merge(baseConfig, proConfig);
