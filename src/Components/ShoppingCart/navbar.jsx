import React from "react";

//Stateless Functional Component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      Navbar{" "}
      <span className="badge badge-pill badge-secondary">
        Items:
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default NavBar;
