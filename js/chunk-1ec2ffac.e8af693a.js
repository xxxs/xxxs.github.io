(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ec2ffac"],{ab72:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.test1,expression:"test1"}],attrs:{type:"text",placeholder:"电话"},domProps:{value:t.test1},on:{blur:function(e){return t.test(1)},input:function(e){e.target.composing||(t.test1=e.target.value)}}}),s("div",{staticClass:"model"},[t._v(t._s(t.test1))]),s("hr"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.test2,expression:"test2"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.test2},on:{blur:function(e){return t.test(2)},input:function(e){e.target.composing||(t.test2=e.target.value)}}}),s("div",{staticClass:"model"},[t._v(t._s(t.test2))]),s("hr"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.test3,expression:"test3"}],attrs:{type:"text",placeholder:"邮箱"},domProps:{value:t.test3},on:{blur:function(e){return t.test(3)},input:function(e){e.target.composing||(t.test3=e.target.value)}}}),s("div",{staticClass:"model"},[t._v(t._s(t.test3))]),s("hr"),s("div",{staticClass:"tips"},[t._v("1. 电话验证 /[0-9]|\\(|\\)|\\-/;")]),s("div",{staticClass:"tips"},[t._v("2. 邮箱验证 /\\@([A-Za-z0-9_\\-\\.])+\\./;")]),s("div",{staticClass:"tips"},[t._v("3. 邮箱校验 /^\\w+((.\\w+)|(-\\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.test4,expression:"test4"}],attrs:{type:"text",placeholder:"电话"},domProps:{value:t.test4},on:{blur:function(e){return t.test(4)},input:function(e){e.target.composing||(t.test4=e.target.value)}}}),s("div",{staticClass:"model"},[t._v(t._s(t.test4))])])},i=[],o={data:function(){return{btn:!0,test1:"",test2:"",test3:"",test4:""}},created:function(){},mounted:function(){},methods:{test:function(t){var e=/[0-9]|\(|\)|\-/,s=/\@([A-Za-z0-9_\-\.])+\./,n=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z])$/;1==t&&(console.log(this.test1),console.log(e.test(this.test1)),e.test(this.test1)?this.test1="true":this.test1="投保人固定电话只允许包含半角的数字、英文括号、“-”符号！"),2==t&&(console.log(s.test(this.test2)),s.test(this.test2)?this.test2="true":this.test2="投保人电子邮箱必须同时包含半角的 “@”和 “.”！"),3==t&&(console.log(n.test(this.test3)),n.test(this.test3)?this.test3="true":this.test3="投保人电子邮箱在“@”后面，必须有“.”！"),4==t&&(console.log(/\S/.test(this.test4)),/\S/.test(this.test4)?this.test4="true":this.test4="false")},androidKeyboard:function(){var t=document.documentElement.clientHeight||document.body.clientHeight;window.onresize=function(){document.documentElement.clientHeight<t||document.body.clientHeight<t?document.getElementById("btns").style.display="none":document.getElementById("btns").style.display="block"}}}},a=o,l=(s("e718"),s("2877")),r=Object(l["a"])(a,n,i,!1,null,"c5529a0e",null);e["default"]=r.exports},b646:function(t,e,s){},e718:function(t,e,s){"use strict";var n=s("b646"),i=s.n(n);i.a}}]);
//# sourceMappingURL=chunk-1ec2ffac.e8af693a.js.map