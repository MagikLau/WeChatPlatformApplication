package wx.test.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Created by MagikLau on 2018/2/4.
 * Java web dev
 */
@Entity
public class Student {

    @Id
    private Integer studentID;  //学号

    @Column
    private String openID;

    @Column(nullable = false)
    private String  name;       //姓名

    @Column
    private Integer gender;     //性别

    @Column
    private Integer birthYear;  //出生年份

    @Column
    private String academy;     //所在学院

    @Column
    private String major;       //主修专业 例如：软件工程

    @Column
    private Integer grade_class;//年级班级 例如：1404

    @Column(nullable = false)
    private String idCheckNumber;//身份证核对信息，取最后6位

    @Override
    public String toString() {
        return "Student{" +
                "studentID=" + studentID +
                ", name='" + name + '\'' +
                ", gender=" + gender +
                ", birthYear=" + birthYear +
                ", academy='" + academy + '\'' +
                ", major='" + major + '\'' +
                ", grade_class=" + grade_class +
                ", idCheckNumber=" + idCheckNumber +
                '}';
    }

    public Integer getStudentID() {
        return studentID;
    }

    public void setStudentID(Integer studentID) {
        this.studentID = studentID;
    }

    public String getOpenID() {
        return openID;
    }

    public void setOpenID(String openID) {
        this.openID = openID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Integer getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(Integer birthYear) {
        this.birthYear = birthYear;
    }

    public String getAcademy() {
        return academy;
    }

    public void setAcademy(String academy) {
        this.academy = academy;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public Integer getGrade_class() {
        return grade_class;
    }

    public void setGrade_class(Integer grade_class) {
        this.grade_class = grade_class;
    }

    public String getIdCheckNumber() {
        return idCheckNumber;
    }

    public void setIdCheckNumber(String idCheckNumber) {
        this.idCheckNumber = idCheckNumber;
    }
}
