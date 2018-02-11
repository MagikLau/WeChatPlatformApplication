package wx.test.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by MagikLau on 2018/2/4.
 * Java web dev
 */
//@Entity
public class Subscriber {

//    @Id
    private String openID;

//    @Column
    private String nickName;

//    @Column
    private Date subscribeTime;

//    @Column
    private String remark;

//    @Column
    private String groupID;

//    @Column
    private String tagID_List;

    @Override
    public String toString() {
        return "Subscriber{" +
                "openID='" + openID + '\'' +
                ", nickName='" + nickName + '\'' +
                ", subscribeTime=" + subscribeTime +
                ", remark='" + remark + '\'' +
                ", groupID='" + groupID + '\'' +
                ", tagID_List='" + tagID_List + '\'' +
                '}';
    }

    public String getOpenID() {
        return openID;
    }

    public void setOpenID(String openID) {
        this.openID = openID;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public Date getSubscribeTime() {
        return subscribeTime;
    }

    public void setSubscribeTime(Date subscribeTime) {
        this.subscribeTime = subscribeTime;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getGroupID() {
        return groupID;
    }

    public void setGroupID(String groupID) {
        this.groupID = groupID;
    }

    public String getTagID_List() {
        return tagID_List;
    }

    public void setTagID_List(String tagID_List) {
        this.tagID_List = tagID_List;
    }
}
