(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-reply-reply"],{"3ed98":function(e,t,n){"use strict";var r=n("c521"),i=n.n(r);i.a},"9e8eb":function(e,t,n){"use strict";n.r(t);var r=n("fce38"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},ad58:function(e,t,n){"use strict";n.r(t);var r=n("bf5d"),i=n("9e8eb");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("3ed98");var o=n("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"b55f884c",null,!1,r["a"],void 0);t["default"]=c.exports},bf5d:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={commentItem:n("741b").default,commentFrame:n("7475").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"reply"},[n("v-uni-view",{staticClass:"top"},[n("comment-item",{attrs:{closeBtn:!0,childState:!0,item:e.replyItem}})],1),n("v-uni-view",{staticClass:"list"},e._l(e.childReplyArr,(function(t){return n("v-uni-view",{staticClass:"row"},[n("comment-item",{attrs:{childState:!0,item:t},on:{removeEnv:function(t){arguments[0]=t=e.$handleEvent(t),e.commentEnv.apply(void 0,arguments)}}})],1)})),1),n("v-uni-view",[n("comment-frame",{attrs:{commentObj:e.commentObj,placeholder:"回复："+e.giveName(this.replyItem)},on:{commentEnv:function(t){arguments[0]=t=e.$handleEvent(t),e.commentEnv.apply(void 0,arguments)}}})],1)],1)},a=[]},c521:function(e,t,n){var r=n("f0ae");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("d7a889e6",r,!0,{sourceMap:!1,shadowMode:!1})},f0ae:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.reply .top[data-v-b55f884c]{padding:%?30?%;border-bottom:%?15?% solid #eee}.reply .list[data-v-b55f884c]{padding:%?30?%;padding-bottom:%?120?%}.reply .list .row[data-v-b55f884c]{padding-bottom:%?15?%}',""]),e.exports=t},fce38:function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af");var r=n("f7ea"),i=e.database(),a={data:function(){return{replyItem:null,commentObj:{article_id:"",comment_type:1,reply_user_id:"",reply_comment_id:""},childReplyArr:[]}},onLoad:function(e){var t=uni.getStorageSync("replyItem");if(!t)return uni.navigateBack();this.replyItem=t||{},this.commentObj.article_id=this.replyItem.article_id,this.commentObj.reply_user_id=this.replyItem.user_id[0]._id,this.commentObj.reply_comment_id=this.replyItem._id,this.getComment()},onUnload:function(){uni.removeStorageSync("replyItem")},methods:{giveName:r.giveName,giveDefaultAvatar:r.giveDefaultAvatar,commentEnv:function(){this.childReplyArr=[],this.getComment()},getComment:function(){var e=this,t=i.collection("quanzi_comment").where('article_id == "'.concat(this.replyItem.article_id,'" && comment_type==1 && \nreply_comment_id == "').concat(this.replyItem._id,'"')).orderBy("comment_date desc").limit(10).getTemp(),n=i.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();i.collection(t,n).get().then((function(t){console.log(t),e.childReplyArr=t.result.data}))}}};t.default=a}).call(this,n("a9ff")["default"])}}]);