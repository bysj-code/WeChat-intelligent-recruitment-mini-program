(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/qiye/add-or-update"],{"0e2a":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,i,t,a,u){try{var o=e[a](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(i,t)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(i,t){var u=e.apply(n,r);function o(e){a(u,i,t,o,s,"next",e)}function s(e){a(u,i,t,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("e9a5"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{qiyemingcheng:"",mima:"",qiyexingzhi:"",jingyingneirong:"",gongsidianhua:"",lianxiren:"",lianxifangshi:"",qiyeyouxiang:"",qiyedizhi:""},qiyexingzhiOptions:[],qiyexingzhiIndex:0,user:{},ro:{qiyemingcheng:!1,mima:!1,qiyexingzhi:!1,jingyingneirong:!1,gongsidianhua:!1,lianxiren:!1,lianxifangshi:!1,qiyeyouxiang:!1,qiyedizhi:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(i.default.mark((function t(){var a,u,o,s;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,r.$api.session(a);case 3:if(u=t.sent,r.user=u.data,r.qiyexingzhiOptions="外资,中外合资,国有企业,私人企业".split(","),r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return r.ruleForm.id=n.id,t.next=12,r.$api.info("qiye",r.ruleForm.id);case 12:u=t.sent,r.ruleForm=u.data;case 14:if(r.cross=n.cross,!n.cross){t.next=58;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 18:if((t.t1=t.t0()).done){t.next=58;break}if(s=t.t1.value,"qiyemingcheng"!=s){t.next=24;break}return r.ruleForm.qiyemingcheng=o[s],r.ro.qiyemingcheng=!0,t.abrupt("continue",18);case 24:if("mima"!=s){t.next=28;break}return r.ruleForm.mima=o[s],r.ro.mima=!0,t.abrupt("continue",18);case 28:if("qiyexingzhi"!=s){t.next=32;break}return r.ruleForm.qiyexingzhi=o[s],r.ro.qiyexingzhi=!0,t.abrupt("continue",18);case 32:if("jingyingneirong"!=s){t.next=36;break}return r.ruleForm.jingyingneirong=o[s],r.ro.jingyingneirong=!0,t.abrupt("continue",18);case 36:if("gongsidianhua"!=s){t.next=40;break}return r.ruleForm.gongsidianhua=o[s],r.ro.gongsidianhua=!0,t.abrupt("continue",18);case 40:if("lianxiren"!=s){t.next=44;break}return r.ruleForm.lianxiren=o[s],r.ro.lianxiren=!0,t.abrupt("continue",18);case 44:if("lianxifangshi"!=s){t.next=48;break}return r.ruleForm.lianxifangshi=o[s],r.ro.lianxifangshi=!0,t.abrupt("continue",18);case 48:if("qiyeyouxiang"!=s){t.next=52;break}return r.ruleForm.qiyeyouxiang=o[s],r.ro.qiyeyouxiang=!0,t.abrupt("continue",18);case 52:if("qiyedizhi"!=s){t.next=56;break}return r.ruleForm.qiyedizhi=o[s],r.ro.qiyedizhi=!0,t.abrupt("continue",18);case 56:t.next=18;break;case 58:r.styleChange();case 59:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},qiyexingzhiChange:function(e){this.qiyexingzhiIndex=e.target.value,this.ruleForm.qiyexingzhi=this.qiyexingzhiOptions[this.qiyexingzhiIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function r(){var t,a,u,o,s,c,l,g,f,d;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.ruleForm.qiyemingcheng){r.next=3;break}return n.$utils.msg("企业名称不能为空"),r.abrupt("return");case 3:if(n.ruleForm.mima){r.next=6;break}return n.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(!n.ruleForm.gongsidianhua||n.$validate.isPhone(n.ruleForm.gongsidianhua)){r.next=9;break}return n.$utils.msg("公司电话应输入电话格式"),r.abrupt("return");case 9:if(!n.ruleForm.lianxifangshi||n.$validate.isMobile(n.ruleForm.lianxifangshi)){r.next=12;break}return n.$utils.msg("联系方式应输入手机格式"),r.abrupt("return");case 12:if(!n.ruleForm.qiyeyouxiang||n.$validate.isEmail(n.ruleForm.qiyeyouxiang)){r.next=15;break}return n.$utils.msg("企业邮箱应输入邮件格式"),r.abrupt("return");case 15:if(!n.cross){r.next=31;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=31;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=27;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),r.next=25,n.$api.update("".concat(g),c);case 25:r.next=31;break;case 27:t=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!t){r.next=53;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:t,crossrefid:a},r.next=37,n.$api.list("qiye",f);case 37:if(d=r.sent,!(d.data.total>=u)){r.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 43:if(!n.ruleForm.id){r.next=48;break}return r.next=46,n.$api.update("qiye",n.ruleForm);case 46:r.next=50;break;case 48:return r.next=50,n.$api.add("qiye",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:r.next=61;break;case 53:if(!n.ruleForm.id){r.next=58;break}return r.next=56,n.$api.update("qiye",n.ruleForm);case 56:r.next=60;break;case 58:return r.next=60,n.$api.add("qiye",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),i=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(r,"-").concat(i,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},"393b":function(e,n,r){"use strict";r.r(n);var i=r("0e2a"),t=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);n["default"]=t.a},"51f5":function(e,n,r){"use strict";var i=r("e64e"),t=r.n(i);t.a},"94c4":function(e,n,r){"use strict";r.r(n);var i=r("98a0"),t=r("393b");for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);r("51f5");var u,o=r("f0c5"),s=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"5d303d9a",null,!1,i["a"],u);n["default"]=s.exports},"98a0":function(e,n,r){"use strict";var i;r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return i}));var t=function(){var e=this,n=e.$createElement;e._self._c},a=[]},e64e:function(e,n,r){},efe9:function(e,n,r){"use strict";(function(e){r("d8b0");i(r("66fd"));var n=i(r("94c4"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])}},[["efe9","common/runtime","common/vendor"]]]);