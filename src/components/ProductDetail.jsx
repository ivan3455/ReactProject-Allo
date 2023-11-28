import React, { useState, useEffect, useContext } from "react";

import CommentConsoleStatus from "./Hooks/CommentConsoleStatus";
import { UserContext } from "../user/UserContext";

function ProductDetail({ product }) {
  const { loggedInUser } = useContext(UserContext); // Отримання доступу до контексту користувача.

  const [comments, setComments] = useState([]);

  // Створення станів.
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState(loggedInUser || "");
  const [addingComment, setAddingComment] = useState(false);

  // Виклик функції зовнішнього хука для відображення даних про новий коментар в консолі.
  CommentConsoleStatus(comments, addingComment);

  // Отримання коментарів з localStorage на основі product.model.
  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments_${product.model}`)) || [];
    setComments(savedComments);
  }, [product.model]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNameChange = (e) => {
    // Якщо юзер не залогінений то поле буде доступне для вводу
    if (!loggedInUser) {
      setUserName(e.target.value);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "" && userName.trim() !== "") {
      // Додавання коментаря до списку, збереження в localStorage.
      const updatedComments = [
        ...comments,
        { name: userName, comment: newComment },
      ];
      setComments(updatedComments);
      setNewComment("");
      if (!loggedInUser) {
        setUserName("");
      }
      setAddingComment(true);

      localStorage.setItem(
        `comments_${product.model}`,
        JSON.stringify(updatedComments)
      );
    }
  };

  return (
    <div className="product-detail">
      {/* Відображення деталей продукту */}
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

      {/* Форма для введення коментаря */}
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Ім'я:
          <input
            type="text"
            value={userName}
            onChange={handleNameChange}
            readOnly={loggedInUser}
          />
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
