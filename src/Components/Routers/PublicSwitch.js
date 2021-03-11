import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Entry from '../Inicio/Entry';
import NavBar from "../Inicio/NavBar";

const PublicSwitch = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/inicio" component={() => <h1>Inicio</h1>} />
        <Route exact path="/adopciones" component={() => <Fragment><Entry color="secondary" title="¿Quienes Somos?" /><Entry color="white" /> <Entry color="primary" /></Fragment>} />
        <Route exact path="/estudiantes" component={() => <h1>estudiantes</h1>} />
        <Redirect to="/inicio" />
      </Switch>
    </Fragment>
  );
};
export default PublicSwitch;
