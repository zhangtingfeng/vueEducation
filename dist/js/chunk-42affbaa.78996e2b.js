(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42affbaa"],{"8f5c":function(t,o,e){},dd7b:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("el-card",{staticClass:"login-form-layout"},[e("el-form",{ref:"loginForm",attrs:{autocomplete:"on",model:t.loginForm,"label-position":"left"}},[e("div",{staticStyle:{"text-align":"center"}},[e("svg-icon",{staticStyle:{width:"56px",height:"56px",color:"#409EFF"},attrs:{"icon-class":"login-mall"}})],1),e("h2",{staticClass:"login-title color-main"},[t._v("智脑训练与评估系统")]),e("el-form-item",{attrs:{prop:"username"}},[e("el-input",{attrs:{name:"username",type:"text",autocomplete:"on",placeholder:"请输入用户名"},model:{value:t.loginForm.username,callback:function(o){t.$set(t.loginForm,"username",o)},expression:"loginForm.username"}},[e("span",{attrs:{slot:"prefix"},slot:"prefix"},[e("svg-icon",{staticClass:"color-main",attrs:{"icon-class":"user"}})],1)])],1),e("el-form-item",{attrs:{prop:"password"}},[e("el-input",{attrs:{name:"password",type:t.pwdType,autocomplete:"on",placeholder:"请输入密码"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.handleLogin(o)}},model:{value:t.loginForm.password,callback:function(o){t.$set(t.loginForm,"password",o)},expression:"loginForm.password"}},[e("span",{attrs:{slot:"prefix"},slot:"prefix"},[e("svg-icon",{staticClass:"color-main",attrs:{"icon-class":"password"}})],1),e("span",{attrs:{slot:"suffix"},on:{click:t.showPwd},slot:"suffix"},[e("svg-icon",{staticClass:"color-main",attrs:{"icon-class":"eye"}})],1)])],1),e("el-form-item",{staticStyle:{"margin-bottom":"60px"}},[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(o){return o.preventDefault(),t.handleLogin(o)}}},[t._v("登录")])],1)],1)],1)],1)},s=[],n={name:"login",data:function(){return{loginForm:{username:"admin",password:"123456"},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var t=this;this.$refs.loginForm.validate(function(o){if(!o)return console.log("参数验证不合法！"),!1;t.loading=!0,t.$store.dispatch("Login",t.loginForm).then(function(o){t.loading=!1;var e=o.data.code;200==e?t.$router.push({path:"/success",query:{data:o.data.data}}):t.$router.push({path:"/error",query:{message:o.data.message}})}).catch(function(){t.loading=!1})})}}},i=n,r=(e("ded4"),e("2877")),l=Object(r["a"])(i,a,s,!1,null,"09ad5613",null);o["default"]=l.exports},ded4:function(t,o,e){"use strict";var a=e("8f5c"),s=e.n(a);s.a}}]);
//# sourceMappingURL=chunk-42affbaa.78996e2b.js.map