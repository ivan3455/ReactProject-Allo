import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Стан користувачів та залогований користувач.
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("loggedInUser") || ""
  );

  // Реєстрація нового користувача.
  const register = (name, password) => {
    if (users.some((user) => user.name === name)) {
      alert("Користувач з таким ім'ям вже існує!");
    } else {
      const updatedUsers = [...users, { name, password }];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setLoggedInUser(name);
      localStorage.setItem("loggedInUser", name);
    }
  };

  // Логін користувача.
  const login = (name, password) => {
    const user = users.find((user) => user.name === name);
    if (user && user.password === password) {
      setLoggedInUser(name);
      localStorage.setItem("loggedInUser", name);
    } else {
      alert("Неправильне ім'я користувача або пароль!");
    }
  };

  // Логаут користувача.
  const logout = () => {
    setLoggedInUser("");
    localStorage.removeItem("loggedInUser");
  };

  // Повернення UserContext.Provider зі значенням,
  // яке містить поточного залогованого користувача та функції реєстрації, входу та виходу.
  return (
    <UserContext.Provider value={{ loggedInUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
