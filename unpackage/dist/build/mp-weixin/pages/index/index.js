(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"09fb":function(e,t,n){"use strict";var i=n("ba2d"),a=n.n(i);a.a},"739b":function(e,t,n){"use strict";n.r(t);var i=n("f8ac"),a=n("b6d3");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("09fb");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"491f96c6",null,!1,i["a"],void 0);t["default"]=r.exports},"8f90":function(e,t,n){"use strict";(function(e,t){var i=n("4ea4");n("0be4"),n("a9ff");i(n("66fd"));var a=i(n("739b"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},b6d3:function(e,t,n){"use strict";n.r(t);var i=n("db39"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},ba2d:function(e,t,n){},db39:function(e,t,n){"use strict";(function(e,i){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("2eee")),u=a(n("448a")),r=a(n("c973")),c=n("2da8"),d=e.database(),s=d.command,l={data:function(){return{uniLoad:"more",noMore:!1,navList:[{name:"最新",type:"publish_date"},{name:"热门",type:"view_count"}],dataList:[],loadingState:!0,navActive:0}},onLoad:function(){this.getData()},onReachBottom:function(){if(this.uniLoad="loading",this.noMore)return this.uniLoad="noMore";this.getData()},methods:{deleteEvent:function(){this.dataList=[],this.getData()},getData:function(){var t=this,n=d.collection("quanzi_article").where("deleteState != true").field("title,user_id,description,picUrls,comment_count,like_count,view_count,publish_date").getTemp(),i=d.collection("uni-id-users").field("_id,username,nickname,avatar_file").getTemp();d.collection(n,i).orderBy(this.navList[this.navActive].type,"desc").skip(this.dataList.length).limit(5).get().then(function(){var n=(0,r.default)(o.default.mark((function n(i){var a,r,l,f;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=[],r=t.dataList,0==i.result.data.length&&(t.noMore=!0),l=[].concat((0,u.default)(r),(0,u.default)(i.result.data)),!c.store.hasLogin){n.next=12;break}return l.forEach((function(e){a.push(e._id)})),n.next=8,d.collection("quanzi_like").where({article_id:s.in(a),user_id:e.getCurrentUserInfo().uid}).get();case 8:f=n.sent,f.result.data.forEach((function(e){var t=l.findIndex((function(t){return e.article_id==t._id}));l[t].isLike=!0})),n.next=12;break;case 12:t.dataList=l,t.loadingState=!1;case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},clickNav:function(e){this.loadingState=!0,this.dataList=[],this.uniLoad="more",this.navActive=e.index,this.noMore=!1,this.getData()},goEdit:function(){i.navigateTo({url:"/pages_forum/edit/edit"})}}};t.default=l}).call(this,n("a9ff")["default"],n("543d")["default"])},f8ac:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"010b"))},uSkeleton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-skeleton/u-skeleton")]).then(n.bind(null,"0806"))},forumItem:function(){return Promise.all([n.e("common/vendor"),n.e("components/forum-item/forum-item")]).then(n.bind(null,"487f"))},uniLoadMore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(n.bind(null,"dd2f"))}},a=function(){var e=this.$createElement;this._self._c},o=[]}},[["8f90","common/runtime","common/vendor"]]]);