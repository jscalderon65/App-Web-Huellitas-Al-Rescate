import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const PublicSwitch = () => {
  return (
    <Switch>
      <Route exact path="/inicio" component={() => <div>Inicio</div>}/>
      <Redirect to="/inicio" />
    </Switch>
  );
};

export default PublicSwitch;
