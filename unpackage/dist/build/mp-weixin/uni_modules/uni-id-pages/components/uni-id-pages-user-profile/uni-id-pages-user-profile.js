(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile"],{2096:function(e,n,t){"use strict";(function(e,u){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("2eee")),o=a(t("c973")),r=e.database(),c=r.collection("uni-id-users"),s="",f={emits:["next"],data:function(){return{}},methods:{open:function(e){var n=this;return(0,o.default)(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e,n.$refs.popup.open();case 2:case"end":return t.stop()}}),t)})))()},getUserProfile:function(){var n=this;return(0,o.default)(i.default.mark((function t(){var a,o,r,c,f,l,d,p,h;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u.showLoading(),t.next=3,new Promise((function(e){u.getUserProfile({desc:"用于设置账户昵称和头像",complete:function(n){console.log("getUserProfile:",n),e(n)}})}));case 3:if(a=t.sent,"getUserProfile:ok"==a.errMsg){t.next=6;break}return t.abrupt("return",n.closeMe());case 6:return o=a.userInfo,r=o.avatarUrl,c=o.nickName,t.next=9,new Promise((function(e){u.downloadFile({url:r,success:function(n){200===n.statusCode&&e(n.tempFilePath),e()},fail:function(e){console.error(e)},complete:function(e){}})}));case 9:return f=t.sent,l=f.split(".").pop()||"jpg",d="user/avatar/"+s+"/"+Date.now()+"-avatar."+l,t.next=14,e.uploadFile({filePath:f,cloudPath:d,fileType:"image"});case 14:p=t.sent,h={nickname:c,avatar_file:{name:d,extname:"jpg",url:p.fileID}},n.doUpdate(h,(function(){n.$refs.popup.close()}));case 17:case"end":return t.stop()}}),t)})))()},closeMe:function(e){var n=this;u.showLoading(),this.doUpdate({nickname:"匿名微信用户"},(function(){u.hideLoading(),n.$refs.popup.close()}))},doUpdate:function(e,n){var t=this;c.where("_id==$env.uid").update(e).then((function(e){n(e)})).catch((function(e){u.showModal({content:e.message||"请求服务失败",showCancel:!1}),n(e)})).finally((function(){t.$emit("next"),u.hideLoading()}))}}};n.default=f}).call(this,t("a9ff")["default"],t("543d")["default"])},3558:function(e,n,t){},"54ab":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var u={uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"09a1"))}},a=function(){var e=this.$createElement;this._self._c},i=[]},9630:function(e,n,t){"use strict";t.r(n);var u=t("54ab"),a=t("bad8");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("f3e2");var o=t("f0c5"),r=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"82c142d0",null,!1,u["a"],void 0);n["default"]=r.exports},bad8:function(e,n,t){"use strict";t.r(n);var u=t("2096"),a=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=a.a},f3e2:function(e,n,t){"use strict";var u=t("3558"),a=t.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9630"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-user-profile/uni-id-pages-user-profile-create-component']]
]);
