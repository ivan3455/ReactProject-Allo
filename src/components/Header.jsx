import React, { Component } from "react";
import Login from "./Login"; // Імпорт компонента Login
import CityStatus from "./Hooks/CityStatus";  

class Header extends Component {
  render() {
    const { selectedProducts, isLoggedIn, onLogin, onLogout } = this.props;

    return (
      <header>
        <div className="container">
          <img
            src="https://becover.com.ua/upload/iblock/b3a/b3ab547b7eb5aa952e3841ff5547c7fe.jpg"
            alt="Allo.ua Logo"
          />
        </div>

        {/* Відображення хука для вибору міста */}
        <CityStatus />

        {/* Відображення кількості обраних товарів */}
        <span>
          <p>Обрано товарів: {selectedProducts}</p>
          {/* Відображення стану входу\виходу користувача */}
          <p>Стан: {isLoggedIn ? "Logged In" : "Logged Out"}</p>
          <Login isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} />
        </span>
      </header>
    );
  }
}

export default Header;
