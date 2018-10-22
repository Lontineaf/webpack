process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const ora = require('ora')
const chalk = require('chalk')

let proConfig = require('./config/webpack.pro');
let spinner = ora('开始构建项目...');
spinner.start()
webpack(proConfig,(err,stats)=>{
    spinner.stop()
    if(err) throw err
    process.stdout.write(stats.toString({
        colors:       true,
        modules:      false,
        children:     false,
        chunks:       false,
        chunkModules:  false
    })+'\n\n')
    console.log(chalk.cyan('构建完成!\n'))
})