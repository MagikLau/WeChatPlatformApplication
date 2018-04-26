# WeChatPlatformApplication

**WeChatPlatform Application for Graduation Project**

[![License](http://img.shields.io/:license-apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

## Features

- Simplify work in teaching assistant by using WeChatPlatform.
- Integrate SpringBoot, SpringSecurity, SpringMVC , SpringDataJPA framework to achieve after end of the Web  project.
- Using JQuery, WeUI to achieve after end of the Web project.
- Integrate FastBootWeiXin to achieve the WeChat project.

## How to use

### RunTimeEnvironment

- AliCloud ECS实例 

  ```reStructuredText
  地域: 华东2
  CPU: 1核
  内存: 1GB(I/O优化)
  带宽: 1Mbps 
  ```

- CentOS ```··~]# lsb_release -a```

  ```powershell
  LSB Version:	core-4.1-amd64:core-4.1-noarch
  Distributor ID:	CentOS
  Description:	CentOS Linux release 7.4.1708 (Core) 
  Release:	7.4.1708
  Codename:	Core
  ```

- Java ```··~]# java -version```

  ```powershell
  java version "1.8.0_131"
  Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
  Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
  ```

- Maven ```··~]# mvn -v```

  ```powershell
  Apache Maven 3.5.2
  Maven home: /usr/lib/apache-maven-3.5.2
  Java version: 1.8.0_131, vendor: Oracle Corporation
  Java home: /usr/lib/jdk1.8.0_131/jre
  Default locale: en_US, platform encoding: UTF-8
  OS name: "linux", version: "3.10.0-693.2.2.el7.x86_64", arch: "amd64", family: "unix"
  ```

- MySQL ```··~]# mysql -version```

  ```powershell
  Ver 14.14 Distrib 5.7.21, for Linux (x86_64) using  EditLine wrapper
  (Maybe should try MariaDB first...)
  ```

### DevEnvironment

- Windows  ```··> systeminfo```

  ```bash
  OS 名称:          Microsoft Windows 10 家庭中文版
  OS 版本:          10.0.16299 Build 16299
  OS 制造商:        Microsoft Corporation
  OS 配置:          独立工作站
  ```

- Java  ```··> java -version```

  ```bash
  java version "1.8.0_162"
  Java(TM) SE Runtime Environment (build 1.8.0_162-b12)
  Java HotSpot(TM) 64-Bit Server VM (build 25.162-b12, mixed mode)
  ```

- Maven  ```··> mvn -v```

  ```bash
  Apache Maven 3.5.2
  Maven home: C:\Program Files (x86)\Apache Software Foundation\apache-maven-3.5.2\bin\..
  Java version: 1.8.0_162, vendor: Oracle Corporation
  Java home: C:\Program Files\Java\jre1.8.0_162
  Default locale: zh_CN, platform encoding: GBK
  OS name: "windows 10", version: "10.0", arch: "amd64", family: "windows"
  ```

- IntelliJ IDEA ``` -> Help -> About```

  ```bash
  IntelliJ IDEA 2018.1 (Ultimate Edition)
  Build #IU-181.4203.550, built on March 27, 2018
  Licensed to L**(Student Version)
  Subscription is active until September 12, 2018
  JRE: 1.8.0_152-release-1136-b20 amd64
  JVM: OpenJDK 64-Bit Server VM by JetBrains s.r.o
  Windows 10 10.0
  ```

- Typora ``` -> Help -> About```

  ```bash
  Typora for Windows/Linux
  version 0.9.48(beta)
  ```

  ​

## Stack

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

## Introduction

TBD

## Special thanks & Credits

- [HikariShine](https://github.com/HikariShine): Thank you so much for the guide of [FastBootWeiXin](https://github.com/FastBootWeixin/FastBootWeixin), which was the core of this project. (However, this shows how much we need interface documentation, lol)
- YangQF: My master of dissertation, this idea comes from our chatting, and thanks for your help in preparing this project, which couldn't be possible to achieve this degree now without you.
- DinL: Thanks a lot for plenty of things in this road specially about a few months' instructions on writing resumes.

## Reference

- [registration-login-spring-hsql](https://hellokoding.com/registration-and-login-example-with-spring-security-spring-boot-spring-data-jpa-hsql-jsp/)
- [FastBootWeiXin](https://github.com/FastBootWeixin/FastBootWeixin)
- [WeUI](https://github.com/Tencent/weui)
- [WeChatPlatform](https://mp.weixin.qq.com/)
- [How-To-Ask-Questions-The-Smart-Way](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md)
- [how_to_choose_free_software_licenses](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)