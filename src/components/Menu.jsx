import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav>
        {/* Тимчасове меню - релізувати потім */}
        <ul>
          <li>
            <a href="#">Пункт 1</a>
          </li>
          <li>
            <a href="#">Пункт 2</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
