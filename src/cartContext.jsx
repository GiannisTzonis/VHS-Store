import { createContext, useCallback, useState } from "react";

export const CartContext = createContext({
  items: [],
  addOneToCart: () => {},
  deleteFromCart: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function addOneToCart(title, id) {
    setCartProducts([
      ...cartProducts,
      {
        title: title,
        id: id,
      },
    ]);
  }

  function deleteFromCart(id) {
    setCartProducts(
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  const contextValue = {
    items: cartProducts,
    addOneToCart,
    deleteFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
