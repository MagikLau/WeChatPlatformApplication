package wx.test.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
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

    @RequestMapping("")
    public String showAll(ModelMap modelMap) {
        List<Student> studentList = studentService.findAll();
//        System.out.println("studentList in Controller: "+studentList);
        modelMap.addAttribute(studentList);

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
}
