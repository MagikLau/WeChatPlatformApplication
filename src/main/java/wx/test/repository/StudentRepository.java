package wx.test.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.QueryHints;
import org.springframework.data.repository.query.Param;
import wx.test.model.Student;

import javax.persistence.QueryHint;
import java.util.List;

import static org.hibernate.jpa.QueryHints.HINT_COMMENT;

/**
 * Created by MagikLau on 2018/2/5.
 * Java web dev
 */
public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findStudentByStudentID(Integer studentID);

    Student findStudentByOpenID(String openID);

    List<Student> findAllByName(String name);

    List<Student> findByMajorAndGradeClassAndOpenIDNotNull(String major, Integer gradeClass);

    Boolean existsByStudentIDAndIdCheckNumber(Integer studentID, String idCheckNumber);

    Student save(Student student);

    @QueryHints(value = { @QueryHint(name = HINT_COMMENT, value = "a query for pageable")})
    Page<Student> findAll(Pageable pageable);
}
