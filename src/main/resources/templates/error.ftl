<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>error</title>
	<link rel="stylesheet" href="https://res.wx.qq.com/open/libs/weui/1.1.2/weui.min.css"/>
	<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
</head>
<body>
<div class="weui-cells__title">ERROR</div>
<div class="page__bd">
	<article class="weui-article">
		<section>
			<h2 class="title">${url}</h2>
			<section>
                <#if error.message??>
                    <p>${error.message}</p>
                <#else>
                    <p>${error}</p>
                </#if>

			</section>
		</section>
	</article>
</div>
</body>
</html>