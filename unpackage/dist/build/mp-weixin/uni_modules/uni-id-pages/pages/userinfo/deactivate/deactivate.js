(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"],{"2b7e":function(n,e,t){},"96e4":function(n,e,t){"use strict";t.r(e);var a=t("c9cc"),c=t.n(a);for(var i in a)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(i);e["default"]=c.a},a070:function(n,e,t){"use strict";(function(n,e){var a=t("4ea4");t("0be4"),t("a9ff");a(t("66fd"));var c=a(t("d1f2"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(c.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},b711:function(n,e,t){"use strict";var a=t("2b7e"),c=t.n(a);c.a},c9cc:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{cancel:function(){n.navigateBack()},nextStep:function(){n.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(e){if(e.confirm){t.database();var a=t.importObject("uni-id-co");a.closeAccount().then((function(e){console.log(e),n.showToast({title:"注销成功"}),n.removeStorageSync("uni_id_token"),n.setStorageSync("uni_id_token_expired",0),n.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"})}))}else n.navigateBack()}})}}};e.default=a}).call(this,t("543d")["default"],t("a9ff")["default"])},d1f2:function(n,e,t){"use strict";t.r(e);var a=t("dc17"),c=t("96e4");for(var i in c)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return c[n]}))}(i);t("b711");var o=t("f0c5"),u=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},dc17:function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){}));var a=function(){var n=this.$createElement;this._self._c},c=[]}},[["a070","common/runtime","common/vendor"]]]);