package wx.test.web;

import com.mxixm.fastboot.weixin.module.message.WxMessage;
import com.mxixm.fastboot.weixin.service.WxApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import wx.test.model.Student;
import wx.test.service.StudentService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by MagikLau on 2018/3/12.
 * Java web dev
 */
@Controller
@RequestMapping("/messages")
public class MessageController{

    @Autowired
    private StudentService studentService;

    @Autowired
    WxApiService wxApiService;

    @RequestMapping("")
    public String receiveMsgText() {

        return "messages";
    }

    @RequestMapping(value = "/sendToAll", method = RequestMethod.POST)
    @ResponseBody
    public WxMessage sendMsg(@RequestParam("content") String content) {
        System.out.println("sendMsg:"+content);

        return WxMessage.Text.builder()
                .content(content)
                .toGroup()
                .build();
    }

    @RequestMapping(value = "/sendByTag", method = RequestMethod.POST)
    @ResponseBody
    public WxMessage sendMsgByTag(@RequestParam("content") String content, @RequestParam("tagId")Integer tagId) {
        System.out.println("sendMsgByTag:"+content);

        return WxMessage.Text.builder()
                .content(content)
                .toGroup(tagId)
                .build();
    }

    @RequestMapping(value = "/sendByParam", method = RequestMethod.POST)
    @ResponseBody
    public WxMessage sendMsgByParam(@RequestParam("content") String content,
                                    @RequestParam(value = "academy", required = false)String academy,
                                    @RequestParam(value = "major", required = false)String major,
                                    @RequestParam(value = "gradeClass", required = false)Integer gradeClass,
                                    @RequestParam(value = "direction", required = false)String direction) {
        System.out.println("sendMsgByParam:"+content);
        System.out.println("Param: {academy: "+academy+", major: "+major+", gradeClass: "+gradeClass+", direction: "+direction+"}");
        List<Student> studentList = studentService.findByMajorAndGradeClassAndOpenIDNotNull(major, gradeClass);
        System.out.println("studentList: "+studentList);

        List<String>openIdList = new ArrayList<>();
        for( Student student : studentList ){
            openIdList.add(student.getOpenID());
        }

        return  WxMessage.Text.builder()
                .content(content)
                .toGroup(openIdList)
                .build();
    }

//    @RequestMapping(value = "/sendMsg", method = RequestMethod.POST)
//    public String sendMsg(@RequestParam("tagId") int tagId,
//                          @RequestParam("title") String title,
//                          @RequestParam("description") String description,
//                          @RequestParam("picUrl") String picUrl,
//                          @RequestParam("url") String url) {
//        String content = "tagId, title, description, picUrl, url：\n"+tagId+"\t"+title+"\t"+description+"\t"+picUrl+"\t"+url;
//        System.out.println(content);
//        WxMessage wxMessage = WxMessage
//                .Text.builder()
//                .content(content)
////                .News.builder()
////                .addItem(title, description, picUrl, url)
//                .toGroup()
//                .build();
//
//        wxMessageTemplate.sendGroupMessage(tagId, wxMessage);
//
//        return "redirect:";
//    }
}
