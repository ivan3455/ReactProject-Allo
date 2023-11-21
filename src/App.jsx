import React, { Component } from "react";
import Body from "./components/Body"; // Основний контент сайту

class App extends Component {
  constructor(props) {
    super(props);

    // Початковий стан для застосунку
    this.state = {
      isLoggedIn: false, // Стан входу користувача
      products: [
        // Список товарів (тимчасове рішення)
        {
          category: "Ноутбуки",
          manufacturer: "Lenovo",
          model: "IdeaPad 5",
          price: 12000,
          rating: 4.5,
        },
        {
          category: "Смартфони",
          manufacturer: "Samsung",
          model: "Galaxy S21",
          price: 29999,
          rating: 4.8,
        },
        {
          category: "Телевізори",
          manufacturer: "Sony",
          model: "Bravia X90J",
          price: 15000,
          rating: 4.7,
        },
        {
          category: "Ігрові консолі",
          manufacturer: "Microsoft",
          model: "Xbox Series X",
          price: 14999,
          rating: 4.9,
        },
        {
          category: "Планшети",
          manufacturer: "Apple",
          model: "iPad Pro",
          price: 18999,
          rating: 4.6,
        },
      ],
    };
  }

  // Обробник події для входу користувача
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  // Обробник події для виходу користувача
  handleLogout = () => {
    // localStorage.clear();
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="App">
        {/* Передача стану застосунку та функцій обробки подій входу і виходу у компоненту Body - використання пропсів */}
        <Body
          products={this.state.products}
          isLoggedIn={isLoggedIn}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default App;
