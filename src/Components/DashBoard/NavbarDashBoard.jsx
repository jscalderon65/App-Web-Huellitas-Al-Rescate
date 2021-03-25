import React, { useState, Fragment } from "react";
import { logout } from "../../Firebase/FirebaseAuth";
import { Button, Drawer, Typography, Divider } from "antd";
import { MenuUnfoldOutlined,CommentOutlined,BookOutlined,SettingOutlined } from "@ant-design/icons";
import { NavLink  } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
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
        <div className="dashboard-side-menu">
          <Typography.Title level={2} style={{ color: "white", textAlign: "center" }}>
          <SettingOutlined rotate={10} /> Menú 
          </Typography.Title>
          <NavLink 
          activeClassName="active-menu"
            className="dashboard-side-menu-element"
            onClick={onClose}
            to="/dashboard/cursos"
          >
            <Divider style={{ color: "white" }}>
              <BookOutlined style={{ fontSize: 30, color: "white" }} />
            </Divider>
            <Typography.Title style={{ color: "white" }} level={5}>
              Cursos
            </Typography.Title>
          </NavLink >
          <br />
          <NavLink 
          activeClassName="active-menu"
            className="dashboard-side-menu-element"
            onClick={onClose}
            to="/dashboard/comentarios"
          >
            <Divider style={{ color: "white" }}>
              <CommentOutlined style={{ fontSize: 30, color: "white" }} />
            </Divider>
            <Typography.Title style={{ color: "white" }} level={5}>
              Comentarios
            </Typography.Title>
          </NavLink >
          <br />
          <NavLink 
          activeClassName="active-menu"
            className="dashboard-side-menu-element"
            onClick={onClose}
            to="/dashboard/estudiantes"
          >
            <Divider style={{ color: "white" }}>
              {" "}
              <UserOutlined style={{ fontSize: 30, color: "white" }} />
            </Divider>
            <Typography.Title style={{ color: "white" }} level={5}>
              Estudiantes
            </Typography.Title>
          </NavLink >
        </div>
      </Drawer>
    </Fragment>
  );
};
export default NavBarDashBoard;
