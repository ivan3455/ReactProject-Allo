import React, { useState, useEffect, useContext } from "react";

import CommentConsoleStatus from "./Hooks/CommentConsoleStatus";
import { UserContext } from "../user/UserContext";
import { Modal, Input, Button } from "antd";
import "../css/productDetail.css"; // Імпорт CSS для стилізації компонента

function ProductDetail({ product }) {
  const { loggedInUser } = useContext(UserContext); // Отримання доступу до контексту користувача.

  const [comments, setComments] = useState([]);

  // Створення станів.
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState(loggedInUser || "");
  const [addingComment, setAddingComment] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false); // Стан для відображення/приховання модального вікна

  // Виклик функції зовнішнього хука для відображення даних про новий коментар в консолі.
  CommentConsoleStatus(comments, addingComment);

  // Отримання коментарів з localStorage на основі product.model.
  useEffect(() => {
    const savedComments =
      JSON.parse(localStorage.getItem(`comments_${product.model}`)) || [];
    setComments(savedComments);
  }, [product.model]);

  useEffect(() => {
    setUserName(loggedInUser || ""); // Встановлюємо userName, якщо він є в контексті
  }, [loggedInUser]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNameChange = (e) => {
    // Якщо юзер не залогінений то поле буде доступне для вводу
    setUserName(e.target.value);
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

  // Методи для відкриття/закриття модального вікна та додавання коментаря
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    handleAddComment();
    setIsModalVisible(false);
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

      {/* Модальне вікно з ant-design компонентами всередині */}
      <Button type="primary" onClick={showModal}>
        Додати коментар
      </Button>

      <Modal
        title="Додати коментар"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          value={userName}
          onChange={handleNameChange}
          placeholder="Ім'я"
          disabled={loggedInUser}
        />
        <Input.TextArea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Додати коментар"
        />
      </Modal>
    </div>
  );
}

export default ProductDetail;
