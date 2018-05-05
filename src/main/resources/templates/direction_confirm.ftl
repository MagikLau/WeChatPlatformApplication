<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>方向选择确认</title>
	<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
	<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
<div class="page home js_show">
	<div class="page__bd page__bd_spacing">
		<div class="page msg_success js_show">
			<div class="weui-msg">
				<div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
				<div class="weui-msg__text-area">
					<h2 class="weui-msg__title">已完成专业方向选择</h2>
					<p class="weui-msg__desc">
						${studentID?c} 已确认选择[${direction}]作为专业方向<br/>
						在使用中的问题欢迎反馈到<a href="https://github.com/LauItachi/WeChatPlatformTest">GitHub</a>
					</p>
				</div>
				<div class="weui-msg__opr-area">
					<p class="weui-btn-area">
						<button class="weui-btn weui-btn_primary" onclick="WeixinJSBridge.call('closeWindow');" >完成</button>
					</p>
				</div>
				<div class="weui-msg__extra-area">
					<div class="weui-footer">
						---相关项目---
						<p class="weui-footer__links">
							<a href="https://github.com/FastBootWeixin/FastBootWeixin" class="weui-footer__link">FastBootWeixin</a>
							<a href="https://github.com/Tencent/weui" class="weui-footer__link">WeUI</a>
						</p>
						<p class="weui-footer__text">Copyright © 2008-2016 weui.io</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>