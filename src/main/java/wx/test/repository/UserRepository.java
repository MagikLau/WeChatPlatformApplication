package wx.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wx.test.model.User;

import java.util.List;

/**
 * Created by MagikLau on 2018/2/26.
 * Java web dev
 */
public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findAll();

    User findByUsername(String username);



}
