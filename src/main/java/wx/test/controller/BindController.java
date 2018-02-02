package wx.test.controller;

import com.mxixm.fastboot.weixin.module.web.WxRequest;
import com.mxixm.fastboot.weixin.util.WxWebUtils;
import com.mxixm.fastboot.weixin.web.WxUserManager;
import com.mxixm.fastboot.weixin.web.WxWebUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

/**
 * Created by MagikLau on 2018/1/29.
 * Java web dev
 */
@Controller
public class BindController {

    @RequestMapping("/wx/bind")
    public String bind(ModelMap modelMap) {
//        @Autowired
//        WxUserManager wxUserManager ;
        WxWebUser wxWebUser = WxWebUtils.getWxWebUserFromSession();
        String openID = wxWebUser.getOpenId();
//        String wxWebUserName = wxWebUser.get
        modelMap.addAttribute("openID", openID);
        System.out.println("openID:"+openID);
        return "bind";
    }

}
