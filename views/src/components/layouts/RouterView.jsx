import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookPage from "../Pages/BookPage";
import ChallengePage from "../Pages/ChallengePage";

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
