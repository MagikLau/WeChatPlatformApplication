package wx.test.util;

import org.springframework.beans.factory.annotation.Value;

/**
 * Created by MagikLau on 2018/2/7.
 * Java web dev
 */
public class PropertiesUtil {
    @Value("${aliyun.ip.wechatplatform}")
    public static String serverUrl;

}
