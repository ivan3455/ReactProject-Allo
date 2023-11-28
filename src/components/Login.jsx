import React, { useState, useContext } from "react";
import { UserContext } from "../user/UserContext";

// Форма для входу та реєстрації користувача
const Login = () => {
  // Використанням даних та функцій, отриманих через контекст користувача 
  const { loggedInUser, register, login, logout } = useContext(UserContext);

  // Cтворення станів name та password, які відповідають за введені дані користувача
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name && password) {
      register(name, password);
      setName("");
      setPassword("");
    } else {
      alert("Будь ласка, введіть ім'я та пароль!");
    }
  };

  const handleLogin = () => {
    if (name && password) {
      login(name, password);
      setName("");
      setPassword("");
    } else {
      alert("Будь ласка, введіть ім'я та пароль!");
    }
  };

  return (
    <div>
      {loggedInUser ? (
        <button onClick={logout}>Вийти</button>
      ) : (
        <div>
          {/* input для імені та паролю */}
          <input
            type="text"
            placeholder="Ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Увійти</button>
          <button onClick={handleRegister}>Зареєструватися</button>
        </div>
      )}
    </div>
  );
};

export default Login;
