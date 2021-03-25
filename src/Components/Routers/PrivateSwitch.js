import React from "react";
import NavbarDashBoard from "../DashBoard/NavbarDashBoard";
import FooterDashBoard from "../DashBoard/FooterDashBoard";
import {CoursesDashBoard} from '../index.js'
import { Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
const PrivateSwitch = ({UserInfo}) => {
  return (
    <>
    <NavbarDashBoard/>
    <Switch>
      <Route exact path="/dashboard/cursos" component={CoursesDashBoard} />
      <Route exact path="/dashboard/comentarios" component={() => <div>Comentarios</div>} />
      <Route exact path="/dashboard/estudiantes" component={() => <div>Estudiantes</div>} />
      <Redirect to="/dashboard/cursos" />
    </Switch>
    <FooterDashBoard/>
    </>
  );
};

export default PrivateSwitch;
