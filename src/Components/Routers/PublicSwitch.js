import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Footer, NavBar, Home, CoursesView, DetallesCourseView } from '../index.js';
const PublicSwitch = () => {
  return (
    <Fragment>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Switch>
          <Route exact path="/inicio" component={Home} />
          <Route
            exact
            path="/estudiantes"
            component={() => <h1>Hola</h1>}
          />
          <Route
            exact
            path="/cursos"
            component={CoursesView}
          />
          <Route
            exact
            path="/cursos/:id"
            component={DetallesCourseView}
          />
          <Redirect to="/inicio" />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};
export default PublicSwitch;
