package wx.test.service;

import wx.test.model.User;

/**
 * Created by MagikLau on 2018/2/27.
 * Java web dev
 */
public interface UserService {

    void save(User user);

    User findByUsername(String username);

}
