import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";

const hatsPage = props => {
  console.log(props);

  return (
    <div>
      <h1>hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/hats" component={hatsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
