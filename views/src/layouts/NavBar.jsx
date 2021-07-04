import React from "react";
import { Link } from "react-router-dom";

import nav from "./NavBar.css";

const MainNav = () => {
  return (
    <nav className={`${nav["nav-bar"]}`}>
      <Link className={`${nav["nav-item"]}`} to="/">
        Home
      </Link>
      <Link className={`${nav["nav-item"]}`} to="/challenges">
        Challenges
      </Link>
      <Link className={`${nav["nav-item"]}`} to="/books">
        Books
      </Link>
    </nav>
  );
};

export default MainNav;
