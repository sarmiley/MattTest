webpackJsonp([1],{"7/9Z":function(t,e){},"Aj/x":function(t,e){},IJaH:function(t,e){},LLeb:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrap"},[n("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",id:"checking"}}),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("asyncAwait")}}},[t._v("⌛")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("⚙")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("❤")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("pageList")}}},[t._v("⭐")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("/")}}},[t._v("⛪")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✎")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("♫")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✆")]),t._v(" "),t._m(0)])]),t._v(" "),n("svg",[n("defs",[n("filter",{attrs:{id:"filt"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"filt"}}),t._v(" "),n("feBlend",{attrs:{in2:"filt",in:"SourceGraphic",result:"mix"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"blob",attrs:{for:"checking"}},[e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"})])}]};var s=n("VU/8")({name:"MenuBtn",data:function(){return{msg:""}},methods:{routerTo:function(t){this.$router.push(t)}}},r,!1,function(t){n("dITw")},"data-v-45c2cd8a",null).exports,o={name:"Menu",props:{items:{type:Array,item:{path:String,name:String}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},t._l(t.items,function(e,a){return n("ul",{key:e.name},[(t.items.length,n("li",{attrs:{id:"link-item"}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1))])}),0)},staticRenderFns:[]};var c={name:"App",components:{MenuBtn:s,Menu:n("VU/8")(o,i,!1,function(t){n("TGXu")},"data-v-fb7bd5d8",null).exports},data:function(){return{menuDatas:[{path:"/pageList",name:"PageList"},{path:"/",name:"Home"},{path:"/asyncAwait",name:"Async"},{path:"/translate",name:"Translate"},{path:"/NPS_EN",name:"NPS_EN"},{path:"/NPS_TW",name:"NPS_TW"}]}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[this._m(0),this._v(" "),e("div",{staticClass:"content-body"},[e("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-header"},[e("div",{staticClass:"update-time-area"},[this._v("（Last Update: 2020/06/18）")])])}]};var l=n("VU/8")(c,u,!1,function(t){n("LLeb")},null,null).exports,d=n("/ocq"),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var f={name:"home",components:{HelloWorld:n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Matt's Vue Lab"}}},p,!1,function(t){n("IJaH")},"data-v-4afaf1ab",null).exports,MenuBtn:s},data:function(){return{deepUrl:""}},mounted:function(){console.log(navigator.userAgent)},methods:{goToUrl:function(){window.open(this.deepUrl,"_system")},checkPlatform:function(){if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var t=new Date;window.setTimeout(function(){new Date-t<5e3?window.location="https://ebank.standardchartered.com.tw":window.close()},25),window.location="scmbtw://"}else if(navigator.userAgent.match(/android/i)){try{window.location="scmbtw://"}catch(t){console.log("error: ",t),window.location="https://ebank.standardchartered.com.tw"}window.location="https://ebank.standardchartered.com.tw"}}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.deepUrl,expression:"deepUrl"}],attrs:{type:"text"},domProps:{value:t.deepUrl},on:{input:function(e){e.target.composing||(t.deepUrl=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){return t.goToUrl()}}},[t._v("前往")])]),t._v(" "),n("div",[n("button",{on:{click:function(e){return t.checkPlatform()}}},[t._v("check Platform")])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[e("a",{attrs:{href:"scmbtw://fund/fundApplication?fundId=111111"}},[this._v("Deeplinks Demo for fund/application")])]),this._v(" "),e("p",[e("a",{attrs:{href:"scmbtw://fund/fundMyCompare?fundId=222222"}},[this._v("Deeplinks Demo for fund/myCompare")])]),this._v(" "),e("p",[e("a",{attrs:{href:"scmbtw://fund/fundMyWatch?fundId=333333"}},[this._v("Deeplinks Demo for fund/myWatch")])]),this._v(" "),e("p",[e("a",{attrs:{href:"scmbtw://fund/purchaseMultiFundCIP?fundList=999999&fundList=888888&fundList=777777"}},[this._v("Deeplinks Demo for fund/purchaseMultiFundCIP")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("_blank")]),t._v(" "),n("p",[n("a",{attrs:{href:"scmbtw://fund/fundApplication?fundId=111111",target:"_blank"}},[t._v("Deeplinks Demo for fund/application")])]),t._v(" "),n("p",[n("a",{attrs:{href:"scmbtw://fund/fundMyCompare?fundId=222222",target:"_blank"}},[t._v("Deeplinks Demo for fund/myCompare")])]),t._v(" "),n("p",[n("a",{attrs:{href:"scmbtw://fund/fundMyWatch?fundId=333333",target:"_blank"}},[t._v("Deeplinks Demo for fund/myWatch")])]),t._v(" "),n("p",[n("a",{attrs:{href:"scmbtw://fund/purchaseMultiFundCIP?fundList=999999&fundList=888888&fundList=777777",target:"_blank"}},[t._v("\n        Deeplinks Demo for fund/purchaseMultiFundCIP\n      ")])])])}]},m=n("VU/8")(f,v,!1,null,null,null).exports,h={name:"Login",data:function(){return{account:"",password:""}},methods:{confirm:function(){"matt"!==this.account||"matt"!==this.password?alert("登入失敗"):this.$router.push({name:"success"})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1"),t._v(" "),n("div",{staticClass:"type-area"},[n("label",[n("small",[t._v("Account")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"type-area"},[n("label",[n("small",[t._v("password")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),t._v(" "),n("button",{on:{click:t.confirm}},[t._v("送出")])])},staticRenderFns:[]};var b,g,w=n("VU/8")(h,_,!1,function(t){n("7/9Z")},"data-v-d967c06c",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",[this._v("登入成功")])])}]},k=n("VU/8")({name:"success"},y,!1,null,null,null).exports,x=n("Xxa5"),C=n.n(x),T=n("exGp"),P=n.n(T),D=n("mtWM"),A=n.n(D),M=(b=P()(C.a.mark(function t(e,n){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:A.a.post(e,n).then(function(t){return console.log("response : "+t),t}).catch(function(t){return console.log(t),t});case 1:case"end":return t.stop()}},t,this)})),g=P()(C.a.mark(function t(e){var n=this;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",A.a.get(e).then(function(){var t=P()(C.a.mark(function t(e){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.log(t),t}));case 1:case"end":return t.stop()}},t,this)})),function(t){return g.apply(this,arguments)}),U=function(){var t=P()(C.a.mark(function t(e){var n,a,r,s,o;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.q,a=e.source,r=e.target,s="AIzaSyBYJlispBkRCRN3IbTbIBp6kZAfBnfZU8w",n=n.replace(/\n/g,"%0A"),o="https://translation.googleapis.com/language/translate/v2?key="+s+"&q="+n+"&source="+a+"&target="+r,t.abrupt("return",M(o).then(function(t){var e=t.data;return console.log(" < ================ translateText  ================ >"),console.log(e.data),console.log(" < ================ translateText  ================ >"),e.data}));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),I={name:"translate",components:{translateText:U},data:function(){return{translation:"translated text",result:"",source:"en",target:"zh-TW"}},methods:{translate:function(){var t=P()(C.a.mark(function t(){var e=this;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U({q:this.translation,source:this.source,target:this.target}).then(function(t){console.log(t.translations),e.result=t.translations[0].translatedText});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"translate"}},[n("h1",[t._v("Translator")]),t._v(" "),n("label",[t._v("English")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translation,expression:"translation"}],domProps:{value:t.translation},on:{input:function(e){e.target.composing||(t.translation=e.target.value)}}}),t._v(" "),n("label",[t._v("中文")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.translate}},[t._v("translate")])])},staticRenderFns:[]};var L=n("VU/8")(I,E,!1,function(t){n("Aj/x")},"data-v-263e13b2",null).exports;a.a.use(d.a);var S=new d.a({mode:"history",base:"/MattTest/",routes:[{path:"/",name:"home",component:m},{path:"/translate",name:"translate",component:L},{path:"/login",name:"login",component:w},{path:"/success",name:"success",component:k}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:S,components:{App:l},template:"<App/>"})},TGXu:function(t,e){},dITw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1060e3c07be9f7919b8f.js.map