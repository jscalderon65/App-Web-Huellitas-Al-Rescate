import React from "react";
import NavbarDashBoard from "../DashBoard/NavbarDashBoard";
import { Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
const PrivateSwitch = () => {
  return (
    <>
    <NavbarDashBoard/>
    <Switch>
      <Route exact path="/dashboard" component={() => <div>DashBoard</div>} />
      <Redirect to="/dashboard" />
    </Switch>
    </>
  );
};

export default PrivateSwitch;
