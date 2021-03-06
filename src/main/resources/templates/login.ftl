<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="renderer" content="webkit">
		<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
		<meta charset="utf-8">
		<title> 微信公众平台 </title>
		<script language="JavaScript" type="text/javascript" src="/javascript/jquery-3.3.1.min.js"></script>
		<link rel="stylesheet" href="/stylesheet/page_login.css">
		<link rel="stylesheet" href="/stylesheet/loginPage.css">
		<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>

	</head>
	<body class="zh_CN">
		<div id="app" style="visibility: visible;">
			<div id="header" class="mp-head">
				<div class="weui-desktop-head">
					<div class="weui-desktop-head__inner">
						<div class="weui-desktop-layout">
							<div class="weui-desktop-layout__side">
								<h1 class="weui-desktop-logo">
									<a href="/" title="微信公众平台">微信公众平台</a>
								</h1>
							</div>
							<div class="weui-desktop-layout__extra"></div>
						</div>
					</div>
				</div>
				<div class="banner">
					<div class="inner wrp">
						<div class="login_frame input_login">
							<div class="weui-desktop-global-mod"><div class="weui-cell"><h3>登录</h3></div></div>
							<div class="weui-cells weui-cells_form">

								<div class="weui-cell weui-cells_form" id="div_username">
									<div class="weui-cell__hd"><label class="weui-label">账号</label></div>
									<div class="weui-cell__bd">
										<input class="weui-input" name="username" type="text"
											   placeholder="请输入用户名" maxlength="10" required>
									</div>
									<div class="weui-cell__ft">
										<i class="weui-icon-warn"></i>
									</div>
								</div>
								<div class="weui-cell weui-cells_form" id="div_password">
									<div class="weui-cell__hd"><label class="weui-label">密码</label></div>
									<div class="weui-cell__bd">
										<input class="weui-input" name="password" type="password"
											   placeholder="请输入密码" maxlength="32" required>
									</div>
									<div class="weui-cell__ft">
										<i class="weui-icon-warn"></i>
									</div>
								</div>

								<div class="weui-cell login_err_panel" style="visibility: hidden;" id="error_panel">
									<i class="icon18_common error"></i>
									<span class="err_tips">gan</span>
								</div>

								<div class="weui-btn-area ">
									<a class="btn_login" href="javascript:doLogin();">登录</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<script>
					function doLogin() {
						var $err_tips = $('.err_tips');
						var usernameInput = $('input[name=\'username\']').val();
						var passwordInput = $('input[name=\'password\']').val();
						console.log("Username: " + usernameInput + ", password: " + passwordInput);
						var tips = "";
						if (usernameInput === null || usernameInput.length < 4) {
							tips += "[用户名]";
							$('#div_username').addClass("weui-cell_warn");
						} else {
							$('#div_username').removeClass("weui-cell_warn");
						}
						if (passwordInput === null || passwordInput.length < 4) {
							tips += "[密码]";
							$('#div_password').addClass("weui-cell_warn");
						} else {
							$('#div_password').removeClass("weui-cell_warn");
						}
						console.log('tips1: [' + tips + "]");
						if (tips.length > 0) {
							tips += "输入有误";
							$err_tips.text(tips);
							var $error_panel = $('#error_panel');
							$error_panel.css('visibility', 'visible');
							console.log('tips2: ' + tips);
						} else {
							console.log('tips3: ' + tips);
							$.ajax({
								url: "/manager_login?username=" + usernameInput + "&password=" + passwordInput,
								type: "post",
								contentType: 'application/json;charset=utf-8',
								success: function (data) {

									if (data.status == 'ok') {
										console.log('Success FeedBack: ' + data.msg);
										alert(data.msg);
										document.referrer === '' ?
												window.location.href = '/students' :
												window.history.go(-1);
									} else if (data.status == 'error') {
										$('#div_username').addClass("weui-cell_warn");
										$('#div_password').addClass("weui-cell_warn");
										// tips = '用户名密码错误';
										$err_tips.text(data.msg);
										console.log(data.msg);
										$('#error_panel').css('visibility', 'visible');
									}
								},
								error: function (data) {
									$err_tips.text("请求出错");
									console.log('请求出错' + data);
								}
							});
						}
					}
				</script>

			</div>
			<div id="body" class="mp-body page_login"></div>
		</div>
        <div id="footer" class="mp-foot" >
            <div class="weui-desktop-foot">
                <div class="weui-desktop-foot__info">
                    <p class="weui-desktop-links weui-desktop-link-group weui-desktop-link-group_split">
                        <a class="weui-desktop-link" href="https://github.com/LauItachi/WeChatPlatformApplication/blob/master/src/main/resources/templates/students.ftl" target="_blank">GitHub</a>
                        <span class="weui-desktop-link">UI来自<a class="weui-desktop-link" href="https://mp.weixin.qq.com/" target="_blank">微信公众平台</a>，仅供学习使用</span>
                    </p>


                </div>
                <div class="weui-desktop-foot__extra">
                    <p class="weui-desktop-link">Copyright © 2012-2018 Tencent. All Rights
                    Reserved.</p>
                </div>
            </div>
        </div>
		<div style="width:300px;margin:0 auto; padding:20px 0;">
			<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010502005011" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
				<img src="/image/备案图标.png" style="float:left;"/>
				<p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">浙公网安备 33010502005011号</p></a>
		</div>
	</body>
</html>