define("common/wx/pagebar.js",["widget/pagination.css","tpl/pagebar.html.js","common/qq/Class.js","common/wx/Tips.js"],function(t,e){
"use strict";
var i,n,s,a=(t("widget/pagination.css"),t("tpl/pagebar.html.js")),r=t("common/qq/Class.js"),h=t("common/wx/Tips.js");
s=template.compile(a),i=e,n={
first:"首页",
last:"末页",
prev:"上页",
next:"下页",
startPage:1,
initShowPage:1,
perPage:10,
startRange:1,
midRange:3,
endRange:1,
totalItemsNum:0,
container:"",
callback:null,
isNavHide:!1,
isSimple:!0
};
var o=function(t,e,i){
var n;
return n=t+(e-1),n=n>i?i:n;
},g=function(t,e,i){
var n;
return n=i%2===0?e-(i/2-1):e-(i-1)/2,n=t>n?t:n;
},u=function(t,e,i){
var n;
return n=e%2===0?parseInt(t)+e/2:parseInt(t)+(e-1)/2,n=n>i?i:n;
},c=function(t,e,i){
var n;
return n=e-(i-1),n=t>n?t:n;
},l=function(t,e){
if(e[t]&&isNaN(e[t]))throw new Error("Invalid arguments: "+t+" should be a number");
},p=function(t){
if(l("perPage",t),l("totalItemsNum",t),l("startPage",t),l("startRange",t),l("midRange",t),
l("endRange",t),l("initShowPage",t),void 0!==t.callback&&null!==t.callback&&!$.isFunction(t.callback))throw new Error("Invalid arguments: callback should be a function");
},d=function(t,e,i){
var n=t.container.find(".page_"+i);
if("string"==typeof e){
var s=$(e);
0!==s.length&&(n=s);
}else{
if(e!==!1)throw new Error("Invalid Paramter: '"+i+"' should be a string or false");
n.hide();
}
return n;
},P=r.declare({
init:function(t){
if(t.totalItemsNum){
var e;
if(p(t),e=$.extend(!0,{},n,t),this._init(e),e.initShowPage<e.startPage)throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if(e.initShowPage>e.endPage)throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
}
},
_init:function(t){
this.currentPage=t.initShowPage,this._isNextButtonShow=!0,this._isPrevButtonShow=!0,
this.uid="wxPagebar_"+ +new Date,this.initEventCenter(),this.optionsForTemplate={},
$.extend(this,t),this.container=$(t.container),this.optionsForTemplate.isSimple=t.isSimple,
this.optionsForTemplate.firstButtonText=0===$(t.first).length?t.first:n.first,this.optionsForTemplate.lastButtonText=0===$(t.last).length?t.last:n.last,
this.optionsForTemplate.nextButtonText=0===$(t.next).length?t.next:n.next,this.optionsForTemplate.prevButtonText=0===$(t.prev).length?t.prev:n.prev,
this.optionsForTemplate.isNavHide=t.isNavHide,this.generatePages(parseInt(this.totalItemsNum)),
this.gapForStartRange=this.container.find(".gap_prev"),this.gapForEndRange=this.container.find(".gap_next"),
this.firstButton=d(this,t.first,"first"),this.lastButton=d(this,t.last,"last"),this.prevButton=d(this,t.prev,"prev"),
this.nextButton=d(this,t.next,"next"),this.bindEvent();
},
initEventCenter:function(){
this.eventCenter={
eventList:[],
bind:function(t,e){
this.eventList[t]||(this.eventList[t]=[]),this.eventList[t].push(e);
},
trigger:function(t){
var e,i;
this.eventList[t]||(this.eventList[t]=[]),e=this.eventList[t];
for(var n=0;n<e.length;n++)if(i=Array.prototype.slice.call(arguments,1),e[n].apply(this,i)===!1)return!1;
},
unbind:function(t,e){
if(!this.eventList)throw new Error("The eventList was undefined");
if(!this.eventList[t])throw new Error("The event type "+t+" was not found");
if(void 0===e)this.eventList[t]=[];else for(var i=this.eventList[t],n=i.length,s=0;n>s;s++)if(i[s]===e){
i.splice(s,1);
break;
}
}
};
},
generatePages:function(t){
var e,i,n,a,r,h;
for(this.pageNum=Math.ceil(t/this.perPage),this.endPage=this.startPage+this.pageNum-1,
this.gapForStartRange=null,this.gapForEndRange=null,this.optionsForTemplate.startRange=[],
this.optionsForTemplate.midRange=[],this.optionsForTemplate.endRange=[],i=o(this.startPage,this.startRange,this.endPage),
n=g(this.startPage,this.currentPage,this.midRange),a=u(this.currentPage,this.midRange,this.endPage),
r=c(this.startPage,this.endPage,this.endRange),i>=r&&(r=i+1),e=this.startPage;i>=e;e+=1)this.optionsForTemplate.startRange.push(e);
for(var l=0,e=n;l<this.midRange;l+=1,e+=1)this.optionsForTemplate.midRange.push(e);
for(e=r;e<=this.endPage;e+=1)this.optionsForTemplate.endRange.push(e);
this.optionsForTemplate.endPage=this.endPage,this.optionsForTemplate.initShowPage=this.initShowPage,
h=s(this.optionsForTemplate),this.container.html(h),1==this.pageNum?this.container.hide():this.container.show(),
this.pages=this.container.find(".page_nav"),this.midPages=this.container.find(".js_mid"),
this.labels=this.container.find(".page_num label"),this.container.find(".pagination").attr("id",this.uid);
},
paginate:function(){
var t,e,i,n,s,a,r,h,l,p;
if(this.isSimple===!0)for(var d=0,P=this.labels.length;P>d;d++)d%2===0&&$(this.labels[d]).html(this.currentPage);else{
e=o(this.startPage,this.startRange,this.endPage),a=g(this.startPage,this.currentPage,this.midRange),
r=u(this.currentPage,this.midRange,this.endPage),h=c(this.startPage,this.endPage,this.endRange),
e>=h&&(h=e+1),e>=a&&(a=e+1),r>=h&&(r=h-1),this.pages.show(),this.pages.removeClass("current"),
p=parseInt(this.midPages.length/this.midRange);
for(var d=0,P=p;P>d;d++){
for(s=0,t=a;r>=t;t+=1)n=this.midRange*d+(t-a),l=$(this.midPages[n]),l.html(t),s+=1,
t==this.currentPage&&l.addClass("current");
for(n=this.midRange*d+s;s<this.midRange;s+=1)l=$(this.midPages[n]),l.hide(),l.removeClass("current"),
n+=1;
}
for(var d=0,P=this.pages.length;P>=d;d++)i=$(this.pages[d]),t=parseInt(i.html()),
t===parseInt(this.currentPage)&&i.addClass("current");
if(a>e+1?this.gapForStartRange.show():this.gapForStartRange.hide(),h>r+1?this.gapForEndRange.show():this.gapForEndRange.hide(),
this.isNavHide){
for(var d=this.startPage;d<=this.endPage;d+=1)this.pages.hide();
this.gapForStartRange.hide(),this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy:function(){
this.container.off("click","#"+this.uid+" a.page_nav"),this.container.off("click","#"+this.uid+" a.page_go"),
this.container.off("keydown","#"+this.uid+" .goto_area input"),this.nextButton.off("click"),
this.prevButton.off("click"),this.firstButton.off("click"),this.lastButton.off("click");
},
bindEvent:function(){
this.container.on("click","#"+this.uid+" a.page_nav",this.proxy(function(t){
var e=$(t.target);
return e.hasClass("current")?!1:(this.clickPage(parseInt(e.html())),!1);
},this)),this.nextButton.on("click",this.proxy(function(t){
$(t.target);
return this.nextPage(),!1;
},this)),this.prevButton.on("click",this.proxy(function(t){
$(t.target);
return this.prevPage(),!1;
},this)),this.firstButton.on("click",this.proxy(function(t){
$(t.target);
return this.goFirstPage(),!1;
},this)),this.lastButton.on("click",this.proxy(function(t){
$(t.target);
return this.goLastPage(),!1;
},this)),this.container.on("click","#"+this.uid+" a.page_go",this.proxy(function(t){
var e=$(t.target).prev();
return this.goPage(e.val()),!1;
},this)),this.container.on("keydown","#"+this.uid+" .goto_area input",this.proxy(function(t){
return wx.isHotkey(t,"enter")?(this.container.find("a.page_go").click(),!1):void 0;
},this));
},
on:function(t,e){
this.eventCenter.bind(t,this.proxy(e,this));
},
callbackFunc:function(t){
var e={
currentPage:this.currentPage,
perPage:this.perPage,
count:this.pageNum
};
return $.isFunction(this.callback)&&this.callback(e)===!1?!1:this.eventCenter.trigger(t,e)===!1?!1:void this.paginate();
},
proxy:function(t,e){
return function(){
var i=Array.prototype.slice.call(arguments,0);
return t.apply(e,i);
};
},
nextPage:function(){
this.currentPage!==this.endPage&&(this.currentPage++,this.callbackFunc("next")===!1&&this.currentPage--);
},
prevPage:function(){
this.currentPage!==this.startPage&&(this.currentPage--,this.callbackFunc("prev")===!1&&this.currentPage++);
},
goFirstPage:function(){
var t=this.currentPage;
this.currentPage=this.startPage,this.callbackFunc("goFirst")===!1&&(this.currentPage=t);
},
goLastPage:function(){
var t=this.currentPage;
this.currentPage=this.endPage,this.callbackFunc("goLast")===!1&&(this.currentPage=t);
},
checkButtonShown:function(){
+this.currentPage===+this.startPage?this.hidePrevButton():this.showPrevButton(),
+this.currentPage===+this.endPage?this.hideNextButton():this.showNextButton();
},
goPage:function(t){
var e=this.currentPage,t=Math.round(t);
return t===this.currentPage?!1:isNaN(t)?(h.err("请输入正确的页码"),!1):""===t?!1:t<this.startPage?(h.err("请输入正确的页码"),
!1):t>this.endPage?(h.err("请输入正确的页码"),!1):(this.currentPage=t,void(this.callbackFunc("go")===!1&&(this.currentPage=e)));
},
clickPage:function(t){
var e=this.currentPage;
isNaN(t)&&(t=this.startPage),this.currentPage=t<this.startPage?this.startPage:t>this.endPage?this.endPage:t,
this.callbackFunc("click")===!1&&(this.currentPage=e);
},
showNextButton:function(){
this.nextButton&&this._isNextButtonShow===!1&&(this.nextButton.show(),this._isNextButtonShow=!0);
},
showPrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!1&&(this.prevButton.show(),this._isPrevButtonShow=!0);
},
hideNextButton:function(){
this.nextButton&&this._isNextButtonShow===!0&&(this.nextButton.hide(),this._isNextButtonShow=!1);
},
hidePrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!0&&(this.prevButton.hide(),this._isPrevButtonShow=!1);
}
});
return e=P;
});define("user/index_tag.js",["common/wx/dialog.js","common/wx/Tips.js","common/wx/pagebar.js","common/wx/remark.js","common/wx/top.js","common/wx/tooltips.js","common/wx/RichBuddy_tag.js","user/user_cgi_tag.js","user/group_cgi_tag.js","biz_web/ui/dropdown.js","common/qq/events.js","biz_web/ui/input/lentips.js","common/qq/emoji.js","common/wx/popover.js","tpl/user/grouplist_tag.html.js","tpl/user/userlist_tag.html.js","biz_web/ui/checkbox.js","common/wx/Cgi.js","common/wx/inputCounter.js","common/wx/searchInput.js"],function(t){
"use strict";
template.isEscape=!1;
var e=wx.T,n=template.render,i=(t("common/wx/dialog.js"),t("common/wx/Tips.js")),o=t("common/wx/pagebar.js"),a=(t("common/wx/remark.js"),
t("common/wx/top.js")),s=(t("common/wx/tooltips.js"),t("common/wx/RichBuddy_tag.js")),r=t("user/user_cgi_tag.js"),c=t("user/group_cgi_tag.js"),u=(t("biz_web/ui/dropdown.js"),
t("common/qq/events.js")),d=(t("biz_web/ui/input/lentips.js"),t("common/qq/emoji.js"),
t("common/wx/popover.js")),l=t("tpl/user/grouplist_tag.html.js"),_=t("tpl/user/userlist_tag.html.js"),p=t("biz_web/ui/checkbox.js"),g=t("common/wx/Cgi.js"),h=t("common/wx/inputCounter.js"),m=!1,f=20,j=5,v=function(v){
function k(t){
for(var e=0;e<z.length;e++)if(z[e].id==t)return z[e];
}
function b(t){
for(var e=0;e<S.length;e++)if(S[e].id==t)return'<a href="javascript:;" class="js_user_tags user_tag" data-id="%s">%s</a>'.sprintf(t,S[e].name);
}
function w(t){
var e,n=0;
if(t.data.uid){
e=Object.isObject(t.data.uid)?t.data.uid.values():[t.data.uid];
var i=t.data.$dom;
if(i){
"string"==typeof i&&(i=$(i));
var o=function(t){
var e=$(t.target);
"checked"===e.attr("checked")?(l.find(".js_tag_putOn_maxTips").hide(),n--,m.find('input[type="checkbox"]').checkbox()):n===f?(l.find(".js_tag_putOn_maxTips").text("最多只能选择20个标签").show(),
l.find(".jsPopOverContent").scrollTop(1e3),t.preventDefault(),$(t.target).removeAttr("checked").parent().removeClass("selected")):(l.find(".js_tag_putOn_maxTips").hide(),
n++);
},a=function(){
for(var t=[],i=z,a=0;a<S.length;a++)S[a].id>0&&t.push(S[a]);
m.empty();
for(var a=0;a<t.length;a++)t[a].name&&t[a].name.length>0&&1!=t[a].id&&new p({
container:m,
label:t[a].name,
name:t[a].id,
type:"checkbox"
});
m.find('input[type="checkbox"]').each(function(){
$(this).val($(this).attr("name"));
}).on("click",o).checkbox();
var s=[];
if(1===e.length){
for(var a=0;a<i.length;a++)i[a].id==e[0]&&(s=i[a].group_id);
for(var a=0;a<s.length;a++)m.find('input[name="'+s[a]+'"]').trigger("click");
n=s.length;
}else{
s=k(e[0]).group_id.slice();
for(var r=s.length,a=1;a<e.length;a++){
for(var c=k(e[a]).group_id,u=0;u<s.length;u++)-1===c.indexOf(s[u])&&(s[u]=void 0);
c.length>r&&(r=c.length);
}
for(var a=0;a<s.length;a++)void 0!==s[a]&&m.find('input[name="'+s[a]+'"]').trigger("click").checkbox().setall(!1);
n=r;
}
},s=function(n){
var i=wx.renderPage,o=m.find('input[type="checkbox"]').checkbox(),a=o.values();
if(1===e.length){
for(var s=k(e[0]).group_id,c=[],d=[],_=0;_<s.length;_++)s[_]=s[_].toString();
for(var _=0;_<s.length;_++)-1===a.indexOf(s[_])&&c.push(s[_]);
for(var _=0;_<a.length;_++)-1===s.indexOf(a[_])&&d.push(a[_]);
if(d.length>j||c.length>j)return l.find(".js_tag_putOn_maxTips").text("每次同时更改标签数量不能超过5个").show(),
l.find(".jsPopOverContent").scrollTop(1e3),void n.btn(!0);
if(o.setall(!1),0===c.length){
if(0===d.length)return void u.remove();
r.add_tag(e[0],d.join("|"),t.data.scene,i,u);
}else 0===d.length?r.del_tag(e[0],c.join("|"),i,u):r.del_tag(e[0],c.join("|"),function(){
r.add_tag(e[0],d.join("|"),t.data.scene,i);
},u);
}else{
if(a=[],m.find('input[type="checkbox"]').each(function(){
return"checked"!==$(this).attr("checked")||$(this).attr("disabled")?void 0:(a.push($(this).val()),
void n.btn(!0));
}),a.length>j)return l.find(".js_tag_putOn_maxTips").text("每次同时更改标签数量不能超过5个").show(),
l.find(".jsPopOverContent").scrollTop(1e3),void n.btn(!0);
if(0===a.length)return void u.remove();
o.setall(!1),r.add_tag(e.join("|"),a.join("|"),t.data.scene,i,u);
}
},u=new d({
dom:i,
className:"tag_popover",
content:$("#js_tag_putOn_tpl").html(),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
l.find(".btn_primary").btn(!1),_.off("click"),s(l.find(".btn_primary"));
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
},
addCls:"js_putOn"
}),l=u.$pop,_=l.find(".js_tag_putOn_add_btn"),g=l.find(".js_tag_input_wrap"),m=l.find(".js_tag_putOn_tags"),v=l.find(".js_tag_putOn_add_input"),b=l.find(".js_tag_putOn_add_a"),w=l.find(".js_tag_putOn_cancel_a"),x=l.find(".js_tag_putOn_tips"),y=(a(m),
new h(v,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
}));
l.find(".js_counter").hide(),_.on("click",function(){
$(this).hide(),g.show(),v.enable().val(""),x.hide(),v.focus().trigger("keyup");
}).show(),v.on("keyup",function(){
y.getCount()>6?x.text("不得超过6个汉字或12个字符").show():y.getCount()>0&&x.hide();
}),b.click(function(){
var t=v.val();
return v.val()?y.getCount()>6?void x.text("不得超过6个汉字或12个字符").show():(v.disable(),
void c.add(t,function(e){
g.hide(),_.show();
var i=new p({
container:m,
label:C(t),
name:e.groupid,
type:"checkbox"
});
i.$input.val(e.add_groupid).on("click",o),f>n&&i.$input.trigger("click"),S.push({
cnt:0,
create_time:-1,
id:e.add_groupid,
name:C(t)
}),O(),I();
},u,!0)):void x.text("请输入标签名称").show();
}),w.click(function(){
_.show(),g.hide(),x.hide();
});
}
}
}
function x(t){
z=[];
for(var e=t.user_list?t.user_list.user_info_list:[],n=0;n<e.length;n++)z.push({
id:e[n].user_openid,
nick_name:e[n].user_name,
remark_name:e[n].user_remark?e[n].user_remark.html():"",
create_time:e[n].user_create_time,
group_id:e[n].user_group_id,
user_is_fans:e[n].user_is_fans
});
}
function y(t){
S=[];
for(var e=t.group_info?t.group_info.group_info_list:[],n=0;n<e.length;n++)S.push({
name:e[n].group_name.html(),
cnt:e[n].group_cnt,
create_time:e[n].group_create_time,
id:e[n].group_id
});
}
function C(t){
return $("<div></div>").text(t).html();
}
function B(){
for(var t=0;t<S.length;t++)if(S[t].id==K||S[t].id*K==-1)return void(A=S[t]);
A={
id:-2,
name:"全部用户",
cnt:v.total_user_num
};
}
function P(){
!function(){
var t=function(t,e){
var n=t,o=n.val().trim(),a=e.$pop.find(".jsPopoverBt").eq(0);
if(!a.attr("disabled")){
if(a.btn(!1),""===o||o.bytes()>12)return i.err("标签名称为1~6字符"),n.focus(),a.btn(!0),
!1;
c.add(o,function(t){
S.push({
cnt:0,
create_time:-1,
id:t.add_groupid,
name:C(o)
}),O(),I();
},e);
}
};
$("#js_tag_add_btn").off().on("click",function(){
var e=new d({
dom:this,
content:n("js_tag_edit_tpl",{
name:"",
tagid:""
}),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
return i.val()?void t(this.$pop.find(".js_name"),this):void o.text("请输入标签名称").show();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
}
}),i=e.$pop.find(".js_name"),o=e.$pop.find(".js_tips"),a=new h(i,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
});
e.$pop.find(".js_counter").hide(),i.on("keyup",function(){
a.getCount()>6?o.text("不得超过6个汉字或12个字符").show():a.getCount()>0&&o.hide();
}),e.$pop.find(".js_name").keypress(function(n){
return wx.isHotkey(n,"enter")?i.val()?a.getCount()>6?void o.text("不得超过6个汉字或12个字符").show():void t(e.$pop.find(".js_name"),e):void o.text("请输入标签名称").show():void 0;
}),e.$pop.find(".js_name").focus();
});
}(),function(){
var t=function(t,e){
var n=t,o=K,a=n.val().trim(),s=e.$pop.find(".jsPopoverBt").eq(0);
if(!s.attr("disabled")){
if(s.btn(!1),""===a||a.bytes()>12)return i.err("不得超过6个汉字或12个字符"),n.focus(),s.btn(!0),
!1;
c.rename(o,a,function(){
for(var t=0;t<S.length;t++)S[t].id==o&&(S[t].name=C(a));
c.get_user({
groupid:K
},function(t){
x(t),y(t),G();
});
},e);
}
};
$(".js_tag_edit_btn").on("click",function(){
var e=K;
$(".popover").hide();
var i=new d({
dom:this,
content:n("js_tag_edit_tpl",{
name:A.name,
tagid:e
}),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
!o.val()||s.getCount()>6||t(this.$pop.find(".js_name"),this);
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}],
onHide:function(){
this.remove();
}
}),o=i.$pop.find(".js_name"),a=i.$pop.find(".js_tips"),s=new h(o,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
});
i.$pop.find(".js_counter").hide(),o.on("keyup",function(){
s.getCount()>6?a.text("不得超过6个汉字或12个字符").show():s.getCount()>0&&a.hide();
}),i.$pop.find(".js_name").keypress(function(e){
return wx.isHotkey(e,"enter")?o.val()?s.getCount()>6?void a.text("不得超过6个汉字或12个字符").show():void t($(this),i):void a.text("请输入标签名称").show():void 0;
}),i.$pop.find(".js_name").focus();
});
}(),function(){
$(".js_tag_del_btn").on("click",function(){
var t=($(this),K);
$(".popover").hide(),new d({
dom:this,
content:$("#js_tag_del_tpl").html(),
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
{
var e=this;
e.$pop.find(".jsPopoverBt").eq(0).btn(!1);
}
c.del(t,function(){
window.location.reload();
},e);
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
});
}();
}
function O(){
H=[];
for(var t,e=0;e<S.length;e++)S[e]&&("屏蔽组"==S[e].name&&(S[e].name="黑名单"),"星标组"==S[e].name&&(S[e].name="星标用户"),
1==S[e].id||-1==S[e].id?(D={
num:S[e].cnt
},S[e].id=-1):S[e].id>0&&(2==S[e].id?t=S[e]:H.push(S[e])));
H=[t].concat(H.sort(function(t,e){
return t.name.localeCompare(e.name);
}));
for(var e=0;e<z.length;e++){
z[e].img=wx.url("/misc/getheadimg?fakeid="+z[e].id),z[e].link=wx.url("/cgi-bin/singlesendpage?t=message/send&action=index&tofakeid="+z[e].id),
z[e].nick_name=z[e].nick_name.emoji(),z[e].tags="",z[e].tags_short="";
for(var n=0;n<z[e].group_id.length;n++)z[e].tags+=b(z[e].group_id[n]),3>n&&(z[e].tags_short+=b(z[e].group_id[n])),
n!=z[e].group_id.length-1,(1==z[e].group_id[n]||-1==z[e].group_id[n])&&(z[e].is_black=!0);
}
}
function I(){
var t=E;
Number(t)<0&&(t=0);
var n=K;
-2==n?n=-1:-1==n&&(n=1);
var i=!1;
A.cnt>=20&&20==z.length?i=!0:A.cnt==z.length&&(i=!0),i||g.post({
mask:!1,
url:"/cgi-bin/fixgroupcnt",
data:{
groupid:n
}
},function(){}),$("#groupsList").html(e(l,{
groupsList:H,
allUser:{
num:t
},
blackList:D,
groupId:K
})),$(".js_group_link").unbind("click").click(function(){
K=$(this).data("id"),c.get_user({
groupid:K,
is_first:1
},function(t){
x(t),y(t),G(),"-1"==K&&L(t);
});
});
}
function L(t){
$("#searchBar").hide(),$("#js_groupName").html("黑名单<span class='user_num_tips mini_tips weak_text'>("+t.total_black_list_num+")</span>"),
$(".inner_side").hide(),$("#js_tag_add_btn").hide(),$(".js_tags").hide();
}
function T(){
var t=new a("#topTab",a.DATA.user);
if(t.selected(0),$("#js_groupName").html(A.name),K>=3?$(".js_groupCommand").show():$(".js_groupCommand").hide(),
-1==K?($(".js_tag_toBanList_btn").text("移出黑名单"),$(".js_tag_putOn_btn").hide()):($(".js_tag_toBanList_btn").text("加入黑名单"),
$(".js_tag_putOn_btn").show()),I(),0===z.length)$(".js_pageNavigator").hide(),$(".user_list > table").hide(),
$("#reloadTop").parent().hasClass("selected")?$(".no_result").html('无结果,请重新搜索或查看<a href="javascript:;" id="js_reload">全部用户</a>'):$(".no_result").text("暂无黑名单用户"),
F.show(),$("#js_reload").click(function(){
window.location.reload();
});else{
F.hide(),$(".user_list > table").show(),$("#userGroups").html(e(_,{
friendsList:z,
isBlack:$("#blackTop").parent().hasClass("selected")?1:0
})),$("#userGroups .js_tags_btn").each(function(){
$(this).on("click",{
uid:$(this).data("id"),
$dom:$(this),
scene:1
},w);
});
var n=new s;
if($(".js_msgSenderAvatar").mouseover(function(){
var t=$(this),e=t.data("id"),i=t.offset(),o=t.width();
n.show({
id:e,
autoRefresh:!0,
position:{
left:i.left+o+2,
top:i.top
},
isUserIndex:!0
});
}).mouseout(function(){
n.hide();
}),A.cnt>20)if(J){
new o({
container:".js_pageNavigator",
perPage:20,
initShowPage:U,
totalItemsNum:A.cnt,
first:!1,
last:!1,
isSimple:!0,
callback:function(t){
U!=t.currentPage&&c.search({
query:J,
pageidx:t.currentPage-1
},function(e){
x(e),U=t.currentPage,G({
searchWord:J,
notResetPage:!0
});
});
}
});
}else{
new o({
container:".js_pageNavigator",
perPage:20,
initShowPage:U,
totalItemsNum:A.cnt,
first:!1,
last:!1,
isSimple:!0,
callback:function(t){
if(U!=t.currentPage){
if(parseInt(t.currentPage)>parseInt(U)){
if(parseInt(t.currentPage)-parseInt(U)>25)return i.err("跳转页数超过上限，请重新输入"),!1;
M={
groupid:A.id,
begin_openid:z[z.length-1].id,
begin_create_time:z[z.length-1].create_time,
limit:20,
offset:20*(parseInt(t.currentPage)-parseInt(U)-1),
backfoward:1
},c.get_user(M,function(e){
if(x(e),y(e),G({
notResetPage:!0
}),-1==M.groupid&&($("#js_groupName").html("黑名单<span class='user_num_tips mini_tips weak_text'>("+e.total_black_list_num+")</span>"),
$(".js_tags").hide()),t.currentPage==parseInt(A.cnt/20)+1&&A.cnt!=20*t.currentPage-20+e.user_list.user_info_list.length){
var n=K;
-2==n?n=-1:-1==n&&(n=1),g.post({
mask:!1,
url:"/cgi-bin/fixgroupcnt",
data:{
groupid:n
}
},function(){});
}
});
}else{
if(parseInt(t.currentPage)-parseInt(U)<-25)return i.err("跳转页数超过上限，请重新输入"),!1;
M={
groupid:A.id,
begin_openid:z[0].id,
begin_create_time:z[0].create_time,
limit:20,
offset:20*(parseInt(U)-parseInt(t.currentPage)-1),
backfoward:0
},c.get_user(M,function(t){
x(t),y(t),G({
notResetPage:!0
}),-1==M.groupid&&($("#js_groupName").html("黑名单<span class='user_num_tips mini_tips weak_text'>("+t.total_black_list_num+")</span>"),
$(".js_tags").hide());
});
}
U=t.currentPage;
}
}
});
}else $(".js_pageNavigator").empty();
$(".js_user_tags").click(function(){
$("#groupsList").find('a[data-id="'+$(this).data("id")+'"]').click();
}),$(".js_tags_expand").click(function(){
$(this).hide(),$(this).parent().find(".js_tags_short").hide(),$(this).parent().find(".js_tags_total").show();
});
}
$("#blackTop").unbind("click").click(function(){
$(this).parent().addClass("selected").siblings().removeClass("selected"),$('.js_group_link[data-id="-1"]').click();
}),$("#reloadTop").click(function(){
window.location.reload();
});
}
function N(){
var t=function(){
var t=$(this),n=e.values();
new d(-1==K?{
dom:t,
content:"确认移出黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
r.del_black(n.join("|"),function(){
window.location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
}:{
dom:t,
content:"加入黑名单后，你将无法接收该用户发来的消息，且该用户无法接收公众号发出的消息，无法参与留言和赞赏，确认加入黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
r.add_black(n.join("|"),function(){
window.location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
},e=$(".js_select").checkbox();
$("#selectAll").removeAttr("checked").parent().removeClass("select"),$(".js_tag_putOn_btn, .js_tag_toBanList_btn").addClass("btn_disabled").off(),
$("#selectAll").on("change",function(){
var t=$(this).prop("checked");
$(".js_select").each(function(){
$(this).prop("disabled")||$(this).checkbox().checked(t);
});
}).checkbox(),$("#selectAll, .js_select").on("change",function(){
var n=e.values();
n.length>0?($(".js_tag_putOn_btn").removeClass("btn_disabled"),$(".js_tag_putOn_btn").off().on("click",{
uid:e,
$dom:".js_tag_putOn_btn",
scene:3
},w),$(".js_tag_toBanList_btn").removeClass("btn_disabled"),$(".js_tag_toBanList_btn").off().on("click",t)):($(".js_tag_putOn_btn").addClass("btn_disabled"),
$(".js_tag_putOn_btn").off(),$(".js_tag_toBanList_btn").addClass("btn_disabled"),
$(".js_tag_toBanList_btn").off());
});
}
function q(){
$("#userGroups").on("click",".js_msgSenderRemark",function(){
var t=$(this).data("fakeid"),e=$(this),o=$(".remark_name[data-fakeid="+t+"]"),a=($(".nick_name[data-fakeid="+t+"]"),
o.text()),s=n("js_changeRemarkName",{
list:null
});
new d({
dom:e,
content:s,
place:"bottom",
margin:"center",
hover:!0,
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
var t=$(".js_remarkName_input:visible").val();
r.change_remark(e.data("fakeid"),t,function(){
i.suc("修改成功"),W.trigger("Remark:changed",e.data("fakeid"),(t+"").html(!0));
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.remove();
},
type:"default"
}]
}),$(".js_remarkName_input:visible").val(a),$(".js_remarkName_input").each(function(){
$(this).select(),new h($(this),{
maxLength:30,
showCounter:!0
});
});
}),W.on("Remark:changed",function(t,e){
var n=$(".remark_name[data-fakeid="+t+"]"),i=$(".nick_name[data-fakeid="+t+"]"),o=i.html();
""==e&&""==o||(""==e&&""!=o?(n.html(i.find("strong").html()),i.html("")):""!=e&&""==o?(i.html("(<strong>"+n.html()+"</strong>)"),
n.html(e)):n.html(e));
});
}
function R(){
var e=t("common/wx/searchInput.js");
new e({
id:"#searchBar",
value:J,
placeholder:"用户昵称",
click:function(t){
t.length>0?c.search({
query:t
},function(e){
x(e),J=t,K=-2,A={
id:-2,
name:"全部用户",
cnt:e.total_user_num
},G({
searchWord:J
});
}):i.err("请输入搜索关键词");
}
}),J&&$(".remark_name, .nick_name").each(function(t,e){
$(e).text().match(/<script>/g)||$(e).contents().filter(function(){
return 1!=this.nodeType;
}).each(function(t,e){
$(e).replaceWith(C($(e).text()).replace(new RegExp(J,"g"),'<span class="highlight">'+J+"</span>")+"");
});
});
}
function G(t){
if(!m){
for(var e=0;e<S.length;e++)S[e].name=S[e].name;
m=!0;
}
t?(J=t.searchWord||"",U=t.notResetPage?U:1):(J="",U=1,M=null),J||B(),P(),O(),T(),
N(),q(),R(),wx.renderPage=function(){
J?c.search({
query:J,
pageidx:U-1
},function(t){
x(t),G({
notResetPage:!0,
searchWord:J
});
}):c.get_user(M?M:{
groupid:K
},function(t){
x(t),y(t),G({
notResetPage:!0
});
});
};
}
var A,S=v.group_list,z=v.user_list||[],K="-2",H=[],W=u(!0),D={},E=v.total_user_num,U=1,F=$("<p class='no_result'></p>").appendTo($(".user_list")).hide(),J="",M=null;
return window.friendsList=z,{
init:G
};
}(wx.cgiData);
v.init();
});