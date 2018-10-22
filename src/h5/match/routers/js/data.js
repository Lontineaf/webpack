import { common} from "@common";

let initialize = () => {
  if(common.checkLogin()){
      console.log('data')
  }else{
    location.href='https://github.com/Lontineaf'
  }
};

export default initialize;