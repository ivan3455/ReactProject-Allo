import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Login from "./Login";
import Product from "./Product";
import ProductDetail from "./ProductDetail"; // Імпорт нового компонента

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: new Array(props.products.length).fill(false),
      selectedProductIndex: null, // Стан для визначення обраного товару
    };
  }

  // Оновлює стан selectedProducts з урахуванням обраного товару за індексом.
  updateSelectedProducts = (index, value) => {
    this.setState((prevState) => {
      const updatedSelectedProducts = [...prevState.selectedProducts];
      updatedSelectedProducts[index] = value;
      return { selectedProducts: updatedSelectedProducts };
    });
  };

  // Встановлює selectedProductIndex для показу деталей конкретного товару.
  showProductDetail = (index) => {
    this.setState({ selectedProductIndex: index });
  };

  render() {
    const { products } = this.props;
    const { selectedProducts, selectedProductIndex } = this.state;
    const { isLoggedIn, onLogin, onLogout } = this.props;

    if (selectedProductIndex !== null) {
      return (
        <div>
          <Header
            selectedProducts={selectedProducts.filter(Boolean).length}
            isLoggedIn={isLoggedIn}
          />
          <Login
            isLoggedIn={isLoggedIn}
            onLogin={onLogin}
            onLogout={onLogout}
          />
          <Menu />

          {/* Відображення деталей обраного товару */}
          <ProductDetail product={products[selectedProductIndex]} />

          <button onClick={() => this.setState({ selectedProductIndex: null })}>
            Назад
          </button>

          <Footer />
        </div>
      );
    }

    return (
      <div>
        <Header
          selectedProducts={selectedProducts.filter(Boolean).length}
          isLoggedIn={isLoggedIn}
          onLogin={onLogin}
          onLogout={onLogout}
        />
        <Menu />

        <div className="products-list">
          <h2>Список товарів</h2>
          {products.map((product, index) => (
            <div key={index}>
              <h3 onClick={() => this.showProductDetail(index)}>
                {product.manufacturer} {product.model}
              </h3>
              <Product
                product={product}
                checked={selectedProducts[index]}
                updateSelectedProducts={(value) =>
                  this.updateSelectedProducts(index, value)
                }
              />
            </div>
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Body;
