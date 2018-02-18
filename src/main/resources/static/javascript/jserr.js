var BJ_REPORT=function(e){
function n(){
if(t.id!=S.IDS.DEFAULT||t.key!=S.KEY)return{
id:t.id,
key:t.key
};
var e={
_href:location.href,
href:location.href.replace("https://mp.weixin.qq.com/","")
};
e.cgi=e.href.indexOf("?")>-1?e.href.match(/.*?\?/g)[0].slice(0,-1):e.href;
var n=(e.href+"&").match(/action\=(.*?)&/);
n&&n[1]&&(e.action=n[1]);
var i=S.IDS.DEFAULT,r=S.KEY;
return"cgi-bin/masssendpage"==e.cgi?(i=S.IDS.MASS,r=66):"advanced/autoreply"==e.cgi?(i=S.IDS.AUTO_REPLY,
r=70):"advanced/selfmenu"==e.cgi?(i=S.IDS.SELF_MENU,r=68):"misc/appmsgcomment"==e.cgi?(i=S.IDS.COMMENT,
r=71):"cgi-bin/newoperatevote"==e.cgi?(i=S.IDS.VOTE,r=72):"misc/kf"==e.cgi?(i=S.IDS.KF,
r=73):"merchant/rewardstat"==e.cgi||"merchant/reward"==e.cgi?(i=S.IDS.REWARD,r=74):"cgi-bin/appmsgcopyright"==e.cgi||"cgi-bin/imgcopyright"==e.cgi||"cgi-bin/ori_video"==e.cgi?(i=S.IDS.COPYRIGHT,
r=75):"cgi-bin/message"==e.cgi?(i=S.IDS.MSG,r=76):"cgi-bin/user_tag"==e.cgi?(i=S.IDS.USER,
r=77):"cgi-bin/appmsg"==e.cgi&&("list_card"==e.action||"list"==e.action)||"cgi-bin/filepage"==e.cgi?(i=S.IDS.LIST,
r=78):"cgi-bin/operate_voice"==e.cgi?(i=S.IDS.AUDIO,r=79):"cgi-bin/appmsg"==e.cgi&&"video_edit"==e.action?(i=S.IDS.VEDIO,
r=80):"cgi-bin/appmsg"==e.cgi&&"edit"==e.action?(i=S.IDS.APPMSG,r=62):"cgi-bin/frame"==e.cgi&&/t=ad_system/.test(e.href)||/merchant\/ad_/.test(e.cgi)?(i=S.IDS.AD,
r=81):"misc/useranalysis"==e.cgi||"misc/appmsganalysis"==e.cgi||"misc/menuanalysis"==e.cgi||"misc/messageanalysis"==e.cgi||"misc/interfaceanalysis"==e.cgi?(i=S.IDS.ANALYSIS,
r=82):"cgi-bin/settingpage"==e.cgi||"acct/contractorinfo"==e.cgi?(i=S.IDS.SETTING,
r=83):"merchant/store"==e.cgi||"merchant/order"==e.cgi||"acct/wxverify"==e.cgi?(i=S.IDS.VERIFY,
r=84):"cgi-bin/safecenterstatus"==e.cgi?(i=S.IDS.SAFE,r=85):"cgi-bin/illegalrecord"==e.cgi?(i=S.IDS.ILLEGAL,
r=86):"advanced/advanced"==e.cgi||"advanced/diagram"==e.cgi||"cgi-bin/frame"==e.cgi&&/t=advanced\/dev_tools_frame/.test(e.href)?(i=S.IDS.ADVANCED,
r=87):"acct/contractorpage"==e.cgi?(i=S.IDS.REGISTER,r=88):"cgi-bin/readtemplate"==e.cgi?(i=S.IDS.TMPL,
r=89):"advanced/tmplmsg"==e.cgi?(i=S.IDS.TMPLMSG,r=90):"merchant/entityshop"==e.cgi||"merchant/newentityshop"==e.cgi?(i=S.IDS.SHOP,
r=92):"merchant/goods"==e.cgi||"merchant/goodsgroup"==e.cgi||"merchant/shelf"==e.cgi||"merchant/goodsimage"==e.cgi||"merchant/delivery"==e.cgi||"merchant/productorder"==e.cgi||"merchant/merchantstat"==e.cgi||"merchant/introduction"==e.cgi||"merchant/merchantpush"==e.cgi||"merchant/merchantentrance"==e.cgi?(i=S.IDS.MERCHANT,
r=104):"cgi-bin/home"==e.cgi?(i=S.IDS.HOME,r=93):"merchant/cardapply"==e.cgi&&"listapply"==e.action?r=95:e.cgi.indexOf("beacon")>-1&&(i=S.IDS.IBEACON,
r=96),wx&&"en_US"==wx.lang&&(i=125,r=125),t.id=i,t.key=r,{
id:i,
key:r
};
}
function i(e,n){
return e.indexOf("TypeError: #<KeyboardEvent> is not a function")>-1||e.indexOf("TypeError: #<MouseEvent> is not a function")>-1?!1:e.indexOf("ReferenceError: LIST_INFO is not defined")>-1?!1:e.indexOf("TypeError: e is not a constructor")>-1?!1:location&&/token=\d+/.test(location.href)&&"0"==wx.uin?!1:/Mozilla\/5.0.*ipad.*BaiduHD/i.test(n)&&e.indexOf("ReferenceError: Can't find variable: bds")>-1?!1:/Linux; U; Android.*letv/i.test(n)&&e.indexOf("ReferenceError: diableNightMode is not defined")>-1?!1:!0;
}
if(e.BJ_REPORT)return e.BJ_REPORT;
var r=[],t={
uin:0,
url:"https://badjs.weixinbridge.com/badjs",
combo:0,
level:4,
ignore:[],
random:1,
delay:0,
submit:null
},c=function(e,n){
return Object.prototype.toString.call(e)==="[object "+(n||"Object")+"]";
},o=function(e){
var n=typeof e;
return"object"===n&&!!e;
},a=function(e){
return null===e?!0:c(e,"Number")?!1:!e;
},g=e.onerror;
e.onerror=function(n,r,t,o,a){
var s=n;
a&&a.stack&&(s=d(a)),c(s,"Event")&&(s+=s.type?"--"+s.type+"--"+(s.target?s.target.tagName+"::"+s.target.src:""):""),
r&&r.length>0&&0==/^https\:\/\/(mp\.weixin\.qq\.com|res\.wx\.qq\.com)/.test(r),(1!=t||1!=o&&86!=o||-1!=n.indexOf("eval"))&&0!=i(s,window.navigator.userAgent)&&(S.push({
msg:s+"|onerror",
target:r,
rowNum:t,
colNum:o
}),I(),g&&g.apply(e,arguments));
};
var s=function(e){
try{
if(e.stack){
var n=e.stack.match("https?://[^\n]+");
n=n?n[0]:"";
var r=n.match(":(\\d+):(\\d+)");
r||(r=[0,0,0]);
var t=d(e).replace(/https?\:\/\/.*?\.js\:/g,"");
return 0==i(t,window.navigator.userAgent)?null:{
msg:t,
rowNum:r[1],
colNum:r[2],
target:n.replace(r[0],"")
};
}
return e;
}catch(c){
return e;
}
},d=function(e){
var n=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),i=e.toString();
return n.indexOf(i)<0&&(n=i+"@"+n),n;
},m=function(e,n){
var i=[],r=[],c=[];
if(o(e)){
e.level=e.level||t.level;
for(var g in e){
var s=e[g];
if(!a(s)){
if(o(s))try{
s=JSON.stringify(s);
}catch(d){
s="[BJ_REPORT detect value stringify error] "+d.toString();
}
c.push(g+":"+s),i.push(g+"="+encodeURIComponent(s)),r.push(g+"["+n+"]="+encodeURIComponent(s));
}
}
}
return[r.join("&"),c.join(","),i.join("&")];
},u=[],l=[],f=function(e){
var n=e.replace(/\&_t=\d*/,"");
for(var i in l)if(l[i]==n)return;
if(l.push(n),t.submit)t.submit(e);else{
var r=new Image;
u.push(r),r.src=e;
}
var c="error";
if(c=e.match(/msg=(.*?)&/),c&&c[1]&&(c=c[1]),wx&&wx.uin&&(c+=encodeURIComponent("|uin|"+wx.uin)),
t.key){
var r=new Image;
r.src="https://mp.weixin.qq.com/misc/jslog?id="+t.key+"&content="+c+"&level=error";
}
var o=new Image;
o.src="https://mp.weixin.qq.com/misc/jslog?id=65&content="+c+"&level=error";
},p=[],h=0,I=function(e){
if(t.report){
for(;r.length;){
var n=!1,i=r.shift(),o=m(i,p.length);
if(c(t.ignore,"Array"))for(var a=0,g=t.ignore.length;g>a;a++){
var s=t.ignore[a];
if(c(s,"RegExp")&&s.test(o[1])||c(s,"Function")&&s(i,o[1])){
n=!0;
break;
}
}
n||(t.combo?p.push(o[0]):f(t.report+o[2]+"&_t="+ +new Date),t.onReport&&t.onReport(t.id,i));
}
var d=p.length;
if(d){
var u=function(){
clearTimeout(h),console.log("comboReport"+p.join("&")),f(t.report+p.join("&")+"&count="+d+"&_t="+ +new Date),
h=0,p=[];
};
e?u():h||(h=setTimeout(u,t.delay,!0),console.log("_config.delay"+t.delay));
}
}
},S={
KEY:67,
IDS:{
DEFAULT:"5",
MASS:"6",
SELF_MENU:"7",
LINK:"11",
AUTO_REPLY:"12",
COMMENT:"13",
VOTE:"14",
KF:"15",
REWARD:"16",
COPYRIGHT:"17",
MSG:"18",
USER:"19",
LIST:"20",
AUDIO:"21",
VEDIO:"22",
APPMSG:"4",
AD:"23",
ANALYSIS:"24",
SETTING:"25",
VERIFY:"26",
SAFE:"27",
ILLEGAL:"28",
ADVANCED:"29",
REGISTER:"30",
TMPL:"31",
IE:"32",
CARD:"33",
SHOP:"34",
TMPLMSG:"35",
HOME:"36",
Android:"37",
IOS:"38",
IBEACON:"72",
MERCHANT:"82"
},
destory:function(){
I=function(){};
},
push:function(e,n){
if(Math.random()>=t.random)return S;
var i;
if(o(e)){
if(i=s(e),n&&(i.msg+="["+n+"]"),i){
if(i.target&&0==/^https?\:\/\/(mp\.weixin\.qq\.com|res\.wx\.qq\.com)/.test(i.target))return S;
r.push(i);
}
}else n&&(e+="["+n+"]"),r.push({
msg:e
});
return I(),S;
},
report:function(e,n){
return e&&S.push(e,n),S;
},
info:function(e){
return e?(o(e)?e.level=2:e={
msg:e,
level:2
},S.push(e),S):S;
},
debug:function(e){
return e?(o(e)?e.level=1:e={
msg:e,
level:1
},S.push(e),S):S;
},
init:function(e){
for(var n in e)t[n]=e[n];
var i=parseInt(t.id,10),n=parseInt(t.key,10);
return window.navigator.userAgent&&/;\s*MSIE\s*[8|7]\.0b?;/i.test(window.navigator.userAgent)?(i=S.IDS.IE,
n=0):window.navigator.userAgent.indexOf("Android")>-1||window.navigator.userAgent.indexOf("Adr")>-1?(i=S.IDS.Android,
n=0):window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(i=S.IDS.IOS,
n=0),i&&n&&(t.report=t.url+"?id="+i+"&key="+n+"&uin="+(wx&&wx.uin)+"&from="+encodeURIComponent(location.href)+"&"),
S;
},
monitor:function(e,n,i){
if(n=n||"badjs|monitor",e){
var r=new Image;
r.src="https://mp.weixin.qq.com/misc/jslog?id="+e+"&content="+encodeURIComponent(n)+"&level=error";
}
if(i){
var c=new Image;
c.src=t.url+"?id="+i+"&msg="+encodeURIComponent(n)+"&uin="+(wx&&wx.uin)+"&from="+encodeURIComponent(location.href)+"&level=4";
}
},
getConfig:function(){
return t;
},
__onerror__:e.onerror
};
return"undefined"!=typeof console&&console.error&&setTimeout(function(){
var e=((location.hash||"").match(/([#&])BJ_ERROR=([^&$]+)/)||[])[2];
e&&console.error("BJ_ERROR",decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g,"$1\n"));
},0,!0),t.id=S.IDS.DEFAULT,t.key=S.KEY,n(),S.init(),S;
}(window);