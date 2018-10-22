import $ from 'webpack-zepto';
import { common, RData, setPercent} from "@common";

let topTmpl = require("../tmpl/index.top.html");




let attachTplHelper = () => {
  common.helper("setPercent", setPercent);
};

let initialize = () => {
  attachTplHelper()
  if(common.checkLogin()){
      $("#index").html(common.template.render(topTmpl,{test:1}));
  }else{
    location.href='https://github.com/Lontineaf'
  }
};

export default initialize;
