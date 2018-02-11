package wx.test.service;

import wx.test.model.Student;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/9.
 * Java web dev
 */
public interface StudentService {

    Student findStudentByStudentID(Integer studentID);

    Student findStudentByOpenID(String openID);

    List<Student> findAllByName(String name);

    Boolean checkId(Integer studentID, String idCheckNumber);

    Boolean bindOpenID(Integer studentID, String openID);
}
