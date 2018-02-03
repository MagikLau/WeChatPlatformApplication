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
	<form id="bind_form" method="post" action="/wx/bind/confirm">
		<div class="weui-cell">
			<div class="weui-cell__hd"><label class="weui-label">openID</label></div>
			<div class="weui-cell__bd">
            ${openID}
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
				       onkeyup="this.value=this.value.replace(/\D/g,'')" placeholder="请输入学号" maxlength="8" required>
			</div>
			<div class="weui-cell__ft">
				<i class="weui-icon-warn"></i>
			</div>
		</div>
		<div class="weui-cell weui-cells_form" id="div_last6ID">
			<div class="weui-cell__hd"><label class="weui-label">验证信息</label></div>
			<div class="weui-cell__bd">
				<input class="weui-input" name="last6ID" type="text" pattern="[0-9]{6}|[0-9]{5}[Xx]"
				       onKeyUp="value=value.replace(/[\W]/g,'')" placeholder="请输入身份证后六位作验证" maxlength="6" required>
			</div>
			<div class="weui-cell__ft">
				<i class="weui-icon-warn"></i>
			</div>
		</div>
		<label for="weuiAgree" class="weui-agree">
			<input id="weuiAgree" type="checkbox" class="weui-agree__checkbox" required>
			<span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
		</label>
		<div class="weui-btn-area">
			<input class="weui-btn weui-btn_primary" id="bind_submit" value="确定" type="submit" />
		</div>

	</form>
</div>
<script type="text/javascript">
	$(function(){
		var $toptips = $('.weui-toptips');

		$('#bind_submit').on('click', function(){
			var $studentID = $("input[name='studentID']").val();
			var $last6ID = $("input[name='last6ID']").val();
			var msg = null;
			if( $studentID.length !== 8 ){
				msg = "学号输入有误";
				$('#div_studentID').addClass("weui-cell_warn");
			}else{
				$('#div_studentID').removeClass("weui-cell_warn");
			}
			if( $last6ID.length !== 6 ){
				if( msg === null ) msg = "验证信息输入有误";

				$('#div_last6ID').addClass("weui-cell_warn");
			}else{
				$('#div_last6ID').removeClass("weui-cell_warn");
			}
			if( !$('#weuiAgree').is(":checked") && msg === null ){
				msg = "请先阅读相关条款";
			}
			if( msg ){
				$toptips.text(msg);
				$toptips.fadeIn( 300 ).delay( 2000 ).fadeOut( 300 );
			}

		});
	});
</script>

</body>
</html>