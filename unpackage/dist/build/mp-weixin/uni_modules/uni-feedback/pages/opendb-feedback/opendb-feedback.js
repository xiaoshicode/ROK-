(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"],{"54bf":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}));var i={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"e2a3"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"10d7"))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,"75cc"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"a93c"))},uniFab:function(){return t.e("uni_modules/uni-fab/components/uni-fab/uni-fab").then(t.bind(null,"1290"))}},o=function(){var n=this.$createElement,e=(this._self._c,this.uniIDHasRole("webmaster")||this.uniIDHasRole("admin"));this.$mp.data=Object.assign({},{$root:{m0:e}})},r=[]},"6c63":function(n,e,t){},"9bce":function(n,e,t){"use strict";(function(n,i){var o=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t("9523")),u=t("45de");function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.default)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}console.log(u.validator);var f=n.database();function s(n){var e={};for(var t in u.validator)n.indexOf(t)>-1&&(e[t]=u.validator[t]);return e}var l={data:function(){var n={content:"",imgs:[],contact:"",mobile:""};return{formData:n,formOptions:{},rules:c({},s(Object.keys(n)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{fabClick:function(){i.navigateTo({url:"/uni_modules/uni-feedback/pages/opendb-feedback/list"})},submit:function(){var n=this;i.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){n.submitForm(e)})).catch((function(){i.hideLoading()}))},submitForm:function(n){var e=this;f.collection("opendb-feedback").add(n).then((function(n){i.showToast({icon:"none",title:"提交成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return i.navigateBack()}),500)})).catch((function(n){i.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){i.hideLoading()}))}}};e.default=l}).call(this,t("a9ff")["default"],t("543d")["default"])},a957:function(n,e,t){"use strict";t.r(e);var i=t("9bce"),o=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=o.a},d6c4:function(n,e,t){"use strict";var i=t("6c63"),o=t.n(i);o.a},ecca:function(n,e,t){"use strict";(function(n,e){var i=t("4ea4");t("0be4"),t("a9ff");i(t("66fd"));var o=i(t("ed37"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},ed37:function(n,e,t){"use strict";t.r(e);var i=t("54bf"),o=t("a957");for(var r in o)["default"].indexOf(r)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(r);t("d6c4");var u=t("f0c5"),a=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=a.exports}},[["ecca","common/runtime","common/vendor"]]]);