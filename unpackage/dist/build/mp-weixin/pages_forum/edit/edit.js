(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages_forum/edit/edit"],{1011:function(t,e,n){"use strict";n.r(e);var r=n("6f0f"),i=n("ef35");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("e2e2");var a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=c.exports},"48c1":function(t,e,n){"use strict";(function(t,e){var r=n("4ea4");n("0be4"),n("a9ff");r(n("66fd"));var i=r(n("1011"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"6f0f":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,"0ad7"))}},i=function(){var t=this.$createElement,e=(this._self._c,this.artObj.title.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},o=[]},ca2b:function(t,e,n){},ded9:function(t,e,n){"use strict";(function(t,r){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2eee")),a=i(n("9523")),c=i(n("c973")),u=n("f7ea");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=t.database(),h={data:function(){return{toolShow:!1,headShow:!1,boldShow:!1,italicShow:!1,artObj:{title:"",content:"",description:"",picUrls:"",province:""}}},onLoad:function(){var t=this;(0,u.getProvince)().then((function(e){t.artObj.province=e}))},methods:{onEditReady:function(){var t=this;r.createSelectorQuery().in(this).select(".myEdit").fields({size:!0,context:!0},(function(e){t.editorCtx=e.context})).exec()},checkStatus:function(t,e,n){e.hasOwnProperty(t)?this[n]=!0:this[n]=!1},onStatuschange:function(t){var e=t.detail;this.checkStatus("header",e,"headShow"),this.checkStatus("bold",e,"boldShow"),this.checkStatus("italic",e,"italicShow")},clickHead:function(){this.headShow=!this.headShow,this.editorCtx.format("header",!!this.headShow&&"h2")},clickBold:function(){this.boldShow=!this.boldShow,this.editorCtx.format("bold")},clickItalic:function(){this.italicShow=!this.italicShow,this.editorCtx.format("italic")},clickDivider:function(){this.editorCtx.insertDivider()},clickInsertImage:function(){var e=this;r.chooseImage({success:function(){var n=(0,c.default)(o.default.mark((function n(i){var a,c,u,s,l,d;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r.showLoading({title:"上传中，请等待！",mask:!0}),a=f(i.tempFiles),n.prev=2,a.s();case 4:if((c=a.n()).done){n.next=14;break}return u=c.value,s=u.path.subString(u.path.lastIndexOf(".")),l=Data.now()+String(Math.random()).substr(3,6)+s,n.next=10,t.uploadFile({filePath:u.path,cloudPath:u.name||l});case 10:d=n.sent,e.editorCtx.insertImage({src:d.fileID});case 12:n.next=4;break;case 14:n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](2),a.e(n.t0);case 19:return n.prev=19,a.f(),n.finish(19);case 22:r.hideLoading();case 23:case"end":return n.stop()}}),n,null,[[2,16,19,22]])})));return function(t){return n.apply(this,arguments)}}()})},eidtCompleted:function(){this.toolShow=!1},onSubmit:function(){var t=this;this.editorCtx.getContents({success:function(e){t.artObj.description=e.text.slice(0,30),t.artObj.content=e.html,t.artObj.picUrls=(0,u.getImgSrc)(e.html,3),r.showLoading({title:"正在发布中..."}),t.addData()}})},addData:function(){d.collection("quanzi_article").add(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.artObj)).then((function(t){r.hideLoading(),r.showToast({title:"发布成功",icon:"none"}),setTimeout((function(){r.reLaunch({url:"/pages/index/index"})}),500)}))},onFocus:function(){this.toolShow=!0}}};e.default=h}).call(this,n("a9ff")["default"],n("543d")["default"])},e2e2:function(t,e,n){"use strict";var r=n("ca2b"),i=n.n(r);i.a},ef35:function(t,e,n){"use strict";n.r(e);var r=n("ded9"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a}},[["48c1","common/runtime","common/vendor"]]]);