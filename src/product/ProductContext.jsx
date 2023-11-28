import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  // Вказує на те що обраний продукт в checkbox
  const selectProduct = (index) => {
    setSelectedProductIndex(index);
  };

  // Вказує на те що продукт не обраний в checkbox
  const clearSelectedProduct = () => {
    setSelectedProductIndex(null);
  };

  // Повертає ProductContext.Provider зі значенням,
  // яке містить обраний індекс продукту та функції для вибору та очищення продукту.
  return (
    <ProductContext.Provider
      value={{ selectedProductIndex, selectProduct, clearSelectedProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
