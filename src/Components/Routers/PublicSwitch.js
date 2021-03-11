import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer, NavBar, Home } from '../index.js';
const PublicSwitch = () => {
  return (
    <Fragment>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Switch>
          <Route exact path="/inicio" component={Home} />
          <Route
            exact
            path="/adopciones"
            component={() => <h1>hola</h1>}
          />
          <Route
            exact
            path="/estudiantes"
            component={() => <h1>estudiantes</h1>}
          />
          <Redirect to="/inicio" />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};
export default PublicSwitch;
