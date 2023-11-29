import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../css/menu.css"; // Стилі для анімації

const Menu = () => {
  return (
    // Анімація появи меню з використанням CSSTransition
    <CSSTransition in={true} appear={true} timeout={300} classNames="header">
      <nav className="menu">
        <ul className="menu-list">
          {/* Пункт меню "Категорії" */}
          <li className="menu-item">
            <NavLink
              to="/categories"
              activeClassName="active-link"
              className="menu-link"
            >
              Категорії
            </NavLink>
          </li>
          {/* Пункт меню "Аккаунт" */}
          <li className="menu-item">
            <NavLink
              to="/user-info"
              activeClassName="active-link"
              className="menu-link"
            >
              Аккаунт
            </NavLink>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default Menu;
