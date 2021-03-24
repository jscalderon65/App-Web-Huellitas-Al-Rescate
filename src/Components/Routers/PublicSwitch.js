import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Footer, NavBar, Home, CoursesView, CourseViewDetails } from '../index.js';
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
            component={() => <h1>En proceso</h1>}
          />
          <Route
            exact
            path="/cursos"
            component={CoursesView}
          />
          <Route
            exact
            path="/cursos/:id"
            component={CourseViewDetails}
          />
          <Redirect to="/inicio" />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};
export default PublicSwitch;
