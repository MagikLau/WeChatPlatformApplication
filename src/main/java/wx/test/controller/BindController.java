package wx.test.controller;

import com.mxixm.fastboot.weixin.module.user.WxTag;
import com.mxixm.fastboot.weixin.module.user.WxUser;
import com.mxixm.fastboot.weixin.service.WxApiService;
import com.mxixm.fastboot.weixin.util.WxWebUtils;
import com.mxixm.fastboot.weixin.web.WxUserManager;
import com.mxixm.fastboot.weixin.web.WxWebUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import wx.test.model.Student;
import wx.test.service.StudentService;
import wx.test.service.SubscriberService;

import java.util.List;

/**
 * Created by MagikLau on 2018/1/29.
 * Java web dev
 */
@Controller
public class BindController {

    @Autowired
    private WxUserManager wxUserManager ;

    @Autowired
    private SubscriberService subscriberService;

    @Autowired
    private StudentService studentService;


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

        Student student = studentService.findStudentByOpenID(openID);

        if( student != null ){
            System.out.println(student);
            modelMap.addAttribute("studentID", student.getStudentID());
            System.out.println("studentID:"+student.getStudentID());
            return "bind_confirm";
        }else{
            return "bind";
        }


    }

    @RequestMapping("/wx/bind/confirm")/*(value = "/wx/bind/confirm", method = RequestMethod.POST)*/
    public String bindConfirm(ModelMap modelMap, Integer studentID, String last6ID) {
        if( modelMap.containsAttribute("studentID") ){
            return "bind_confirm";
        }
        WxWebUser wxWebUser = WxWebUtils.getWxWebUserFromSession();
        WxUser wxUser = wxUserManager.getWxUserByWxWebUser(wxWebUser);
        String openID = wxWebUser.getOpenId();

        Boolean checked = studentService.checkId(studentID, last6ID);
        System.out.println("checked:"+checked);
        if( checked ){
            modelMap.addAttribute("studentID", studentID);
            studentService.bindOpenID(studentID, openID);
            return "bind_confirm";
        }else{
            String nickName = wxUser.getNickName();
            modelMap.addAttribute("openID", openID);
            modelMap.addAttribute("nickName", nickName);
            System.out.println("openID:"+openID);
            System.out.println("nickName:"+nickName);
            String msg = "bindConfirm got wrong.";
            modelMap.addAttribute("msg", msg);
            return "bind";
        }


    }


}
