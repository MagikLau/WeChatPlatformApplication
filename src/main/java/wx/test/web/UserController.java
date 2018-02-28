package wx.test.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import wx.test.model.User;
import wx.test.service.SecurityService;
import wx.test.service.UserService;
import wx.test.validator.UserValidator;

/**
 * Created by MagikLau on 2018/2/20.
 * Java web dev
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserValidator userValidator;

    @RequestMapping(value = "/manager_login", method = RequestMethod.GET)
    public String login(/*Model model,
                        @RequestParam(value="error", required = false) String error,
                        @RequestParam(value="logout", required = false) String logout*/) {
//        if (error != null){
//            model.addAttribute("error", "Your username or password is invalid.");
//        }
//
//        if (logout != null)
//            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }

//    @RequestMapping("/check.do")
//    public @ResponseBody String check(
//            @RequestParam(value = "username", required = true) String username,
//            @RequestParam(value = "password", required = true) String password,
//            Model model) {
//        boolean isExist = usersService.isExist(username, password);
//        String info = new String();
//        if(isExist){
//            info = "yes";
//        }else{
//            info = "no";
//        }
//        return info;
//    }

    @RequestMapping("/management/manager_logout")
    public String managerLogout(ModelMap modelMap) {
        modelMap.addAttribute("msg", "You've been logged out successfully.");
        return "login";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public String registration(ModelMap model) {
        model.addAttribute("userForm", new User());

        return "registration";
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult, Model model) {
        userValidator.validate(userForm, bindingResult);

        if (bindingResult.hasErrors()) {
            return "registration";
        }

        userService.save(userForm);

        securityService.autoLogin(userForm.getUsername(), userForm.getPassword());

        return "redirect:/home";
    }

}
