package wx.test.repository;

import com.mxixm.fastboot.weixin.web.WxUserManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wx.test.model.Subscriber;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/9.
 * Java web dev
 */
@Service
@Transactional
public class SubscriberRepositoryImp implements SubscriberRepository {

    @Autowired
    private WxUserManager wxUserManager ;

    public List<Subscriber> loadAll() {
//        WxWebUtils.getWxWebUserFromSession();
        return null;
    }

    public List<Subscriber> findByGroupID(String groupID) {
        return null;
    }

    public Subscriber findByOpenID(String openID) {
        return null;
    }

    public void deleteByOpenID(String openID) {

    }

    public void saveSubscriber(Subscriber subscriber) {

    }
}
