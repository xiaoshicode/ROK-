(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register"],{"28fe":function(n,e,t){"use strict";(function(n,u){var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t("828c")),a=i(t("029b")),s=(i(t("4b53")),t("2da8"),n.importObject("uni-id-co")),c={mixins:[a.default],data:function(){return{formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:o.default,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var n=this;this.$refs.form.validate().then((function(e){return 4!=n.formData.captcha.length?(n.$refs.captcha.focusCaptchaInput=!0,u.showToast({title:"请输入验证码",icon:"none"})):n.needAgreements&&!n.agree?n.$refs.agreements.popup((function(){n.submitForm(e)})):void n.submitForm(e)})).catch((function(e){var t=e[0].key;t=t.replace(t[0],t[0].toUpperCase()),console.log(t),n["focus"+t]=!0}))},submitForm:function(n){var e=this;s.registerUser(this.formData).then((function(n){console.log(n),e.loginSuccess(n)})).catch((function(n){console.log(n),console.log(n.message),e.$refs.captcha.getImageCaptcha()}))},navigateBack:function(){u.navigateBack()},toLogin:function(){u.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail:function(){u.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}};e.default=c}).call(this,t("a9ff")["default"],t("543d")["default"])},"3ef7":function(n,e,t){"use strict";t.r(e);var u=t("28fe"),i=t.n(u);for(var o in u)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(o);e["default"]=i.a},"3f54":function(n,e,t){"use strict";t.r(e);var u=t("6efb"),i=t("3ef7");for(var o in i)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(o);t("907d");var a=t("f0c5"),s=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=s.exports},"6efb":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return u}));var u={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"e2a3"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"10d7"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"a93c"))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,"be1a"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"38da"))}},i=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusUsername=!1},n.e1=function(e){n.focusNickname=!1},n.e2=function(e){n.focusPassword=!1},n.e3=function(e){n.focusPassword2=!1})},o=[]},"907d":function(n,e,t){"use strict";var u=t("97ea"),i=t.n(u);i.a},"97ea":function(n,e,t){},beed:function(n,e,t){"use strict";(function(n,e){var u=t("4ea4");t("0be4"),t("a9ff");u(t("66fd"));var i=u(t("3f54"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])}},[["beed","common/runtime","common/vendor"]]]);