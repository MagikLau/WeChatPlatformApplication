package wx.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    public List<Student> findByMajorAndGradeClassAndOpenIDNotNull(String major, Integer gradeClass) {
        return studentRepository.findByMajorAndGradeClassAndOpenIDNotNull(major, gradeClass);
    }

    public List<Student> findAll() {

        return studentRepository.findAll();
    }

    public Page<Student> findByPageAndSize(Integer page, Integer size){
        //Reference: http://blog.csdn.net/shanshan_blog/article/details/76690346
        //Pageable是接口，PageRequest是接口实现
        //PageRequest的对象构造函数有多个，page是页数，初始值是0，size是查询结果的条数，后两个参数参考Sort对象的构造方法
        Pageable pageable = new PageRequest(page,size, Sort.Direction.DESC,"studentID");
        Page<Student> studentPage = studentRepository.findAll(pageable);

        return studentPage;
    }

    public Boolean checkId(Integer studentID, String idCheckNumber) {

        return studentRepository.existsByStudentIDAndIdCheckNumber(studentID, idCheckNumber);//不取分大小写
    }

    public Boolean bindOpenID(Integer studentID, String openID) {
        Student student = studentRepository.findStudentByStudentID(studentID);
        student.setOpenID(openID);
        Student studentWithOpenID;
        Boolean result = false;
        try{
            studentWithOpenID = studentRepository.save(student);
            result = (studentWithOpenID.getOpenID()==null&&student.getOpenID()==null) || (studentWithOpenID.getOpenID()).equals(student.getOpenID());
        }catch (Exception e){
            e.printStackTrace();
        }
        System.out.println("result: "+result);
        return result;

    }

    public Boolean bindDirection(Integer studentID, String direction){
        Student student = studentRepository.findStudentByStudentID(studentID);
        student.setDirection(direction);
        Student studentWithDirection = null;
        Boolean result = false;
        try{
            studentWithDirection = studentRepository.save(student);
            result = studentWithDirection.getOpenID().equals(student.getOpenID());
        }catch (Exception e){
            System.out.println("result: "+result+", studentWithDirection: "+studentWithDirection);
        }

        return result;
    }

}
