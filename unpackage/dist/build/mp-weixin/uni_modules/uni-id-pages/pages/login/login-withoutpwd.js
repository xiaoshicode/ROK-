(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/login/login-withoutpwd"],{"10f6":function(e,n,t){"use strict";(function(e,n){var i=t("4ea4");t("0be4"),t("a9ff");i(t("66fd"));var o=i(t("c1fe"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"3df8":function(e,n,t){},"79cb":function(e,n,t){"use strict";t.r(n);var i=t("c24b"),o=t.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);n["default"]=o.a},baa6:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return i}));var i={uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"38da"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"a93c"))},uniIdPagesFabLogin:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-fab-login/uni-id-pages-fab-login").then(t.bind(null,"05a1"))}},o=function(){var e=this,n=e.$createElement,t=(e._self._c,["apple","weixin","weixinMobile"].includes(e.type));e._isMounted||(e.e0=function(n){e.focusPhone=!1}),e.$mp.data=Object.assign({},{$root:{g0:t}})},u=[]},c1fe:function(e,n,t){"use strict";t.r(n);var i=t("baa6"),o=t("79cb");for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t("e7ef");var a=t("f0c5"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"8329ee1c",null,!1,i["a"],void 0);n["default"]=s.exports},c24b:function(e,n,t){"use strict";(function(e){var i=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("2eee")),u=i(t("c973")),a=i(t("4b53")),s=i(t("029b")),r={mixins:[s.default],data:function(){return{type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}},computed:{loginTypes:function(){return(0,u.default)(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",a.default.loginTypes);case 1:case"end":return e.stop()}}),e)})))()},isPhone:function(){return/^1\d{10}$/.test(this.phone)},imgSrc:function(){return"/uni_modules/uni-id-pages/static/login/"+this.type+".png"}},onLoad:function(n){var t=this;return(0,u.default)(o.default.mark((function i(){var u;return o.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:console.log(n),u=n.type||a.default.loginTypes[0],t.type=u,"univerify"!=u&&(t.focusPhone=!0),t.$nextTick((function(){["weixin","apple"].includes(u)&&(t.$refs.uniFabLogin.servicesList=t.$refs.uniFabLogin.servicesList.filter((function(e){return e.id!=u})))})),e.$on("uni-id-pages-set-login-type",(function(e){t.type=e}));case 6:case"end":return i.stop()}}),i)})))()},onShow:function(){},onUnload:function(){e.$off("uni-id-pages-set-login-type")},onReady:function(){},methods:{quickLogin:function(e){var n,t,i={};null!==(n=e.detail)&&void 0!==n&&n.code&&(i.phoneNumberCode=e.detail.code),("weixinMobile"!==this.type||null!==(t=e.detail)&&void 0!==t&&t.code)&&this.$refs.uniFabLogin.login_before(this.type,!0,i)},toSmsPage:function(){return console.log("toSmsPage",this.agree),this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void e.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,e.showToast({title:"手机号码格式不正确",icon:"none"}))},toPwdLogin:function(){e.navigateTo({url:"../login/password"})},chooseArea:function(){e.showToast({title:"暂不支持其他国家",icon:"none"})}}};n.default=r}).call(this,t("543d")["default"])},e7ef:function(e,n,t){"use strict";var i=t("3df8"),o=t.n(i);o.a}},[["10f6","common/runtime","common/vendor"]]]);