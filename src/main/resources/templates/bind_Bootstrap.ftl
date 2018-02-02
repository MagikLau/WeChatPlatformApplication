<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<head>
		<meta charset="UTF-8">
		<title>学号绑定</title>
		<style>
			.input-group{
				margin:10px 0px;//输入框上下外边距为10px,左右为0px
			}
			h3{
				padding:5px;
				border-bottom:1px solid #ddd;//h3字体下边框
			}
			li{
				list-style-type:square;//列表项图标为小正方形
			margin:10px 0;//上下外边距是10px
			}
			em{//强调的样式
			color:#c7254e;
				font-style: inherit;
				background-color: #f9f2f4;
			}
		</style>
	</head>
    <body>
        <#--<!--<h2>微信用户：${nickName}</h2>
        <h2>OpenID：${openId}</h2>
        <h2>UnionID：${unionId}</h2>&ndash;&gt;-->
        <div class="container " style="margin-top: 50px; margin-bottom: 50px;">
	        <form>
		        <h1>学号绑定</h1>
		        <div class="form-group col-form-label-lg">
			        <input type="text" class="form-control form-control-lg" id="studentID" placeholder="学号">
		        </div>
		        <div class="form-group col-form-label-lg">
			        <input type="text" class="form-control form-control-lg" id="last6ID" placeholder="身份证后6位">
			        <small id="last6IDHelp" class="form-text text-muted">请输入身份证后6位进行核实.</small>
		        </div>
		        <div class="form-check">
			        <input type="checkbox" class="form-check-input" id="exampleCheck1">
			        <label class="form-check-label" for="exampleCheck1">Check me out</label>
		        </div>
		        <button type="submit" class="btn btn-primary btn-lg btn-block">确定</button>
	        </form>
        </div>
		<!--<h3><form action="/bind/api" method="post">
            <p>请输入您的学号：<br/><label><input name="studentID" type="text"/></label></p>
            <p>请输入身份证后六位进行确认：<br/><label><input name="last6ID" type="text"/></label></p>
            <input type="submit" value="Submit"/>
        </form></h3>-->
    <#--<!--<#if !bindResult??> ${bindResult}</#if>&ndash;&gt;-->
	</body>
</html>

