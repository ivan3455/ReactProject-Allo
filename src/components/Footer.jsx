import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../css/footer.css"; // Стилі для анімації

const Footer = () => {
  return (
    /* Використання CSSTransition з бібліотеки react-transition-group для створення анімації появи футера*/
    <CSSTransition in={true} appear={true} timeout={300} classNames="footer">
      <footer className="footer">
        <p>
          © 2023{" "}
          <NavLink to="/" activeClassName="active-link" className="footer-link">
            Алло
          </NavLink>
        </p>
      </footer>
    </CSSTransition>
  );
};

export default Footer;