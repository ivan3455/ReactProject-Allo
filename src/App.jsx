import React, { Component } from 'react'; // Для створенні класових компонентів
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Content from './components/Content';
import './css/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Товари
      smartphones: [
        { id: 1, name: 'Samsung Galaxy S23', price: '24999', raiting: 5},
        { id: 2, name: 'Samsung Galaxy S22', price: '21999', raiting: 5},
        { id: 3, name: 'Apple Iphone 15', price: '32499', raiting: 3},
        { id: 4, name: 'Apple Iphone 15 Pro', price: '45999', raiting: 5},
        { id: 5, name: 'Xiaomi Mi12 Lite', price: '17999', raiting: 4},
      ],
      televisions: [
        { id: 6, name: 'Samsung Smart TV 4k', price: '29999', raiting: 5},
        { id: 7, name: 'Xiaomi 4k', price: '24999', raiting: 4},
        { id: 8, name: 'Samsung Smart TV Full HD', price: '18799', raiting: 5},
        { id: 9, name: 'Xiomi 8k OLED', price: '58999', raiting: 5},
        { id: 10, name: 'Toshiba HD', price: '8299', raiting: 3},
      ],
      laptops: [
        { id: 11, name: 'Dell XPS 13', price: 12999, raiting: 5},
        { id: 12, name: 'MacBook Air', price: 40999, raiting: 5 },
        { id: 13, name: 'Lenovo ThinkPad', price: 8599, raiting: 3 },
        { id: 14, name: 'HP Spectre x360', price: 15999, raiting: 4 },
        { id: 15, name: 'Asus ZenBook', price: 26999, raiting: 5 },
      ],
      selectedCategory: null,
      isLoggedIn: false, // Параметр для входу/виходу
    };
  }

  handleLoginChange = (isLoggedIn) => {
    // Оновлює стан входу користувача при вході і виході
    this.setState({ isLoggedIn });
  };

  handleCategoryChange = (category, productCount) => {
    // Оновлює стан обраної категорії та кількість показаних з неї товарів
    this.setState({ selectedCategory: category, productCount });
  };

  render() {
    // Витягуємо дані зі стану компоненту (деструктиризація)
    const { smartphones, televisions, laptops, selectedCategory, productCount, isLoggedIn } = this.state;

    // Отримання кількості обраних товарів
    let selectedProducts = [];
    if (selectedCategory === 'smartphones') {
      selectedProducts = smartphones.slice(0, productCount);
    } else if (selectedCategory === 'televisions') {
      selectedProducts = televisions.slice(0, productCount);
    } else if (selectedCategory === 'laptops') {
      selectedProducts = laptops.slice(0, productCount);
    } else if (selectedCategory === 'all') {
      selectedProducts = smartphones.concat(laptops, televisions).slice(0, productCount);
    }

    // Використовуємо пропси для того щоб зосередити усі важливі стани застосунку в одному місці (App.jsx)
    return (
      <div className="App">
        {/* Передаємо через пропси стан входу користувача та обробник який відловлює вхід чи вихід користувача */}
        <Header isLoggedIn={isLoggedIn} handleLoginChange={this.handleLoginChange} />

        {/* Передаємо через пропси обробник який відловлює зміну категорії */}
        <NavBar handleCategoryChange={this.handleCategoryChange} />

        {/* Передаємо через пропси товари які будуть відображені */}
        <Content productList={selectedProducts} />

        {/* Реалізувати в майбутньому*/}
        <Footer />
      </div>
    );
  }
}

export default App;
