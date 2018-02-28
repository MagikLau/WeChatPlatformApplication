package wx.test.service;

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
