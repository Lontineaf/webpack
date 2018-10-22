import $ from 'webpack-zepto';

let apiURL = {
    test:{
        'query': {
            'interface': 'http://www.baidu.com'
        },
        'modify': {
            'interface': 'http://www.baidu.com'
        }
    },
    formal:{
        'query': {
            'interface': 'http://www.baidu.com'
        },
        'modify': {
            'interface': 'http://www.baidu.com'
        }
    }
    
}


if(process.env.NODE_ENV === 'development'){
    apiURL = apiURL.test
}else{
    apiURL = apiURL.formal;
}

let RData = {}
for (let key in apiURL) {
    let one = apiURL[key]
    for (let subkey in one) {
        let subvalue = one[subkey]
        if (subkey.indexOf('interface') < 0) continue
        let leftInterface = subkey.substr('interface'.length)
        let prefix = subvalue.substr(-1) != '/' ? subvalue += '/' : subvalue
        RData[key + leftInterface] = function(url, param, cb) {
            $.ajax({
                url:prefix+url,
                data:param,
                success:(json)=>{
                    cb && cb(json)
                }
            })
        }
        RData[key + leftInterface + 'Post'] = function(url, param, cb) {
            $.ajax({
                type:'POST',
                url:prefix+url,
                data:param,
                success:(json)=>{
                    cb && cb(json)
                }
            })
        }
        RData[key + leftInterface + 'Jsonp'] = function(url, param, cb) {
            $.ajax({
                dataType:'jsonp',
                url:prefix+url,
                data:param,
                success:(json)=>{
                    cb && cb(json)
                }
            })
        }
    }
}



export {RData}