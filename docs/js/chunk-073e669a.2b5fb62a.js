(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073e669a"],{"130a":function(t,e,n){},"239b":function(t,e,n){"use strict";n("d5b0")},"23ff":function(t,e,n){"use strict";n("130a")},"28f4":function(t,e,n){},3519:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chatRoom",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.menu=!1}}},[n("div",{staticClass:"talk"},[n("h3",[t._m(0),n("icon",{class:{actv:t.menu},attrs:{name:"drag"},nativeOn:{click:function(e){t.menu=!t.menu}}}),t.menu?n("TalkMenu",{attrs:{nowBg:t.nowBg},on:{selectBg:t.selectBg}}):t._e()],1),n("div",{class:["bottom","bg-"+t.nowBg],on:{click:function(e){t.menu=!1}}},[n("div",{ref:"block",staticClass:"info",style:"height: calc( 100% - "+t.height+"px );"},t._l(t.talk,(function(e,o){return n("TalkBox",{key:o,attrs:{talkText:e,userFlag:t.userFlag,userIndex:t.userIndex,moneyTalkListlength:t.moneyTalkList.length-1}})})),1),t.goDown?n("icon",{staticClass:"goDown",attrs:{name:"Arrow-down"},nativeOn:{click:function(e){t.$refs.block.scrollTop=t.scrollTop}}}):t._e(),t.iconBox?n("TalkFtBox",{on:{selectIcon:t.selectIcon}}):t._e(),t.iconAdd?n("TalkFtAdd",{on:{closeHB:t.closeHB}}):t._e(),n("TalkFt",{attrs:{textIcon:t.textIcon},on:{send:t.send,openAdd:t.openAdd,openBox:t.openBox,selectIcon:t.selectIcon}})],1),t.showHB?n("TalkFtHB",{on:{closeHB:t.closeHB,send:t.send}}):t._e()],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("img",{attrs:{src:"img/mo.gif"}}),t._v(" Mr.Money 🐶 ")])}],s=(n("a434"),n("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TalkFtHB",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeHB(e)}}},[n("ul",{staticClass:"sendMoney"},[n("span",{on:{click:t.closeHB}},[t._v("x")]),n("li",{staticClass:"h2"},[n("h2",[t._v("NT$")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],attrs:{type:"number",min:"1",max:"999999"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"輸入15字內祝福的話＾_＾",maxlength:"15"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),n("li",[n("h1",[t._v("紅包樣式")]),n("ol",t._l(t.hb,(function(e,o){return n("li",{key:o,class:{now:t.now==o},on:{click:function(e){return t.selectIcon(o)}}},[t._v(" "+t._s(e))])})),0)]),n("li",{class:["send",{sendOK:t.money>0}],on:{click:t.sendHB}},[t._v(" 發送 ")])])])}),c=[],l={data:function(){return{hb:["福","賀","祝"],now:0,text:"",money:0}},methods:{sendHB:function(){var t=new Date,e=t.getHours(),n=t.getMinutes(),o={content:this.text,time:"".concat(e,":").concat(n<10?"0".concat(n):n),user:!0,now:this.now,hb:!0,money:this.money};this.$emit("send",o),this.$emit("closeHB",!1)},closeHB:function(){this.$emit("closeHB",!1)},selectIcon:function(t){this.now=t}}},r=l,a=(n("23ff"),n("2877")),u=Object(a["a"])(r,s,c,!1,null,"ece66a7e",null),d=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["talkBox",{user:t.talkText.user},{hb:t.talkText.hb}]},[t.talkText.user?t._e():n("img",{attrs:{src:"img/mo.gif"}}),!t.talkText.user&&t.userIndex==t.talkText.id&&t.userFlag?n("div",{staticClass:"content"},t._l(3,(function(t,e){return n("div",{key:e,staticClass:"load"})})),0):n("div",{class:["content",{img:t.talkText.content.indexOf("img")>-1}]},[t.talkText.hb?[n("h1",[t._v(t._s(t.hbType[t.talkText.now]))]),n("h2",[n("strong",[t._v("NT＄")]),t._v(t._s(t.talkText.money))]),t.talkText.content.length>0?n("p",{domProps:{innerHTML:t._s(t.talkText.content)}}):t._e(),n("button",[t._v("查看紅包")])]:n("p",{domProps:{innerHTML:t._s(t.talkText.content)}}),n("span",[t.talkText.user&&t.read?n("small",[t._v("已讀")]):t._e(),n("br"),t._v(t._s(t.talkText.time))])],2)])},h=[],m={props:["talkText","userFlag","userIndex","moneyTalkListlength"],data:function(){return{hbType:["福","賀","祝"],read:!1}},mounted:function(){var t=this;this.userIndex>this.moneyTalkListlength?this.read=!1:setTimeout((function(){t.read=!0}),300)}},x=m,g=(n("a285"),Object(a["a"])(x,f,h,!1,null,"3390f9d9",null)),p=g.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.list,(function(e,o){return n("li",{key:o,on:{click:function(n){return t.selectIcon(e)}}},[t._v(" "+t._s(e)+" ")])})),0)},v=[],T={data:function(){return{list:["😛","🤑","😄","😆","😅","😂","🤣","🤡","🤗","🥳","😎","🤠","😱","😨","😰","😋","🥰","😍","👈","👉","👆","🖖","👋","🤘","🤟","👌","🦷","👀","💕","🐶","🐱","🐭","🐹","🐰","🐻","🐼","🍄","💩","👻","🍰","🧁","🍿","🍞","🥐","🍑","🍇","🍉","🍌","🥝","🥑","🍋"]}},methods:{selectIcon:function(t){this.$emit("selectIcon",t)}}},_=T,b=(n("bed5"),Object(a["a"])(_,k,v,!1,null,"645ee098",null)),B=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.bg,(function(e,o){return n("li",{key:o,class:{actv:t.nowBg==o},on:{click:function(e){return t.selectBg(o)}}},[t._v(" "+t._s(e)+" ")])})),0)},y=[],H={props:["nowBg"],data:function(){return{bg:["🍙","🥑","🍊","🍋"]}},methods:{selectBg:function(t){this.$emit("selectBg",t)}}},I=H,$=(n("239b"),Object(a["a"])(I,w,y,!1,null,"9a70b394",null)),F=$.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"talkFt"},[n("div",{staticClass:"file",on:{click:function(e){return t.openAdd(!0)}}},[n("icon",{attrs:{name:"icon_plus"}})],1),n("div",{staticClass:"textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"輸入訊息"},domProps:{value:t.text},on:{keydown:t.keyText,focus:function(e){return t.openBox(!1)},input:function(e){e.target.composing||(t.text=e.target.value)}}})]),n("icon",{attrs:{name:"download_icon_exte"},nativeOn:{click:function(e){return t.openBox(!0)}}})],1)},M=[],C=(n("1276"),n("ac1f"),n("a15b"),{props:["textIcon"],data:function(){return{text:""}},watch:{textIcon:{handler:function(t){""!=t&&(this.text=this.text+t),this.$emit("selectIcon","")},deep:!0,immediate:!0}},methods:{getFile:function(){this.platform.showToast("opps!這功能沒辦法寫>_<")},openAdd:function(t){this.$emit("openAdd",t)},openBox:function(t){this.$emit("openBox",t)},keyText:function(t){if(this.openBox(!1),"Enter"==t.code&&!t.shiftKey){if(""==this.text)return;this.send(),t.preventDefault()}},send:function(){var t={user:!0},e=new Date,n=e.getHours(),o=e.getMinutes();t.time="".concat(n,":").concat(o<10?"0".concat(o):o);var i=this.text.split("\n");t.content=i.join("<br>"),this.$emit("send",t),this.text=""}}}),E=C,O=(n("92f8"),Object(a["a"])(E,A,M,!1,null,"877b5d98",null)),L=O.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.list,(function(e,o){return n("li",{key:o,on:{click:t.closeHB}},[n("icon",{attrs:{name:e}}),n("p",[t._v("紅包")])],1)})),0)},j=[],N={data:function(){return{list:["transaction_icon_bonus"]}},methods:{closeHB:function(){this.$emit("closeHB",!0)}}},P=N,J=(n("451c"),Object(a["a"])(P,D,j,!1,null,"0ce9c04e",null)),K=J.exports,R={components:{TalkBox:p,TalkFtAdd:K,TalkMenu:F,TalkFtBox:B,TalkFt:L,TalkFtHB:d},data:function(){return{dataHB:{},showHB:!1,iconAdd:!1,textIcon:"",nowBg:0,nowTime:"",scrollTop:0,goDown:!1,iconBox:!1,talk:[],userIndex:0,userFlag:!1,menu:!1,moneyTalkList:["Holle！我是錢先生🐶<br>口頭禪是汪汪汪，你叫什麼名字～","好怪的名字😐","我喜歡吃🍖🍖，你勒","<img src='img/line.gif' class='line'/>","......","喔 我要去洗澡了👋👋👋"]}},computed:{height:function(){return this.iconBox||this.iconAdd?180:70}},methods:{closeHB:function(t){this.showHB=t,this.iconAdd=!1},selectIcon:function(t){this.textIcon=t},openAdd:function(){this.iconBox=!1,this.iconAdd=!this.iconAdd},openBox:function(t){this.iconAdd=!1,this.iconBox=!!t&&!this.iconBox},scrollbottom:function(){var t=this.$refs.block;t.offsetHeight<t.scrollHeight&&(this.scrollTop=t.scrollHeight-t.clientHeight,t.scrollTop=this.scrollTop)},send:function(t){this.userFlag||this.userIndex++,t.hb&&this.moneyTalkList.splice(this.userIndex,this.userIndex,"謝謝！！！！！"),this.talk.push(t),this.$nextTick((function(){this.scrollbottom()})),this.moneyTalk()},selectBg:function(t){this.nowBg=t},moneyTalk:function(){var t=this;if(!(this.userIndex>this.moneyTalkList.length-1||this.userFlag)){this.userFlag=!0;var e=new Date,n=e.getHours(),o=e.getMinutes();this.nowTime="".concat(n,":").concat(o<10?"0".concat(o):o);var i={content:this.moneyTalkList[this.userIndex],time:this.nowTime,id:this.userIndex};this.talk.push(i),setTimeout((function(){t.userFlag=!1,t.scrollbottom()}),1e3)}}},mounted:function(){this.moneyTalk();var t=this.$refs.block,e=this;t.addEventListener("scroll",(function(){t.scrollTop+1<t.scrollHeight-t.clientHeight?e.goDown=!0:e.goDown=!1}))}},S=R,q=(n("3602"),Object(a["a"])(S,o,i,!1,null,null,null));e["default"]=q.exports},3602:function(t,e,n){"use strict";n("90b1")},"451c":function(t,e,n){"use strict";n("28f4")},"52bc":function(t,e,n){},"6b66":function(t,e,n){},"90b1":function(t,e,n){},"92f8":function(t,e,n){"use strict";n("52bc")},"99af":function(t,e,n){"use strict";var o=n("23e7"),i=n("d039"),s=n("e8b5"),c=n("861d"),l=n("7b0b"),r=n("50c4"),a=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),m=f("isConcatSpreadable"),x=9007199254740991,g="Maximum allowed index exceeded",p=h>=51||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),k=d("concat"),v=function(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},T=!p||!k;o({target:"Array",proto:!0,forced:T},{concat:function(t){var e,n,o,i,s,c=l(this),d=u(c,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(s=-1===e?c:arguments[e],v(s)){if(i=r(s.length),f+i>x)throw TypeError(g);for(n=0;n<i;n++,f++)n in s&&a(d,f,s[n])}else{if(f>=x)throw TypeError(g);a(d,f++,s)}return d.length=f,d}})},a285:function(t,e,n){"use strict";n("6b66")},a434:function(t,e,n){"use strict";var o=n("23e7"),i=n("23cb"),s=n("a691"),c=n("50c4"),l=n("7b0b"),r=n("65f0"),a=n("8418"),u=n("1dde"),d=u("splice"),f=Math.max,h=Math.min,m=9007199254740991,x="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,o,u,d,g,p,k=l(this),v=c(k.length),T=i(t,v),_=arguments.length;if(0===_?n=o=0:1===_?(n=0,o=v-T):(n=_-2,o=h(f(s(e),0),v-T)),v+n-o>m)throw TypeError(x);for(u=r(k,o),d=0;d<o;d++)g=T+d,g in k&&a(u,d,k[g]);if(u.length=o,n<o){for(d=T;d<v-o;d++)g=d+o,p=d+n,g in k?k[p]=k[g]:delete k[p];for(d=v;d>v-o+n;d--)delete k[d-1]}else if(n>o)for(d=v-o;d>T;d--)g=d+o-1,p=d+n-1,g in k?k[p]=k[g]:delete k[p];for(d=0;d<n;d++)k[d+T]=arguments[d+2];return k.length=v-o+n,u}})},bed5:function(t,e,n){"use strict";n("c17a")},c17a:function(t,e,n){},d5b0:function(t,e,n){}}]);
//# sourceMappingURL=chunk-073e669a.2b5fb62a.js.map