import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <hr />
      <NavLink to="/candies">Candies</NavLink>
    </nav>
  )
}

export default Navbar;
