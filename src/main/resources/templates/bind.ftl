<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>学号绑定</title>
	<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
	<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
<div class="weui-toptips weui-toptips_warn hidden">输入有误</div>
<div class="weui-cells__title">身份绑定</div>

<div class="weui-cells weui-cells_form">
	<div id="msg_dialog" style="display: none;">
		<div class="weui-mask"></div>
		<div class="weui-dialog">
			<div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗</strong></div>
			<div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
			<div class="weui-dialog__ft">
				<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
			</div>
		</div>
	</div>
	<form id="bind_form" <#--action="/wx/bind/check" onsubmit="return check();"-->>
		<div class="weui-cell">
			<div class="weui-cell__hd"><label class="weui-label">openID</label></div>
			<div class="weui-cell__bd">
            ${openID}<input type="hidden" value="${openID}">
			</div>
		</div>
		<div class="weui-cell">
			<div class="weui-cell__hd"><label class="weui-label">微信昵称</label></div>
			<div class="weui-cell__bd">
            ${nickName}
			</div>
		</div>
		<div class="weui-cell weui-cells_form" id="div_studentID">
			<div class="weui-cell__hd"><label class="weui-label">学号</label></div>
			<div class="weui-cell__bd">
				<input class="weui-input" name="studentID" type="text" pattern="[0-9]{8}"
				       onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入学号" maxlength="8" <#--required-->>
			</div>
			<div class="weui-cell__ft">
				<i class="weui-icon-warn"></i>
			</div>
		</div>
		<div class="weui-cell weui-cells_form" id="div_last6ID">
			<div class="weui-cell__hd"><label class="weui-label">验证信息</label></div>
			<div class="weui-cell__bd">
				<input class="weui-input" name="last6ID" type="text" pattern="[0-9]{6}|[0-9]{5}[Xx]"
				       onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="请输入身份证后六位作验证" maxlength="6" <#--required-->>
			</div>
			<div class="weui-cell__ft">
				<i class="weui-icon-warn"></i>
			</div>
		</div>
		<label for="weuiAgree" class="weui-agree">
			<input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" >
			<span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
		</label>

		<div class="weui-btn-area">
			<#--<input class="weui-btn weui-btn_primary" id="bind_submit" value="确定" type="submit" />-->
            <a class="weui-btn weui-btn_primary" href="javascript:check();">确定</a>
		</div>
	</form>
</div>
<script type="text/javascript">
	function check() {
		var $msg_dialog = $('#msg_dialog');
		var $toptips = $('.weui-toptips');
		var studentID = $("input[name='studentID']").val();
		var last6ID = $("input[name='last6ID']").val();
		var preCheck = "";
		if( studentID === null || studentID.length !== 8 ){
			preCheck += "[学号]";
			$('#div_studentID').addClass("weui-cell_warn");
		}else{
			$('#div_studentID').removeClass("weui-cell_warn");
		}
		if( last6ID === null || last6ID.length !== 6 ){
			preCheck += "[验证信息]";
			$('#div_last6ID').addClass("weui-cell_warn");
		}else{
			$('#div_last6ID').removeClass("weui-cell_warn");
		}
		if( !$('#weuiAgree').is(":checked") ){
			preCheck += "[请先阅读相关条款]";
		}
		// alert(preCheck);
		if( preCheck.length > 0 ){//初步检查
			preCheck += "异常，请先处理";
			$toptips.text(preCheck);
			$toptips.fadeIn( 300 ).delay( 5000 ).fadeOut( 300 );

		}else {//检查无误，发送请求
			// $msg_dialog.css('opacity', '1');
			// $msg_dialog.css('display', '');
			<#--alert("Sending ajax...OpenID: ${openID}");-->
			$.ajax({
				url: "/wx/bind/check?studentID=" + studentID + "&last6ID=" + last6ID + "&openID=${openID}",
				type: "get",
				contentType: 'application/json;charset=utf-8',
				success: function (data) {
					// alert("status: "+data.status+", msg: "+data.msg);
					if( data.status == 'ok' ){
						alert('Bind Success FeedBack: '+data.msg);
						window.location.href = '/wx/bind/confirm?studentID=' + studentID;
					}else if( data.status == 'error' ){
						$('#div_studentID').addClass("weui-cell_warn");
						$('#div_last6ID').addClass("weui-cell_warn");
						$toptips.text(data.msg);
						// alert(data.msg);
						$toptips.fadeIn( 300 ).delay( 2000 ).fadeOut( 300 );
					}
				},
				error: function (data) {
					$toptips.text("请求出错");
					alert('请求出错'+data);
				}
			});
		}

	}

</script>
</body>
</html>