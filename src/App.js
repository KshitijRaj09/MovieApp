import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import HomePage from "./component/HomePage";
import Favourite from "./component/Favourite";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/favourite" component={Favourite} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
