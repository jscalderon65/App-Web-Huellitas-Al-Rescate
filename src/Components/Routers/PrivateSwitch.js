import React from "react";
import NavbarDashBoard from "../DashBoard/NavbarDashBoard";
import { Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
const PrivateSwitch = ({UserInfo}) => {
  return (
    <>
    <NavbarDashBoard/>
    <Switch>
      <Route exact path="/dashboard" component={() => <div>{JSON.stringify(UserInfo)}</div>} />
      <Redirect to="/dashboard" />
    </Switch>
    </>
  );
};

export default PrivateSwitch;
