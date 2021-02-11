import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";

import TextsIndex from "./components/texts/TextsIndex";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={TextsIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
