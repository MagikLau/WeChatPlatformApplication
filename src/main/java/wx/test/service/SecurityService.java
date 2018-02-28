package wx.test.service;

/**
 * Created by MagikLau on 2018/2/27.
 * Java web dev
 */
public interface SecurityService {

    String findLoggedInUsername();

    void autoLogin(String username, String password);


}
