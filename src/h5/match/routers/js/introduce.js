import { common } from "@common";

let initialize = () => {
  if (common.checkLogin()) {
    console.log("introduce");
  } else {
    location.href = "https://github.com/Lontineaf";
  }
};

export default initialize;
