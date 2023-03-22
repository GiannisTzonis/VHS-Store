import { createContext, useState } from "react";
// import ( moviesArray ) from  "./app.jsx"

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  deleteFromCart: () => {},
  deleteAll: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(title) {
    const quantity = cartProducts.find(
      (product) => product.title === title
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(title) {
    const quantity = getProductQuantity(title);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          title: title,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.title === title
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(title) {
    const quantity = getProductQuantity(title);

    if (quantity == 1) {
      deleteAll(title);
    } else {
      setCartProducts(
        setCartProducts(
          cartProducts.map((product) =>
            product.title === title
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        )
      );
    }
  }

  function deleteAll(title) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.title != title;
      })
    );
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    deleteFromCart,
    deleteAll,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
