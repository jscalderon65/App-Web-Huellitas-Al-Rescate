import React from "react";
import NavbarDashBoard from "../DashBoard/NavbarDashBoard";
/* import {CommentTable} from '../index.js' */
import { Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
const PrivateSwitch = ({UserInfo}) => {
  return (
    <>
    <NavbarDashBoard/>
    <Switch>
      <Route exact path="/dashboard/comentarios" component={() => <div>Comentarios</div>} />
      <Route exact path="/dashboard/cursos" component={() => <div>Cursos</div>} />
      <Route exact path="/dashboard/estudiantes" component={() => <div>Estudiantes</div>} />
      <Redirect to="/dashboard" />
    </Switch>
    </>
  );
};

export default PrivateSwitch;
