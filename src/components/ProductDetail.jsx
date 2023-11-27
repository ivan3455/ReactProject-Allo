import React, { useState, useEffect } from "react";
import CommentConsoleStatus from "./Hooks/CommentConsoleStatus";

function ProductDetail({ product }) {
  const [comments, setComments] = useState([]); // Стан для зберігання коментарів
  const [newComment, setNewComment] = useState(""); // Стан для нового коментаря
  const [userName, setUserName] = useState(""); // Стан для імені користувача
  const [addingComment, setAddingComment] = useState(false); // Стан відслідковування додавання коментаря

  // Використання хука для виведення в консоль
  CommentConsoleStatus(comments, addingComment);

  // Викликається при завантаженні компоненту або при зміні product.model
  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments_${product.model}`)) || [];
    setComments(savedComments);
  }, [product.model]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAddComment = () => {
    // Додавання нового коментаря до списку коментарів
    if (newComment.trim() !== "" && userName.trim() !== "") {
      const updatedComments = [
        ...comments,
        { name: userName, comment: newComment },
      ];
      // Оновлення станів
      setComments(updatedComments);
      setNewComment("");
      setUserName("");
      setAddingComment(true);

      // Збереження коментарів у локальному сховищі
      localStorage.setItem(
        `comments_${product.model}`,
        JSON.stringify(updatedComments)
      );
    }
  };

  return (
    <div className="product-detail">
      <h2>
        {product.manufacturer} {product.model}
      </h2>
      <p>Ціна: {product.price}</p>
      <p>Рейтинг: {product.rating}</p>

      <h3>Коментарі</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}:</strong> {comment.comment}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Ім'я:
          <input type="text" value={userName} onChange={handleNameChange} />
        </label>

        <label>
          Додати коментар:
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
          />
        </label>
        <button type="button" onClick={handleAddComment}>
          Додати
        </button>
      </form>
    </div>
  );
}

export default ProductDetail;
