!function(e){
if(e&&e.onerror){
var n=e.onerror;
e.onerror=function(e){
n(e);
var t="[template]:\n"+e.id+"\n\n[name]:\n"+e.name;
e.message&&(t+="\n\n[message]:\n"+e.message),e.line?(t+="\n\n[line]:\n"+e.line,t+="\n\n[source]:\n"+e.source.split(/\n/)[e.line-1].replace(/^[\s\t]+/,"")):(t+="\n\n[noline]:\n",
e.source&&(t+="\n\n[source]:\n"+e.source.toString().slice(0,200).replace(/^[\s\t]+/,""))),
e.temp&&(t+="\n\n[temp]:\n"+e.temp);
var r=new Image;
r.src="https://mp.weixin.qq.com/misc/jslog?id=114&content=tmpl_error"+encodeURIComponent("|uin|"+(wx&&wx.uin))+"&level=error";
var o=new Image;
o.src="https://badjs.weixinbridge.com/badjs?id=92&level=4&uin="+(wx&&wx.uin)+"&from="+encodeURIComponent(location.href)+"&msg="+encodeURIComponent(t);
};
}
}(template),function(e){
if(e.BJ_REPORT){
var n,t=function(n,t){
n?n.stack?n.stack+="|try":n.msg&&(n.msg+="|try"):"string"==typeof n&&(n+="|try"),
e.BJ_REPORT.report(n,t);
},r=e.BJ_REPORT.tryJs=function(e){
return e&&(t=e),r;
},o=function(e,n){
var t;
for(t in n)e[t]=n[t];
},i=function(e){
return"function"==typeof e;
},s=function(r,o){
return function(){
try{
return r.apply(this,o||arguments);
}catch(i){
if(t(i),i.stack&&console&&console.error&&console.error("[BJ-REPORT]",i.stack),!n){
var s=e.onerror;
e.onerror=function(){},n=setTimeout(function(){
e.onerror=s,n=null;
},50);
}
throw i;
}
};
},a=function(r,o){
return function(){
try{
return r.apply(this,arguments);
}catch(i){
if(t(i,o),i.stack&&console&&console.error&&console.error("[BJ-REPORT]",i.stack),
!n){
var s=e.onerror;
e.onerror=function(){},n=setTimeout(function(){
e.onerror=s,n=null;
},50);
}
throw i;
}
};
},c=function(e){
return function(){
for(var n,t=[],r=0,o=arguments.length;o>r;r++)n=arguments[r],i(n)&&(n=s(n)),t.push(n);
return e.apply(this,t);
};
},u=function(e){
return function(n,t){
if("string"==typeof n)try{
n=new Function(n);
}catch(r){
throw r;
}
var o=[].slice.call(arguments,2);
return n=s(n,o.length&&o),e(n,t);
};
},l=function(e,n){
return function(){
for(var t,r,o=[],a=0,c=arguments.length;c>a;a++)t=arguments[a],i(t)&&(r=s(t))&&(t.tryWrap=r)&&(t=r),
o.push(t);
return e.apply(n||this,o);
};
},m=function(e){
var n,t;
for(n in e)t=e[n],i(t)&&(e[n]=s(t));
return e;
};
r.spyJquery=function(){
var n=e.$;
if(!n||!n.event)return r;
var t=n.event.add,o=n.ajax,s=n.event.remove;
if(t&&(n.event.add=l(t),n.event.remove=function(){
for(var e,n=[],t=0,r=arguments.length;r>t;t++)e=arguments[t],i(e)&&(e=e.tryWrap),
n.push(e);
return s.apply(this,n);
}),o&&(n.ajax=function(e,t){
return t||(t=e,e=void 0),m(t),e?o.call(n,e,t):o.call(n,t);
}),$.zepto){
var a=n.fn.on,c=n.fn.off;
n.fn.on=l(a),n.fn.off=function(){
for(var e,n=[],t=0,r=arguments.length;r>t;t++)e=arguments[t],i(e)&&(e=e.tryWrap),
n.push(e);
return c.apply(this,n);
};
}
return r;
},r.spyModules=function(){
var n=e.require,t=e.define;
return t&&t.amd&&n&&(e.require=c(n),o(e.require,n),e.define=c(t),o(e.define,t)),
e.seajs&&t&&(e.define=function(){
for(var e,n=[],r=0,o=arguments.length;o>r;r++)e=arguments[r],i(e)&&(e=a(e,arguments[0]),
e.toString=function(e){
return function(){
return e.toString();
};
}(arguments[r])),n.push(e);
return t.apply(this,n);
},e.seajs.use=c(e.seajs.use),o(e.define,t)),r;
},r.spySystem=function(){
return e.setTimeout=u(e.setTimeout),e.setInterval=u(e.setInterval),r;
},r.spyCustom=function(e){
return i(e)?s(e):m(e);
},r.spyAll=function(){
return r.spyJquery().spyModules().spySystem(),r;
},r.spyAll(),template&&r.spyCustom(template);
}
}(window),seajs.use("biz_common/utils/respTypes.js",function(e){
var n=5,t=$.ajax;
$.ajax=function(r){
return r.converters={
"text json":function(t){
var o=$.parseJSON(t);
if(r.rtDesc){
var i=20802,s=18;
if(r.rtId&&r.rtKey&&(i=r.rtId,s=r.rtKey),!e.check(o,r.rtDesc)){
for(var a=2+Math.ceil(t.length/1e3),c={
idkey:i+"_"+s+"_1",
lc:Math.min(n,a),
log0:encodeURIComponent(r.url),
log1:encodeURIComponent(e.getMsg())
},u=2;a>u&&n>u;u++)c["log"+u]=t.substr(1e3*(u-2),1e3);
$.post("/mp/jsmonitor",c);
}
}
return o;
}
},t(r);
};
}),function(e){
function n(e,n){
for(var t=0;t<n.length;++t)if(e.indexOf(n[t])>-1)return!0;
return!1;
}
if(/msie 6/i.test(navigator.userAgent))return void(window.location="/cgi-bin/readtemplate?t=err/noie6_tmpl");
window.console||(window.console={
log:function(){},
error:function(){},
info:function(){}
}),e.wx=e.wx||{},wx.T=function(e,n){
return template.compile(e)(n);
},wx.url=function(e){
if(e.startsWith("javasript:"))return e;
var n=wx.data.param;
return-1!=e.indexOf("?")?e+n:e+"?1=1"+n;
},wx.getUrl=function(e){
var n=(window.location+"&").match(new RegExp("(?:\\?|\\&)"+e+"=(.*?)\\&"));
return n&&n[1]?String(n[1]).html(!0):void 0;
},$.fn.setClass=function(e){
this.attr("class",e);
},$("img").error(function(e){
var n=e&&e.target&&e.target.src||"";
if(BJ_REPORT)if(BJ_REPORT.monitor&&"function"==typeof BJ_REPORT.monitor)BJ_REPORT&&BJ_REPORT.monitor(1,"[img-src]"+n,110);else{
var t="[no_monitor]BJ_REPORT:"+n;
for(var r in BJ_REPORT)t+=r+"|";
var o=new Image;
o.src="https://badjs.weixinbridge.com/badjs?id=110&msg="+encodeURIComponent(t)+"&uin="+(wx&&wx.uin)+"&from="+encodeURIComponent(location.href)+"&level=4";
}
}),wx.jslog=function(e,n,t){
t=t||3;
var r=new Image,o=[];
n&&jQuery.each(["message","stack","lineNumber"],function(e,t){
o.push(t+":"+(n[t]||""));
}),o.push("level:2"),r.src="https://badjs.weixinbridge.com/badjs?id=5&uin="+wx.data.uin+"&msg="+encodeURIComponent(o.join(";").replace(/\s/g," "))+"&from="+encodeURIComponent(location.href)+"&_t="+ +new Date;
var i=new Image;
i.src="https://mp.weixin.qq.com/misc/jslog?id="+t+"&content=jslog&level=error",console&&console.error&&n&&console.error(n);
},setTimeout(function(){
seajs.use("biz_web/lib/store.js",function(e){
var n=$("#logout");
n.length>0&&n.click(function(){
function n(){
var n=e.get(r);
return new Date-n>864e5;
}
e.remove("hasNotice"),e.remove("templateClassStatus"),e.remove("templateClassStatusTime");
var t="__draft__"+wx.data.uin,r="__draft__time__"+wx.data.uin;
n()&&(e.remove(t),e.remove(r));
});
});
},5e3),wx.resPath="mp.weixin.qq.com"==location.hostname?"https://res.wx.qq.com":"",
jQuery(function(){
var e=['<div class="scale_tips" id="zoom_tips" style="display:none;">','<div class="scale_tips_inner">','<i class="icon_scale_tips"></i>','<p class="scale_tips_content"><span id="zoom_msg"></span><a href="javascript:;" id="zoom_prompt">不再提示</a></p>',"</div>","</div>"].join("\n");
jQuery("body").append(e);
var n='<object type="application/x-shockwave-flash" data="{swfpath}" width="10" height="10" id="{id}">{param}</object>',t={
swfpath:wx.path.zoom,
id:"ZoomFlash",
param:""
},r={
movie:t.swfpath,
allowscriptaccess:"always",
wmode:"transparent",
scale:"noScale"
};
jQuery.each(r,function(e,n){
t.param+='<param name="'+e+'" value="'+n+'">';
}),$('<div style="position: absolute; right: 0px; bottom: 0px; visibility: visible;"></div>').html(n&&n.format(t)).appendTo("body"),
seajs.use("biz_web/lib/store.js",function(e){
jQuery(window).on("load resize",function(){
if(e&&!e.get("__zoom_tips__")&&document.getElementById("ZoomFlash")){
var n=document.getElementById("ZoomFlash").height,t=n,r=1;
try{
t=document.getElementById("ZoomFlash").getFlashStageRect().height,r=~window.navigator.userAgent.toLowerCase().indexOf("msie")&&screen.deviceXDPI&&screen.logicalXDPI?screen.deviceXDPI/screen.logicalXDPI:t/n,
.9>r?(jQuery("#zoom_msg").text("您的浏览器目前处于缩小状态，会导致公众平台网页显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。"),
jQuery("#zoom_tips").show(),jQuery("body").addClass("scaled")):r>1.1?(jQuery("#zoom_msg").text("您的浏览器目前处于放大状态，会导致公众平台网页显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。"),
jQuery("#zoom_tips").show(),jQuery("body").addClass("scaled")):(jQuery("#zoom_tips").hide(),
jQuery("body").removeClass("scaled"));
}catch(o){}
}
});
}),jQuery(window).on("keyup",function(e){
e.ctrlKey&&(96==e.keyCode||48==e.keyCode)&&(jQuery("#zoom_tips").hide(),jQuery("body").removeClass("scaled"));
}),jQuery("#zoom_prompt").on("click",function(){
seajs.use("biz_web/lib/store.js",function(e){
e.set("__zoom_tips__",!0);
}),jQuery("#zoom_tips").hide(),jQuery("body").removeClass("scaled");
});
}),jQuery("#menuBar").find("dd>a").click(function(){
$(this).find(".new").length>0&&jQuery.ajax({
url:"/misc/navoperation",
data:{
action:"click",
id:$(this).data("id"),
token:wx.data.t
},
type:"post"
});
}),function(){
try{
var e=jQuery(window).height();
750>e&&jQuery(document.body).addClass("screen_small");
}catch(n){}
}();
var t=["biz_common/utils/monitor.js","biz_common/utils/huatuo.js"];
seajs.on("request",function(e){
if(0!=location.host.indexOf("dev")&&!/[a-f0-9]{6}\.(js|css)$/.test(e.requestUri)&&!n(e.requestUri,t)){
var e={
res:e.requestUri,
page:location.pathname+"?"+location.search
},r=encodeURIComponent("res[{res}]; page[{page}]".format(e));
(new Image).src=wx.url("/misc/jslog?content="+r+"&id=59&level=error");
}
}),wx.getBanInfo=function(e){
for(var n=wx.ban_func_list,t=0;t<n.length;t++)if(n[t].func_id==e)return n[t];
return null;
};
}(window);;$.fn.extend({
center:function(i){
i?(this.css("position","fixed"),this.css("top",($(window).height()-this.height())/2+"px"),
this.css("left",($(window).width()-this.width())/2+"px")):(this.css("position","absolute"),
this.css("top",($(window).height()-this.height())/2+$(window).scrollTop()+"px"),
this.css("left",($(window).width()-this.width())/2+$(window).scrollLeft()+"px"));
}
});;$.fn.disable=function(t){
t=t||"btn_disabled";
var s=this.hasClass("btn_input")?this.find("button"):this;
return s.attr("disabled","disabled"),this.parent().hasClass("btn_input")?this.parent().addClass(t):this.addClass(t),
this;
},$.fn.enable=function(t){
t=t||"btn_disabled";
var s=this.hasClass("btn_input")?this.find("button"):this;
return s.attr("disabled",!1),this.parent().hasClass("btn_input")?this.parent().removeClass(t):this.removeClass(t),
this;
},function(){
var t=function(t,s){
if(t=t||"btn_loading",!s||$.support.leadingWhitespace){
var i=this.hasClass("btn_input")?this.find("button"):this;
i.prepend("<i></i>");
}
return this.disable(t),this;
},s=function(t,s){
if(t=t||"btn_loading",!s||$.support.leadingWhitespace){
var i=this.hasClass("btn_input")?this.find("button"):this;
i.find("i:first-child").remove();
}
return this.enable(t),this;
};
$.fn.btn=function(i,n,a){
return i?s.call(this,n,a):t.call(this,n,a);
};
}();;!function(e){
e.fn.replaceTagName=function(t){
for(var n=[],r=this.length;r--;){
for(var a=document.createElement(t),i=this[r],u=i.attributes,o=0;o<u.length;o++){
var f=u[o];
a.setAttribute(f.name,f.value);
}
a.innerHTML=i.innerHTML,e(i).after(a).remove(),n[r]=a;
}
return e(n);
};
}(window.jQuery);;$.fn.scrollLoading=function(o){
function t(t){
return t.offset().top>$(window).scrollTop()&&t.offset().top+t.height()<$(window).scrollTop()+$(window).height()+o.pre;
}
function c(){
$.each(s,function(c,n){
var s=t($(n.obj));
s&&(n.src&&"img"==n.tag.toLowerCase()&&(n.obj.src=n.src,n.obj.data_src=n.src=""),
$.isFunction(o.callback)?o.callback.apply(n.obj):"");
});
}
var n={
callback:$.noop,
pre:100,
context:window
};
o=$.extend({},n,o||{});
var s=[];
$(this).each(function(){
var o=this.nodeName;
o&&s.push({
obj:this,
src:$(this).data("src"),
tag:o.toLowerCase()
});
}),c(),o.context.unbind("scroll",c),o.context.bind("scroll",c);
},$.fn.fixed=function(){
var o=this,t=o.offset().top;
$(document).on("scroll",function(){
$(window).scrollTop()<t?o.css("position","static"):o.css("position","fixed").css("top",0);
});
};;!function(e){
var l=function(){};
"placeholder"in document.createElement("input")||(l=function(){
var l=e(this),a=l.attr("placeholder");
a&&(l.focus(function(){
this.value===a&&(this.value=""),l.removeClass("placeholder");
}).blur(function(){
""===this.value&&(this.value=a,l.addClass("placeholder"));
}),""===l.val()&&l.addClass("placeholder"),l.val()||l.val(a));
}),e.fn.placeholder=l;
}(jQuery);;$.extend({
log:function(o){
console&&console.log(o);
}
});;$.fn.extend({
serializeObject:function(){
var e=this.serializeArray(),i={};
return $(e).each(function(e,n){
i[n.name]=n.value;
}),i;
}
}),define("common/qq/jquery.plugin/serializeObject.js",[],function(){
"use strict";
});;!function(){
function t(t,n){
for(var r in n)t[r]=n[r];
return t;
}
function n(n,r){
if(r===!0){
var e;
if(Object.isArray(n)){
e=[];
for(var i in n)n.hasOwnProperty(i)&&e.push(Object.isObject(n[i])?Object.clone(n[i],!0):n[i]);
}else{
e={};
for(var i in n)n.hasOwnProperty(i)&&(e[i]=Object.isObject(n[i])?Object.clone(n[i],!0):n[i]);
}
return e;
}
return t({},n);
}
function r(t){
return!(!this||1!=t.nodeType);
}
function e(t){
return Object.prototype.toString.call(t)===b;
}
function i(t){
return Object.prototype.toString.call(t)===m;
}
function o(t){
return Object.prototype.toString.call(t)===h;
}
function c(t){
return Object.prototype.toString.call(t)===g;
}
function u(t){
return Object.prototype.toString.call(t)===l;
}
function a(t){
return Object.prototype.toString.call(t)===d;
}
function s(t){
return"undefined"==typeof t;
}
function f(t,n){
var r=[];
for(var e in t)t.hasOwnProperty(e)&&r.push(n===!0?[encodeURIComponent(e),"=",encodeURIComponent(t[e]),"&"].join(""):[e,"=",t[e],"&"].join(""));
return r.join("").slice(0,-1);
}
function p(t,n){
if("undefined"!=typeof n)for(var r in t)if(t.hasOwnProperty(r)&&n(t[r],r)===!1)break;
}
var h="[object Function]",l="[object Number]",g="[object String]",m="[object Array]",b="[object Object]",d="[object Date]";
t(Object,{
extend:t,
clone:n,
isObject:e,
isElement:r,
isArray:i,
isFunction:o,
isString:c,
isNumber:u,
isDate:a,
isUndefined:s,
param:f,
each:p
});
}(),Object.extend(String.prototype,function(){
function t(t){
return this.replace(/\{(\w+)\}/g,function(n,r){
return void 0!==t[r]?t[r]:n;
});
}
function n(){
return this.replace(/[^\x00-\xff]/g,"**").length;
}
function r(t,n){
return t=t||30,n=Object.isUndefined(n)?"...":n,this.length>t?this.slice(0,t-n.length)+n:String(this);
}
function e(t){
return t===!0?this.replace(/^\s+/,""):t===!1?this.replace(/\s+$/,""):this.replace(/^\s+/,"").replace(/\s+$/,"");
}
function i(t){
var n=["&","&amp;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;"];
t===!1&&n.reverse();
for(var r=0,e=this;r<n.length;r+=2)e=e.replace(new RegExp(n[r],"g"),n[1+r]);
return e;
}
function o(t){
return this.indexOf(t)>-1;
}
function c(t){
return 0===this.lastIndexOf(t,0);
}
function u(t){
var n=this.length-t.length;
return n>=0&&this.indexOf(t,n)===n;
}
function a(){
return""==this;
}
function s(){
return this.replace(/<\/?[^>]*\/?>/g,"");
}
function f(){
return/^\s*$/.test(this);
}
function p(){
var t,n,r,e=this,i=arguments.length;
if(1>i)return s;
for(t=0;i>t;)e=e.replace(/%s/,"{#"+t++ +"#}");
for(e.replace("%s",""),t=0;void 0!==(n=arguments[t]);)r=new RegExp("{#"+t+"#}","g"),
e=e.replace(r,n),t++;
return e;
}
function h(){
for(var t,n=this,r=0,e=0;t=n.charAt(r++);)e+=t.charCodeAt().toString(16).length/2;
return e;
}
function l(t,n){
if("function"==typeof this.split){
var r=this.split(n||"&"),e={};
return r.each(function(n){
arr=n.split("="),2==arr.length&&arr[0]&&arr[1]&&(t===!0?e[decodeURIComponent(arr[0])]=decodeURIComponent(arr[1]):e[arr[0]]=arr[1]);
}),e;
}
}
document.createElement("div");
return{
format:t,
sprintf:p,
text:s,
len:n,
truncate:r,
trim:String.prototype.trim||e,
https2http:function(){
return this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
},
http2https:function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qlogo.cn/");
},
nogif:function(){
return this.indexOf("wx_fmt=gif")>-1||this.indexOf("/mmbiz_gif/")>-1?this.replace("/0?","/s640?").replace("wx_fmt=gif",""):this.toString();
},
html:i,
has:o,
startsWith:c,
endsWith:u,
param:l,
empty:a,
blank:f,
bytes:h
};
}()),Object.extend(Function.prototype,function(){
function t(t,n){
for(var r=t.length,e=n.length;e--;)t[r+e]=n[e];
return t;
}
function n(n,r){
return n=a.call(n,0),t(n,r);
}
function r(t){
if(arguments.length<2&&Object.isUndefined(arguments[0]))return this;
var r=this,e=a.call(arguments,1);
return function(){
var i=n(e,arguments);
return r.apply(t,i);
};
}
function e(t,n){
var r=this;
return args=a.call(arguments,2),t=1e3*t,window.setTimeout(function(){
return r.apply(n||r,args);
},t);
}
function i(){
var n=t([.01,null],arguments);
return this.delay.apply(this,n);
}
function o(t){
var n=this;
return function(){
return t.apply(this,arguments)===!1?!1:n.apply(this,arguments);
};
}
function c(n){
var r=this;
return function(){
var e=r.apply(this,arguments),i=t([e],arguments);
return n.apply(this,i),e;
};
}
function u(n){
var r=this;
return function(){
var e=t([r.bind(this)],arguments);
return n.apply(this,e);
};
}
var a=Array.prototype.slice;
return{
bind:r,
delay:e,
defer:i,
before:o,
after:c,
wrap:u
};
}()),function(){
function t(t,n){
for(var r=0,e=this.length>>>0;e>r;r++)r in this&&t.call(n,this[r],r,this);
}
function n(){
return this[this.length-1];
}
function r(t){
return t===!0?Object.clone.apply(this,arguments):c.call(this,0);
}
function e(t){
var n=[];
return this.each(function(r,e){
n.push(t(r,e));
}),n;
}
function i(t){
var n=-1;
return this.each(function(r,e){
return t==r?(n=e,!1):void 0;
}),n;
}
var o=Array.prototype,c=o.slice;
Object.extend(o,{
each:Array.prototype.forEach||t,
indexOf:Array.prototype.indexOf||i,
last:n,
clone:r,
map:e
});
}();;define("common/qq/Class.js",[],function(t,n){
"use strict";
n.create=function(t){
var n=function(){
this.construct&&this.construct.apply(this,arguments);
};
return t.apply(n.prototype,arguments),n;
},function(){
function t(t){
for(var n=1,r=arguments.length;r>n;n++)for(var e in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],e)&&(t[e]=arguments[n][e]);
return t;
}
function r(){
return this.__instance__||(this.__instance__=new this(arguments[0],arguments[1],arguments[2]));
}
function e(t){
var n=i.call(this,t);
return n.prototype.parent=this,n;
}
function i(n){
var i="function"==typeof this?this:function(){},o=function(){
function t(n,e){
n.Super&&t(n.Super,e),n.init&&n.init.apply(e,r);
}
var n=this,r=arguments;
n.Root=i.__base__,n.Super=i.prototype,t(n,n);
};
return t(o.prototype,i.prototype||{},n),o.__base__=i.__base__||o.prototype,o.GetStaticInstance=r,
o.Inherit=o.inherit=e,o;
}
n.declare=i;
}();
});;!function(e){
function t(e){
return e>=49&&90>=e;
}
function n(e){
return(e||"").toLowerCase().split("+").sort().join("").replace(/\s/gi,"");
}
function o(e){
var t=e.type;
return"mousewheel"==t||"DOMMouseScroll"==t;
}
function r(e){
return e.wheelDelta>0||e.detail<0?"mousewheelup":"mousewheeldown";
}
function u(e){
var n=e.keyCode,u=f[n],s=!u&&t(n)&&String.fromCharCode(n).toLowerCase()||o(e)&&r(e),a=e.ctrlKey,c=e.shiftKey,i=e.altKey,p=c&&(l[s]||l[u]),h=[];
return a||i||!p||(u=p,c=s=null),a&&h.push("ctrl"),c&&h.push("shift"),i&&h.push("alt"),
u&&h.push(u),s&&h.push(s),h.join("+");
}
function s(e,t){
return n(u(e))==n(t);
}
var f={
27:"esc",
9:"tab",
32:"space",
13:"enter",
8:"backspace",
145:"scroll",
20:"capslock",
144:"numlock",
19:"pause",
45:"insert",
36:"home",
46:"del",
35:"end",
33:"pageup",
34:"pagedown",
37:"left",
38:"up",
39:"right",
40:"down",
107:"=",
109:"-",
112:"f1",
113:"f2",
114:"f3",
115:"f4",
116:"f5",
117:"f6",
118:"f7",
119:"f8",
120:"f9",
121:"f10",
122:"f11",
123:"f12",
188:"<",
190:">",
191:"/",
192:"`",
219:"[",
220:"\\",
221:"]",
222:"'"
},l={
"`":"~",
1:"!",
2:"@",
3:"#",
4:"$",
5:"%",
6:"^",
7:"&",
8:"*",
9:"(",
0:")",
"-":"_",
"=":"+",
";":":",
"'":'"',
",":"<",
".":">",
"/":"?",
"\\":"|"
};
e.wx=e.wx||{},e.wx.hotkeyStr=u,e.wx.isHotkey=s;
}(window);;define("common/wx/Tips.js",[],function(e,n){
"use strict";
function t(e,n,t){
$(".JS_TIPS").remove();
var i=$(template.compile('<div class="JS_TIPS page_tips {type}" id="wxTips_'+(new Date).getTime()+'"><div class="inner">{msg}</div></div>')({
type:e||"error",
msg:n
})).appendTo("body").fadeIn();
setTimeout(function(){
o(i),i=null;
},1e3*(t||s.delay));
}
function o(e){
e&&e.length>0&&"function"==typeof e.fadeOut&&e.fadeOut({
complete:function(){
e&&"function"==typeof e.remove&&e.remove(),e=null;
}
});
}
var i=n,s={
errMsg:"系统发生错误，请稍后重试",
sucMsg:"操作成功",
delay:2
};
i.err=function(e,n){
t("error",e||s.errMsg,n);
},i.suc=function(e,n){
t("success",e||s.sucMsg,n);
},i.remove=function(){
$(".JS_TIPS").remove();
};
});;define("common/wx/Cgi.js",["common/qq/mask.js","common/wx/dialog.js","common/wx/Tips.js","common/wx/cgiReport.js","common/lib/MockJax.js","common/qq/events.js"],function(e,o){
"use strict";
function r(e,o,r){
var t,s;
r&&"object"==typeof r?(t=r.done,s=r.fail):t=r,"string"==typeof o&&o.length>0&&(o={
url:o
}),o=$.extend(!0,{},m,{
type:e,
data:{
random:Math.random().toString()
}
},o),o.mock&&(o.mock===!0?o.mock={
responseText:{
ret:0,
data:{},
url:o.url,
param:o.data
}
}:!o.mock||o.mock.responseText||o.mock.response||(o.mock={
responseText:o.mock
}),o.mock.url=o.mock.url||o.url,$.mockjax(o.mock)),o.mask&&($.isPlainObject(o.mask)?n.show(o.mask):n.show());
var c=$.ajax(o);
return c.callback=c.done,c.done(function(e){
try{
var o=t.toString(),r={
uin:wx.uin||"0",
id:"64430",
key:"0",
url:"",
location:encodeURIComponent(window.location.href)||"",
ret:e.base_resp.ret
};
e&&e.base_resp&&0!==e.base_resp.ret&&o.indexOf("handleRet")<0&&o.indexOf(e.base_resp.ret)<0&&((new Image).src="https://badjs.weixinbridge.com/badjs?level=4&uin={uin}&id={id}&msg={msg}&from={url}".format({
uin:r.uin,
url:r.url||r.location,
id:138,
msg:encodeURIComponent("ret="+r.ret+"|idkey="+r.id+":"+r.key)
}));
}catch(n){
console.error(n);
}
t&&t(e);
}).fail(function(e,r,n){
s&&s(r),a.error(r,o,e),i.trigger("xhrError",e,r,n,o);
}).always(function(){
o.mask&&n.hide();
}),c;
}
var n=e("common/qq/mask.js"),t=e("common/wx/dialog.js"),s=e("common/wx/Tips.js"),a=e("common/wx/cgiReport.js");
e("common/lib/MockJax.js");
var i=e("common/qq/events.js")(!0),m={
dataType:"json",
mask:!1,
timeout:45e3,
error:$.noop,
mock:!1,
data:{
token:wx.data.t,
lang:wx.data.lang,
f:"json",
ajax:"1"
}
};
o.get=function(e,o){
return r("get",e,o);
},o.post=function(e,o){
return r("post",e,o);
};
var c={
0:"恭喜你，操作成功！",
"-1":"系统错误，请稍后尝试。",
200002:"参数错误，请核对参数后重试。",
200003:"登录超时，请重新登录。",
200004:"请求页面的域名没有授权。",
200005:"请求方式错误，请确认请求方式后重试。",
200006:"表单名称验证出错，请核对表单名称后重试。",
200007:"对不起，你没有权限访问目标请求。"
};
o.show=function(e,o){
var r=c[e.base_resp.ret]||"系统繁忙，请稍后尝试！";
return 0==e.base_resp.ret?void(o?t.show({
type:"succ",
msg:"系统提示|"+r
}):s.suc(r)):void(o?t.show("系统错误|"+r):s.err(r));
},o.handleRet=function(e,o){
if(e&&e.base_resp&&e.base_resp.ret){
o=$.extend(!0,{},{
uin:wx.uin||"0",
id:"64430",
key:"0",
url:"",
location:encodeURIComponent(window.location.href)||"",
ret:e.base_resp.ret,
showMsg:!0,
msg:"系统繁忙，请稍后尝试"
},o),o.url=encodeURIComponent(o.url);
var r,n=c[o.ret];
n?o.showMsg&&s.err(n):(r=new Image,r.src="/mp/unknow_ret_report?uin={uin}&id={id}&key={key}&url={url}&location={location}&ret={ret}&method=get&action=report".format(o),
o.showMsg&&s.err(o.msg),(new Image).src="/mp/unknow_ret_report?uin={uin}&id=64430&key=126&url={url}&location={location}&ret={ret}&method=get&action=report".format(o),
(new Image).src="https://badjs.weixinbridge.com/badjs?level=4&uin={uin}&id={id}&msg={msg}&from={url}".format({
uin:o.uin,
url:o.url||o.location,
id:138,
msg:encodeURIComponent("ret="+o.ret+"|idkey="+o.id+":"+o.key)
}));
}
};
});;define("common/wx/dialog.js",["biz_common/jquery.ui/jquery.ui.draggable.js","tpl/dialog.html.js"],function(t,i){
"use strict";
function e(t){
var i=this;
"string"==typeof t&&(t={
msg:t
}),t=$.extend(!0,{},o,t),i.id=t.id=[n.uiName,"_",++n.uid].join(""),t.icon=n.iconClass[t.type||"warn"];
var e=[];
e=t.msg.split("|"),t.msg=e[0]?e[1]?{
title:e[0],
text:e[1],
msgClass:""
}:{
title:t.msg,
msgClass:"single_line"
}:{
text:e[1],
msgClass:"single_line"
},$.each(t.buttons,function(t,i){
i.type=n.btTypes[i.type||"primary"];
}),i.opt=t,$(template.compile(n.html)(t)).appendTo("body"),i.dom=$("#"+this.id).parent(),
i.dom.css("margin-left",-1*i.dom.outerWidth()/2).css("margin-top",-1*i.dom.outerHeight()/2),
i.dom.fadeIn(),t.draggable&&i.dom.draggable({
handle:".dialog_hd"
}),function(){
$.each($("#"+i.id+" .js_btn"),function(e,o){
t.buttons[e].click&&$(o).click(function(){
return t.buttons[e].click.apply(i),!1;
});
}),$("#"+i.id+" .pop_closed").click(function(){
return t.close&&"function"==typeof t.close?void(t.close()&&i.remove()):void i.remove();
});
}();
}
t("biz_common/jquery.ui/jquery.ui.draggable.js");
var o={
title:"温馨提示",
type:"warn",
msg:"错误信息|对不起，系统繁忙请稍后尝试。",
buttons:[{
text:"确定",
click:function(t){
this.remove(t);
}
}],
width:720,
height:0,
draggable:!0,
mask:!0,
className:""
},n={
uid:0,
uiName:"wxDialog",
iconClass:{
succ:"success",
err:"error",
warn:"warn",
info:"info",
warn_primary:"warn_primary",
waiting:"waiting"
},
btTypes:{
primary:"btn_primary",
normal:"btn_default",
disabled:"btn_disabled"
}
};
n.html=t("tpl/dialog.html.js"),e.prototype={
hide:function(){
this.opt.mask&&this.dom.next().remove(),this.dom.fadeOut();
},
remove:function(){
this.opt.mask&&this.dom.next().remove(),this.dom.remove();
},
resetPos:function(){
var t=this;
t.dom.css("margin-left",-1*t.dom.outerWidth()/2).css("margin-top",-1*t.dom.outerHeight()/2);
}
},i.show=function(t){
return new e(t);
};
});;define("common/wx/popup.js",["common/wx/widgetBridge.js","biz_common/jquery.ui/jquery.ui.draggable.js","tpl/popup.html.js"],function(t){
"use strict";
t("common/wx/widgetBridge.js"),t("biz_common/jquery.ui/jquery.ui.draggable.js");
var i=t("tpl/popup.html.js"),n=template.compile(i),o={
disabled:"btn_disabled",
primary:"btn_primary",
"default":"btn_default"
};
$.widgetBridge("popup",{
$dialogWrp:null,
options:{
title:"温馨提示",
width:726,
height:null,
template:template.compile,
miniTips:null,
data:null,
buttons:[],
onHide:null,
onShow:null,
onOK:null,
onCancel:null,
mask:!0,
autoShow:!0
},
_create:function(){
var t=this,i=$.extend(!0,{},this.options),e=function(){
t.hide();
};
if(i.miniTips&&i.miniTips.text){
i.miniTips.text=i.miniTips.text.replace(/#type_end#/g,"</span>");
var s="";
"red"==i.miniTips.type?s='<span class="js_mini_tips_type mini_tips warn">':"green"==i.miniTips.type&&(s='<span class="js_mini_tips_type mini_tips success">'),
i.miniTips.text=i.miniTips.text.replace(/#type_start#/g,s);
}
i.buttons&&!$.isArray(i.buttons)&&(i.buttons=[i.buttons]),!i.buttons.length&&i.onOK&&(i.buttons=[{
text:"确定",
type:"primary",
classWrap:"",
isHide:!1,
click:function(){
var t=i.onOK&&i.onOK.call(this);
!t&&e();
}
},{
text:"取消",
isHide:!1,
classWrap:"",
click:function(){
var t=i.onCancel&&i.onCancel.call(this);
!t&&e();
}
}]),$.each(i.buttons,function(t,i){
i.type=o[i.type||"default"],i.isHide=i.isHide===!0?!0:!1,i.classWrap=i.classWrap||"";
});
var a;
if(this.element.is("script[type=text/html]"))a=this.element.html(),this.options.data&&this.options.template&&(a=this.options.template(a)(this.options.data));else{
var l=$("<div></div>").append(this.element.clone()),a=l.html();
if(this.options.data&&this.options.template)try{
a=this.options.template(a)(this.options.data);
}catch(p){
BJ_REPORT.monitor(114,JSON.stringify(this.options.data),90),a="系统错误：非法字符";
}
}
if(i.content=a,this.$dialogWrp=$(n(i)).appendTo("body"),this.$dialogWrp.find(".dialog_bd").children(":first").show(),
i.autoShow||this.$dialogWrp.hide(),this.$dialogWrp.find(".pop_closed").click(i.onClose||e),
this.$dialogWrp.find(".js_btn").each(function(n){
var o=i.buttons[n].click,e=o?function(i){
o.call(t,i);
}:function(){};
$(this).click(e);
}),this.resetPosition(),i.autoShow){
var r=t.options.onShow;
"function"==typeof r&&r.call(t);
}
return this.$dialogWrp.draggable({
handle:".dialog_hd"
}),this.get();
},
show:function(){
var t=this,i=t.options.onShow,n=!0;
this.$dialogWrp.fadeIn(function(){
n&&("function"==typeof i&&i.call(t),n=!1);
});
},
resetPosition:function(){
$(this.$dialogWrp.get(0)).css({
"margin-left":-1*this.$dialogWrp.outerWidth()/2,
"margin-top":-1*this.$dialogWrp.outerHeight()/2
});
},
get:function(){
return this.$dialogWrp.filter(".dialog_wrp");
},
hide:function(){
var t=this,i=t.options.onHide||t.options.close,n=!0;
this.$dialogWrp.fadeOut(function(){
n&&("function"==typeof i&&i.call(t),n=!1);
});
},
remove:function(){
this.destroy(),this.$dialogWrp.remove();
}
});
});;"object"!=typeof JSON&&(JSON={}),function(){
"use strict";
function f(t){
return 10>t?"0"+t:t;
}
function quote(t){
return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){
var e=meta[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})+'"':'"'+t+'"';
}
function str(t,e){
var n,r,o,f,u,i=gap,p=e[t];
switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),"function"==typeof rep&&(p=rep.call(e,t,p)),
typeof p){
case"string":
return quote(p);

case"number":
return isFinite(p)?String(p):"null";

case"boolean":
case"null":
return String(p);

case"object":
if(!p)return"null";
if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){
for(f=p.length,n=0;f>n;n+=1)u[n]=str(n,p)||"null";
return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",
gap=i,o;
}
if(rep&&"object"==typeof rep)for(f=rep.length,n=0;f>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],
o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));else for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o=str(r,p),
o&&u.push(quote(r)+(gap?": ":":")+o));
return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",
gap=i,o;
}
}
"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){
return this.valueOf();
});
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
},rep;
JSON.stringify2=function(t,e,n){
var r;
if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);
if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");
return str("",{
"":t
});
},"function"!=typeof JSON.stringify&&(JSON.stringify=JSON.stringify2),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){
function walk(t,e){
var n,r,o=t[e];
if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r=walk(o,n),
void 0!==r?o[n]=r:delete o[n]);
return reviver.call(t,e,o);
}
var j;
if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){
return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),
"function"==typeof reviver?walk({
"":j
},""):j;
throw new SyntaxError("JSON.parse");
});
}();;