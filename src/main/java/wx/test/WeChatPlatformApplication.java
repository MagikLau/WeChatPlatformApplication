package wx.test;

import com.mxixm.fastboot.weixin.annotation.*;
import com.mxixm.fastboot.weixin.module.event.WxEvent;
import com.mxixm.fastboot.weixin.module.message.WxMessage;
import com.mxixm.fastboot.weixin.module.user.WxUser;
import com.mxixm.fastboot.weixin.module.web.WxRequest;
import com.mxixm.fastboot.weixin.module.web.WxRequestBody;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by Lau_I on 2018/1/15.
 * Java web dev
 */
@WxApplication/*(menuAutoCreate=false)*/
@WxController
public class WeChatPlatformApplication {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(WeChatPlatformApplication.class, args);
    }

    /**
     * 微信菜单-左
     */
    @WxButton(group = WxButton.Group.LEFT, main = true, name = "项目介绍")
    public void left() {
    }

    /**
     * 微信菜单-左-01
     */
    @WxButton(type = WxButton.Type.CLICK,
            group = WxButton.Group.LEFT,
            order = WxButton.Order.FIRST,
            name = "项目进展")
    public WxMessage left01() {
        System.out.println("Text");
        return WxMessage.News.builder()
                .addItem("基于SpringBoot框架的微信公众平台搭建",
                        "1)\t项目搭建：使用阿里云的云服务器，系统CentOS_7.4，已完成Java应用环境搭建；\n" +
                                "2)\t技术栈：Maven管理整体Web应用、FastBootWeChat搭建微信公众平台应用、SpringMVC管理MVC架构、网页样式使用开源样式库WeUI；\n" +
                                "3)\t工作进度：已完成整体框架搭建、公众平台可以完成学号绑定，网页端可以登录查看学生名单，已完成绑定可以操作解除绑定，点击查看详情\n",
                        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515134429744&di=4a341de585024ca5791a3e2f64e0c5e2&imgtype=0&src=http%3A%2F%2Fdesignbeats.net%2Fwp-content%2Fuploads%2F2014%2F10%2Fgithub.png",
                        "https://github.com/LauItachi/WeChatPlatformApplication")
                .build();
    }

    /**
     * 微信菜单-右
     */
    @WxButton(group = WxButton.Group.RIGHT, main = true, name = "功能测试")
    public void right() {
    }

    /**
     * 微信菜单-右-01
     */
    @WxButton(type = WxButton.Type.VIEW,
            group = WxButton.Group.RIGHT,
            order = WxButton.Order.FIRST,
            url = "http://magiklau.cn/wx/bind",
            name = "学号绑定")
    @WxAsyncMessage
    public WxMessage right01(WxRequest wxRequest, WxUser wxUser) {

        return WxMessage.Text.builder().content(wxUser.getNickName()+"点击了菜单链接").build();
    }

    /**
     * 微信菜单-右-02
     */
    @WxButton(type = WxButton.Type.VIEW,
            group = WxButton.Group.RIGHT,
            order = WxButton.Order.FIRST,
            url = "http://magiklau.cn/wx/direction",//"https://wj.qq.com/s/1935142/9664",
            name = "方向选择")
    @WxAsyncMessage
    public WxMessage right02(WxRequest wxRequest, WxUser wxUser) {

        return WxMessage.Text.builder().content(wxUser.getNickName()+"点击了菜单链接").build();
    }



    /**
     * 退订公众号
     *
     * @param wxRequest
     * @param wxUser
     */
    @WxEventMapping(type = WxEvent.Type.UNSUBSCRIBE)
    public void unsubscribe(WxRequest wxRequest, WxUser wxUser) {
        System.out.println(wxUser.getNickName() + "退订了公众号");
    }

    /**
     * 订阅公众号
     *
     * @param wxRequest
     * @param wxUser
     */
    @WxEventMapping(type = WxEvent.Type.SUBSCRIBE)
    public String subscribe(WxRequest wxRequest, WxUser wxUser) {
        return "欢迎您关注本公众号，本公众号基于FastBootWeiXin框架制作";
    }
}
