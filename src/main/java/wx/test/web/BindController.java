package wx.test.web;

import com.mxixm.fastboot.weixin.module.user.WxUser;
import com.mxixm.fastboot.weixin.util.WxWebUtils;
import com.mxixm.fastboot.weixin.web.WxUserManager;
import com.mxixm.fastboot.weixin.web.WxWebUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import wx.test.model.Student;
import wx.test.service.StudentService;
import wx.test.service.SubscriberService;

/**
 * Created by MagikLau on 2018/1/29.
 * Java web dev
 */
@Controller
@RequestMapping("/wx/bind")
public class BindController {

    @Autowired
    private WxUserManager wxUserManager ;

    @Autowired
    private SubscriberService subscriberService;

    @Autowired
    private StudentService studentService;


    @RequestMapping("")
    public String bind(ModelMap modelMap) {

        WxWebUser wxWebUser = WxWebUtils.getWxWebUserFromSession();
        WxUser wxUser = wxUserManager.getWxUserByWxWebUser(wxWebUser);
        String openID = wxWebUser.getOpenId();
        modelMap.addAttribute("openID", openID);
        System.out.println("openID:"+openID);
        Student student = studentService.findStudentByOpenID(openID);

        if( student != null ){
            System.out.println(student);
            modelMap.addAttribute("studentID", student.getStudentID());
            System.out.println("studentID:"+student.getStudentID());

            return "bind_confirm";
        }else{
            String nickName = wxUser.getNickName();
            modelMap.addAttribute("nickName", nickName);
            System.out.println("nickName:"+nickName);

            return "bind";
        }


    }

    @RequestMapping("/check")/*(value = "/wx/bind/check", method = RequestMethod.POST)*/
    public String bindCheck(ModelMap modelMap, String openID, Integer studentID, String last6ID) {
        Boolean checked = studentService.checkId(studentID, last6ID);
        System.out.println("checked:"+checked);
        if( checked ){
            modelMap.addAttribute("studentID", studentID);
            studentService.bindOpenID(studentID, openID);
            return "redirect:/confirm?studentID="+studentID;
        }else{
            String msg = "验证有误.";
            modelMap.addAttribute("msg", msg);
            return "redirect:";
        }


    }

    @RequestMapping("/confirm")/*(value = "/wx/bind/confirm", method = RequestMethod.POST)*/
    public String bindConfirm(ModelMap modelMap, Integer studentID) {
        if( studentID != null ){
            modelMap.addAttribute("studentID", studentID);
            return "bind_confirm";
        }else{
            String msg = "验证有误.";
            modelMap.addAttribute("msg", msg);
            return "redirect:";
        }

    }


}
