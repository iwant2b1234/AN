(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb3c83c0"],{2990:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["homeBanner",{enlargeBanner:t.enlarge||t.clientWidth<1025}]},[n("icon",{attrs:{name:"arrowL"},nativeOn:{click:function(e){return t.arrowL(e)}}}),n("ul",{style:t.ulStyle},t._l(t.bannerList,(function(e,i){return n("li",{key:i,class:[{enlarge:e==t.enlarge},{scrollStop:t.scrollStop&&t.clientWidth<1025}],style:t.liStyle(i,e),on:{click:function(n){return t.getEnlarge(e)},mousedown:t.handleMouseDown,touchstart:t.handleMouseDown,touchend:t.handleMouseUp,touchmove:t.handleMouseMove}},[n("icon",{staticClass:"popclose",attrs:{name:"popclose"}}),n("div",{style:t.divStyle(e)}),n("h1",[t._v("ban-"+t._s(e)+" "),n("a",{on:{click:t.openMsg}},[t._v("More")])])],1)})),0),n("icon",{attrs:{name:"arrowR"},nativeOn:{click:function(e){return t.arrowR(e)}}})],1)},s=[],r=(n("fb6a"),n("a434"),{data:function(){return{num:.1,interval:void 0,enlarge:"",bannerList:[],width:"",body:"",scrollStop:!1,time:1,sec:1,down:0,up:0,move:!1,right:!1,left:!1,gameList:["b0","b1","b2","b3","b4","b5","b6","b7"],clientWidth:document.body.clientWidth,timer:!1}},computed:{ulStyle:function(){return{transform:"translate3d( ".concat(this.num,"px ,0px,0px)")}}},watch:{clientWidth:function(t){if(!this.timer){this.clientWidth=t,this.timer=!0;var e=this;this.onresize(),setTimeout((function(){e.timer=!1}),400)}}},methods:{openMsg:function(){this.platform.showMsg("Try It","手機版可左右拖移換頁")},handleMouseDown:function(t){this.scrollStop&&(this.move=!0,this.down=t.changedTouches&&t.changedTouches[0].pageX)},handleMouseMove:function(){this.move=!1},handleMouseUp:function(t){if(this.scrollStop&&!this.move){var e=t.changedTouches&&t.changedTouches[0].pageX;this.down>e?this.arrowR():this.arrowL(),this.scroll()}},arrowR:function(){var t=this;this.time=90,this.scrollStop&&(clearInterval(this.interval),this.interval=setInterval((function(){if(t.num<=-2*t.width){var e=t.bannerList.slice(0,1),n=t.bannerList.slice(1);return n[t.gameList.length]=e[0],t.bannerList=n,t.num=-t.width,void clearInterval(t.interval)}t.num=t.num-.1*t.time}),1))},arrowL:function(){var t=this;this.time=-90,this.scrollStop&&(clearInterval(this.interval),this.interval=setInterval((function(){if(t.num>=0){var e=t.bannerList;return e.splice(0,0,t.bannerList[t.gameList.length-1]),t.bannerList=e.slice(0,t.gameList.length),t.num=-t.width,void clearInterval(t.interval)}t.num=t.num-.1*t.time}),1))},getEnlarge:function(t){this.scrollStop&&this.clientWidth<1025||(this.enlarge?(this.enlarge="",this.scroll()):this.enlarge=t)},divStyle:function(t){return{"background-image":"url(img/banner/".concat(t,".jpg)")}},liStyle:function(t,e){return e==this.enlarge?{transform:"matrix(1, 0, 0, 1, ".concat(-this.width*t-this.num,", 0)"),width:"100%","z-index":99,left:"".concat(this.width*t,"px"),transition:"all .6s linear"}:{left:"".concat(this.width*t,"px"),width:"".concat(this.width,"px")}},scroll:function(){var t=this;clearInterval(this.interval),this.interval=setInterval((function(){var e=Date.now();if(t.enlarge)clearInterval(t.interval);else{if(t.num>=0||t.right){var n=t.bannerList;n.splice(0,0,t.bannerList[t.gameList.length-1]),t.bannerList=n.slice(0,t.gameList.length),t.num=-t.width,t.clientWidth>1025?t.time=1:t.time=0}if(t.num<=-2*t.width||t.left){var i=t.bannerList.slice(0,1),s=t.bannerList.slice(1);s[t.gameList.length-1]=i[0],t.bannerList=s,t.num=-t.width,t.clientWidth>1025?t.time=1:t.time=0}e-t.sec>=3500&&t.clientWidth<1025&&(t.time=50,t.sec=Date.now()),t.num=t.num-.1*t.time,t.right=!1,t.left=!1}}),1)},onresize:function(){this.clientWidth<1025?(this.time=50,this.sec=Date.now(),this.scrollStop=!0,this.clientWidth<1025?this.width=this.clientWidth:this.width=this.clientWidth/2):(this.time=1,this.width=this.clientWidth/3,this.scrollStop=!1),this.num=-this.width,this.scroll()}},beforeDestroy:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),clearInterval(this.interval)},mounted:function(){window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.bannerList=this.gameList;var t=this;window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,t.clientWidth=window.screenWidth}()},this.onresize()}}),o=r,l=(n("e448"),n("2877")),a=Object(l["a"])(o,i,s,!1,null,null,null);e["default"]=a.exports},a434:function(t,e,n){"use strict";var i=n("23e7"),s=n("23cb"),r=n("a691"),o=n("50c4"),l=n("7b0b"),a=n("65f0"),h=n("8418"),c=n("1dde"),u=c("splice"),d=Math.max,m=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,i,c,u,w,g,p=l(this),b=o(p.length),L=s(t,b),M=arguments.length;if(0===M?n=i=0:1===M?(n=0,i=b-L):(n=M-2,i=m(d(r(e),0),b-L)),b+n-i>v)throw TypeError(f);for(c=a(p,i),u=0;u<i;u++)w=L+u,w in p&&h(c,u,p[w]);if(c.length=i,n<i){for(u=L;u<b-i;u++)w=u+i,g=u+n,w in p?p[g]=p[w]:delete p[g];for(u=b;u>b-i+n;u--)delete p[u-1]}else if(n>i)for(u=b-i;u>L;u--)w=u+i-1,g=u+n-1,w in p?p[g]=p[w]:delete p[g];for(u=0;u<n;u++)p[u+L]=arguments[u+2];return p.length=b-i+n,c}})},d8ed:function(t,e,n){},e448:function(t,e,n){"use strict";n("d8ed")}}]);
//# sourceMappingURL=chunk-bb3c83c0.53c77f44.js.map