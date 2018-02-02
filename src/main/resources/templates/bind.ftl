<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>学号绑定</title>
	<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
</head>
<body>
<div class="weui-cells__title">身份绑定</div>
<div class="weui-cells weui-cells_form">
	<div class="weui-cell">
		<div class="weui-cell__hd"><label class="weui-label">openID</label></div>
		<div class="weui-cell__bd">
			${openID}
		</div>
	</div>
	<div class="weui-cell">
		<div class="weui-cell__hd"><label class="weui-label">学号</label></div>
		<div class="weui-cell__bd">
			<input class="weui-input" name="studentID" type="number" pattern="[0-9]*" placeholder="请输入学号">
		</div>
	</div>
	<div class="weui-cell">
		<div class="weui-cell__hd"><label class="weui-label">验证信息</label></div>
		<div class="weui-cell__bd">
			<input class="weui-input" name="last6ID" type="number" pattern="[0-9]*" placeholder="请输入身份证后六位作验证">
		</div>
	</div>
	<label for="weuiAgree" class="weui-agree">
		<input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
		<span class="weui-agree__text">
					阅读并同意<a href="javascript:void(0);">《相关条款》</a>
				</span>
	</label>
	<div class="weui-btn-area">
		<a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
	</div>
</div>
</body>
</html>

