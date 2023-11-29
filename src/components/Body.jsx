import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import { UserProvider } from "../user/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import Categories from "./Categories";
import "../css/body.css";

//  Відображення та управління основною частиною сторінки - дані про товари
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
      // localStorage.clear();
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
    const { onLogin, onLogout } = this.props;

    // Роутер React Router відображає різний контент в залежності від шляху у браузері.
    return (
      <UserProvider>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/user-info" element={<User />} />
              <Route path="/categories" element={<Categories />} />
              {selectedProductIndex !== null ? (
                <Route
                  path="/"
                  element={
                    <>
                      <Header
                        selectedProducts={
                          selectedProducts.filter(Boolean).length
                        }
                      />
                      <Menu />

                      {/* Відображення деталей обраного товару */}
                      <ProductDetail product={products[selectedProductIndex]} />

                      <button
                        onClick={() =>
                          this.setState({ selectedProductIndex: null })
                        }
                      >
                        Назад
                      </button>

                      <Footer />
                    </>
                  }
                />
              ) : (
                <Route
                  path="/"
                  element={
                    <>
                      <Header
                        selectedProducts={
                          selectedProducts.filter(Boolean).length
                        }
                        onLogin={onLogin}
                        onLogout={onLogout}
                      />
                      <Menu />

                      <h2>Список товарів</h2>
                      <div className="products-list">
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
                    </>
                  }
                />
              )}
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    );
  }
}

export default Body;
