import React from "react";
import NavbarDashBoard from "../DashBoard/NavbarDashBoard";
import CommentTable from '../DashBoard/CommentTable'
import { Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
const PrivateSwitch = ({UserInfo}) => {
  return (
    <>
    <NavbarDashBoard/>
    <Switch>
      <Route exact path="/dashboard" component={() => <div>
        <CommentTable collection={"Comments of 1"}/>
        <CommentTable collection={"Comments of 3"}/>
        </div>} />
      <Redirect to="/dashboard" />
    </Switch>
    </>
  );
};

export default PrivateSwitch;
