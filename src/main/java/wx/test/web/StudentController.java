package wx.test.web;

import com.mxixm.fastboot.weixin.module.message.WxMessage;
import com.mxixm.fastboot.weixin.module.message.WxMessageTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import wx.test.model.Student;
import wx.test.service.StudentService;
import wx.test.service.SubscriberService;

import java.util.List;

@Controller
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private SubscriberService subscriberService;

    @Autowired
    private StudentService studentService;

//    @RequestMapping("")
//    public String showAll(ModelMap modelMap) {
//        List<Student> studentList = studentService.findAll();
////        System.out.println("studentList in Controller: "+studentList);
//        modelMap.addAttribute(studentList);
//
//        return "students";
//    }

    @RequestMapping("")
    public String showByPage(ModelMap modelMap, Integer page, Integer size) {
        if( page == null ) page = 0;
        if( size == null ) size = 20;
        Page<Student> studentPage = studentService.findByPageAndSize(page, size);

        //查询结果总行数
        Long totalElements = studentPage.getTotalElements();
        System.out.println(totalElements);
        //按照当前分页大小，总页数
        Integer totalPages = studentPage.getTotalPages();
        System.out.println(totalPages);
        //按照当前页数、分页大小，查出的分页结果集合
        for (Student student: studentPage.getContent()) {
            System.out.println(student.toString());
        }
        System.out.println("-------------------------------------------");
        modelMap.addAttribute("currentPage", page);
        modelMap.addAttribute("currentSize", size);
        modelMap.addAttribute("totalElements", totalElements);
        modelMap.addAttribute("totalPages", totalPages);
        modelMap.addAttribute("studentPage",studentPage.getContent());

        return "students";
    }

    @RequestMapping("/remove")
    public String removeStudent(@RequestParam("openID") String openID){
        System.out.println("remove student by openID: "+openID);
        Student student = studentService.findStudentByOpenID(openID);
        System.out.println("Before-remove: "+student.toString());
        studentService.bindOpenID(student.getStudentID(),"");
        System.out.println("After-remove: "+studentService.findStudentByStudentID(student.getStudentID()).toString());
        return "redirect:";
    }

    private WxMessageTemplate wxMessageTemplate ;

    @RequestMapping(value = "/sendMsg", method = RequestMethod.POST)
    public String sendMsg(@RequestParam("tagId") int tagId,
                          @RequestParam("title") String title,
                          @RequestParam("description") String description,
                          @RequestParam("picUrl") String picUrl,
                          @RequestParam("url") String url) {
        String content = "tagId, title, description, picUrl, url：\n"+tagId+"\t"+title+"\t"+description+"\t"+picUrl+"\t"+url;
        System.out.println(content);
        WxMessage wxMessage = WxMessage
                .Text.builder()
                .content(content)
//                .News.builder()
//                .addItem(title, description, picUrl, url)
                .toGroup()
                .build();

        wxMessageTemplate.sendGroupMessage(tagId, wxMessage);

        return "redirect:";
    }
}
