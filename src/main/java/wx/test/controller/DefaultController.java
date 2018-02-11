package wx.test.controller;

import com.mxixm.fastboot.weixin.module.user.WxTag;
import com.mxixm.fastboot.weixin.service.WxApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DefaultController {

    @Autowired
    private WxApiService wxApiService;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("/hello")
    public String hello() {
        return "hello";
    }

    public String test(){
        List<WxTag.Tag> tagList = wxApiService.getTags().getTags();
        for( WxTag.Tag tag : tagList ){
//            wxApiService.listUserByTag();
        }
        return "index";
    }

}
