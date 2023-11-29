import React, { useState, useContext } from "react";
import { UserContext } from "../user/UserContext";
import { Modal, Input, Button, Spin } from "antd";

const Login = () => {
  const { loggedInUser, register, login, logout } = useContext(UserContext);

   // Стани для управління інформацією форми та анімації завантаження
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const [delayedAction, setDelayedAction] = useState(null);

  // Метод для обробки реєстрації користувача
  const handleRegister = () => {
    if (name && password) {
      setLoading(true);
      const action = setTimeout(() => {
        register(name, password);
        setName("");
        setPassword("");
        setLoading(false);
      }, 1500);
      setDelayedAction(action);
    } else {
      alert("Будь ласка, введіть ім'я та пароль!");
    }
  };

  // Метод для обробки входу користувача
  const handleLogin = () => {
    if (name && password) {
      setLoading(true);
      const action = setTimeout(() => {
        login(name, password);
        setName("");
        setPassword("");
        setLoading(false);
      }, 1500);
      setDelayedAction(action);
    } else {
      alert("Будь ласка, введіть ім'я та пароль!");
    }
  };

  // Метод для обробки виходу користувача
  const handleLogout = () => {
    logout();
    setModalVisible(false); // Закриваємо модальне вікно після виходу
  };

  // Стан для керування видимістю модального вікна
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      {loggedInUser ? (
        // Відображення кнопки для виходу, якщо користувач увійшов
        <Button
          onClick={handleLogout}
          style={{ marginTop: "10px", color: "black", background: "white" }}
        >
          Вийти
        </Button>
      ) : (
        // Відображення модального вікна для входу/реєстрації, якщо користувач не увійшов
        <div>
          <Button onClick={() => setModalVisible(true)}>
            Увійти / Зареєструватися
          </Button>
          {/* Модальне вікно з ant-design компонентами всередині для авторизації користувача*/}
          <Modal
            title="Авторизація"
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={[
              <Button key="back" onClick={() => setModalVisible(false)}>
                Закрити
              </Button>,
            ]}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Input
                type="text"
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input.Password
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={handleLogin}
                type="primary"
                loading={loading}
                style={{ marginTop: "10px" }}
              >
                {loading ? "Завантаження..." : "Увійти"}
              </Button>
              <Button
                onClick={handleRegister}
                loading={loading}
                style={{ marginTop: "10px" }}
              >
                {loading ? "Завантаження..." : "Зареєструватися"}
              </Button>
            </div>
          </Modal>
          <Spin spinning={loading} />
        </div>
      )}
    </div>
  );
};

export default Login;
