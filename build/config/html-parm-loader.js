const loaderUtils = require('loader-utils')
const ldash = require("lodash")
module.exports = function (content) {
    this.cacheable && this.cacheable();
    const options = loaderUtils.getOptions(this)
    var compiled = ldash.template(content);
    content = compiled({
        'asset': options.asset,
        'v': ldash.random(10000000, 99999999)
    });    
    this.value = content;
    return "module.exports = " + JSON.stringify(content);
}