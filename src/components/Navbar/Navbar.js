import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navigation">
      <ul className="NavbarUl">
        <li className="navLink">
          <Link to="/">Home</Link>
        </li>
        <li className="navLink">
          <Link to="producten">Producten</Link>
        </li>
        <li className="navLink">
          <Link to="bestellen">Bestellen</Link>
        </li>
        <li className="navLink">
          <Link to="recepten">Recepten</Link>
        </li>
      </ul>
    </nav>
  );
}
