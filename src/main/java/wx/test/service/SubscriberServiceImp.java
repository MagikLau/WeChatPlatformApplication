package wx.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wx.test.dao.SubscriberDao;
import wx.test.model.Subscriber;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/8.
 * Java web dev
 */
@Service
@Transactional
public class SubscriberServiceImp implements SubscriberService{

    @Autowired
    private SubscriberDao subscriberDao;

    public List<Subscriber> loadAll(){
        return subscriberDao.loadAll();
    }

    public List<Subscriber> findByGroupID(String groupID){

        return subscriberDao.findByGroupID(groupID);
    }

    public Subscriber findByOpenID(String openID){

        return subscriberDao.findByOpenID(openID);
    }

    public void deleteByOpenID(String openID){

        subscriberDao.deleteByOpenID(openID);
    }

    public void saveSubscriber(Subscriber subscriber){

        subscriberDao.saveSubscriber(subscriber);
    }

    public void bindStudentID(Subscriber subscriber, Integer studentID) {


    }
}
