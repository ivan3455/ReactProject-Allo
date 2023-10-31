import React from 'react';
import LoginButton from './LoginButton'; // Імпорт компоненти LoginButton

// Функціональний компонент -- Перетворити на класовий в майбутньому
const Header = ({ isLoggedIn, handleLoginChange }) => { // Деструктеризуємо пропси
  return (
    <div className="Header">
      {isLoggedIn ? <h2>Вітаємо!</h2> : <h2>Будь ласка, увійдіть в систему!</h2>}

      { /*Передаємо метод-обробник входу виходу через пропси */}
      <LoginButton onChange={handleLoginChange} />
    </div>
  );
};

export default Header;
