(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile"],{3996:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"09a1"))}},i=function(){var e=this.$createElement;this._self._c},u=[]},"50b5":function(e,n,t){"use strict";(function(e,o,i){var u=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=u(t("2eee")),r=u(t("c973")),s=e.database(),a=(s.collection("uni-id-users"),e.importObject("uni-id-co")),l={emits:["success"],computed:{},data:function(){return{}},methods:{beforeGetphonenumber:function(){return(0,r.default)(c.default.mark((function n(){return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n,t){o.showLoading({mask:!0}),i.checkSession({success:function(){console.log("session_key 未过期"),n(),o.hideLoading()},fail:function(){console.log("session_key 已经失效，正在执行更新"),i.login({success:function(i){var u=i.code;e.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:u}).then((function(e){console.log(e),n()})).catch((function(e){console.log(e),t()})).finally((function(e){console.log(e),o.hideLoading()}))},fail:function(e){console.error(e),t()}})}})}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},bindMobileByMpWeixin:function(e){var n=this;return(0,r.default)(c.default.mark((function t(){return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e),"getPhoneNumber:ok"!=e.detail.errMsg){t.next=8;break}return console.log(e.detail),t.next=5,n.beforeGetphonenumber();case 5:a.bindMobileByMpWeixin(e.detail).then((function(e){console.log(e),n.$emit("success")})).finally((function(e){n.closeMe()})),t.next=9;break;case 8:n.closeMe();case 9:case"end":return t.stop()}}),t)})))()},open:function(){var e=this;return(0,r.default)(c.default.mark((function n(){return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$refs.popup.open();case 1:case"end":return n.stop()}}),n)})))()},closeMe:function(e){this.$refs.popup.close()}}};n.default=l}).call(this,t("a9ff")["default"],t("543d")["default"],t("bc2e")["default"])},"5b19":function(e,n,t){"use strict";var o=t("aa96"),i=t.n(o);i.a},6123:function(e,n,t){"use strict";t.r(n);var o=t("3996"),i=t("6648");for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("5b19");var c=t("f0c5"),r=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"c3b5bed8",null,!1,o["a"],void 0);n["default"]=r.exports},6648:function(e,n,t){"use strict";t.r(n);var o=t("50b5"),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=i.a},aa96:function(e,n,t){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6123"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile-create-component']]
]);
