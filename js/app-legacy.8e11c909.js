(function(){"use strict";var t={9245:function(t,e,n){n.d(e,{$h:function(){return i},XT:function(){return c}});n(2222);var o=n(6166),r=n.n(o),i="6168f76b6e8e811fa14c2c1d50c8ec66",a="https://api.themoviedb.org/3";function c(t){return r()("".concat(a,"/").concat(t,"/popular?api_key=").concat(i,"&language=ko"))}},2700:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Layout-Header"),n("main",{staticClass:"main"},[n("router-view")],1),n("Layout-Footer"),n("ScrollToTop"),n("p",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-template"},[t._v("loading...")])],1)},i=[],a=n(4367),c=n(4665),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__login-wrap"},[n("ul",{staticClass:"header__login-container"},[n("li",[n("router-link",{attrs:{to:"./"}},[t._v("로그인")])],1),n("li",[n("router-link",{attrs:{to:"./"}},[t._v("이용권")])],1),n("li",[n("router-link",{attrs:{to:"./"}},[t._v("이벤트")])],1)])]),n("div",{staticClass:"header__menu-wrap"},[n("h1",{staticClass:"header__menu-logo"},[n("router-link",{attrs:{to:"./"}},[t._v("wavve")])],1),n("nav",{staticClass:"header__menu-gnb"},[t._l(t.gnb,(function(e,o){return[n("a",{key:o,on:{click:function(n){return n.stopPropagation(),t.moveToMenu(e.link)}}},[t._v(" "+t._s(e.text)+" ")])]}))],2),n("Layout-Search",{staticClass:"header__menu-search"})],1)])},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}})]),n("input",{attrs:{type:"text",placeholder:"검색하기"}})])},f=[],d={},v=d,p=n(1001),h=(0,p.Z)(v,l,f,!1,null,"0aa2e2cb",null),m=h.exports,g={components:{LayoutSearch:m},data:function(){return{gnb:[{link:"home",text:"홈"},{link:"category",text:"카테고리",subMenu:[{link:"drama",text:"드라마"}]},{link:"live",text:"LIVE"},{link:"my",text:"MY"}]}},methods:{moveToMenu:function(t){if("category"===t)return!1;console.log(t)}}},_=g,w=(0,p.Z)(_,s,u,!1,null,"3af980cb",null),y=w.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__notice-wrap"},[n("div",{staticClass:"footer__notice-container"},[n("h3",[t._v("공지사항")]),n("div",{staticClass:"footer__notice-list"},[n("Flicking",{attrs:{options:{circular:!0,horizontal:!1},plugins:t.plugins}},t._l(t.noticeList,(function(e,o){return n("div",{key:o,staticClass:"notice-line"},[t._v(" "+t._s(e.text)+" ")])})),0)],1)])]),n("nav",{staticClass:"footer__container"},[n("ul",{staticClass:"footer__fnb"},t._l(t.fnb,(function(e,o){return n("li",{key:o},[n("a",{on:{click:function(n){return n.stopPropagation(),t.moveToMenu(e.link)}}},[t._v(" "+t._s(e.text)+" ")])])})),0)]),t._m(0)])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"footer__info-copyright"},[n("li",[n("span",[t._v("콘텐츠웨이브 주식회사")]),n("span",[t._v("대표이사 이태현")]),n("span",[t._v("고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및 공휴일 휴무)")])]),n("li",[n("span",[t._v("사업자등록번호 220-88-38020")]),n("span",[t._v("호스팅서비스제공자 : 마이크로소프트 유한회사")])]),n("li",[n("span",[t._v("통신판매업 신고번호 : 제 2021-서울영등포-0585호")]),n("span",[t._v("통신판매업 정보 공개 : "),n("a",{staticClass:"info-link",attrs:{href:"http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020",target:"_blank"}},[t._v("http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020")])])]),n("li",[n("span",[n("address",[t._v(" 서울특별시 영등포구 여의나루로 60 포스트타워 19층 ")])]),n("span",[t._v("전자우편주소 : "),n("a",{attrs:{href:"mailto:helpdesk@wavve.com"}},[t._v("helpdesk@wavve.com")])])]),n("li",{staticClass:"copyright"},[n("span",[t._v("Copyright© 콘텐츠웨이브(주) All rights reserved.")])])])}],C=n(4304),x=n(7370),T={components:{Flicking:C.m},data:function(){return{plugins:[new x.il],fnb:[{link:"company",text:"회사소개"},{link:"recruit",text:"인재채용"},{link:"service",text:"서비스 소개"},{link:"agreement",text:"이용약관"},{link:"privacy",text:"개인정보 처리방침"},{link:"notice",text:"고객센터"}],noticeList:[{text:"HBO시리즈 시청 이벤트 안내",link:"noticeId=2855"},{text:"wavve오리지널 'MMM: Where are we now' 시청 이벤트 안내",link:"noticeId=2850"},{text:"[안드로이드 app] 구글플레이결제 적용 안내",link:"noticeId=2848"}]}},methods:{moveToMenu:function(t){console.log(t)}}},L=T,E=(0,p.Z)(L,b,k,!1,null,"f4896350",null),O=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-top",class:{"button-top--show":t.showButtonTop},on:{click:t.scrollToTop}},[n("p",[t._v("▲")])])},Z=[],M={data:function(){return{scrollDebounceFunction:function(){},showButtonTop:!1}},mounted:function(){window.addEventListener("scroll",this.scrollEvent)},methods:{scrollEvent:function(){var t=this;clearTimeout(this.scrollDebounceFunction),this.scrollDebounceFunction=setTimeout((function(){var e=window.innerHeight,n=window.scrollY;t.showButtonTop=.2*e<=n}),500)},scrollToTop:function(){window.scroll({top:0,behavior:"smooth"})}}},P=M,j=(0,p.Z)(P,S,Z,!1,null,null,null),A=j.exports,F={name:"App",components:{LayoutHeader:y,LayoutFooter:O,ScrollToTop:A},data:function(){return{}},computed:(0,a.Z)({},(0,c.rn)({isLoading:function(t){return t.isLoading}})),watch:{isLoading:function(t){t?document.querySelector("body").classList.add("scrollLock"):document.querySelector("body").classList.remove("scrollLock")}},methods:{}},$=F,B=(0,p.Z)($,r,i,!1,null,null,null),N=B.exports,H=(n(1539),n(8783),n(3948),n(2809));o.Z.use(H.Z);var I=new H.Z({mode:"history",routes:[{path:"/",name:"Home",component:function(){return n.e(208).then(n.bind(n,3208))}}]}),z=I,D=n(9245),q=n(8073);o.Z.use(c.ZP);var R=new c.ZP.Store({state:{isLoading:!1},mutations:{setIsLoading:function(t,e){t.isLoading=e}}});o.Z.config.productionTip=!1,o.Z.prototype.$getMovies=D.XT,o.Z.use(q.tc),new o.Z({router:z,store:R,render:function(t){return t(N)}}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o](i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy.e4266830.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".6ad350e9.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="wavve-clone:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+i){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+i),c.src=o),t[o]=[r];var d=function(e,n){c.onerror=c.onload=null,clearTimeout(v);var r=t[o];if(delete t[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p=""}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),c=n.p+a;if(e(a,c))return r();t(o,c,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={208:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),c=new Error,s=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var l=s(n)}for(e&&e(o);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunkwavve_clone"]=self["webpackChunkwavve_clone"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2700)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.8e11c909.js.map