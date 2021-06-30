import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import ChallengePage from "../pages/ChallengePage";

const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/books">
        <BookPage />
      </Route>
      <Route path="/challenges">
        <ChallengePage />
      </Route>
    </Switch>
  );
};

export default RouterView;
