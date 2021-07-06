import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./layouts/NavBar";
import RouterView from "./layouts/RouterView";

import layout from "./styles/row.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main className={`${layout["col-8"]} ${layout['m-auto']}`}>
        <RouterView />
      </main>
    </Router>
  );
};

export default App;
