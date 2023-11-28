import React, { Component } from "react";

// Відображає окремий товар у вигляді чекбокса та додаткової інформації про продукт.
class Product extends Component {
  // Обробник події для зміни стану checkbox
  handleCheckboxChange = () => {
    const { checked, updateSelectedProducts } = this.props; // Отримання даних з props
    updateSelectedProducts(!checked); // Виклик функції updateSelectedProducts зі зміненим значенням checked
  };

  render() {
    const { product, checked } = this.props; // Отримання даних з props
    const { manufacturer, model, price, rating } = product; // Деструктуризація об'єкта product

    return (
      <div className="product-item">
        <input
          type="checkbox"
          checked={checked}
          onChange={this.handleCheckboxChange}
        />
        <span>
          {/* Дані про товари */}
          {manufacturer} {model} - Ціна: {price} - Рейтинг: {rating}{" "}
        </span>
      </div>
    );
  }
}

export default Product;
