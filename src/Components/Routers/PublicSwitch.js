import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer, NavBar, Home, CoursesView, CourseViewDetails, ActivitiesView, GalleryContainer } from '../index.js';

const PublicSwitch = ({firebase}) => {
  firebase.analytics().logEvent('Nuevo visitante');
  return (
    <Fragment>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Switch>
          <Route exact path="/inicio" component={Home} />
          <Route
            exact
            path="/estudiantes"
            component={GalleryContainer}
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
          <Route
            exact
            path="/actividades/:id"
            component={ActivitiesView}
          />
          <Redirect to="/inicio" />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};
export default PublicSwitch;
