package wx.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wx.test.dao.StudentDao;
import wx.test.model.Student;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/9.
 * Java web dev
 */
@Service
@Transactional
public class StudentServiceImp implements StudentService {

    @Autowired
    private StudentDao studentDao;

    public Student findStudentByStudentID(Integer studentID) {

        return studentDao.findStudentByStudentID(studentID);
    }

    public Student findStudentByOpenID(String openID) {
        return studentDao.findStudentByOpenID(openID);
    }

    public List<Student> findAllByName(String name) {

        return studentDao.findAllByName(name);
    }

    public Boolean checkId(Integer studentID, String idCheckNumber) {

        return studentDao.existsByStudentIDAndIdCheckNumber(studentID, idCheckNumber);//并不取分大小写
    }

    public Boolean bindOpenID(Integer studentID, String openID){
        Student student = studentDao.findStudentByStudentID(studentID);
        student.setOpenID(openID);
        Student studentWithOpenID = studentDao.save(student);
        if( studentWithOpenID.getOpenID().equals(student.getOpenID()) ){
            return true;
        }else {
            return false;
        }

    }

}
