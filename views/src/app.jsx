import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import RouterView from "./components/layouts/RouterView";

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
