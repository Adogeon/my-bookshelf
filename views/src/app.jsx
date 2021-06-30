import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import RouterView from "./layouts/RouterView";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <RouterView />
      </main>
    </Router>
  );
};

export default App;
