import { FiUsers } from "react-icons/fi";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  pathname?: string;
}

const SidebarSegmentUser = ({ pathname }: Props) => {
  return (
    <SubMenu
      className={`text-sm font-medium`}
      label="Users"
      icon={<FiUsers className="text-xl" />}
    >
      <MenuItem
        className={pathname == "/user/list" ? "active" : ""}
        component={<Link to="/user/list" />}
      >
        <span className="text-sm font-medium">All Users</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/user/module" ? "active" : ""}
        component={<Link to="/user/module" />}
      >
        <span className="text-sm font-medium">User Module</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/user/permission" ? "active" : ""}
        component={<Link to="/user/permission" />}
      >
        <span className="text-sm font-medium">Permission</span>
      </MenuItem>
      <MenuItem
        className={pathname == "/user/role" ? "active" : ""}
        component={<Link to="/user/role" />}
      >
        <span className="text-sm font-medium">User Role</span>
      </MenuItem>
    </SubMenu>
  );
};

export default SidebarSegmentUser;
