import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Login from "./Login";
import Product from "./Product";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: new Array(props.products.length).fill(false), // Створення масиву для збереження стану кожного товару
    };
  }

  // Функція для оновлення стану обраних товарів
  updateSelectedProducts = (index, value) => {
    this.setState((prevState) => {
      const updatedSelectedProducts = [...prevState.selectedProducts];
      updatedSelectedProducts[index] = value;
      return { selectedProducts: updatedSelectedProducts };
    });
  };

  render() {
    const { products } = this.props; // Отримання списку товарів з props
    const { selectedProducts } = this.state; // Отримання стану обраних товарів
    const { isLoggedIn, onLogin, onLogout } = this.props; // Отримання стану входу з props

    return (
      <div>
         {/* Відображення компонентів Header, Login, Menu, Footer */}
        <Header
          selectedProducts={selectedProducts.filter(Boolean).length} // Відображення кількості обраних товарів у заголовку
          isLoggedIn={isLoggedIn} // Передача стану входу у заголовок
        />
        <Login isLoggedIn={isLoggedIn} onLogin={onLogin} onLogout={onLogout} /> {/* Відображення компоненти для входу/виходу */}
        <Menu /> {/* Відображення меню */}

        {/* Список товарів */}
        <div className="products-list">
          <h2>Список товарів</h2>
          {products.map((product, index) => (
            <Product
              key={index}
              product={product} // Передача даних про кожен товар
              checked={selectedProducts[index]} // Стан обраного товару
              updateSelectedProducts={(value) =>
                this.updateSelectedProducts(index, value)
              } // Функція для оновлення стану обраного товару
            />
          ))}
        </div>

        <Footer /> {/* Відображення нижньої частини сторінки */}
      </div>
    );
  }
}

export default Body;
