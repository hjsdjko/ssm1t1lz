(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tushuxinxi/list"],{"43f6":function(t,e,n){"use strict";n.r(e);var r=n("f0b2"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"5c8d":function(t,e,n){},8244:function(t,e,n){"use strict";n.r(e);var r=n("d6a9"),i=n("43f6");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("e2e1");var o,u=n("f0c5"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},d6a9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"538f"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("tushuxinxi","修改")),r=t.isAuth("tushuxinxi","删除"),i=t.__map(t.list,(function(e,n){var r=t.__get_orig(e),i=e.tupian?e.tupian.split(","):null;return{$orig:r,g0:i}})),a=t.isAuth("tushuxinxi","新增");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r,l0:i,m2:a}})},a=[]},e2e1:function(t,e,n){"use strict";var r=n("5c8d"),i=n.n(r);i.a},f0b2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,s,"next",t)}function s(t){a(o,r,i,u,s,"throw",t)}u(void 0)}))}}var u={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"图书名称"},{queryName:"内容关键词"}],sactiveItem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"rgba(242, 199, 68, 1)",color:"rgba(0, 0, 0, 1)",borderRadius:"40rpx",borderWidth:"2rpx",width:"auto",lineHeight:"56rpx",fontSize:"24rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(215, 215, 215, 1)",backgroundColor:"rgba(247, 247, 247, 1)",color:"#333",borderRadius:"40rpx",borderWidth:"2rpx",width:"auto",lineHeight:"56rpx",fontSize:"24rpx",borderStyle:"solid"},queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},onShow:function(){var t=this;return o(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btnColor=t.btnColor.sort((function(){return.5-Math.random()})),e.next=3,t.$api.list("tushuleixing",{page:1,limit:100});case 3:n=e.sent,n.data.list.splice(0,0,{id:0,tushuleixing:"全部"}),t.categoryList=n.data.list,t.hasNext=!0,t.mescroll&&t.mescroll.resetUpScroll();case 8:case"end":return e.stop()}}),e)})))()},onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.tushumingcheng="",this.searchForm.neirongguanjianci=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return o(r.default.mark((function n(){var i,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i={page:t.num,limit:t.size},"全部"!=e.categoryName&&(i.tushuleixing="%"+e.categoryName+"%"),n.next=4,e.$api.list("tushuxinxi",i);case 4:a=n.sent,1==t.num&&(e.list=[]),e.list=e.list.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 9:case"end":return n.stop()}}),n)})))()},onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var n=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(r.default.mark((function t(i){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,n.$api.del("tushuxinxi",JSON.stringify([e]));case 3:n.hasNext=!0,n.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function i(e){return t.apply(this,arguments)}return i}()})},search:function(){var t=this;return o(r.default.mark((function e(){var n,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.mescroll.num=1,n={page:t.mescroll.num,limit:t.mescroll.size},t.searchForm.tushumingcheng&&(n["tushumingcheng"]="%"+t.searchForm.tushumingcheng+"%"),t.searchForm.neirongguanjianci&&(n["neirongguanjianci"]="%"+t.searchForm.neirongguanjianci+"%"),e.next=6,t.$api.list("tushuxinxi",n);case 6:i=e.sent,1==t.mescroll.num&&(t.list=[]),t.list=t.list.concat(i.data.list),0==i.data.list.length&&(t.hasNext=!1),t.mescroll.endSuccess(t.mescroll.size,t.hasNext);case 11:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,n("5486")["default"])},fe6d:function(t,e,n){"use strict";(function(t){n("5162");r(n("66fd"));var e=r(n("8244"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])}},[["fe6d","common/runtime","common/vendor"]]]);