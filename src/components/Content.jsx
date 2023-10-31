import React, { Component } from "react";

// Винести в окремий файл
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false, // Дефолтний стан checkbox
        };
    }

    handleCheckboxChange = () => {
        // Змінює стан чекбоксу при натисканні користувачем
        this.setState({ checked: !this.state.checked });
    };

    render() {
        return (
            <div className="Product">
                <label>
                    <input
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    <span>{this.props.name} - {this.props.price} - Rate: {this.props.raiting}</span>
                </label>
            </div>
        );
    }
}

class Content extends Component {
    render () {
        // Витягуємо дані із пропсів
        const { productList } = this.props;
        
        // Створюємо для кожного продукту із списку компонент Product, витягуємо катрибути із пропсів
        return (
            <div className="Content">
                {productList.map(product => (
                    <Product key={product.id} name={product.name} price={product.price} raiting={product.raiting}/>
                ))}
            </div>
        )
    }
}

export default Content;
