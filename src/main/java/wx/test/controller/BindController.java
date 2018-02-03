package wx.test.controller;

import com.mxixm.fastboot.weixin.module.user.WxUser;
import com.mxixm.fastboot.weixin.util.WxWebUtils;
import com.mxixm.fastboot.weixin.web.WxUserManager;
import com.mxixm.fastboot.weixin.web.WxWebUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;

/**
 * Created by MagikLau on 2018/1/29.
 * Java web dev
 */
@Controller
public class BindController {

    private final WxUserManager wxUserManager ;

    @Autowired
    public BindController(WxUserManager wxUserManager) {
        this.wxUserManager = wxUserManager;
    }


    @RequestMapping("/wx/bind")
    public String bind(ModelMap modelMap) {
        WxWebUser wxWebUser = WxWebUtils.getWxWebUserFromSession();
        WxUser wxUser = wxUserManager.getWxUserByWxWebUser(wxWebUser);
        String openID = wxWebUser.getOpenId();
        String nickName = wxUser.getNickName();
        modelMap.addAttribute("openID", openID);
        modelMap.addAttribute("nickName", nickName);
        System.out.println("openID:"+openID);
        System.out.println("nickName:"+nickName);
        return "bind";
    }

    @RequestMapping(value = "/wx/bind/confirm", method = RequestMethod.POST)
    public String bind(ModelMap modelMap, HttpSession httpSession) {
        String studentID = httpSession.getAttribute("studentID").toString();
        String last6ID = httpSession.getAttribute("last6ID").toString();
        System.out.println(studentID+"_"+last6ID);
        if( studentID == null || last6ID == null ){
            modelMap.addAttribute("bindResult","false");
        }
        modelMap.addAttribute("bindResult",studentID+"_"+last6ID);
        boolean success = true;
        return "bind_confirm";
    }
}
