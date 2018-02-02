package wx.test;

import com.mxixm.fastboot.weixin.annotation.*;
import com.mxixm.fastboot.weixin.module.event.WxEvent;
import com.mxixm.fastboot.weixin.module.message.WxMessage;
import com.mxixm.fastboot.weixin.module.user.WxUser;
import com.mxixm.fastboot.weixin.module.web.WxRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.ui.ModelMap;

/**
 * Created by Lau_I on 2018/1/15.
 * Java web dev
 */
@WxApplication/*(menuAutoCreate=false)*/
@WxController
public class WeChatPlatformTest {
    public static void main(String[] args) throws Exception {
        SpringApplication.run(WeChatPlatformTest.class, args);
    }

    /**
     * 微信菜单-左
     */
    @WxButton(group = WxButton.Group.LEFT, main = true, name = "Left")
    public void left() {
    }

    /**
     * 微信菜单-右
     */
//    @WxButton(group = WxButton.Group.RIGHT, main = true, name = "Right")
//    @WxAsyncMessage
//    public String right() {
//        return "Only for testing";
//    }

    /**
     * 定义微信菜单，并接受事件
     */
    @WxButton(type = WxButton.Type.VIEW, main = true,
            group = WxButton.Group.RIGHT,
            url = "http://106.15.186.77/wx/bind",
            name = "学号绑定")
    @WxAsyncMessage
    public WxMessage link(WxRequest wxRequest, WxUser wxUser) {

        return WxMessage.Text.builder().content(wxUser.getNickName()+"点击了菜单链接").build();
    }

    /**
     * 微信菜单-左-01
     */
    @WxButton(type = WxButton.Type.CLICK,
            group = WxButton.Group.LEFT,
            order = WxButton.Order.FIRST,
            name = "项目进展")
    public WxMessage projectEx01() {
        return WxMessage.News.builder()
                .addItem("基于SpringBoot框架的微信公众平台搭建",
                         "1) 服务器搭建：使用阿里云的云服务器，系统CentOS_7.4，已完成Java 1.8.0、Maven 3.5.2、Git 2.15.1及相关环境的搭建\n" +
                                    "2) 学习及开发进度：SpringBoot学习中，微信公众平台测试号已搭建demo可完成基本反馈功能",
                         "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515134429744&di=4a341de585024ca5791a3e2f64e0c5e2&imgtype=0&src=http%3A%2F%2Fdesignbeats.net%2Fwp-content%2Fuploads%2F2014%2F10%2Fgithub.png",
                         "https://github.com/LauItachi/WeChatTest")
                .build();
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
