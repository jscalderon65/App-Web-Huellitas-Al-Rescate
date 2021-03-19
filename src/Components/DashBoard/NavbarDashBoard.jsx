import React, { useState, Fragment } from "react";
import {logout} from '../../Firebase/FirebaseAuth'
import { Button, Drawer} from "antd";
import { MenuUnfoldOutlined} from "@ant-design/icons";
const NavBarDashBoard = ({ history }) => {
    
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Fragment>
      <div className="navbar-dashboard">
        <Button onClick={showDrawer} type="primary" size="large">
          <MenuUnfoldOutlined />
        </Button>
        <Button onClick={logout} type="primary" size="large" danger>
          Salir
        </Button>
      </div>
      <Drawer
        drawerStyle={{ backgroundColor: "#20232A", color: "white" }}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Fragment>
  );
};
export default NavBarDashBoard;
