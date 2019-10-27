import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

//Components
import ButtonPage from "./Components/ButtonPage/index";
import DisplayPage from "./Components/DisplayPage/index";

const historyObj = createBrowserHistory();

function App() {
  return (
    <Router history={historyObj}>
      <Switch>
        <Route exact path="/" component={ButtonPage} />
        <Route path="/DisplayPage" component={DisplayPage} />
      </Switch>
    </Router>
  );
}

export default App;
