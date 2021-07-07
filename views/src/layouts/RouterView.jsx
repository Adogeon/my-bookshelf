import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import ChallengePage from "../pages/ChallengePage";
import ChallengeDetail from "../pages/ChallengeDetail";
import BookDetail from "../pages/BookDetail";

const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/books">
        <BookPage />
      </Route>
      <Route path="/book/:bookId">
        <BookDetail />
      </Route>
      <Route path="/challenges">
        <ChallengePage />
      </Route>
      <Route path="/challenge/:challengeId">
        <ChallengeDetail />
      </Route>
      <Route path="/challenge/new">
        <NewChallenge />
      </Route>
    </Switch>
  );
};

export default RouterView;
