import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        {/* Cтворення посилань */}
        <li>
          <NavLink to="/categories" activeClassName="active-link">
            Категорії
          </NavLink>
        </li>
        <li>
          <NavLink to="/user-info" activeClassName="active-link">
            Аккаунт
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
