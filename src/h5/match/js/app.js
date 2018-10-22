import $ from "webpack-zepto";
let director = require("director/build/director");

let routes = {
  "/index": function() {
    loadPage("index", 0);
  },
  "/data": function() {
    loadPage("data", 1);
  },
  "/introduce": function() {
    loadPage("introduce", 2);
  }
};

let router = new director.Router(routes).configure({
  notfound: function() {
    loadPage("index");
  }
});

router.init("/index");

function loadPage(route, index, cb) {
  let sections = $("#container>section"),
    section;

  if ((section = sections.filter("[data-route=" + route + "]")).length) {
    sections.hide(250);
    section.show(250);
  }

  setFooter(index);

  import(`../routers/js/${route}.js`)
    .then(module => {
      module.default();
      cb && cb();
    })
    .catch(console.log);
}

function setFooter(activeIndex = 0, isMatcher = false) {
  let footers = [
    {
      link: "#/index",
      txt: "首页"
    },
    {
      link: "#/data",
      txt: "数据"
    },
    {
      link: "#/introduce",
      txt: "介绍"
    },
    {
      link: "#/account",
      txt: "我"
    }
  ];
  let _html = "";
  for (let i = 0; i < footers.length; i++) {
    let icon = `sprite-ico icon-toolbar" ${i+1}`;
    if (i == 3 && isMatcher == false) {
      break;
    }
    _html += `<a href="${footers[i].link}"`;
    if (activeIndex == i) {
      _html += 'class="active"';
      icon += "-active";
    }
    _html +=
      `><span class="${icon}"></span><span class="txt">${footers[i].txt}</span></a>`;
  }
  $(".match-footer").html(_html);
}
