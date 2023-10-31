import { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null,
            productCount: 0, // Лічильник кількості показаних товарів
        };
    }
  
    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category });
        this.props.handleCategoryChange(category, this.state.productCount); // Передача категорії та кількості товарів через callback
    };
  
    handleProductCountChange = (event) => {
        // Змінюємо кількість показаних товарів залежно від вводу користувача
        this.setState({ productCount: event.target.value });
    };
  
    render() {
      return (
            <div className="NavBar">
                <p>Категорії:</p>
                    <button onClick={() => this.handleCategoryChange('smartphones')}>Смартфони</button>
                    <button onClick={() => this.handleCategoryChange('televisions')}>Телевізори</button>
                    <button onClick={() => this.handleCategoryChange('laptops')}>Ноутбуки</button>
                    <button onClick={() => this.handleCategoryChange('all')}>Всі товари</button>
                <div>
                    <span>Кількість товарів: </span> 
                    <input
                        type="number"
                        value={this.state.productCount}
                        onChange={this.handleProductCountChange}
                    />
                </div>
            </div>
        );
    }
}

export default NavBar;
  