package wx.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wx.test.repository.SubscriberRepository;
import wx.test.model.Subscriber;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/8.
 * Java web dev
 */
@Service
public class SubscriberServiceImpl implements SubscriberService{

    @Autowired
    private SubscriberRepository subscriberRepository;

    public List<Subscriber> loadAll(){
        return subscriberRepository.loadAll();
    }

    public List<Subscriber> findByGroupID(String groupID){

        return subscriberRepository.findByGroupID(groupID);
    }

    public Subscriber findByOpenID(String openID){

        return subscriberRepository.findByOpenID(openID);
    }

    public void deleteByOpenID(String openID){

        subscriberRepository.deleteByOpenID(openID);
    }

    public void saveSubscriber(Subscriber subscriber){

        subscriberRepository.saveSubscriber(subscriber);
    }

    public void bindStudentID(Subscriber subscriber, Integer studentID) {


    }
}
