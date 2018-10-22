let template = require('art-template/lib/template-web');
let common = {
    template:template,
    //检查是否登录
    checkLogin(){
        let valid =  true;
        return valid;
    },
    helper(method,func){
        this.template.defaults.imports[method]=func
    }

}

export * from './api';
export * from './art-methos';
export {common}