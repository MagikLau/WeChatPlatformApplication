<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>方向选择</title>
	<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
	<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body >
<div class="weui-toptips weui-toptips_warn hidden">输入有误</div>

<div class="container" id="container">
	<div class="page home js_show">

		<div class="page input js_show">

			<div class="page__bd">

				<div class="weui-cell">
					<div class="weui-cell__hd"><label class="weui-label">学号</label></div>
					<div class="weui-cell__bd">
					${studentID?c}<input type="hidden" id="studentID" value="${studentID?c}">
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
							<select class="weui-select" id="select1">
								<option selected="" value="1">Java开发</option>
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
					<a class="weui-btn weui-btn_primary" href="javascript:commit();">确定</a>
				</div>
			</div>
		</div>

	</div>
	<#--<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>-->
	<#--<script src="https://res.wx.qq.com/open/libs/weuijs/1.0.0/weui.min.js"></script>-->
	<script type="text/javascript">
		function commit() {
			var $toptips = $('.weui-toptips');
			var studentID = $('#studentID').val();
			var direction=$("#select1").find("option:selected").val();
			var preCheck = "";
			if( !$('#weuiAgree').is(":checked") ){
				preCheck += "[请先阅读相关条款]";
			}
			if( preCheck.length > 0 ){//初步检查
				preCheck += "异常，请先处理";
				$toptips.text(preCheck);
				$toptips.fadeIn( 300 ).delay( 5000 ).fadeOut( 300 );

			}else {//检查无误，发送请求
			    var url = "/wx/direction/check?studentID=" + studentID + "&direction=" + direction;
				alert(url);
				$.ajax({
					url: url,
					type: "get",
					contentType: 'application/json;charset=utf-8',
					success: function (data) {
						if( data.status == 'ok' ){
							alert('Bind Success FeedBack: '+data.msg);
							window.location.href = '/wx/direction/confirm?studentID=' + studentID;
						}else if( data.status == 'error' ){
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