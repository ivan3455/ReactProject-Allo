import React, { useContext } from "react";
import CityStatus from "./Hooks/CityStatus";
import { UserContext } from "../user/UserContext";
import Login from "./Login";

// Верхня частина сторінки - логотип, вибір міста, кількість обраних товарів та інформація про користувача
const Header = ({ selectedProducts }) => {
  // Отримання статусу входу користувача
  const { loggedInUser } = useContext(UserContext);

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
        <p>Користувач: {loggedInUser || "Гість"}</p>
        <Login />
      </span>
    </header>
  );
};

export default Header;
