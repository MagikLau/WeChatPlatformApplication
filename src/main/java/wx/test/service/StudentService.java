package wx.test.service;

import org.springframework.data.domain.Page;
import wx.test.model.Student;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/9.
 * Java web dev
 */
public interface StudentService {

    List<Student> findAll();

    Page<Student> findByPageAndSize(Integer page, Integer size);

    Student findStudentByStudentID(Integer studentID);

    Student findStudentByOpenID(String openID);

    List<Student> findAllByName(String name);

    Boolean checkId(Integer studentID, String idCheckNumber);

    Boolean bindOpenID(Integer studentID, String openID);
}
