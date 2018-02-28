package wx.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wx.test.model.Student;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/5.
 * Java web dev
 */
public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findStudentByStudentID(Integer studentID);

    Student findStudentByOpenID(String openID);

    List<Student> findAllByName(String name);

    Boolean existsByStudentIDAndIdCheckNumber(Integer studentID, String idCheckNumber);

    Student save(Student student);
}
