package wx.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wx.test.model.Role;

/**
 * Created by MagikLau on 2018/2/27.
 * Java web dev
 */
public interface RoleRepository extends JpaRepository<Role, Long> {

}
