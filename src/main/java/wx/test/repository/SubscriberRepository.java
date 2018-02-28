package wx.test.repository;

import wx.test.model.Subscriber;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/7.
 * Java web dev
 */
public interface SubscriberRepository {

    List<Subscriber> loadAll();

    List<Subscriber> findByGroupID(String groupID);

    Subscriber findByOpenID(String openID);

    void deleteByOpenID(String openID);

    void saveSubscriber(Subscriber subscriber);

}
