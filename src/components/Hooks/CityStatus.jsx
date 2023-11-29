import React, { useState } from "react";
import { Modal } from "antd";
import { CSSTransition } from "react-transition-group";
import "../../css/cityStatus.css"; // Стилі для анімації

function CityStatus() {
  const cities = [
    "Київ",
    "Харків",
    "Львів",
    "Вінниця",
    "Миколаїв",
    "Іванофранківськ",
    "Ужгород",
    "Дніпро",
    "Одеса",
    "Полтава",
    "Рівне",
    "Хмельницький",
    "Запоріжжя",
    "Черкаси",
  ];

  const [selectedCity, setSelectedCity] = useState("Київ");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="city-label" onClick={showModal}>
        Змінити місто
      </div>
      {/* Використання CSSTransition з бібліотеки react-transition-group для створення анімації появи модального вікна */}
      <CSSTransition
        in={isModalVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {/* Модальне вікно з ant-design компонентами всередині */}
        <Modal
          title="Виберіть місто"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null} // Прибираємо футер з кнопками
          closable={false} // Прибираємо кнопку закриття
        >
          <div>
            {cities.map((city, index) => (
              <div
                key={index}
                onClick={() => handleCityChange(city)}
                className="city-option"
              >
                {city}
              </div>
            ))}
          </div>
        </Modal>
      </CSSTransition>
      <p>Ваше місто: {selectedCity}</p>
    </div>
  );
}

export default CityStatus;