(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email"],{"0707":function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("0be4"),t("a9ff");o(t("66fd"));var r=o(t("221a"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"221a":function(e,n,t){"use strict";t.r(n);var o=t("d431"),r=t("c3d6");for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("4882");var u=t("f0c5"),a=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=a.exports},2226:function(e,n,t){},4882:function(e,n,t){"use strict";var o=t("2226"),r=t.n(o);r.a},"62c1":function(e,n,t){"use strict";(function(e,o){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("9523")),u=r(t("029b")),a=r(t("7a39"));function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=e.importObject("uni-id-co",{errorOptions:{type:"toast"}}),l={mixins:[u.default],data:function(){return{lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:c({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]}},a.default.getPwdRules()),logo:"/static/logo.png"}},computed:{isEmail:function(){var e=/@/.test(this.formData.email);return e},isPwd:function(){var e=/^.{6,20}$/.test(this.formData.password);return e},isCode:function(){var e=/^\d{6}$/.test(this.formData.code);return e}},onLoad:function(e){e&&e.emailNumber&&(this.formData.email=e.emailNumber,e.lock&&(this.lock=e.lock,this.focusEmail=!0))},onReady:function(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow:function(){},methods:{submit:function(){var e=this;console.log("formData",this.formData),console.log("rules",this.rules),this.$refs.form.validate().then((function(n){var t=e.formData,r=t.email,i=t.password,u=t.captcha,a=t.code;f.resetPwdByEmail({email:r,code:a,password:i,captcha:u}).then((function(e){console.log(e),o.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:function(e){console.log(e)}})})).catch((function(n){"uni-id-captcha-required"==n.errCode&&e.$refs.popup.open()})).finally((function(n){e.formData.captcha=""}))})).catch((function(n){var t=n[0].key;if("code"==t)return console.log(e.$refs.shortCode),e.$refs.shortCode.focusSmsCodeInput=!0;t=t.replace(t[0],t[0].toUpperCase()),console.log(t,"focus"+t),e["focus"+t]=!0}))},retrieveByPhone:function(){o.navigateTo({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin:function(){o.redirectTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}};n.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])},c3d6:function(e,n,t){"use strict";t.r(n);var o=t("62c1"),r=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},d431:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"e2a3"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"10d7"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"a93c"))},uniIdPagesEmailForm:function(){return t.e("uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form").then(t.bind(null,"61bf"))},uniPopupCaptcha:function(){return t.e("uni_modules/uni-captcha/components/uni-popup-captcha/uni-popup-captcha").then(t.bind(null,"c247"))}},r=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.focusEmail=!1},e.e1=function(n){e.focusPassword=!1},e.e2=function(n){e.focusPassword2=!1})},i=[]}},[["0707","common/runtime","common/vendor"]]]);