# WeChatPlatformApplication

**WeChatPlatform Application for Graduation Project** (Acceptance of works has been passed on May 9th.)

[![License](http://img.shields.io/:license-apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

详细介绍见本项目[wiki](https://github.com/LauItachi/WeChatPlatformApplication/wiki)

本项目用于毕业设计，目标搭建Web应用和微信应用，实现自建数据库管理和微信订阅号的接口调用。

最初想法来源：专业方向选择{教学办发布专业方向统计的通知→教学办通知班长领取统计表格→教学办发放统计表格给各班班长→班长到每个同学处统计→同学选择专业方向并签名确认→班长确认统计完成→班长上交表格到教学办→教学办进行统计}，步骤过长，处理复杂，效率不高

欲通过微信公众平台优化处理步骤：专业方向选择{教学办发布专业方向统计的通知→学生进行专业方向选择→教学办进行统计}

## [Features](https://github.com/LauItachi/WeChatPlatformApplication/wiki/Features)

- Simplify work in teaching assistant by using WeChatPlatform.
- Integrate SpringBoot, SpringSecurity, SpringMVC , SpringDataJPA framework to achieve after end of the Web  project.
- Using JQuery, WeUI to achieve after end of the Web project.
- Integrate FastBootWeiXin to achieve the WeChat project.

## [How to use](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use)

- [RunTimeEnvironment](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#runtimeenvironment)
- [DevEnvironment](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#devenvironment)
- [Configuration](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#configuration)
  - [服务器安全组配置](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E5%85%A8%E7%BB%84%E9%85%8D%E7%BD%AE%E9%9C%80%E6%94%BE%E9%80%9A%E7%AB%AF%E5%8F%A3)
  - [服务器端口配置](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E5%8F%A3%E9%85%8D%E7%BD%AE)
  - [微信号配置[测试号]](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#%E5%BE%AE%E4%BF%A1%E5%8F%B7%E9%85%8D%E7%BD%AE%E6%B5%8B%E8%AF%95%E5%8F%B7)
- [Run on Server](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#run-on-server)
- [Remote Debug](https://github.com/LauItachi/WeChatPlatformApplication/wiki/How-to-use#remote-debug)

## [Stack](https://github.com/LauItachi/WeChatPlatformApplication/wiki/Stack)

- JQuery
  - Ajax
- WeUI
- FreeMarker
- Spring Security
- Spring MVC
- Spring Boot
  - FastBootWeiXin { [![Travis](https://travis-ci.org/FastBootWeixin/FastBootWeixin.svg?branch=master)](http://weixin.mxixm.com)[![Maven Central](https://img.shields.io/badge/maven--central-0.5.1-blue.svg)](http://search.maven.org/#artifactdetails%7Ccom.mxixm%7Cfastboot-weixin%7C0.5.1%7Cjar)[![License](http://img.shields.io/:license-apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)[![QQ群](https://img.shields.io/badge/chat-on%20QQ-blue.svg)](https://jq.qq.com/?_wv=1027&k=5iRu13U)}
- Spring Data JPA
  - Hibernate
- MySQL
- Maven

## [Introduction](https://github.com/LauItachi/WeChatPlatformApplication/wiki/Introduction)

## [FAQ](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ)

- #### [微信大坑](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ#1-%E5%BE%AE%E4%BF%A1%E5%A4%A7%E5%9D%91)

- #### [前端大坑](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ#2-%E5%89%8D%E7%AB%AF%E5%A4%A7%E5%9D%91)

- #### [后端大坑](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ#3-%E5%90%8E%E7%AB%AF%E5%A4%A7%E5%9D%91)

- #### [服务器大坑](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ#4-%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A4%A7%E5%9D%91)

- #### [故障排除](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ#5-%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4)

- #### [wiki编写](https://github.com/LauItachi/WeChatPlatformApplication/wiki/FAQ#6-wiki%E7%BC%96%E5%86%99)

## [Special thanks & Credits](https://github.com/LauItachi/WeChatPlatformApplication/wiki/Special-thanks-&-Credits)

## [Reference](https://github.com/LauItachi/WeChatPlatformApplication/wiki/Reference)

- [registration-login-spring-hsql](https://hellokoding.com/registration-and-login-example-with-spring-security-spring-boot-spring-data-jpa-hsql-jsp/)
- [FastBootWeiXin](https://github.com/FastBootWeixin/FastBootWeixin)
- [WeUI](https://github.com/Tencent/weui)
- [WeChatPlatform](https://mp.weixin.qq.com/)
- [How-To-Ask-Questions-The-Smart-Way](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)
- [how_to_choose_free_software_licenses](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)
- [GitHub Wiki 页面的添加和设置](https://lpd-ios.github.io/2017/07/11/GitHub-Wiki-Introduction/)