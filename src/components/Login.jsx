import React, { Component } from "react";

class Login extends Component {
  render() {
    const { isLoggedIn, onLogin, onLogout } = this.props; // Отримання даних з props

    return (
      <div>
        {/* Умовний оператор для відображення кнопки "Увійти" або "Вийти" */}
        {isLoggedIn ? (
          <button onClick={onLogout}>Вийти</button>
        ) : (
          <button onClick={onLogin}>Увійти</button>
        )}
      </div>
    );
  }
}

export default Login;
