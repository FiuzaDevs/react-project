import React from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import { HomeComponent } from "./pages/home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeComponent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;