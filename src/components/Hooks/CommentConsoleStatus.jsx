import { useEffect } from 'react';

const CommentConsoleStatus = (comments, addingComment) => {
  useEffect(() => {
    // Перевірка, чи додавався новий коментар та чи є коментарі у списку
    if (addingComment && comments.length > 0) {
      const { name, comment } = comments[comments.length - 1]; // Отримання останнього коментаря
      console.log(`Користувач ${name} залишив коментар: ${comment}`);
    }
  }, [comments, addingComment]); // Виклик функції ефекту при зміні comments або addingComment
};

export default CommentConsoleStatus;
