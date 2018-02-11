package wx.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import wx.test.dao.SubscriberDao;
import wx.test.model.Student;
import wx.test.model.Subscriber;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/8.
 * Java web dev
 */
public interface SubscriberService {

    List<Subscriber> loadAll();

    List<Subscriber> findByGroupID(String groupID);

    Subscriber findByOpenID(String openID);

    void deleteByOpenID(String openID);

    void saveSubscriber(Subscriber subscriber);

}
