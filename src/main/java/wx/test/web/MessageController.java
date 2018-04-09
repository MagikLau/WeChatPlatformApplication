package wx.test.web;

import com.mxixm.fastboot.weixin.annotation.WxAsyncMessage;
import com.mxixm.fastboot.weixin.annotation.WxMessageMapping;
import com.mxixm.fastboot.weixin.module.message.WxMessage;
import com.mxixm.fastboot.weixin.module.message.WxMessageTemplate;
import com.mxixm.fastboot.weixin.module.web.WxRequest;
import com.mxixm.fastboot.weixin.module.web.session.WxSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by MagikLau on 2018/3/12.
 * Java web dev
 */
@Controller
@RequestMapping("/messages")
public class MessageController{

//    @WxMessageMapping(type = WxMessage.Type.TEXT)
//    public String receiveMsgText(WxRequest wxRequest, String content) {
//        WxSession wxSession = wxRequest.getWxSession();
//
//        if (wxSession != null && wxSession.getAttribute("last") != null) {
//            String lastMsg = wxSession.getAttribute("last").toString();
//        }
//        return "messages";
//    }

    @RequestMapping("")
    public String receiveMsgText() {

        return "messages";
    }

    @RequestMapping(value = "/sendToAll", method = RequestMethod.POST)
    @ResponseBody
    public WxMessage sendMsg(@RequestParam("content") String content) {
        System.out.println("MsgContent:"+content);

        return WxMessage.Text.builder()
                .content(content)
                .toGroup()
                .build();
    }

//    @RequestMapping(value = "/sendMsg", method = RequestMethod.POST)
//    public String sendMsg(@RequestParam("tagId") int tagId,
//                          @RequestParam("title") String title,
//                          @RequestParam("description") String description,
//                          @RequestParam("picUrl") String picUrl,
//                          @RequestParam("url") String url) {
//        String content = "tagId, title, description, picUrl, url：\n"+tagId+"\t"+title+"\t"+description+"\t"+picUrl+"\t"+url;
//        System.out.println(content);
//        WxMessage wxMessage = WxMessage
//                .Text.builder()
//                .content(content)
////                .News.builder()
////                .addItem(title, description, picUrl, url)
//                .toGroup()
//                .build();
//
//        wxMessageTemplate.sendGroupMessage(tagId, wxMessage);
//
//        return "redirect:";
//    }
}
