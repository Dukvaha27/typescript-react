import React from "react";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = (): JSX.Element => {
  return (
    <nav>
      <div className="nav-wrapper #880e4f pink darken-4 pX1">
        <a href="/" className="brand-logo">
          React+TypeScript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Пользователи</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Тудушки</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
