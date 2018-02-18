define("common/wx/inputCounter.js",[],function(t,n,e){
"use strict";
function o(t,n){
this.$input=$(t),this.opts=$.extend(!0,{},i,n),this._init();
}
var i={
minLength:0,
maxLength:20,
showCounter:!0,
useGBKLength:!1,
GBKBased:!1
};
o.prototype._init=function(){
var t=this;
t.$input&&t.$input.length>0?(t.$inputBox=t.$input.parent("textarea"==t.$input.prop("tagName").toLowerCase()?".frm_textarea_box":".frm_input_box"),
t.count=t._getLen(t.getValue()),t.$counter=t.$inputBox.find(".frm_counter"),t.counterExist=!0,
0==t.$counter.length&&(t.counterExist=!1,t.$counter=$('<em class="frm_input_append frm_counter"></em>'),
t.$inputBox.append(t.$counter)),1==t.opts.showCounter?t.show():t.hide(),t.setCount(t.count),
t.inputEvent=function(){
t.setCount(t._getLen(t.getValue()));
},t.$input.on("keydown keyup",t.inputEvent)):console.log("inputCounter Err: input does not exist.");
},o.prototype.getValue=function(){
var t="";
switch(this.$input.prop("tagName")){
case"INPUT":
case"TEXTAREA":
t=this.$input.val();
break;

default:
t=this.$input.text();
}
return t;
},o.prototype._getLen=function(t){
var n=0;
return t=t||"",n=this.opts.useGBKLength?t.replace(/[^\x00-\xff]/g,"**").length:t.length,
this.opts.GBKBased&&(n=Math.ceil(n/2)),n;
},o.prototype.getCount=function(){
return this.count||0;
},o.prototype.setCount=function(t){
this.count=t,this.$counter.html(this.count+"&#47;"+this.opts.maxLength),this.count>this.opts.maxLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):this.count>0&&this.count<this.opts.minLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):(this.overflowed=!1,this.$inputBox.removeClass("warn"));
},o.prototype.hasOverflowed=function(){
return this.overflowed;
},o.prototype.show=function(){
this.$inputBox.addClass("with_counter counter_in append count"),this.$counter.show();
},o.prototype.hide=function(){
this.$inputBox.removeClass("with_counter counter_in append count warn"),this.$counter.hide();
},o.prototype.destroy=function(){
this.$input.off("keydown keyup",this.inputEvent),0==this.counterExist&&(this.hide(),
this.$counter.remove());
},e.exports=o;
});define("biz_web/ui/checkbox.js",["tpl/biz_web/ui/checkbox.html.js"],function(t){
"use strict";
function e(t){
var e=$(t);
e.each(function(){
var t=$(this),e=t.prop("checked"),n=t.parent();
e?n.addClass("selected"):n.removeClass("selected");
});
}
function n(t){
var e=$(t);
e.each(function(){
var t=$(this).prop("disabled"),e=$(this).parent();
t?e.addClass("disabled"):e.removeClass("disabled");
});
}
function i(){
return"checkbox"+s++;
}
var a={
container:null,
label:"",
name:"",
type:"checkbox"
},c=t("tpl/biz_web/ui/checkbox.html.js"),r=wx.T,s=1,o=1,p=function(t){
this.options=$.extend(!0,{},a,t),this.options.index=o++,this.$container=$(this.options.container),
this.$dom=$(r(c,this.options)).appendTo(this.$container),this.$input=this.$dom.find("input"),
this.$input.checkbox();
};
return p.prototype={
checked:function(t){
return"undefined"!=typeof t&&(this.$input.prop("checked",t),e(this.$input)),this.$input.prop("checked");
},
disabled:function(t){
return"undefined"!=typeof t&&(this.$input.prop("disabled",t),n(this.$input)),this.$input.prop("disabled");
}
},$.fn.checkbox=function(t){
var a,c,r,s,o=!1;
"boolean"==typeof t?a=t:$.isPlainObject(t)?(a=t.multi,c=t.onChanged):"string"==typeof t?(o=!0,
r=t,s=[].slice.call(arguments,1)):"undefined"==typeof t&&(t={}),"undefined"==typeof a&&(a=this.is("input[type=checkbox]"));
var p=this,d=a?"checkbox":"radio",h={
checked:function(t){
return p.attr("checked",t),p.prop("checked",t),e(p),p;
},
disabled:function(t){
return p.attr("disabled",t),p.prop("disabled",t),n(p),p;
},
value:function(){
var t=p.eq(0);
return t.prop("checked")?t.val():"";
},
values:function(){
var t=[];
return p.each(function(){
$(this).prop("checked")&&t.push($(this).val());
}),t;
},
adjust:function(t){
var n;
return n="string"==typeof t?t.split(","):t,n&&n.length>0&&p.each(function(){
var t=$(this);
n.indexOf(t.val())>=0&&(t.attr("checked",!0),e(t));
}),this;
},
disable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!0),n(t));
}),this;
},
setall:function(t){
p.each(function(){
var e=$(this);
e.attr("disabled",t?!1:!0),n(e);
});
},
enable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!1),n(t));
}),this;
},
label:function(t){
return t&&(p.parent().find(".lbl_content").text(t),p.attr("data-label",t)),p;
}
};
return o&&"function"==typeof h[r]?h[r].apply(h,s):(this.addClass("frm_"+d).each(function(){
var t=$(this),e=t.parent();
if(!e.is("label")){
var n=t.attr("data-label")||"";
e=$('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
type:d
})).append("<span class='lbl_content'>{content}</span>".format({
content:n.html(!0)
})),e.insertBefore(t).prepend(t);
}
if(!this.id){
var a=i();
this.id=a;
}
e.attr("for",this.id);
}),e(this),n(this),t&&t.initOnChanged&&"function"==typeof c&&p.parent().find("input[type=checkbox],input[type=radio]").each(function(){
c.call(h,$(this));
}),this.parent().delegate("input[type=checkbox],input[type=radio]","click",function(){
var t=$(this),n=t.prop("checked");
a?(t.attr("checked",n),e(t)):(p.attr("checked",!1),t.attr("checked",!0).prop("checked",!0),
e(p)),"function"==typeof c&&c.call(h,t);
}).addClass("frm_"+d+"_label"),h);
},p;
});define("tpl/user/userlist_tag.html.js",[],function(){
return'{if (friendsList.length > 0)}\n{each friendsList as item}\n<tr>\n    <td class="table_cell user">\n        <div class="user_info">  <!--个人信息区-->\n            {if item.remark_name}\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.id}">{item.remark_name}</a>\n            <span class="nick_name" data-fakeid="{item.id}">(<strong>{item.nick_name}</strong>)</span>\n            {else}\n            <a target="_blank" href="{item.link}" class="remark_name" data-fakeid="{item.id}">{item.nick_name}</a>\n            <span class="nick_name" data-fakeid="{item.id}"></span>\n            {/if}\n            <a target="_blank" href="{item.link}" class="avatar">\n                <img src="{item.img}" data-id="{item.id}" class="js_msgSenderAvatar">\n            </a>\n            <label for="check{item.id}" class="frm_checkbox_label {if item.is_black}disabled{/if}"><i class="icon_checkbox"></i><input class="frm_checkbox js_select" type="checkbox" value="{item.id}" id="check{item.id}" {if item.is_black}disabled="true"{/if}></label> \n            \n            <div class="js_tags user_tag_area">\n                {if item.is_black}\n                <span class="js_tags_list user_tag_list"><span class="js_user_tags user_tag black" data-id="黑名单">黑名单</span> </span>\n                {else}\n                <span class="js_tags_list user_tag_list">\n                    {if item.tags == \'\'}\n                        无标签                    {else}\n                        <span class="js_tags_short">{=item.tags_short}</span>\n                        <span class="js_tags_total" style="display: none;">{=item.tags}</span>\n                        {if item.group_id.length >= 4}\n                        <span class="tips_global js_tags_expand">等共{item.group_id.length}个标签</span>\n                        {/if}\n                    {/if}\n                </span>\n                <span class="js_tags_btn dropdown_switch_area dropdown_closed" data-id="{item.id}">\n                    <span class="icon_dropdown_switch">\n                        <i class="arrow arrow_up"></i>\n                        <i class="arrow arrow_down"></i>\n                    </span>\n                </span> \n                {/if}\n            </div>\n        </div>\n    </td>\n    <td class="table_cell user_opr tr">\n        {if isBlack!=1||item.user_is_fans==1}\n        <div id="selectArea{item.id}" class="js_selectArea" data-gid="{item.group_id}" data-fid="{item.id}"></div>\n        <a class="btn remark js_msgSenderRemark" data-fakeid="{item.id}">修改备注</a>\n        {/if}\n    </td>\n</tr>\n{/each}\n{else}\n<tr class="empty_item"><td colspan="2" class="empty_tips">暂无用户</td></tr>\n{/if}\n';
});define("tpl/user/grouplist_tag.html.js",[],function(){
return'<dl class="inner_menu">\n    <dt class="inner_menu_item{if groupId == \'-2\'} selected{/if}">\n		<a href="javascript:;" class="inner_menu_link js_group_link" data-id="-2" title="全部用户">\n			<strong>全部用户</strong><em class="num">({allUser.num})</em>\n		</a>\n    </dt>\n	{each groupsList as item}\n	<dd class="inner_menu_item{if item.id == groupId} selected{/if}" id="group{item.id}">\n		{if item.id == 2}\n		<a href="javascript:;" class="inner_menu_link js_group_link" data-id="2" title="加入该分组中的用户仅作为更重要的用户归类标识">\n		{else}\n        <a href="javascript:;" class="inner_menu_link js_group_link" data-id="{item.id}" title="{item.name}">\n		{/if}\n			<strong>{item.name}</strong><em class="num">({item.cnt})</em>\n		</a>		\n	</dd>\n	{/each}\n</dl>\n<dl class="inner_menu no_extra dn">\n    <dt class="inner_menu_item{if groupId == \'-1\'} selected{/if}">\n		<a href="javascript:;" class="inner_menu_link js_group_link" data-id="-1" title="加入该分组中的用户将无法接收到该公众号发送的消息以及自动回复。公众号也无法向该用户发送消息。">\n			<strong>黑名单</strong><em class="num">({blackList.num})</em>\n		</a>\n    </dt>\n</dl>\n';
});define("common/wx/popover.js",["tpl/popover.html.js"],function(o,t,e){
"use strict";
function i(o){
if(o=$.extend(!0,{},h,o),this.opt=o,this.$dom=$(o.dom),this.$dom.data("popover")){
var t=this.$dom.data("popover");
return p(o,t),t.$pop.show(),t.opt.defaultOpen?t.$pop.show():t.$pop.hide(),t;
}
return o.buttons&&o.buttons&&o.buttons.each(function(o){
o.type=o.type||"default";
}),this.$pop=$(template.compile(s)(o)),o.addCls&&this.$pop.addClass(o.addCls),$("body").append(this.$pop),
n(this,o),p(o,this),this.opt.defaultOpen?this.$pop.show():this.$pop.hide(),this.$dom.data("popover",this),
this.clickIn=!0,this;
}
function n(o,t){
function e(){
clearTimeout(n),o.show();
}
function i(){
n=setTimeout(function(){
o.hide();
},p);
}
if(t.buttons&&t.buttons.length>0&&o.$pop.find(".jsPopoverBt").each(function(e,i){
t.buttons[e]&&"function"==typeof t.buttons[e].click&&$(i).click(function(i){
t.buttons[e].click.call(o,i);
});
}),o.$pop.find(".jsPopoverClose").click(function(){
t.close===!0?o.hide():"function"==typeof t.close&&t.close.call(o);
}),t.hover&&(o.$dom.hover(function(){
o.hoverTime&&clearTimeout(o.hoverTime);
},function(){
o.hoverTime=o.hide.delay(1,o);
}),o.$pop.hover(function(){
o.hoverTime&&clearTimeout(o.hoverTime);
},function(){
o.hoverTime&&clearTimeout(o.hoverTime),o.hoverTime=o.hide.delay(1,o);
})),t.isToggle){
var n=null,p=300;
o.$dom.hover(e,i),o.$pop.hover(e,i);
}
t.hideIfBlur&&(o._onBlur=function(o){
var t=o.data.context,e=o.target,i=t.$dom.get(0),n=t.$pop.get(0);
t.clickIn?t.clickIn=!1:$.contains(i,e)||i===e||$.contains(n,e)||n===e||o.data.context.hide();
},$(document).on("click",{
context:o
},o._onBlur)),o._onResize=function(o){
o.data.context.resetPosition();
},$(window).on("resize",{
context:o
},o._onResize);
}
function p(o,t){
var e=t.$dom.offset();
"left"==o.margin?(console.log(e.top),console.log(t.$dom.height()),t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left-28
}).addClass("pos_left")):"right"==o.margin?t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.width()-t.$pop.width()+28
}).addClass("pos_right"):t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.outerWidth()/2-t.$pop.width()/2
}).addClass("pos_center");
}
var s=o("tpl/popover.html.js"),h={
dom:"",
content:"",
place:"bottom",
margin:"center",
hideIfBlur:!1,
hover:!1,
addCls:"",
width:"",
isToggle:!1,
defaultOpen:!0,
onHide:!1,
onShow:!1,
onRemove:!1
};
i.prototype={
remove:function(){
this.$pop.remove(),this.$dom.removeData("popover"),this._onBlur&&$(document).off("click",this._onBlur),
$(window).off("resize",this._onResize),"function"==typeof this.opt.onRemove&&this.opt.onRemove.call(this);
},
hide:function(){
this.$pop.hide(),"function"==typeof this.opt.onHide&&this.opt.onHide.call(this);
},
show:function(){
this.$pop.show(),"function"==typeof this.opt.onShow&&this.opt.onShow.call(this);
},
resetPosition:function(){
return p(this.opt,this);
}
},e.exports=i;
});define("common/qq/emoji.js",["widget/emoji.css","biz_common/utils/emoji_data.js"],function(f){
f("widget/emoji.css");
var e='<span class="emoji emoji%s"></span>',a=f("biz_common/utils/emoji_data.js"),b='<img class="icon_emotion_single %s" src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"></img>',c={
"☀":"2600",
"☁":"2601",
"☔":"2614",
"⛄":"26c4",
"⚡":"26a1",
"🌀":"1f300",
"🌁":"1f301",
"🌂":"1f302",
"🌃":"1f303",
"🌄":"1f304",
"🌅":"1f305",
"🌆":"1f306",
"🌇":"1f307",
"🌈":"1f308",
"❄":"2744",
"⛅":"26c5",
"🌉":"1f309",
"🌊":"1f30a",
"🌋":"1f30b",
"🌌":"1f30c",
"🌏":"1f30f",
"🌑":"1f311",
"🌔":"1f314",
"🌓":"1f313",
"🌙":"1f319",
"🌕":"1f315",
"🌛":"1f31b",
"🌟":"1f31f",
"🌠":"1f320",
"🕐":"1f550",
"🕑":"1f551",
"🕒":"1f552",
"🕓":"1f553",
"🕔":"1f554",
"🕕":"1f555",
"🕖":"1f556",
"🕗":"1f557",
"🕘":"1f558",
"🕙":"1f559",
"🕚":"1f55a",
"🕛":"1f55b",
"⌚":"231a",
"⌛":"231b",
"⏰":"23f0",
"⏳":"23f3",
"♈":"2648",
"♉":"2649",
"♊":"264a",
"♋":"264b",
"♌":"264c",
"♍":"264d",
"♎":"264e",
"♏":"264f",
"♐":"2650",
"♑":"2651",
"♒":"2652",
"♓":"2653",
"⛎":"26ce",
"🍀":"1f340",
"🌷":"1f337",
"🌱":"1f331",
"🍁":"1f341",
"🌸":"1f338",
"🌹":"1f339",
"🍂":"1f342",
"🍃":"1f343",
"🌺":"1f33a",
"🌻":"1f33b",
"🌴":"1f334",
"🌵":"1f335",
"🌾":"1f33e",
"🌽":"1f33d",
"🍄":"1f344",
"🌰":"1f330",
"🌼":"1f33c",
"🌿":"1f33f",
"🍒":"1f352",
"🍌":"1f34c",
"🍎":"1f34e",
"🍊":"1f34a",
"🍓":"1f353",
"🍉":"1f349",
"🍅":"1f345",
"🍆":"1f346",
"🍈":"1f348",
"🍍":"1f34d",
"🍇":"1f347",
"🍑":"1f351",
"🍏":"1f34f",
"👀":"1f440",
"👂":"1f442",
"👃":"1f443",
"👄":"1f444",
"👅":"1f445",
"💄":"1f484",
"💅":"1f485",
"💆":"1f486",
"💇":"1f487",
"💈":"1f488",
"👤":"1f464",
"👦":"1f466",
"👧":"1f467",
"👨":"1f468",
"👩":"1f469",
"👪":"1f46a",
"👫":"1f46b",
"👮":"1f46e",
"👯":"1f46f",
"👰":"1f470",
"👱":"1f471",
"👲":"1f472",
"👳":"1f473",
"👴":"1f474",
"👵":"1f475",
"👶":"1f476",
"👷":"1f477",
"👸":"1f478",
"👹":"1f479",
"👺":"1f47a",
"👻":"1f47b",
"👼":"1f47c",
"👽":"1f47d",
"👾":"1f47e",
"👿":"1f47f",
"💀":"1f480",
"💁":"1f481",
"💂":"1f482",
"💃":"1f483",
"🐌":"1f40c",
"🐍":"1f40d",
"🐎":"1f40e",
"🐔":"1f414",
"🐗":"1f417",
"🐫":"1f42b",
"🐘":"1f418",
"🐨":"1f428",
"🐒":"1f412",
"🐑":"1f411",
"🐙":"1f419",
"🐚":"1f41a",
"🐛":"1f41b",
"🐜":"1f41c",
"🐝":"1f41d",
"🐞":"1f41e",
"🐠":"1f420",
"🐡":"1f421",
"🐢":"1f422",
"🐤":"1f424",
"🐥":"1f425",
"🐦":"1f426",
"🐣":"1f423",
"🐧":"1f427",
"🐩":"1f429",
"🐟":"1f41f",
"🐬":"1f42c",
"🐭":"1f42d",
"🐯":"1f42f",
"🐱":"1f431",
"🐳":"1f433",
"🐴":"1f434",
"🐵":"1f435",
"🐶":"1f436",
"🐷":"1f437",
"🐻":"1f43b",
"🐹":"1f439",
"🐺":"1f43a",
"🐮":"1f42e",
"🐰":"1f430",
"🐸":"1f438",
"🐾":"1f43e",
"🐲":"1f432",
"🐼":"1f43c",
"🐽":"1f43d",
"😠":"1f620",
"😩":"1f629",
"😲":"1f632",
"😞":"1f61e",
"😵":"1f635",
"😰":"1f630",
"😒":"1f612",
"😍":"1f60d",
"😤":"1f624",
"😜":"1f61c",
"😝":"1f61d",
"😋":"1f60b",
"😘":"1f618",
"😚":"1f61a",
"😷":"1f637",
"😳":"1f633",
"😃":"1f603",
"😅":"1f605",
"😆":"1f606",
"😁":"1f601",
"😂":"1f602",
"😊":"1f60a",
"☺":"263a",
"😄":"1f604",
"😢":"1f622",
"😭":"1f62d",
"😨":"1f628",
"😣":"1f623",
"😡":"1f621",
"😌":"1f60c",
"😖":"1f616",
"😔":"1f614",
"😱":"1f631",
"😪":"1f62a",
"😏":"1f60f",
"😓":"1f613",
"😥":"1f625",
"😫":"1f62b",
"😉":"1f609",
"😺":"1f63a",
"😸":"1f638",
"😹":"1f639",
"😽":"1f63d",
"😻":"1f63b",
"😿":"1f63f",
"😾":"1f63e",
"😼":"1f63c",
"🙀":"1f640",
"🙅":"1f645",
"🙆":"1f646",
"🙇":"1f647",
"🙈":"1f648",
"🙊":"1f64a",
"🙉":"1f649",
"🙋":"1f64b",
"🙌":"1f64c",
"🙍":"1f64d",
"🙎":"1f64e",
"🙏":"1f64f",
"🏠":"1f3e0",
"🏡":"1f3e1",
"🏢":"1f3e2",
"🏣":"1f3e3",
"🏥":"1f3e5",
"🏦":"1f3e6",
"🏧":"1f3e7",
"🏨":"1f3e8",
"🏩":"1f3e9",
"🏪":"1f3ea",
"🏫":"1f3eb",
"⛪":"26ea",
"⛲":"26f2",
"🏬":"1f3ec",
"🏯":"1f3ef",
"🏰":"1f3f0",
"🏭":"1f3ed",
"⚓":"2693",
"🏮":"1f3ee",
"🗻":"1f5fb",
"🗼":"1f5fc",
"🗽":"1f5fd",
"🗾":"1f5fe",
"🗿":"1f5ff",
"👞":"1f45e",
"👟":"1f45f",
"👠":"1f460",
"👡":"1f461",
"👢":"1f462",
"👣":"1f463",
"👓":"1f453",
"👕":"1f455",
"👖":"1f456",
"👑":"1f451",
"👔":"1f454",
"👒":"1f452",
"👗":"1f457",
"👘":"1f458",
"👙":"1f459",
"👚":"1f45a",
"👛":"1f45b",
"👜":"1f45c",
"👝":"1f45d",
"💰":"1f4b0",
"💱":"1f4b1",
"💹":"1f4b9",
"💲":"1f4b2",
"💳":"1f4b3",
"💴":"1f4b4",
"💵":"1f4b5",
"💸":"1f4b8",
"🇨🇳":"1f1e81f1f3",
"🇩🇪":"1f1e91f1ea",
"🇪🇸":"1f1ea1f1f8",
"🇫🇷":"1f1eb1f1f7",
"🇬🇧":"1f1ec1f1e7",
"🇮🇹":"1f1ee1f1f9",
"🇯🇵":"1f1ef1f1f5",
"🇰🇷":"1f1f01f1f7",
"🇷🇺":"1f1f71f1fa",
"🇺🇸":"1f1fa1f1f8",
"🔥":"1f525",
"🔦":"1f526",
"🔧":"1f527",
"🔨":"1f528",
"🔩":"1f529",
"🔪":"1f52a",
"🔫":"1f52b",
"🔮":"1f52e",
"🔯":"1f52f",
"🔰":"1f530",
"🔱":"1f531",
"💉":"1f489",
"💊":"1f48a",
"🅰":"1f170",
"🅱":"1f171",
"🆎":"1f18e",
"🅾":"1f17e",
"🎀":"1f380",
"🎁":"1f381",
"🎂":"1f382",
"🎄":"1f384",
"🎅":"1f385",
"🎌":"1f38c",
"🎆":"1f386",
"🎈":"1f388",
"🎉":"1f389",
"🎍":"1f38d",
"🎎":"1f38e",
"🎓":"1f393",
"🎒":"1f392",
"🎏":"1f38f",
"🎇":"1f387",
"🎐":"1f390",
"🎃":"1f383",
"🎊":"1f38a",
"🎋":"1f38b",
"🎑":"1f391",
"📟":"1f4df",
"☎":"260e",
"📞":"1f4de",
"📱":"1f4f1",
"📲":"1f4f2",
"📝":"1f4dd",
"📠":"1f4e0",
"✉":"2709",
"📨":"1f4e8",
"📩":"1f4e9",
"📪":"1f4ea",
"📫":"1f4eb",
"📮":"1f4ee",
"📰":"1f4f0",
"📢":"1f4e2",
"📣":"1f4e3",
"📡":"1f4e1",
"📤":"1f4e4",
"📥":"1f4e5",
"📦":"1f4e6",
"📧":"1f4e7",
"🔠":"1f520",
"🔡":"1f521",
"🔢":"1f522",
"🔣":"1f523",
"🔤":"1f524",
"✒":"2712",
"💺":"1f4ba",
"💻":"1f4bb",
"✏":"270f",
"📎":"1f4ce",
"💼":"1f4bc",
"💽":"1f4bd",
"💾":"1f4be",
"💿":"1f4bf",
"📀":"1f4c0",
"✂":"2702",
"📍":"1f4cd",
"📃":"1f4c3",
"📄":"1f4c4",
"📅":"1f4c5",
"📁":"1f4c1",
"📂":"1f4c2",
"📓":"1f4d3",
"📖":"1f4d6",
"📔":"1f4d4",
"📕":"1f4d5",
"📗":"1f4d7",
"📘":"1f4d8",
"📙":"1f4d9",
"📚":"1f4da",
"📛":"1f4db",
"📜":"1f4dc",
"📋":"1f4cb",
"📆":"1f4c6",
"📊":"1f4ca",
"📈":"1f4c8",
"📉":"1f4c9",
"📇":"1f4c7",
"📌":"1f4cc",
"📒":"1f4d2",
"📏":"1f4cf",
"📐":"1f4d0",
"📑":"1f4d1",
"🎽":"1f3bd",
"⚾":"26be",
"⛳":"26f3",
"🎾":"1f3be",
"⚽":"26bd",
"🎿":"1f3bf",
"🏀":"1f3c0",
"🏁":"1f3c1",
"🏂":"1f3c2",
"🏃":"1f3c3",
"🏄":"1f3c4",
"🏆":"1f3c6",
"🏈":"1f3c8",
"🏊":"1f3ca",
"🚃":"1f683",
"🚇":"1f687",
"Ⓜ":"24c2",
"🚄":"1f684",
"🚅":"1f685",
"🚗":"1f697",
"🚙":"1f699",
"🚌":"1f68c",
"🚏":"1f68f",
"🚢":"1f6a2",
"✈":"2708",
"⛵":"26f5",
"🚉":"1f689",
"🚀":"1f680",
"🚤":"1f6a4",
"🚕":"1f695",
"🚚":"1f69a",
"🚒":"1f692",
"🚑":"1f691",
"🚓":"1f693",
"⛽":"26fd",
"🅿":"1f17f",
"🚥":"1f6a5",
"🚧":"1f6a7",
"🚨":"1f6a8",
"♨":"2668",
"⛺":"26fa",
"🎠":"1f3a0",
"🎡":"1f3a1",
"🎢":"1f3a2",
"🎣":"1f3a3",
"🎤":"1f3a4",
"🎥":"1f3a5",
"🎦":"1f3a6",
"🎧":"1f3a7",
"🎨":"1f3a8",
"🎩":"1f3a9",
"🎪":"1f3aa",
"🎫":"1f3ab",
"🎬":"1f3ac",
"🎭":"1f3ad",
"🎮":"1f3ae",
"🀄":"1f004",
"🎯":"1f3af",
"🎰":"1f3b0",
"🎱":"1f3b1",
"🎲":"1f3b2",
"🎳":"1f3b3",
"🎴":"1f3b4",
"🃏":"1f0cf",
"🎵":"1f3b5",
"🎶":"1f3b6",
"🎷":"1f3b7",
"🎸":"1f3b8",
"🎹":"1f3b9",
"🎺":"1f3ba",
"🎻":"1f3bb",
"🎼":"1f3bc",
"〽":"303d",
"📷":"1f4f7",
"📹":"1f4f9",
"📺":"1f4fa",
"📻":"1f4fb",
"📼":"1f4fc",
"💋":"1f48b",
"💌":"1f48c",
"💍":"1f48d",
"💎":"1f48e",
"💏":"1f48f",
"💐":"1f490",
"💑":"1f491",
"💒":"1f492",
"🔞":"1f51e",
"©":"a9",
"®":"ae",
"™":"2122",
"ℹ":"2139",
"#⃣":"2320e3",
"1⃣":"3120e3",
"2⃣":"3220e3",
"3⃣":"3320e3",
"4⃣":"3420e3",
"5⃣":"3520e3",
"6⃣":"3620e3",
"7⃣":"3720e3",
"8⃣":"3820e3",
"9⃣":"3920e3",
"0⃣":"3020e3",
"🔟":"1f51f",
"📶":"1f4f6",
"📳":"1f4f3",
"📴":"1f4f4",
"🍔":"1f354",
"🍙":"1f359",
"🍰":"1f370",
"🍜":"1f35c",
"🍞":"1f35e",
"🍳":"1f373",
"🍦":"1f366",
"🍟":"1f35f",
"🍡":"1f361",
"🍘":"1f358",
"🍚":"1f35a",
"🍝":"1f35d",
"🍛":"1f35b",
"🍢":"1f362",
"🍣":"1f363",
"🍱":"1f371",
"🍲":"1f372",
"🍧":"1f367",
"🍖":"1f356",
"🍥":"1f365",
"🍠":"1f360",
"🍕":"1f355",
"🍗":"1f357",
"🍨":"1f368",
"🍩":"1f369",
"🍪":"1f36a",
"🍫":"1f36b",
"🍬":"1f36c",
"🍭":"1f36d",
"🍮":"1f36e",
"🍯":"1f36f",
"🍤":"1f364",
"🍴":"1f374",
"☕":"2615",
"🍸":"1f378",
"🍺":"1f37a",
"🍵":"1f375",
"🍶":"1f376",
"🍷":"1f377",
"🍻":"1f37b",
"🍹":"1f379",
"↗":"2197",
"↘":"2198",
"↖":"2196",
"↙":"2199",
"⤴":"2934",
"⤵":"2935",
"↔":"2194",
"↕":"2195",
"⬆":"2b06",
"⬇":"2b07",
"➡":"27a1",
"⬅":"2b05",
"▶":"25b6",
"◀":"25c0",
"⏩":"23e9",
"⏪":"23ea",
"⏫":"23eb",
"⏬":"23ec",
"🔺":"1f53a",
"🔻":"1f53b",
"🔼":"1f53c",
"🔽":"1f53d",
"⭕":"2b55",
"❌":"274c",
"❎":"274e",
"❗":"2757",
"⁉":"2049",
"‼":"203c",
"❓":"2753",
"❔":"2754",
"❕":"2755",
"〰":"3030",
"➰":"27b0",
"➿":"27bf",
"❤":"2764",
"💓":"1f493",
"💔":"1f494",
"💕":"1f495",
"💖":"1f496",
"💗":"1f497",
"💘":"1f498",
"💙":"1f499",
"💚":"1f49a",
"💛":"1f49b",
"💜":"1f49c",
"💝":"1f49d",
"💞":"1f49e",
"💟":"1f49f",
"♥":"2665",
"♠":"2660",
"♦":"2666",
"♣":"2663",
"🚬":"1f6ac",
"🚭":"1f6ad",
"♿":"267f",
"🚩":"1f6a9",
"⚠":"26a0",
"⛔":"26d4",
"♻":"267b",
"🚲":"1f6b2",
"🚶":"1f6b6",
"🚹":"1f6b9",
"🚺":"1f6ba",
"🛀":"1f6c0",
"🚻":"1f6bb",
"🚽":"1f6bd",
"🚾":"1f6be",
"🚼":"1f6bc",
"🚪":"1f6aa",
"🚫":"1f6ab",
"✔":"2714",
"🆑":"1f191",
"🆒":"1f192",
"🆓":"1f193",
"🆔":"1f194",
"🆕":"1f195",
"🆖":"1f196",
"🆗":"1f197",
"🆘":"1f198",
"🆙":"1f199",
"🆚":"1f19a",
"🈁":"1f201",
"🈂":"1f202",
"🈲":"1f232",
"🈳":"1f233",
"🈴":"1f234",
"🈵":"1f235",
"🈶":"1f236",
"🈚":"1f21a",
"🈷":"1f237",
"🈸":"1f238",
"🈹":"1f239",
"🈯":"1f22f",
"🈺":"1f23a",
"㊙":"3299",
"㊗":"3297",
"🉐":"1f250",
"🉑":"1f251",
"➕":"2795",
"➖":"2796",
"✖":"2716",
"➗":"2797",
"💠":"1f4a0",
"💡":"1f4a1",
"💢":"1f4a2",
"💣":"1f4a3",
"💤":"1f4a4",
"💥":"1f4a5",
"💦":"1f4a6",
"💧":"1f4a7",
"💨":"1f4a8",
"💩":"1f4a9",
"💪":"1f4aa",
"💫":"1f4ab",
"💬":"1f4ac",
"✨":"2728",
"✴":"2734",
"✳":"2733",
"⚪":"26aa",
"⚫":"26ab",
"🔴":"1f534",
"🔵":"1f535",
"🔲":"1f532",
"🔳":"1f533",
"⭐":"2b50",
"⬜":"2b1c",
"⬛":"2b1b",
"▫":"25ab",
"▪":"25aa",
"◽":"25fd",
"◾":"25fe",
"◻":"25fb",
"◼":"25fc",
"🔶":"1f536",
"🔷":"1f537",
"🔸":"1f538",
"🔹":"1f539",
"❇":"2747",
"💮":"1f4ae",
"💯":"1f4af",
"↩":"21a9",
"↪":"21aa",
"🔃":"1f503",
"🔊":"1f50a",
"🔋":"1f50b",
"🔌":"1f50c",
"🔍":"1f50d",
"🔎":"1f50e",
"🔒":"1f512",
"🔓":"1f513",
"🔏":"1f50f",
"🔐":"1f510",
"🔑":"1f511",
"🔔":"1f514",
"☑":"2611",
"🔘":"1f518",
"🔖":"1f516",
"🔗":"1f517",
"🔙":"1f519",
"🔚":"1f51a",
"🔛":"1f51b",
"🔜":"1f51c",
"🔝":"1f51d",
" ":"2003",
" ":"2002",
" ":"2005",
"✅":"2705",
"✊":"270a",
"✋":"270b",
"✌":"270c",
"👊":"1f44a",
"👍":"1f44d",
"☝":"261d",
"👆":"1f446",
"👇":"1f447",
"👈":"1f448",
"👉":"1f449",
"👋":"1f44b",
"👏":"1f44f",
"👌":"1f44c",
"👎":"1f44e",
"👐":"1f450",
"":"2600",
"":"2601",
"":"2614",
"":"26c4",
"":"26a1",
"":"1f300",
"[霧]":"1f301",
"":"1f302",
"":"1f30c",
"":"1f304",
"":"1f305",
"":"1f306",
"":"1f307",
"":"1f308",
"[雪結晶]":"2744",
"":"26c5",
"":"1f30a",
"[火山]":"1f30b",
"[地球]":"1f30f",
"●":"1f311",
"":"1f31b",
"○":"1f315",
"":"1f31f",
"☆彡":"1f320",
"":"1f550",
"":"1f551",
"":"1f552",
"":"1f553",
"":"1f554",
"":"1f555",
"":"1f556",
"":"1f557",
"":"1f558",
"":"23f0",
"":"1f55a",
"":"1f55b",
"[腕時計]":"231a",
"[砂時計]":"23f3",
"":"2648",
"":"2649",
"":"264a",
"":"264b",
"":"264c",
"":"264d",
"":"264e",
"":"264f",
"":"2650",
"":"2651",
"":"2652",
"":"2653",
"":"26ce",
"":"1f33f",
"":"1f337",
"":"1f341",
"":"1f338",
"":"1f339",
"":"1f342",
"":"1f343",
"":"1f33a",
"":"1f33c",
"":"1f334",
"":"1f335",
"":"1f33e",
"[とうもろこし]":"1f33d",
"[キノコ]":"1f344",
"[栗]":"1f330",
"[さくらんぼ]":"1f352",
"[バナナ]":"1f34c",
"":"1f34f",
"":"1f34a",
"":"1f353",
"":"1f349",
"":"1f345",
"":"1f346",
"[メロン]":"1f348",
"[パイナップル]":"1f34d",
"[ブドウ]":"1f347",
"[モモ]":"1f351",
"":"1f440",
"":"1f442",
"":"1f443",
"":"1f444",
"":"1f61d",
"":"1f484",
"":"1f485",
"":"1f486",
"":"1f487",
"":"1f488",
"〓":"2005",
"":"1f466",
"":"1f467",
"":"1f468",
"":"1f469",
"[家族]":"1f46a",
"":"1f46b",
"":"1f46e",
"":"1f46f",
"[花嫁]":"1f470",
"":"1f471",
"":"1f472",
"":"1f473",
"":"1f474",
"":"1f475",
"":"1f476",
"":"1f477",
"":"1f478",
"[なまはげ]":"1f479",
"[天狗]":"1f47a",
"":"1f47b",
"":"1f47c",
"":"1f47d",
"":"1f47e",
"":"1f47f",
"":"1f480",
"":"1f481",
"":"1f482",
"":"1f483",
"[カタツムリ]":"1f40c",
"":"1f40d",
"":"1f40e",
"":"1f414",
"":"1f417",
"":"1f42b",
"":"1f418",
"":"1f428",
"":"1f412",
"":"1f411",
"":"1f419",
"":"1f41a",
"":"1f41b",
"[アリ]":"1f41c",
"[ミツバチ]":"1f41d",
"[てんとう虫]":"1f41e",
"":"1f420",
"":"1f3a3",
"[カメ]":"1f422",
"":"1f423",
"":"1f426",
"":"1f427",
"":"1f436",
"":"1f42c",
"":"1f42d",
"":"1f42f",
"":"1f431",
"":"1f433",
"":"1f434",
"":"1f435",
"":"1f43d",
"":"1f43b",
"":"1f439",
"":"1f43a",
"":"1f42e",
"":"1f430",
"":"1f438",
"":"1f463",
"[辰]":"1f432",
"[パンダ]":"1f43c",
"":"1f620",
"":"1f64d",
"":"1f632",
"":"1f61e",
"":"1f62b",
"":"1f630",
"":"1f612",
"":"1f63b",
"":"1f63c",
"":"1f61c",
"":"1f60a",
"":"1f63d",
"":"1f61a",
"":"1f637",
"":"1f633",
"":"1f63a",
"":"1f605",
"":"1f60c",
"":"1f639",
"":"263a",
"":"1f604",
"":"1f63f",
"":"1f62d",
"":"1f628",
"":"1f64e",
"":"1f4ab",
"":"1f631",
"":"1f62a",
"":"1f60f",
"":"1f613",
"":"1f625",
"":"1f609",
"":"1f645",
"":"1f646",
"":"1f647",
"(/_＼)":"1f648",
"(・×・)":"1f64a",
"|(・×・)|":"1f649",
"":"270b",
"":"1f64c",
"":"1f64f",
"":"1f3e1",
"":"1f3e2",
"":"1f3e3",
"":"1f3e5",
"":"1f3e6",
"":"1f3e7",
"":"1f3e8",
"":"1f3e9",
"":"1f3ea",
"":"1f3eb",
"":"26ea",
"":"26f2",
"":"1f3ec",
"":"1f3ef",
"":"1f3f0",
"":"1f3ed",
"":"1f6a2",
"":"1f376",
"":"1f5fb",
"":"1f5fc",
"":"1f5fd",
"[日本地図]":"1f5fe",
"[モアイ]":"1f5ff",
"":"1f45f",
"":"1f460",
"":"1f461",
"":"1f462",
"[メガネ]":"1f453",
"":"1f45a",
"[ジーンズ]":"1f456",
"":"1f451",
"":"1f454",
"":"1f452",
"":"1f457",
"":"1f458",
"":"1f459",
"[財布]":"1f45b",
"":"1f45c",
"[ふくろ]":"1f45d",
"":"1f4b5",
"":"1f4b1",
"":"1f4c8",
"[カード]":"1f4b3",
"￥":"1f4b4",
"[飛んでいくお金]":"1f4b8",
"":"1f1e81f1f3",
"":"1f1e91f1ea",
"":"1f1ea1f1f8",
"":"1f1eb1f1f7",
"":"1f1ec1f1e7",
"":"1f1ee1f1f9",
"":"1f1ef1f1f5",
"":"1f1f01f1f7",
"":"1f1f71f1fa",
"":"1f1fa1f1f8",
"":"1f525",
"[懐中電灯]":"1f526",
"[レンチ]":"1f527",
"":"1f528",
"[ネジ]":"1f529",
"[包丁]":"1f52a",
"":"1f52b",
"":"1f52f",
"":"1f530",
"":"1f531",
"":"1f489",
"":"1f48a",
"":"1f170",
"":"1f171",
"":"1f18e",
"":"1f17e",
"":"1f380",
"":"1f4e6",
"":"1f382",
"":"1f384",
"":"1f385",
"":"1f38c",
"":"1f386",
"":"1f388",
"":"1f389",
"":"1f38d",
"":"1f38e",
"":"1f393",
"":"1f392",
"":"1f38f",
"":"1f387",
"":"1f390",
"":"1f383",
"[オメデトウ]":"1f38a",
"[七夕]":"1f38b",
"":"1f391",
"[ポケベル]":"1f4df",
"":"1f4de",
"":"1f4f1",
"":"1f4f2",
"":"1f4d1",
"":"1f4e0",
"":"1f4e7",
"":"1f4eb",
"":"1f4ee",
"[新聞]":"1f4f0",
"":"1f4e2",
"":"1f4e3",
"":"1f4e1",
"[送信BOX]":"1f4e4",
"[受信BOX]":"1f4e5",
"[ABCD]":"1f520",
"[abcd]":"1f521",
"[1234]":"1f522",
"[記号]":"1f523",
"[ABC]":"1f524",
"[ペン]":"2712",
"":"1f4ba",
"":"1f4bb",
"[クリップ]":"1f4ce",
"":"1f4bc",
"":"1f4be",
"":"1f4bf",
"":"1f4c0",
"":"2702",
"[画びょう]":"1f4cc",
"[カレンダー]":"1f4c6",
"[フォルダ]":"1f4c2",
"":"1f4d2",
"[名札]":"1f4db",
"[スクロール]":"1f4dc",
"[グラフ]":"1f4c9",
"[定規]":"1f4cf",
"[三角定規]":"1f4d0",
"":"26be",
"":"26f3",
"":"1f3be",
"":"26bd",
"":"1f3bf",
"":"1f3c0",
"":"1f3c1",
"[スノボ]":"1f3c2",
"":"1f3c3",
"":"1f3c4",
"":"1f3c6",
"":"1f3c8",
"":"1f3ca",
"":"1f683",
"":"24c2",
"":"1f684",
"":"1f685",
"":"1f697",
"":"1f699",
"":"1f68c",
"":"1f68f",
"":"2708",
"":"26f5",
"":"1f689",
"":"1f680",
"":"1f6a4",
"":"1f695",
"":"1f69a",
"":"1f692",
"":"1f691",
"":"1f6a8",
"":"26fd",
"":"1f17f",
"":"1f6a5",
"":"26d4",
"":"2668",
"":"26fa",
"":"1f3a1",
"":"1f3a2",
"":"1f3a4",
"":"1f4f9",
"":"1f3a6",
"":"1f3a7",
"":"1f3a8",
"":"1f3ad",
"[イベント]":"1f3aa",
"":"1f3ab",
"":"1f3ac",
"[ゲーム]":"1f3ae",
"":"1f004",
"":"1f3af",
"":"1f3b0",
"":"1f3b1",
"[サイコロ]":"1f3b2",
"[ボーリング]":"1f3b3",
"[花札]":"1f3b4",
"[ジョーカー]":"1f0cf",
"":"1f3b5",
"":"1f3bc",
"":"1f3b7",
"":"1f3b8",
"[ピアノ]":"1f3b9",
"":"1f3ba",
"[バイオリン]":"1f3bb",
"":"303d",
"":"1f4f7",
"":"1f4fa",
"":"1f4fb",
"":"1f4fc",
"":"1f48b",
"":"1f48c",
"":"1f48d",
"":"1f48e",
"":"1f48f",
"":"1f490",
"":"1f491",
"":"1f492",
"":"1f51e",
"":"a9",
"":"ae",
"":"2122",
"[ｉ]":"2139",
"":"2320e3",
"":"3120e3",
"":"3220e3",
"":"3320e3",
"":"3420e3",
"":"3520e3",
"":"3620e3",
"":"3720e3",
"":"3820e3",
"":"3920e3",
"":"3020e3",
"[10]":"1f51f",
"":"1f4f6",
"":"1f4f3",
"":"1f4f4",
"":"1f354",
"":"1f359",
"":"1f370",
"":"1f35c",
"":"1f35e",
"":"1f373",
"":"1f366",
"":"1f35f",
"":"1f361",
"":"1f358",
"":"1f35a",
"":"1f35d",
"":"1f35b",
"":"1f362",
"":"1f363",
"":"1f371",
"":"1f372",
"":"1f367",
"[肉]":"1f356",
"[なると]":"1f365",
"[やきいも]":"1f360",
"[ピザ]":"1f355",
"[チキン]":"1f357",
"[アイスクリーム]":"1f368",
"[ドーナツ]":"1f369",
"[クッキー]":"1f36a",
"[チョコ]":"1f36b",
"[キャンディ]":"1f36d",
"[プリン]":"1f36e",
"[ハチミツ]":"1f36f",
"[エビフライ]":"1f364",
"":"1f374",
"":"2615",
"":"1f379",
"":"1f37a",
"":"1f375",
"":"1f37b",
"":"2934",
"":"2935",
"":"2196",
"":"2199",
"⇔":"2194",
"↑↓":"1f503",
"":"2b06",
"":"2b07",
"":"27a1",
"":"1f519",
"":"25b6",
"":"25c0",
"":"23e9",
"":"23ea",
"▲":"1f53c",
"▼":"1f53d",
"":"2b55",
"":"2716",
"":"2757",
"！？":"2049",
"！！":"203c",
"":"2753",
"":"2754",
"":"2755",
"～":"27b0",
"":"27bf",
"":"2764",
"":"1f49e",
"":"1f494",
"":"1f497",
"":"1f498",
"":"1f499",
"":"1f49a",
"":"1f49b",
"":"1f49c",
"":"1f49d",
"":"1f49f",
"":"2665",
"":"2660",
"":"2666",
"":"2663",
"":"1f6ac",
"":"1f6ad",
"":"267f",
"[旗]":"1f6a9",
"":"26a0",
"":"1f6b2",
"":"1f6b6",
"":"1f6b9",
"":"1f6ba",
"":"1f6c0",
"":"1f6bb",
"":"1f6bd",
"":"1f6be",
"":"1f6bc",
"[ドア]":"1f6aa",
"[禁止]":"1f6ab",
"[チェックマーク]":"2705",
"[CL]":"1f191",
"":"1f192",
"[FREE]":"1f193",
"":"1f194",
"":"1f195",
"[NG]":"1f196",
"":"1f197",
"[SOS]":"1f198",
"":"1f199",
"":"1f19a",
"":"1f201",
"":"1f202",
"[禁]":"1f232",
"":"1f233",
"[合]":"1f234",
"":"1f235",
"":"1f236",
"":"1f21a",
"":"1f237",
"":"1f238",
"":"1f239",
"":"1f22f",
"":"1f23a",
"":"3299",
"":"3297",
"":"1f250",
"[可]":"1f251",
"[＋]":"2795",
"[－]":"2796",
"[÷]":"2797",
"":"1f4a1",
"":"1f4a2",
"":"1f4a3",
"":"1f4a4",
"[ドンッ]":"1f4a5",
"":"1f4a7",
"":"1f4a8",
"":"1f4a9",
"":"1f4aa",
"[フキダシ]":"1f4ac",
"":"2747",
"":"2734",
"":"2733",
"":"1f534",
"":"25fc",
"":"1f539",
"":"2b50",
"[花丸]":"1f4ae",
"[100点]":"1f4af",
"←┘":"21a9",
"└→":"21aa",
"":"1f50a",
"[電池]":"1f50b",
"[コンセント]":"1f50c",
"":"1f50e",
"":"1f510",
"":"1f513",
"":"1f511",
"":"1f514",
"[ラジオボタン]":"1f518",
"[ブックマーク]":"1f516",
"[リンク]":"1f517",
"[end]":"1f51a",
"[ON]":"1f51b",
"[SOON]":"1f51c",
"":"1f51d",
"":"270a",
"":"270c",
"":"1f44a",
"":"1f44d",
"":"261d",
"":"1f446",
"":"1f447",
"":"1f448",
"":"1f449",
"":"1f44b",
"":"1f44f",
"":"1f44c",
"":"1f44e",
"":"1f450"
};
String.prototype.emoji=function(){
for(var f=this.toString(),d=0;d<a.length;d++){
for(;a[d].cn&&-1!=f.indexOf(a[d].cn);)f=f.replace(a[d].cn,b.sprintf(a[d].style));
for(;a[d].hk&&-1!=f.indexOf(a[d].hk);)f=f.replace(a[d].hk,b.sprintf(a[d].style));
for(;a[d].us&&-1!=f.indexOf(a[d].us);)f=f.replace(a[d].us,b.sprintf(a[d].style));
for(;a[d].code&&-1!=f.indexOf(a[d].code);)f=f.replace(a[d].code,b.sprintf(a[d].style));
for(;a[d].web_code&&-1!=f.indexOf(a[d].web_code);)f=f.replace(a[d].web_code,b.sprintf(a[d].style));
for(;a[d].emoji&&-1!=f.indexOf(a[d].emoji);)f=f.replace(a[d].emoji,b.sprintf(a[d].style));
}
for(var i in c)for(;-1!=f.indexOf(i);)f=f.replace(i,e.sprintf(c[i]));
return f;
};
});define("biz_web/ui/input/lentips.js",[],function(){
"use strict";
var n="&nbsp;<em>/</em>&nbsp;",t=function(t){
var e=t.input,i=t.tip,l=t.className,a=t.trim||!0,s=t.seg||n,m=t.maxlimit,u=function(){
var n=e.val();
a&&(n=$.trim(n)),i.html(n.length+s+m),n.length>m?i.addClass(l):i.removeClass(l),
t.callback&&t.callback(n.length>m,{
len:n.length,
maxlimit:m,
value:n
});
};
u(),e.keyup(function(){
u();
});
};
return t;
});define("common/qq/events.js",[],function(t,n,a){
"use strict";
function i(t){
this.data=t===!0?window.wx.events||{}:{};
}
i.prototype={
on:function(t,n){
return this.data[t]=this.data[t]||[],this.data[t].push(n),this;
},
off:function(t,n){
return this.data[t]&&this.data[t].length>0&&(n&&"function"==typeof n?$.each(this.data[t],function(a,i){
i===n&&this.data[t].splice(a,1);
}):this.data[t]=[]),this;
},
trigger:function(t){
var n=arguments;
return this.data[t]&&this.data[t].length>0&&$.each(this.data[t],function(t,a){
var i=a.apply(this,Array.prototype.slice.call(n,1));
return i===!1?!1:void 0;
}),this;
}
},a.exports=function(t){
return new i(t);
};
});define("biz_web/ui/dropdown.js",["biz_web/widget/dropdown.css","tpl/biz_web/ui/dropdown.html.js"],function(e){
"use strict";
function t(e){
e.render&&(e.renderHtml="",$.each(e.data,function(t,a){
e.renderHtml+=e.render(a);
})),e=$.extend(!0,{},d,e);
var t=this;
t.container=$(e.container),t.container.addClass(e.search?i+" search":i),this.isDisabled=e.disabled,
e.disabled?t.container.addClass("disabled"):t.container.removeClass("disabled"),
t.opt=e,t.container.html(template.compile(n)(e)).find(".jsDropdownList").hide(),
t.bt=t.container.find(".jsDropdownBt"),t.dropdown=t.container.find(".jsDropdownList"),
$.each(e.data,function(e,a){
$.data(t.dropdown.find(".jsDropdownItem")[e],"value",a.value),$.data(t.dropdown.find(".jsDropdownItem")[e],"name",a.name),
$.data(t.dropdown.find(".jsDropdownItem")[e],"item",a);
}),"undefined"!=typeof e.index&&0!==e.data.length&&(t.bt.find(".jsBtLabel").html(e.data[e.index].name||e.label),
t.value=e.data[e.index].value),t.bt.on("click",function(){
return a(),e.disabled||(t.dropdown.show(),t.container.addClass("open")),!1;
}),e.search&&t.bt.find(".jsBtLabel").on("keyup",function(e){
if(!t.disabled){
var a=$(this);
if(13==e.keyCode)t.value?(a.html(a.data("name")).removeClass("error"),t.dropdown.hide()):a.find("div").remove();else{
var n=a.html().trim(),d=[];
t.value=null,t.dropdown.show().find(".jsDropdownItem").each(function(){
var e=$(this);
e.hasClass("js_empty")||(e.data("name").indexOf(n)>-1?(e.parent().show(),d.push({
name:e.data("name"),
value:e.data("value")
})):e.parent().hide());
}),0==d.length?0==t.dropdown.find(".js_empty").length&&t.dropdown.append('<li class="jsDropdownItem js_empty empty">未找到"'+n+'"</li>'):(t.dropdown.find(".js_empty").remove(),
1==d.length&&(d[0].name==n?a.removeClass("error"):a.data("name",d[0].name),t.value=d[0].value));
}
}
}).on("blur",function(){
if(!t.disabled){
var a=$(this);
t.value?$(this).html()!=$(this).data("name")&&(a.addClass("error"),t.value=null):""!=a.html()?a.addClass("error"):(a.html(e.label).removeClass("error"),
t.value=null);
}
}).on("focus",function(){
if(!t.disabled){
var a=$(this),n=$(this).html().trim();
n==e.label&&a.html("").removeClass("error"),""==n&&a.removeClass("error"),t.dropdown.show(),
t.container.addClass("open");
}
}),$(document).on("click",a),t.dropdown.on("click",".jsDropdownItem",function(){
if("disabled"==$(this).attr("disabled"))return!1;
var a=$(this).data("value"),n=$(this).data("name"),d=$(this).data("index"),i=$(this).parents(".jsDropdownList").siblings(".jsDropdownBt").find(".jsBtLabel").attr("data-value");
if((!t.value||t.value&&t.value!=a)&&(t.value=a,t.name=n,e.callback&&"function"==typeof e.callback)){
var o=e.callback(a,n,d,$(this).data("item"),i)||n,s=$(this).data("value");
e.search?t.bt.find(".jsBtLabel").html(o).data("name",o).removeClass("error"):t.bt.find(".jsBtLabel").attr("data-value",s).html(o);
}
t.dropdown.hide();
});
}
function a(){
$(".jsDropdownList").hide(),$(".dropdown_menu").each(function(){
!$(this).hasClass("dropdown_checkbox")&&$(this).removeClass("open");
});
}
e("biz_web/widget/dropdown.css");
var n=e("tpl/biz_web/ui/dropdown.html.js"),d={
label:"请选择",
data:[],
callback:$.noop,
render:$.noop,
delay:500,
disabled:!1,
search:!1
},i="dropdown_menu";
return t.prototype={
selected:function(e,t){
var a=this;
if("number"==typeof e){
if(this.opt.data&&this.opt.data[e]){
var n=this.opt.data[e].name,d=this.opt.data[e].value;
0==t||this.dropdown.find(".jsDropdownItem:eq("+e+")").trigger("click",d),this.bt.find(".jsBtLabel").html(n);
}
}else $.each(this.opt.data,function(n,i){
return e==i.value||e==i.name?(0==t||a.dropdown.find(".jsDropdownItem:eq("+n+")").trigger("click",d),
a.bt.find(".jsBtLabel").html(i.name),!1):void 0;
});
return this;
},
reset:function(){
return this.bt.find(".jsBtLabel").html(this.opt.label),this.value=null,this;
},
hidegreater:function(e){
var t=this;
return"number"==typeof e&&t.opt.data&&t.opt.data[e]&&(t.dropdown.find(".jsDropdownItem").show(),
t.dropdown.find(".jsDropdownItem:gt("+e+")").hide()),this;
},
destroy:function(){
return this.isDisabled&&this.container.removeClass("disabled"),this.container.children().remove(),
this.container.off(),this;
},
enable:function(){
return this.opt.disabled=!1,this.container.removeClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!0),
this;
},
disable:function(){
return this.opt.disabled=!0,this.container.addClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!1),
this;
}
},t;
});define("user/group_cgi_tag.js",["common/wx/Cgi.js","biz_web/lib/json.js","common/wx/Tips.js"],function(e,i,t){
"use strict";
var r=e("common/wx/Cgi.js"),n=(e("biz_web/lib/json.js"),e("common/wx/Tips.js"));
t.exports={
add:function(e,i,t,a){
r.post({
url:"/cgi-bin/user_tag",
data:{
action:"create_group",
group_name:e
},
mask:!1
},function(e){
if(!e||!e.base_resp)return void n.err("添加失败");
var s=1*e.base_resp.ret;
switch(s){
case 0:
"function"==typeof i&&i(e);
break;

case 213001:
var o=t.$pop.find(".js_tips, .js_tag_putOn_tips");
return o.text("该标签名字已存在，请重新输入").show(),t.$pop.find(".js_tag_putOn_add_input").enable(),
void t.$pop.find(".jsPopoverBt:eq(0)").btn(!0);

default:
r.handleRet(e,{
id:64462,
key:63,
url:"/cgi-bin/user_tag?action=create_group",
msg:"添加失败"
});
}
t&&!a&&t.remove();
});
},
rename:function(e,i,t,a){
r.post({
url:"/cgi-bin/user_tag",
data:{
action:"rename_group",
groupid:e,
group_name:i
},
mask:!1
},function(e){
if(!e||!e.base_resp)return void n.err("修改失败");
var i=e.base_resp.ret;
switch(i){
case 0:
n.suc("修改成功"),"function"==typeof t&&t(e);
break;

case 213001:
var s=a.$pop.find(".js_tips");
return s.text("该标签名字已存在，请重新输入").show(),void a.$pop.find(".jsPopoverBt:eq(0)").btn(!0);

default:
r.handleRet(e,{
id:64462,
key:64,
url:"/cgi-bin/user_tag?action=rename_group",
msg:"修改失败"
});
}
a&&!a.$pop.hasClass("js_putOn")&&a.remove();
});
},
del:function(e,i,t){
r.post({
url:"/cgi-bin/user_tag",
data:{
action:"del_group",
groupid:e
},
mask:!1
},function(e){
if(!e||!e.base_resp)return void n.err("删除失败");
var a=e.base_resp.ret;
0==a?(n.suc("删除成功"),"function"==typeof i&&i(e)):r.handleRet(e,{
id:64462,
key:65,
url:"/cgi-bin/user_tag?action=del_group",
msg:"删除失败"
}),t&&t.remove();
});
},
get_user:function(e,i){
var t={
limit:20,
offset:0,
backfoward:1
};
if(e=$.extend(t,e),-1==e.groupid){
var a="/cgi-bin/user_tag?action=get_black_list&limit="+e.limit+"&offset="+e.offset+"&backfoward="+e.backfoward;
e.begin_openid&&e.begin_create_time&&(a+="&begin_openid="+e.begin_openid+"&begin_create_time="+e.begin_create_time),
r.get({
url:a,
mask:!1
},function(e){
if(!e||!e.base_resp)return void n.err("获取用户列表失败");
var t=e.base_resp.ret;
0==t?"function"==typeof i&&i(e):r.handleRet(e,{
id:64462,
key:66,
url:"/cgi-bin/user_tag?action=get_black_list",
msg:"获取用户列表失败"
});
});
}else e=$.extend({
begin_openid:-1,
begin_create_time:-1
},e),r.get({
url:"/cgi-bin/user_tag?action=get_user_list&groupid="+e.groupid+"&begin_openid="+e.begin_openid+"&begin_create_time="+e.begin_create_time+"&limit="+e.limit+"&offset="+e.offset+"&backfoward="+e.backfoward,
mask:!1
},function(e){
if(!e||!e.base_resp)return void n.err("获取用户列表失败");
var t=e.base_resp.ret;
0==t?"function"==typeof i&&i(e):r.handleRet(e,{
id:64462,
key:67,
url:"/cgi-bin/user_tag?action=get_user_list",
msg:"获取用户列表失败"
});
});
},
search:function(e,i){
var t={
pagesize:20,
pageidx:0
};
e=$.extend(t,e),r.post({
url:"/cgi-bin/user_tag?action=search",
data:e,
mask:!1
},function(e){
if(!e||!e.base_resp)return void n.err("系统错误，请稍后重试");
var t=e.base_resp.ret;
0==t?"function"==typeof i&&i(e):r.handleRet(e,{
id:64462,
key:68,
url:"/cgi-bin/user_tag?action=search",
msg:"系统错误，请稍后重试"
});
});
}
};
});define("user/user_cgi_tag.js",["common/wx/Tips.js","common/wx/Cgi.js"],function(e,a,r){
"use strict";
var t={
add:"/cgi-bin/user_tag?action=batch_set_tag",
del:"/cgi-bin/user_tag?action=del_tag",
remark:"/cgi-bin/user_tag?action=add_mark",
getBuddy:"/cgi-bin/user_tag?action=get_fans_info",
add_black:"/cgi-bin/user_tag?action=set_black",
del_black:"/cgi-bin/user_tag?action=cancle_black"
},n=e("common/wx/Tips.js"),o=e("common/wx/Cgi.js");
window.location&&window.location.pathname&&("/merchant/rewardstat"==window.location.pathname?(t.add_black+="&source=1",
t.del_black+="&source=1"):"/misc/appmsgcomment"==window.location.pathname?(t.add_black+="&source=2",
t.del_black+="&source=2"):"/cgi-bin/user_tag"==window.location.pathname?(t.add_black+="&source=3",
t.del_black+="&source=3"):"/cgi-bin/message"==window.location.pathname&&(t.add_black+="&source=4",
t.del_black+="&source=4")),r.exports={
del_tag:function(e,a,r,i){
o.post({
mask:!1,
url:t.del,
data:{
user_openid:e,
groupid_list:a
}
},function(e){
if(!e||!e.base_resp)return void n.err("修改失败");
var a=1*e.base_resp.ret;
return 0!==a?void o.handleRet(e,{
id:64462,
key:74,
url:t.del,
msg:"修改失败"
}):(n.suc("修改成功"),"function"==typeof r&&r(e),void(i&&i.remove()));
});
},
add_tag:function(e,a,r,i,d){
o.post({
mask:!1,
url:t.add,
data:{
user_openid_list:e,
groupid_list:a,
cexpandcol:r
}
},function(e){
if(!e||!e.base_resp)return void n.err("修改失败");
var a=1*e.base_resp.ret;
return 0!==a?void o.handleRet(e,{
id:64462,
key:75,
url:t.add,
msg:"修改失败"
}):(n.suc("修改成功"),"function"==typeof i&&i(e),void(d&&d.remove()));
});
},
change_remark:function(e,a,r,i){
o.post({
mask:!1,
url:t.remark,
data:{
user_openid:e,
mark_name:a
}
},function(e){
if(!e||!e.base_resp)return void n.err("修改失败");
var a=1*e.base_resp.ret;
return 0!==a?void o.handleRet(e,{
id:64462,
key:76,
url:t.remark,
msg:"修改失败"
}):(n.suc("修改成功"),"function"==typeof r&&r(e),void(i&&i.remove()));
});
},
getBuddyInfo:function(e,a){
o.post({
mask:!1,
url:t.getBuddy,
data:{
lang:wx.cgiData.lang||"zh_CN",
user_openid:e
}
},function(r){
"function"==typeof a&&a(r,e),r&&r.base_resp&&r.base_resp.ret&&o.handleRet(r,{
id:64462,
key:77,
url:t.getBuddy,
showMsg:!1
});
});
},
add_black:function(e,a,r,i){
var d={
user_openid_list:e
};
r&&(d.is_harassment=1),o.post({
mask:!1,
url:t.add_black,
data:d
},function(e){
if(!e||!e.base_resp)return void n.err("加入黑名单失败");
var r=1*e.base_resp.ret;
return 0!==r?void o.handleRet(e,{
id:64462,
key:78,
url:t.add_black,
msg:"加入黑名单失败"
}):(n.suc("加入黑名单成功"),"function"==typeof a&&a(e),void(i&&i.remove()));
});
},
del_black:function(e,a,r){
o.post({
mask:!1,
url:t.del_black,
data:{
user_openid_list:e
}
},function(e){
if(!e||!e.base_resp)return void n.err("移除黑名单失败");
var i=1*e.base_resp.ret;
return 0!==i?void o.handleRet(e,{
id:64462,
key:79,
url:t.del_black,
msg:"移除黑名单失败"
}):(n.suc("移除黑名单成功"),"function"==typeof a&&a(e),void(r&&r.remove()));
});
}
};
});define("common/wx/RichBuddy_tag.js",["common/qq/emoji.js","tpl/RichBuddy/RichBuddyLayout_tag.html.js","tpl/RichBuddy/RichBuddyContent_tag.html.js","tpl/RichBuddy/RichBuddyGroup_tag.html.js","tpl/RichBuddy/RichBuddy_addToBlackList.html.js","widget/rich_buddy.css","common/wx/Tips.js","common/qq/Class.js","common/wx/remark.js","common/wx/popover.js","user/user_cgi_tag.js","user/group_cgi_tag.js","common/qq/events.js","biz_web/ui/checkbox.js","common/wx/inputCounter.js","biz_common/moment.js"],function(e,n,t){
"use strict";
e("common/qq/emoji.js");
var i=e("tpl/RichBuddy/RichBuddyLayout_tag.html.js"),o=e("tpl/RichBuddy/RichBuddyContent_tag.html.js"),s=e("tpl/RichBuddy/RichBuddyGroup_tag.html.js"),d=e("tpl/RichBuddy/RichBuddy_addToBlackList.html.js"),r=template.compile(o),a=(e("widget/rich_buddy.css"),
e("common/wx/Tips.js")),c=e("common/qq/Class.js"),u=(e("common/wx/remark.js"),e("common/qq/emoji.js"),
e("common/wx/popover.js")),m=e("user/user_cgi_tag.js"),h=e("user/group_cgi_tag.js"),_=e("common/qq/events.js"),l=e("biz_web/ui/checkbox.js"),p=e("common/wx/inputCounter.js"),f=_(!0),g={},j=[],k=!1,v=!1,b=20,x=5,w=e("biz_common/moment.js"),y=function(e){
var n=e.data.user_info,t=0,i=e.data.uid,o=e.data.$dom,d=function(e){
var n=$(e.target);
if("checked"===n.attr("checked"))_.find(".js_tag_putOn_maxTips").hide(),t--,v.find('input[type="checkbox"]').checkbox().setall(!0);else if(t===b){
_.find(".js_tag_putOn_maxTips").show(),_.find(".jsPopOverContent").scrollTop(1e3);
var i=new Image;
i.src="//mp.weixin.qq.com/mp/jsmonitor?idkey=27826_10_1",e.preventDefault(),$(e.target).removeAttr("checked").parent().removeClass("selected");
}else _.find(".js_tag_putOn_maxTips").hide(),t++;
},r=function(){
for(var e=[],i=0;i<j.length;i++)j[i].group_id>0&&e.push({
name:B(j[i].group_name),
cnt:j[i].group_cnt,
create_time:j[i].group_create_time,
id:j[i].group_id
});
v.empty();
for(var i=0;i<e.length;i++)e[i].name&&e[i].name.length>0&&1!=e[i].id&&new l({
container:v,
label:e[i].name,
name:e[i].id,
type:"checkbox"
});
v.find('input[type="checkbox"]').each(function(){
$(this).val($(this).attr("name"));
}).on("click",d).checkbox();
for(var o=n.user_group_id,i=0;i<o.length;i++)v.find('input[name="'+o[i]+'"]').trigger("click");
t=o.length;
},a=function(t){
for(var o=function(){
wx&&wx.renderPage&&wx.renderPage(),c.remove(),e.data.self.hide(),$(".rich_buddy").fadeOut();
},s=v.find('input[type="checkbox"]').checkbox(),d=s.values(),r=n.user_group_id,a=[],u=[],h=0;h<r[h];h++)r[h]=r[h].toString();
for(var h=0;h<r.length;h++)-1===d.indexOf(r[h])&&a.push(r[h]);
for(var h=0;h<d.length;h++)-1===r.indexOf(d[h])&&u.push(d[h]);
if(u.length>x||a.length>x)return _.find(".js_tag_putOn_maxTips").text("每次同时更改标签数量不能超过5个").show(),
_.find(".jsPopOverContent").scrollTop(1e3),void t.btn(!0);
if(s.setall(!1),0===a.length){
if(0===u.length)return wx&&wx.renderPage&&wx.renderPage(),c.remove(),e.data.self.hide(),
void $(".rich_buddy").fadeOut();
m.add_tag(i,u.join("|"),e.data.scene,o,c);
}else 0===u.length?m.del_tag(i,a.join("|"),o,c):m.del_tag(i,a.join("|"),function(){
m.add_tag(i,u.join("|"),e.data.scene,o);
},c);
},c=new u({
dom:o,
className:"tag_popover",
content:s,
hideIfBlur:!0,
isToggle:!0,
buttons:[{
text:"确定",
click:function(){
_.find(".btn_primary").btn(!1).off(),f.off("click"),a(_.find(".btn_primary"));
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onShow:function(){
k=!0;
},
onHide:function(){
k=!1,this.remove(),e.data.self.hide();
}
}),_=c.$pop,f=_.find(".js_tag_putOn_add_btn"),g=_.find(".js_tag_input_wrap"),v=_.find(".js_tag_putOn_tags"),w=_.find(".js_tag_putOn_add_input"),y=_.find(".js_tag_putOn_add_a"),R=_.find(".js_tag_putOn_cancel_a"),T=_.find(".js_tag_putOn_tips"),O=(r(v),
new p(w,{
maxLength:6,
showCounter:!0,
useGBKLength:!0,
GBKBased:!0
}));
_.find(".js_counter").hide(),f.on("click",function(){
$(this).hide(),g.show(),w.enable().val(""),T.hide(),w.focus().trigger("keyup");
}).show(),w.on("keyup",function(){
O.getCount()>6?T.text("不得超过6个汉字或12个字符").show():O.getCount()>0&&T.hide();
}),y.off().on("click",function(){
var e=w.val();
return w.val()?O.getCount()>6?void T.text("不得超过6个汉字或12个字符").show():(w.disable(),
void h.add(e,function(n){
g.hide(),f.show();
var i=new l({
container:v,
label:B(e),
name:n.groupid,
type:"checkbox"
});
i.$input.val(n.add_groupid).on("click",d),b>t&&i.$input.trigger("click"),wx&&wx.renderPage&&wx.renderPage(),
j.push({
group_cnt:0,
group_id:n.add_groupid,
group_name:e
});
},c,!0)):void T.text("请输入标签名称").show();
}),R.click(function(){
f.show(),g.hide(),T.hide();
}),k=!0;
},B=function(e){
return $("<div></div>").text(e).html();
},R=c.declare({
$element:null,
$content:null,
hideTimer:null,
namespace:".RichBuddy",
options:{},
_init:function(){
g={},$(".rich_buddy").remove();
var e=function(e,n){
for(var t="",i=0,o=0;o<n.length;o++)-1!=e.user_group_id.indexOf(n[o].group_id)&&3>i&&(t+='<span class="dib user_tag">'+B(n[o].group_name)+"</span>",
i++);
return t;
},n=this.options.id,t=this;
t._unbindEvent(),t.$element=$(i).appendTo(document.body),t.$content=t.$element.find(".buddyRichContent"),
t.$loading=t.$element.find(".loadingArea"),t._showLoading(),m.getBuddyInfo(n,function(i,o){
if(!i||!i.base_resp)return void a.err("系统出错，请稍后重试");
if(0==i.base_resp.ret){
var s=i.user_list.user_info_list[0];
s.user_name="undefined"==typeof s.user_name?"未关注用户":s.user_name?s.user_name.emoji():"",
s.group_content=e(s,i.group_info.group_info_list),s.group_len=s.user_group_id.length,
void 0===s.user_remark&&(s.hide_group=!0),s.user_remark=B(s.user_remark),-1!=s.user_group_id.indexOf(1)&&(s.is_black=!0),
1==s.user_in_blacklist&&(s.is_black=!0),g[n]=s,j=i.group_info.group_info_list,s.user_head_img=s.user_head_img||"http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiamT5wyGSOdQic96mUmXf8yJypIeHLvw5iaRjO79tyh1iaD42d7YPFnS4jjWb17FgYcf28/0",
s.user_comment_cnt=s.user_comment_cnt,s.user_msg_cnt=s.user_msg_cnt||0,"undefined"!=typeof s.user_reward_money&&(s.user_reward_money=((s.user_reward_money||0)/100).toFixed(2)),
s.user_create_time&&(s.user_create_time=w.unix(s.user_create_time).format("YYYY-MM-DD")),
o==t.options.id&&(t._hideLoading(),t.$content.html(r(s)),t._bindEvent());
}else a.err("系统出错，请稍后重试");
});
},
_showLoading:function(){
this.$loading.show(),this.$content.hide();
},
_hideLoading:function(){
this.$loading.hide(),this.$content.show();
},
_bindEvent:function(){
var e=this,n=this.options,t=g[n.id];
if(t){
this.$element.bind("mouseover"+this.namespace,function(){
clearTimeout(e.hideTimer),e.hideTimer=null,e.$element.show();
}).bind("mouseout"+this.namespace,function(){
e._mouseout();
});
var i=this.$element;
i.find(".js_remarkNameBox").hide(),this.$element.find(".js_changeRemark").bind("click"+this.namespace,function(){
var e,t;
$(this).hide(),i.find(".js_remarkNameBox").show(),i.find(".js_remarkName").text()?(e=i.find(".js_remarkName").text(),
i.find(".js_remarkName_input").val(e),i.find(".js_remarkName_input").select()):i.find(".nickName .frm_label").text()&&(t=i.find(".nickName .frm_label").text().replace(/<span.*<\/span>/,""),
i.find(".js_remarkName_input").val(t),i.find(".js_remarkName_input").select()),i.find(".js_remarkName").hide();
var o=new p(i.find(".js_remarkName_input"),{
maxLength:30,
showCounter:!0
});
i.find(".js_remarkName_input").on("blur",function(){
$(this).unbind();
var t=i.find(".js_remarkName_input").val();
t.length>30?a.err("备注名不能超过30个字"):e!=t?m.change_remark(n.id,t,function(){
f.trigger("Remark:changed",n.id,(t+"").html(!0));
}):a.suc("修改成功"),i.find(".js_remarkName").show(),i.find(".js_changeRemark").show(),
o.$inputBox.hide();
});
}),f.on("Remark:changed",function(n,t){
g[n]&&(g[n].user_remark=t),e.$element.find(".js_remarkName").html(t);
}),this.$element.find(".js_buddy_tags_btn").on("click",{
uid:n.id,
$dom:this.$element.find(".js_buddy_tags_btn"),
user_info:$.extend({},g[e.options.id],!0),
self:this,
scene:2
},y),this.$element.find(".js_popAddToBlackList").click(function(){
var n=$(this);
1==n.data("black")?(new u({
dom:n,
content:"确认移出黑名单？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
m.del_black(n.data("id"),function(){
location.reload();
}),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onShow:function(){
v=!0;
},
onHide:function(){
v=!1,this.remove(),e.hide();
}
}),v=!0):(new u({
dom:n,
content:d,
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
var e=this;
m.add_black(n.data("id"),function(){
location.reload();
},e._checked),this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
this.hide();
}
}],
onShow:function(){
var e=this;
this.$pop.find(".js_checkbox").checkbox({
type:"checkbox",
onChanged:function(n){
e._checked=n.prop("checked")?1:0;
}
}),v=!0;
},
onHide:function(){
v=!1,this.remove(),e.hide();
}
}).show(),v=!0);
}),g={};
}
},
_unbindEvent:function(){
if(this.$element){
var e=this.namespace;
this.$element.find(".js_changeRemark").unbind(e),this.$element.unbind(e),this.$element.stop(),
this.$element.css("opacity",1),this.$element.show();
}
},
_mouseout:function(){
var e=this;
v||k||e.hideTimer||$(".tag_popover").is(":visible")||(e.hideTimer=setTimeout(function(){
!e.$element||k||v||$(".tag_popover").is(":visible")||(e.$element.fadeOut(),e.hideTimer=null);
},1e3));
},
show:function(e){
this.options.id;
e&&(this.options=e),clearTimeout(this.hideTimer),this.hideTimer=null,this._init(),
e.position&&(e.position.top=e.position.top-12,e.position.left=e.position.left-2,
this.$element.css(e.position)),this.$element.show(),k=!1,v=!1;
},
hide:function(){
this._mouseout();
}
});
t.exports=R;
});define("common/wx/tooltips.js",["tpl/tooltips.html.js"],function(o,t,n){
"use strict";
var i={
position:{},
container:"",
type:"hover",
buttons:[],
delay:300,
disabled:!1,
reposition:!1,
container_close:!1,
parentClass:"",
container_mode:"absolute"
},s=wx.T,e=o("tpl/tooltips.html.js"),c="btn_disabled",p="hover",h="show",l=function(o){
if(this.options=o=$.extend(!0,{},i,o),this.$container=$(this.options.container),
this.$container&&0!=this.$container.length){
var t=this.$container.offset(),n=this.$container.height(),l=this.options.position.left||this.$container.data("x")||0,a=n+(this.options.position.top||this.$container.data("y")||0);
this.options.offset={
left:t.left+l,
top:t.top+a,
left_x:l,
top_y:a
},!o.content&&(o.content=this.$container.data("tips")||""),this.$dom=$(s(e,o)).appendTo("body"),
this.options.disabled&&this.$container.addClass(c);
var d=this,f=this.options.type===p||"click"===this.options.type?this.options.type:p;
if(f==p){
var r=null;
this.$container.hover(function(){
d.options.onshow&&"function"==typeof d.options.onshow?d.options.onshow.apply(d):!d.options.disabled&&d.show();
},function(){
r=window.setTimeout(function(){
d.hide();
},d.options.delay);
}),this.$dom.hover(function(){
r&&window.clearTimeout(r);
},function(){
d.hide();
});
}else this.$container.click(function(){
return d.options.disabled||d.options.onbeforeclick&&"function"==typeof d.options.onbeforeclick&&d.options.onbeforeclick.apply(d)===!1?void 0:(d.$dom.data(h)?d.options.onclose&&"function"==typeof d.options.onclose?d.options.onclose.apply(d):d.hide():d.options.onshow&&"function"==typeof d.options.onshow?d.options.onshow.apply(d):d.show(),
!1);
});
d.documentClickEvent=function(o){
d.$dom.find(o.target).length||(d.options.onclose&&"function"==typeof d.options.onclose?d.options.onclose.apply(d,[o]):d.hide());
},$(document).on("click",d.documentClickEvent),d.$dom.find(".js_popover_close").on("click",function(o){
return d.options.onclose&&"function"==typeof d.options.onclose?d.options.onclose.apply(d,[o]):d.hide(),
!1;
}),this.$dom.hide(),function(){
$.each(d.$dom.find(".js_btn"),function(o,t){
d.options.buttons[o].click&&$(t).on("click",function(){
d.options.buttons[o].click.apply(d);
});
});
}();
}
};
l.prototype={
constructor:l,
show:function(){
if(this.options.reposition){
var o=this.$container.offset(),t=o.left+this.options.offset.left_x,n=o.top+this.options.offset.top_y;
this.$dom.css({
left:t,
top:n
}).show();
}else this.$dom.show();
this.$dom.data(h,!0);
},
hide:function(){
this.$dom.hide(),this.$dom.data(h,!1);
},
enable:function(){
return this.options.disabled=!1,this.$container.removeClass(c),this;
},
disable:function(){
return this.options.disabled=!0,this.$container.addClass(c),this;
},
destroy:function(){
this.$dom.remove(),$(document).off("click",this.documentClickEvent);
}
},n.exports=l;
});define("common/wx/top.js",["tpl/top.html.js"],function(a,e,t){
"use strict";
function i(a,e,t){
return this.dom=$(a),this.dom.addClass("title_tab"),e&&"string"==typeof e&&(e=[{
name:"",
url:"javascript:;",
className:"selected"
}]),$.each(e,function(a,e){
e.url=e.url&&[e.url,wx.data.param].join("")||"javascript:;";
}),this.dom.html(template.compile(n)({
data:e
})),t&&t.render&&"function"==typeof t.render?$.each(this.dom.find("li"),function(a,i){
t.render.apply($(i),[e[a],t&&t.data]);
}):this.dom.html(template.compile(n)({
data:e
})),this.dom.on("click",".top_item",function(){
$(this).addClass("selected").siblings().removeClass("selected");
}),this;
}
var n=a("tpl/top.html.js"),s=wx.acl;
i.prototype.selected=function(a){
this.dom.find(".js_top").removeClass("selected"),"number"==typeof a?this.dom.find(".js_top:eq("+a+")").addClass("selected"):this.dom.find(".js_top[data-id="+a+"]").addClass("selected");
},i.DATA={
setting:[{
id:"info",
name:"帐号详情",
url:"/cgi-bin/settingpage?t=setting/index&action=index"
},{
id:"function",
name:"功能设置",
url:"/cgi-bin/settingpage?t=setting/function&action=function"
}],
mass:[{
id:"send",
name:"新建群发消息",
url:"/cgi-bin/masssendpage?t=mass/send"
},{
id:"jurisdiction",
name:"授权申请",
acl:s&&s.msg_acl&&s.msg_acl.can_use_reprintapply_list,
url:"/cgi-bin/copyrightlib?action=reprint_article&begin=0&count=10&auth_status=0&lang=zh_CN"
}],
message:[{
id:"total",
name:"全部消息",
url:"/cgi-bin/message?t=message/list&count=20&day=7"
},{
id:"star",
name:"已收藏的消息",
url:"/cgi-bin/message?t=message/list&count=20&action=star"
},{
id:"search",
name:"搜索结果"
}],
media:[{
id:"media11",
name:"商品消息",
acl:s&&s.material_acl&&s.material_acl.can_commodity_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
},{
id:"media10",
name:"图文消息",
acl:s&&s.material_acl&&s.material_acl.can_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_card"
},{
id:"media2",
name:"图片",
acl:s&&s.material_acl&&s.material_acl.can_image_msg,
url:"/cgi-bin/filepage?type=2&begin=0&count=12&t=media/img_list"
},{
id:"media3",
name:"语音",
acl:s&&s.material_acl&&s.material_acl.can_voice_msg,
url:"/cgi-bin/filepage?type=3&begin=0&count=21&t=media/list"
},{
id:"media15",
name:"视频",
acl:s&&s.material_acl&&s.material_acl.can_video_msg,
url:"/cgi-bin/appmsg?begin=0&count=9&t=media/video_list&action=list_video&type=15"
},{
id:"product",
name:"商品",
acl:s&&s.product_acl&&s.product_acl.can_see_product,
url:"/cgi-bin/productmaterial?action=product_list"
}],
business:[{
id:"overview",
name:"数据概览",
url:"/merchant/business?t=business/overview&action=overview"
},{
id:"order",
name:"订单流水",
url:"/merchant/business?t=business/order&action=order"
},{
id:"info",
name:"商户信息",
url:"/merchant/business?t=business/info&action=info"
},{
id:"test",
name:"支付测试",
url:"/merchant/business?t=business/whitelist&action=whitelist"
},{
id:"rights",
name:"维权仲裁",
url:"/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
},{
id:"course",
name:"使用教程",
url:"/merchant/business?t=business/course&action=course"
}],
user:[{
id:"useradmin",
name:"已关注",
url:"/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
}],
statistics:{
user:[{
id:"summary",
name:"用户增长",
url:"/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
},{
id:"attr",
name:"用户属性",
url:"/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
}],
article:[{
id:"detail",
name:"图文群发",
url:"/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
},{
id:"analyse",
name:"图文统计",
url:"/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
}],
message:[{
id:"message",
name:"消息分析",
url:"/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
},{
id:"key",
name:"消息关键词",
url:"/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
}],
"interface":[{
id:"interface",
name:"接口分析",
url:"/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
}]
},
notification:[{
id:"notification",
name:"通知中心",
url:"/cgi-bin/frame?t=notification/index_frame"
}],
templateMessage:[{
id:"my_template",
name:"我的模版",
url:"/advanced/tmplmsg?action=list&t=tmplmsg/list"
},{
id:"template_message",
name:"模版库",
url:"/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
}],
assistant:[{
id:"mphelper",
name:"公众号助手",
url:"/misc/assistant?t=setting/mphelper&action=mphelper"
},{
id:"warning",
name:"接口告警",
url:"/misc/assistant?t=setting/warning&action=warning"
}],
shop:[{
id:"shopoverview",
name:"小店概况",
url:"/merchant/merchantstat?t=shop/overview&action=getoverview"
},{
id:"addGoods",
name:"添加商品",
url:"/merchant/goods?type=11&t=shop/precreate",
target:"_blank"
},{
id:"goodsManagement",
name:"商品管理",
url:"/merchant/goodsgroup?t=shop/category&type=1"
},{
id:"shelfManagement",
name:"货架管理",
url:"/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
},{
id:"orderManagement",
name:"订单管理",
url:"/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
},{
id:"deliverylist",
name:"运费管理",
url:"/merchant/delivery?action=globalfee&t=shop/delivery_global"
},{
id:"images",
name:"图片库",
url:"/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
}],
adClient:[{
id:"adclientreport",
name:"报表统计",
url:"/merchant/ad_client_report?t=ad_system/client_report&action=list"
},{
id:"adclientmanage",
name:"广告管理",
url:"/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
},{
id:"materialmanage",
name:"推广页管理",
url:"/merchant/ad_material?t=material/list&action=get_material_list"
},{
id:"adclientpay",
name:"财务管理",
url:"/cgi-bin/frame?nav=10026&t=ad_system/host_frame"
},{
id:"adservice",
name:"广告服务商",
acl:s&&s.ad_system&&s.ad_system.can_use_sp,
url:"/cgi-bin/frame?nav=10026&t=ad_system/client_service_frame"
}],
adHost:[{
id:"adhostreport",
name:"报表统计",
url:"/merchant/ad_host_report?t=ad_system/host_report"
},{
id:"adhostmanage",
name:"流量管理",
url:"/merchant/ad_host_manage?t=ad_system/host_manage"
},{
id:"adhostpay",
name:"财务管理",
url:"/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
}],
advanced:[{
id:"dev",
name:"日志查询",
url:"/advanced/advanced?action=log_home"
},{
id:"group-alert",
name:"接口报警",
url:"/advanced/advanced?action=alarm&t=advanced/alarm"
}],
cardticket:[{
id:"cardmgr",
name:"卡券管理",
url:"/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
},{
id:"permission",
name:"卡券核销",
url:"/merchant/carduse?action=listchecker&t=cardticket/permission"
},{
id:"carduse",
name:"核销记录",
url:"/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
},{
id:"cardreport",
name:"数据报表",
url:"/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
}],
infringement:[{
id:"infringement",
name:"我要投诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=1"
},{
id:"antiinfringement",
name:"我要申诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=2"
},{
id:"list",
name:"提交记录",
url:"/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1&begin=0&count=10"
}],
scan:[{
id:"overview",
name:"数据概况",
url:"/merchant/scandataoverview?action=keydata"
},{
id:"product_list",
name:"商品管理",
url:"/merchant/scanproductlist?action=list&page=1&status=1"
},{
id:"firmcat_list",
name:"资质管理",
url:"/merchant/scanqualification?action=firmcatpage"
}],
rumor:[{
id:"list",
name:"谣言池",
url:"/misc/rumor?action=rumorlist&t=rumor/list"
},{
id:"result",
name:"辟谣数据",
url:"/misc/rumor?action=summarylist&t=rumor/result"
}],
reward:[{
id:"list",
name:"数据概况",
url:"/merchant/rewardstat?action=getoverview&t=reward/overview"
},{
id:"setting",
name:"赞赏设置",
url:"/merchant/reward?action=rewardsetting"
}],
discuss:[{
id:"list_latest",
name:"留言列表",
url:"/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7"
},{
id:"index",
name:"群发消息管理",
url:"/misc/appmsgcomment?action=list_app_msg&begin=0&count=10"
}],
search:[{
id:"search",
name:"搜索",
url:"/advanced/componentsearch?action=search"
},{
id:"authorized",
name:"已添加",
url:"/cgi-bin/component_unauthorize?action=list&t=service/auth_plugins"
}],
kf:[{
id:"account",
name:"账号管理",
url:"/misc/kf?t=services/list&action=list"
},{
id:"state",
name:"客服数据",
url:"/misc/kf?t=services/kf_stat&action=getstatpage"
},{
id:"media",
name:"客服素材",
url:"/misc/kf?t=services/kf-public-text&action=publicreplypage"
}],
ibeacon:[{
id:"deviceManagement",
name:"设备管理",
url:"/merchant/beacongetdevices?action=list"
},{
id:"pageManagement",
name:"页面管理",
url:"/merchant/beaconlistpage?action=list&need_dc=1"
},{
id:"dataReport",
name:"数据报表",
url:"/merchant/beaconstatsummary?action=list"
}]
},s&&s.ad_system&&s.ad_system.can_use_new_ad&&(i.DATA.adClient[0].url="/cgi-bin/frame?nav=10026&t=ad_system/client_report_frame",
i.DATA.adClient[1].url="/cgi-bin/frame?nav=10026&t=ad_system/promotion_list_frame"),
s&&s.merchant_acl&&s.merchant_acl.can_use_account_manage&&i.DATA.adClient.push({
id:"adclientaccountmanage",
name:"账户管理",
acl:s&&s.ad_system&&s.ad_system.can_use_account_manage,
url:"/cgi-bin/frame?nav=10026&t=ad_system/account_frame"
}),s&&s.merchant_acl&&s.merchant_acl.can_use_pay_tmpl&&i.DATA.templateMessage.push({
id:"template_pay_list",
name:"支付模板消息",
url:"/advanced/tmplmsg?action=pay_list&t=tmplmsg/payment"
}),s&&s.merchant_acl&&2==s.merchant_acl.wxa_mall_status&&i.DATA.shop.push({
id:"weapp_shop_weapp_management",
name:"小程序管理",
url:"/misc/wxaadmin?action=index"
}),i.RENDER={
setting:function(a,e){
"meeting"==a.id&&15!=e.role&&this.remove();
},
message:function(a,e){
"search"!=a.id||e&&"search"==e.action||this.remove();
},
assistant:function(a,e){
"warning"!=a.id||e&&0!=e.have_service_package||this.remove();
},
reward:function(a,e){
"invite"!=a.id||e&&0!=e.invite_authority||this.remove();
}
},t.exports=i;
});define("common/wx/remark.js",["common/wx/Tips.js","common/qq/events.js","user/user_cgi.js","common/wx/simplePopup.js"],function(n,e,i){
"use strict";
var s=n("common/wx/Tips.js"),t=n("common/qq/events.js"),o=t(!0),m=n("user/user_cgi.js"),r=n("common/wx/simplePopup.js"),c=function(){
this.id=null,this.remarkName=null,this._init();
};
c.prototype={
_init:function(){
var n=this;
o.on("Remark:change",function(e,i){
n.show(e,i);
});
},
show:function(n,e){
this.id=n,this.remarkName=e;
var i=this;
new r({
title:"添加备注",
callback:function(n){
m.changeRemark(i.id,n,function(){
s.suc("修改成功"),o.trigger("Remark:changed",i.id,(n+"").html(!0));
});
},
rule:function(n){
return n.length<=30;
},
inputrequire:!1,
value:(e+"").html(!1),
msg:"备注不能超过30个字"
});
},
hide:function(){}
},i.exports=new c;
});