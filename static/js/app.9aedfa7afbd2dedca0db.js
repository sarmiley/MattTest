webpackJsonp([1],{"1lnS":function(t,n){},"Aj/x":function(t,n){},IJaH:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"test"},[e("div",{staticClass:"container"},[e("div",{staticClass:"wrap"},[e("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",id:"checking"}}),t._v(" "),e("button",{staticClass:"blob",on:{click:function(n){return t.routerTo("asyncAwait")}}},[t._v("⌛")]),t._v(" "),e("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("⚙")]),t._v(" "),e("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("❤")]),t._v(" "),e("button",{staticClass:"blob",on:{click:function(n){return t.routerTo("pageList")}}},[t._v("⭐")]),t._v(" "),e("button",{staticClass:"blob",on:{click:function(n){return t.routerTo("/")}}},[t._v("⛪")]),t._v(" "),e("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✎")]),t._v(" "),e("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("♫")]),t._v(" "),e("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✆")]),t._v(" "),t._m(0)])]),t._v(" "),e("svg",[e("defs",[e("filter",{attrs:{id:"filt"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"filt"}}),t._v(" "),e("feBlend",{attrs:{in2:"filt",in:"SourceGraphic",result:"mix"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("label",{staticClass:"blob",attrs:{for:"checking"}},[n("span",{staticClass:"bar"}),this._v(" "),n("span",{staticClass:"bar"}),this._v(" "),n("span",{staticClass:"bar"})])}]};var s=e("VU/8")({name:"MenuBtn",data:function(){return{msg:""}},methods:{routerTo:function(t){this.$router.push(t)}}},r,!1,function(t){e("dITw")},"data-v-45c2cd8a",null).exports,o={name:"Menu",props:{items:{type:Array,item:{path:String,name:String}}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"menu"},t._l(t.items,function(n,a){return e("ul",{key:n.name},[(t.items.length,e("li",{attrs:{id:"link-item"}},[e("router-link",{attrs:{to:n.path}},[t._v(t._s(n.name))])],1))])}),0)},staticRenderFns:[]};var c={name:"App",components:{MenuBtn:s,Menu:e("VU/8")(o,i,!1,function(t){e("TGXu")},"data-v-fb7bd5d8",null).exports},data:function(){return{menuDatas:[{path:"/pageList",name:"PageList"},{path:"/",name:"Home"},{path:"/asyncAwait",name:"Async"},{path:"/translate",name:"Translate"},{path:"/NPS_EN",name:"NPS_EN"},{path:"/NPS_TW",name:"NPS_TW"}]}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"content"}},[n("div",{staticClass:"content-header"}),this._v(" "),n("div",{staticClass:"content-body"},[n("router-view")],1)])])},staticRenderFns:[]};var u=e("VU/8")(c,l,!1,function(t){e("pgLf")},null,null).exports,p=e("/ocq"),v={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var d={name:"home",components:{HelloWorld:e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Matt's Vue Lab"}}},v,!1,function(t){e("IJaH")},"data-v-4afaf1ab",null).exports,MenuBtn:s}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",[this._v("測試是否有成功部署")]),this._v(" "),n("router-link",{attrs:{to:{name:"login"}}},[n("p",[this._v("Login")])])],1)},staticRenderFns:[]},f=e("VU/8")(d,m,!1,null,null,null).exports,h={name:"Login",data:function(){return{account:"",password:""}},methods:{confirm:function(){"matt"!==this.account&&"matt"!==this.password?alert("登入失敗"):alert("登入成功")}}},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"home"}},[e("h1",[t._v("測試是否有成功部署")]),t._v(" "),e("div",{staticClass:"type-area"},[e("label",[e("small",[t._v("Account")]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],domProps:{value:t.account},on:{input:function(n){n.target.composing||(t.account=n.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"type-area"},[e("label",[e("small",[t._v("password")]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],domProps:{value:t.password},on:{input:function(n){n.target.composing||(t.password=n.target.value)}}})])])]),t._v(" "),e("button",{on:{click:t.confirm}},[t._v("送出")])])},staticRenderFns:[]};var b,g,x=e("VU/8")(h,_,!1,function(t){e("1lnS")},"data-v-630169d9",null).exports,w=e("Xxa5"),y=e.n(w),C=e("exGp"),k=e.n(C),T=e("mtWM"),S=e.n(T),A=(b=k()(y.a.mark(function t(n,e){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:S.a.post(n,e).then(function(t){return console.log("response : "+t),t}).catch(function(t){return console.log(t),t});case 1:case"end":return t.stop()}},t,this)})),g=k()(y.a.mark(function t(n){var e=this;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",S.a.get(n).then(function(){var t=k()(y.a.mark(function t(n){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n);case 1:case"end":return t.stop()}},t,e)}));return function(n){return t.apply(this,arguments)}}()).catch(function(t){return console.log(t),t}));case 1:case"end":return t.stop()}},t,this)})),function(t){return g.apply(this,arguments)}),N=function(){var t=k()(y.a.mark(function t(n){var e,a,r,s,o;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.q,a=n.source,r=n.target,s="AIzaSyBYJlispBkRCRN3IbTbIBp6kZAfBnfZU8w",e=e.replace(/\n/g,"%0A"),o="https://translation.googleapis.com/language/translate/v2?key="+s+"&q="+e+"&source="+a+"&target="+r,t.abrupt("return",A(o).then(function(t){var n=t.data;return console.log(" < ================ translateText  ================ >"),console.log(n.data),console.log(" < ================ translateText  ================ >"),n.data}));case 5:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}(),E={name:"translate",components:{translateText:N},data:function(){return{translation:"translated text",result:"",source:"en",target:"zh-TW"}},methods:{translate:function(){var t=k()(y.a.mark(function t(){var n=this;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N({q:this.translation,source:this.source,target:this.target}).then(function(t){console.log(t.translations),n.result=t.translations[0].translatedText});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},M={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"translate"}},[e("h1",[t._v("Translator")]),t._v(" "),e("label",[t._v("English")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translation,expression:"translation"}],domProps:{value:t.translation},on:{input:function(n){n.target.composing||(t.translation=n.target.value)}}}),t._v(" "),e("label",[t._v("中文")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],domProps:{value:t.result},on:{input:function(n){n.target.composing||(t.result=n.target.value)}}}),t._v(" "),e("button",{on:{click:t.translate}},[t._v("translate")])])},staticRenderFns:[]};var P=e("VU/8")(E,M,!1,function(t){e("Aj/x")},"data-v-263e13b2",null).exports;a.a.use(p.a);var B=new p.a({mode:"history",base:"/MattTest/",routes:[{path:"/",name:"home",component:f},{path:"/translate",name:"translate",component:P},{path:"/login",name:"login",component:x}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:B,components:{App:u},template:"<App/>"})},TGXu:function(t,n){},dITw:function(t,n){},pgLf:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.9aedfa7afbd2dedca0db.js.map