(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"0cb3":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-6ffb3a13]{padding:%?100?%}.content[data-v-6ffb3a13]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20210319/b8394cadb54b46f3b5bdcad6f3ad3aa9.jpg);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-6ffb3a13]{text-align:center}.logo uni-image[data-v-6ffb3a13]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-6ffb3a13]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-6ffb3a13]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-6ffb3a13]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-6ffb3a13]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-6ffb3a13]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-6ffb3a13]{color:#b49950}.picker-select-input[data-v-6ffb3a13]{line-height:%?80?%}',""]),e.exports=t},3735:function(e,t,r){"use strict";r.r(t);var n=r("7b40"),i=r("48c7");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("9a13");var a,u=r("f0c5"),s=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"6ffb3a13",null,!1,n["a"],a);t["default"]=s.exports},"48c7":function(e,t,r){"use strict";r.r(t);var n=r("4e2d"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"4e2d":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("28a5"),r("96cf");var i=n(r("3b8d")),o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],t=uni.getStorageSync("loginTable"),this.tableName=t,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("yonghu"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=9;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 12:return e.next=14,this.$api.register("".concat(this.tableName),this.ruleForm);case 14:this.$utils.msgBack("注册成功");case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=o},"7b40":function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(t){e.$set(e.ruleForm,"zhanghao",t)},expression:"ruleForm.zhanghao"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-picker",{attrs:{value:e.yonghuxingbieIndex,range:e.yonghuxingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.yonghuxingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(t){e.$set(e.ruleForm,"shouji",t)},expression:"ruleForm.shouji"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"#fff",borderRadius:"32rpx",color:"#333",textAlign:"left",borderWidth:"4rpx 4rpx 4rpx 4rpx",fontSize:"24rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(t){e.$set(e.ruleForm,"youxiang",t)},expression:"ruleForm.youxiang"}})],1):e._e(),r("v-uni-view",[r("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(242, 199, 68, 1)",borderRadius:"6rpx",color:"rgba(0, 0, 0, 1)",borderWidth:"0px",fontSize:"30rpx",borderStyle:"solid",height:"76rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},o=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}))},"9a13":function(e,t,r){"use strict";var n=r("c405"),i=r.n(n);i.a},c405:function(e,t,r){var n=r("0cb3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("33b29725",n,!0,{sourceMap:!1,shadowMode:!1})}}]);