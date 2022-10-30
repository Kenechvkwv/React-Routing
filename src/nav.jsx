import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const logostyle = { color: "white", textDecoration: "none" };
  return (
    <nav>
      <h3>
        <Link to="/" style={logostyle}>
          Logo
        </Link>
      </h3>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
