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

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;

/**
 * Created by MagikLau on 2018/1/29.
 * Java web dev
 */
@Controller
@RequestMapping("/wx/direction")
public class DirectionController {

    @Autowired
    private WxUserManager wxUserManager ;

    @Autowired
    private StudentService studentService;


    @RequestMapping("")
    public String direction(ModelMap modelMap) {

        WxWebUser wxWebUser = WxWebUtils.getWxWebUserFromSession();
        WxUser wxUser = wxUserManager.getWxUserByWxWebUser(wxWebUser);
        String openID = wxWebUser.getOpenId();
        modelMap.addAttribute("openID", openID);
        System.out.println("openID:"+openID);
        Student student = studentService.findStudentByOpenID(openID);
        String nickName = wxUser.getNickName();
        modelMap.addAttribute("nickName", nickName);
        System.out.println("nickName:"+nickName);
        if( student != null ){
            System.out.println(student);
            modelMap.addAttribute("studentID", student.getStudentID());
            System.out.println("studentID:"+student.getStudentID());
            String direction = student.getDirection();
            HashMap<String, String> dir = new HashMap<>();
            dir.put("1","Java开发");
            dir.put("2","移动互联网应用开发");
            dir.put("3","数据库应用");
            if( direction != null ){
                modelMap.addAttribute("direction", dir.get(direction));
                System.out.println("direction:"+direction);
                return "direction_confirm";
            }
            return "direction";
        }else{

            return "bind";
        }

//        return "direction";
    }

    @RequestMapping("/check")/*(value = "/wx/bind/check", method = RequestMethod.POST)*/
    public void directionCheck(ModelMap modelMap, HttpServletResponse httpServletResponse,
                                 Integer studentID, String direction) throws IOException{
        httpServletResponse.setContentType("application/json;charset=utf-8");
        System.out.println("directionCheck: "+direction);
        String data ;
        if( direction != null ){
            studentService.bindDirection(studentID, direction);
            modelMap.addAttribute("studentID", studentID);
            data = "{\"status\":\"ok\",\"msg\":\"操作成功\"}";
        }else{
            data = "{\"status\":\"error\",\"msg\":\"操作失败\"}";
        }
        PrintWriter out = httpServletResponse.getWriter();
        out.write(data);
        out.flush();
        out.close();
    }

    @RequestMapping("/confirm")/*(value = "/wx/bind/confirm", method = RequestMethod.POST)*/
    public String directionConfirm(ModelMap modelMap, Integer studentID) {
        String result ;
        String direction = studentService.findStudentByStudentID(studentID).getDirection();
        HashMap<String, String> dir = new HashMap<>();
        dir.put("1","Java开发");
        dir.put("2","移动互联网应用开发");
        dir.put("3","数据库应用");
        if( studentID != null ){
            modelMap.addAttribute("studentID", studentID);
            String dirName = dir.get(direction);
            System.out.println("directionConfirm: "+dirName);
            modelMap.addAttribute("direction", dirName);
            result = "direction_confirm";
        }else{
            String msg = "验证有误.";
            modelMap.addAttribute("msg", msg);
            result = "redirect:";
        }
        return result;
    }


}
