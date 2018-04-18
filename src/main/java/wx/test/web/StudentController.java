package wx.test.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import wx.test.model.Student;
import wx.test.service.StudentService;

@Controller
@RequestMapping("/students")
public class StudentController {

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
    public String showByPageAndSize(ModelMap modelMap, Integer page, Integer size) {
        if( page == null ) page = 0;
        if( size == null ) size = 20;
        Page<Student> studentPage = studentService.findByPageAndSize(page, size);

        //查询结果总行数
        Long totalElements = studentPage.getTotalElements();
        System.out.println("totalElements: "+totalElements);
        //按照当前分页大小，总页数
        Integer totalPages = studentPage.getTotalPages();
        System.out.println("totalPages: "+totalPages);
        //按照当前页数、分页大小，查出的分页结果集合
//        for (Student student: studentPage.getContent()) {
//            System.out.println(student.toString());
//        }
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
        studentService.bindOpenID(student.getStudentID(),null);
        System.out.println("After-remove: "+studentService.findStudentByStudentID(student.getStudentID()).toString());
        return "redirect:";
    }


}
