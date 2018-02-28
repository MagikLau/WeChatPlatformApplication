package wx.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wx.test.repository.StudentRepository;
import wx.test.model.Student;
import org.springframework.data.domain.PageRequest;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/9.
 * Java web dev
 */
@Service
@Transactional
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student findStudentByStudentID(Integer studentID) {

        return studentRepository.findStudentByStudentID(studentID);
    }

    public Student findStudentByOpenID(String openID) {
        return studentRepository.findStudentByOpenID(openID);
    }

    public List<Student> findAllByName(String name) {

        return studentRepository.findAllByName(name);
    }

    public List<Student> findAll() {

        return studentRepository.findAll();
    }

    public Page<Student> findByPageAndSize(Integer page, Integer size){
        Page<Student> result = studentRepository.findAll(new PageRequest(page,size));
        return result;
    }

    public Boolean checkId(Integer studentID, String idCheckNumber) {

        return studentRepository.existsByStudentIDAndIdCheckNumber(studentID, idCheckNumber);//并不取分大小写
    }

    public Boolean bindOpenID(Integer studentID, String openID){
        Student student = studentRepository.findStudentByStudentID(studentID);
        student.setOpenID(openID);
        Student studentWithOpenID = studentRepository.save(student);
        if( studentWithOpenID.getOpenID().equals(student.getOpenID()) ){
            return true;
        }else {
            return false;
        }

    }

}
