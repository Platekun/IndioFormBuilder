import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="NavBar">
    <h2 hidden>Navigation Menu</h2>
    <ul className="NavBar__links">
      <li className="NavBar__link">
        <NavLink to="/create" activeClassName="NavBar__link--active">
          Create
        </NavLink>
      </li>
      <li className="NavBar__link">
        <NavLink to="/preview" activeClassName="NavBar__link--active">
          Preview
        </NavLink>
      </li>
      <li className="NavBar__link">
        <NavLink to="/export" activeClassName="NavBar__link--active">
          Export
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
