import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      // Створення посилання на головну сторінку
      <footer>
        <p>
          © 2023{" "}
          <NavLink to="/" activeClassName="active-link">
            Алло
          </NavLink>
        </p>
      </footer>
    );
  }
}

export default Footer;
