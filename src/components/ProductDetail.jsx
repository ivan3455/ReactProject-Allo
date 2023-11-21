import React, { Component } from "react";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    // Використовуєтьсяідентифікатор товару для збереження коментарів у localStorage
    this.state = {
      comments:
        JSON.parse(localStorage.getItem(`comments_${props.product.model}`)) ||
        [],
      newComment: "", // Стан нового коментаря
      userName: "", // Стан імені користувача
    };
  }

  handleCommentChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleAddComment = () => {
    const { newComment, comments, userName } = this.state;
    if (newComment.trim() !== "" && userName.trim() !== "") { // перевірка чи коментар та ім'я не пусті
      const updatedComments = [
        ...comments,
        { name: userName, comment: newComment },
      ];
      this.setState({
        comments: updatedComments,
        newComment: "",
        userName: "",
      });
      // Збереження коментарів з ідентифікатором товару
      localStorage.setItem(
        `comments_${this.props.product.model}`,
        JSON.stringify(updatedComments)
      );
    }
  };

  render() {
    const { product } = this.props;
    const { manufacturer, model, price, rating } = product;
    const { comments, newComment, userName } = this.state;

    return (
      <div className="product-detail">
        <h2>
          {manufacturer} {model}
        </h2>
        <p>Ціна: {price}</p>
        <p>Рейтинг: {rating}</p>

        <h3>Коментарі</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong> {comment.comment}
            </li>
          ))}
        </ul>
        {/* Форма для введення нового імені та коментаря */}
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Ім'я:
            <input
              type="text"
              value={userName}
              onChange={this.handleNameChange}
            />
          </label>

          <label>
            Додати коментар:
            <input
              type="text"
              value={newComment}
              onChange={this.handleCommentChange}
            />
          </label>
          <button type="button" onClick={this.handleAddComment}>
            Додати
          </button>
        </form>
      </div>
    );
  }
}

export default ProductDetail;
