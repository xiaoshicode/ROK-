(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/register/register-admin"],{"062b":function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"e2a3"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"10d7"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"a93c"))},uniCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(t.bind(null,"be1a"))},uniIdPagesAgreements:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements").then(t.bind(null,"38da"))}},u=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(e){n.focusUsername=!1},n.e1=function(e){n.focusNickname=!1},n.e2=function(e){n.focusPassword=!1},n.e3=function(e){n.focusPassword2=!1})},i=[]},"1cb2":function(n,e,t){"use strict";var o=t("d2a1"),u=t.n(o);u.a},"2c3a":function(n,e,t){"use strict";t.r(e);var o=t("062b"),u=t("454d");for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);t("1cb2");var a=t("f0c5"),s=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=s.exports},"454d":function(n,e,t){"use strict";t.r(e);var o=t("c81b"),u=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=u.a},8517:function(n,e,t){"use strict";(function(n,e){var o=t("4ea4");t("0be4"),t("a9ff");o(t("66fd"));var u=o(t("2c3a"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(u.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},c81b:function(n,e,t){"use strict";(function(n,o){var u=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(t("828c")),a=u(t("029b")),s=(u(t("4b53")),n.importObject("uni-id-co",{customUI:!0})),c={mixins:[a.default],data:function(){return{formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:i.default,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var n=this;this.$refs.form.validate().then((function(e){return 4!=n.formData.captcha.length?(n.$refs.captcha.focusCaptchaInput=!0,o.showToast({title:"请输入验证码",icon:"none"})):n.needAgreements&&!n.agree?n.$refs.agreements.popup((function(){n.submitForm(e)})):void n.submitForm(e)})).catch((function(e){var t=e[0].key;t=t.replace(t[0],t[0].toUpperCase()),console.log(t),n["focus"+t]=!0}))},submitForm:function(n){var e=this;s.registerAdmin(this.formData).then((function(n){console.log(n),o.navigateBack()})).catch((function(n){console.log(n),console.log(n.message),e.$refs.captcha.getImageCaptcha(),o.showModal({title:"提示",content:n.errMsg||"创建失败: ".concat(n.errCode),showCancel:!1})}))},navigateBack:function(){o.navigateBack()},toLogin:function(){o.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail:function(){o.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}};e.default=c}).call(this,t("a9ff")["default"],t("543d")["default"])},d2a1:function(n,e,t){}},[["8517","common/runtime","common/vendor"]]]);