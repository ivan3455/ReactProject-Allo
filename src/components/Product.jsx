import React, { Component } from "react";

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
          {manufacturer} {model} - Ціна: {price} - Рейтинг: {rating}{" "}
          {/* Дані про товари */}
        </span>
      </div>
    );
  }
}

export default Product;
