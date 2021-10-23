import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Count from "../components/Counter";
import Textfield from "../components/Textfield";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";

const Routes = () => {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route exact path="/" component={Count} />
          <Route exact path="/textfield" component={Textfield} />
          <Route exact path="/select" component={Select} />
          <Route exact path="/checkbox" component={Checkbox} />
          <Route exact path="/radio" component={Radio} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
};

export default Routes;
