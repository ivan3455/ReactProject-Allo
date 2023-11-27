import React, { useState } from "react";

function CityStatus() {
  // Масив міст, які будуть відображатися у випадаючому списку
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

  // Стан, що містить обране місто. Встановлюється по замовчуванню як 'Київ'.
  const [selectedCity, setSelectedCity] = useState("Київ"); // Місто за замовчуванням

  // Обробник події для зміни вибраного міста
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value); // Встановлює нове обране місто при зміні вибору у випадаючому списку
  };

  return (
    <div>
      <label>
        Оберіть місто:
        {/* Випадаючий список для вибору міста */}
        <select value={selectedCity} onChange={handleCityChange}>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>
      <p>Ваше місто: {selectedCity}</p>
    </div>
  );
}

export default CityStatus;
