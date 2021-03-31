import React from "react";
import NavbarDashBoard from "../DashBoard/NavbarDashBoard";
import FooterDashBoard from "../DashBoard/FooterDashBoard";
import {
  CoursesDashBoard,
  TablesView,
  ClassesOperations,
  GalleryOperations,
} from "../index.js";
import { Switch, Route, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
const PrivateSwitch = () => {
  return (
    <>
      <NavbarDashBoard />
      <Switch>
        
        <Route 
        exact 
        path="/dashboard/cursos" 
        component={CoursesDashBoard} />

        <Route
          exact
          path="/dashboard/cursos/:courseId"
          component={ClassesOperations}
        />

        <Route 
        exact 
        path="/dashboard/comentarios" 
        component={TablesView} 
        />

        <Route
          exact
          path="/dashboard/estudiantes"
          component={GalleryOperations}
        />
        <Redirect to="/dashboard/cursos" />
      </Switch>
      <FooterDashBoard />
    </>
  );
};

export default PrivateSwitch;
