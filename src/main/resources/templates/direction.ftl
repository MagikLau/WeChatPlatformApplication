<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
	<title>方向选择</title>
	<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
	<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body >
<div class="weui-toptips weui-toptips_warn js_tooltips">错误提示</div>

<div class="container" id="container">
	<div class="page home js_show">

		<div class="page input js_show">

			<div class="page__bd">

				<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label">学号</label></div>
					<div class="weui-cell__bd">
					${studentID?c}<input type="hidden" value="${studentID}">
					</div>
				</div>
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
				<div class="weui-cells__title">方向选择</div>
				<div class="weui-cells">
					<div class="weui-cell weui-cell_select">
						<div class="weui-cell__bd">
							<select class="weui-select" name="select1">
								<option selected="" value="1">Java开发方向</option>
								<option value="2">移动互联网应用开发</option>
								<option value="3">数据库应用</option>
							</select>
						</div>
					</div>

				</div>

				<label for="weuiAgree" class="weui-agree">
					<input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
					<span class="weui-agree__text">
						阅读并同意<a href="#">《相关条款》</a>
					</span>
				</label>

				<div class="weui-btn-area">
					<a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips">确定</a>
				</div>
			</div>
		</div>

	</div>
	<#--<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>-->
	<#--<script src="https://res.wx.qq.com/open/libs/weuijs/1.0.0/weui.min.js"></script>-->

</body>
</html>