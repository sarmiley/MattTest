webpackJsonp([1],{"Aj/x":function(t,e){},"B+6x":function(t,e){},IJaH:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("div",{staticClass:"container"},[n("div",{staticClass:"wrap"},[n("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",id:"checking"}}),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("asyncAwait")}}},[t._v("⌛")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("⚙")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("❤")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("pageList")}}},[t._v("⭐")]),t._v(" "),n("button",{staticClass:"blob",on:{click:function(e){return t.routerTo("/")}}},[t._v("⛪")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✎")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("♫")]),t._v(" "),n("button",{staticClass:"blob",staticStyle:{display:"none"}},[t._v("✆")]),t._v(" "),t._m(0)])]),t._v(" "),n("svg",[n("defs",[n("filter",{attrs:{id:"filt"}},[n("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),n("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"filt"}}),t._v(" "),n("feBlend",{attrs:{in2:"filt",in:"SourceGraphic",result:"mix"}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"blob",attrs:{for:"checking"}},[e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"}),this._v(" "),e("span",{staticClass:"bar"})])}]};var r=n("VU/8")({name:"MenuBtn",data:function(){return{msg:""}},methods:{routerTo:function(t){this.$router.push(t)}}},s,!1,function(t){n("dITw")},"data-v-45c2cd8a",null).exports,o={name:"Menu",props:{items:{type:Array,item:{path:String,name:String}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},t._l(t.items,function(e,a){return n("ul",{key:e.name},[(t.items.length,n("li",{attrs:{id:"link-item"}},[n("router-link",{attrs:{to:e.path}},[t._v(t._s(e.name))])],1))])}),0)},staticRenderFns:[]};var c={name:"App",components:{MenuBtn:r,Menu:n("VU/8")(o,i,!1,function(t){n("TGXu")},"data-v-fb7bd5d8",null).exports},data:function(){return{menuDatas:[{path:"/pageList",name:"PageList"},{path:"/",name:"Home"},{path:"/asyncAwait",name:"Async"},{path:"/translate",name:"Translate"},{path:"/NPS_EN",name:"NPS_EN"},{path:"/NPS_TW",name:"NPS_TW"}]}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"content"}},[this._m(0),this._v(" "),e("div",{staticClass:"content-body"},[e("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-header"},[e("div",{staticClass:"update-time-area"},[this._v("（Last Update: 2020/06/04 11:31）")])])}]};var u=n("VU/8")(c,l,!1,function(t){n("B+6x")},null,null).exports,p=n("/ocq"),v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var d={name:"home",components:{HelloWorld:n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Matt's Vue Lab"}}},v,!1,function(t){n("IJaH")},"data-v-4afaf1ab",null).exports,MenuBtn:r}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",[this._v("登入")]),this._v(" "),e("router-link",{attrs:{to:{name:"login"}}},[e("p",[this._v("Login")])])],1)},staticRenderFns:[]},h=n("VU/8")(d,m,!1,null,null,null).exports,f={name:"Login",data:function(){return{account:"",password:""}},methods:{confirm:function(){"matt"!==this.account||"matt"!==this.password?alert("登入失敗"):this.$router.push({name:"success"})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("h1",[t._v("測試是否有成功部署")]),t._v(" "),n("div",{staticClass:"type-area"},[n("label",[n("small",[t._v("Account")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"type-area"},[n("label",[n("small",[t._v("password")]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),t._v(" "),n("button",{on:{click:t.confirm}},[t._v("送出")])])},staticRenderFns:[]};var b,g,x=n("VU/8")(f,_,!1,function(t){n("keqx")},"data-v-ed4ef37e",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("h1",[this._v("登入成功")])])}]},y=n("VU/8")({name:"success"},w,!1,null,null,null).exports,C=n("Xxa5"),k=n.n(C),T=n("exGp"),S=n.n(T),E=n("mtWM"),A=n.n(E),N=(b=S()(k.a.mark(function t(e,n){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:A.a.post(e,n).then(function(t){return console.log("response : "+t),t}).catch(function(t){return console.log(t),t});case 1:case"end":return t.stop()}},t,this)})),g=S()(k.a.mark(function t(e){var n=this;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",A.a.get(e).then(function(){var t=S()(k.a.mark(function t(e){return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()).catch(function(t){return console.log(t),t}));case 1:case"end":return t.stop()}},t,this)})),function(t){return g.apply(this,arguments)}),$=function(){var t=S()(k.a.mark(function t(e){var n,a,s,r,o;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.q,a=e.source,s=e.target,r="AIzaSyBYJlispBkRCRN3IbTbIBp6kZAfBnfZU8w",n=n.replace(/\n/g,"%0A"),o="https://translation.googleapis.com/language/translate/v2?key="+r+"&q="+n+"&source="+a+"&target="+s,t.abrupt("return",N(o).then(function(t){var e=t.data;return console.log(" < ================ translateText  ================ >"),console.log(e.data),console.log(" < ================ translateText  ================ >"),e.data}));case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),B={name:"translate",components:{translateText:$},data:function(){return{translation:"translated text",result:"",source:"en",target:"zh-TW"}},methods:{translate:function(){var t=S()(k.a.mark(function t(){var e=this;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$({q:this.translation,source:this.source,target:this.target}).then(function(t){console.log(t.translations),e.result=t.translations[0].translatedText});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"translate"}},[n("h1",[t._v("Translator")]),t._v(" "),n("label",[t._v("English")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translation,expression:"translation"}],domProps:{value:t.translation},on:{input:function(e){e.target.composing||(t.translation=e.target.value)}}}),t._v(" "),n("label",[t._v("中文")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.result,expression:"result"}],domProps:{value:t.result},on:{input:function(e){e.target.composing||(t.result=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.translate}},[t._v("translate")])])},staticRenderFns:[]};var P=n("VU/8")(B,M,!1,function(t){n("Aj/x")},"data-v-263e13b2",null).exports;a.a.use(p.a);var R=new p.a({mode:"history",base:"/MattTest/",routes:[{path:"/",name:"home",component:h},{path:"/translate",name:"translate",component:P},{path:"/login",name:"login",component:x},{path:"/success",name:"success",component:y}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:R,components:{App:u},template:"<App/>"})},TGXu:function(t,e){},dITw:function(t,e){},keqx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8d9dbbf8cedc13fe39ae.js.map