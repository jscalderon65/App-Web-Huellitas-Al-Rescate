import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
const PrivateSwitch = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={() => <div>DashBoard</div>} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default PrivateSwitch;
