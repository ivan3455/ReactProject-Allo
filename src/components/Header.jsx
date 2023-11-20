import React, { Component } from "react";
import "../css/styles.css"; // Шлях до вашого CSS-файлу

class Header extends Component {
  render() {
    const { selectedProducts } = this.props; // Отримання кількості обраних товарів з props
    const { isLoggedIn } = this.props; // Отримання стану входу з props

    return (
      <header>
        <div className="container">
          <img
            src="https://becover.com.ua/upload/iblock/b3a/b3ab547b7eb5aa952e3841ff5547c7fe.jpg"
            alt="Allo.ua Logo"
          />
        </div>

        {/* Відображення кількості обраних товарів */}
        <p>Обрано товарів: {selectedProducts}</p>
        {/* Відображення стану входу\виходу користувача */}
        <p>Стан: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
      </header>
    );
  }
}

export default Header;
