import React, { useContext } from "react";
import { UserContext } from "../user/UserContext";
import Footer from "./Footer";

const User = () => {
    // Отримання доступу до контексту користувача. 
    // (Містить ім'я поточного залогованого користувача i logout - функцію для виходу з системи)
  const { loggedInUser, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Інформація про користувача</h2>
      {/*Якщо користувач увійшов в систему (loggedInUser має значення)*/}
      {loggedInUser ? (
        <div>
          <p>Ласкаво просимо, {loggedInUser}!</p>
          <button onClick={handleLogout}>Вийти</button>
        </div>
      ) : (
        <p>Ви увійшли як гість</p>
      )}
      <Footer/>
    </div>
  );
};

export default User;
