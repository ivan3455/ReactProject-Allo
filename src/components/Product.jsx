import React from "react";
import { CSSTransition } from "react-transition-group";
import '../css/product.css'; // Імпорт CSS для стилізації компонента

const Product = ({ product, checked, updateSelectedProducts }) => {
  const { manufacturer, model, price, rating } = product;

  const handleCheckboxChange = () => {
    updateSelectedProducts(!checked);
  };

  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="product">
      <div className="product-container">
        <div className="product-item">
          <label className="product-checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
          </label>
          <span>
            {manufacturer} {model} - Ціна: {price} - Рейтинг: {rating}
          </span>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Product;
