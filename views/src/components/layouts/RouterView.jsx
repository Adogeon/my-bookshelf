import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookPage from "../Pages/BookPage";
import ChallengePage from "../Pages/ChallengePage";

const RouterView = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/books">
          <BookPage />
        </Route>
        <Route path="/challenges">
          <ChallengePage />
        </Route>
      </Switch>
    </Router>
  );
};
