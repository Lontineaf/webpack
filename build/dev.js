process.env.NODE_ENV = 'development'
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

let devConfig = require('./config/webpack.dev')
let config = require('./config');

let compiler = webpack(devConfig);
let server = new WebpackDevServer(compiler,{
    stats:"errors-only",
    hot:true
})

server.listen(config.port,config.host,(x) => {
    console.log(`开发服务器开始运行。。。`);
});