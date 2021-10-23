import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/textfield"
              className="nav-link"
              activeClassName="active"
            >
              Textfield
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/select"
              className="nav-link"
              activeClassName="active"
            >
              Select
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/checkbox"
              className="nav-link"
              activeClassName="active"
            >
              Checkbox
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/radio"
              className="nav-link"
              activeClassName="active"
            >
              Radio
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
