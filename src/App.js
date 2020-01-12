import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import Shop from "./pages/shop/Shop";
import SignInUp from "./pages/sign-in-up/SignInUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/connect" component={SignInUp} />
        <Route path="/shop" component={Shop} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
