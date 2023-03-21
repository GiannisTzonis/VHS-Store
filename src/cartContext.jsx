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

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteAll(id);
    } else {
      setCartProducts(
        setCartProducts(
          cartProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          )
        )
      );
    }
  }

  function deleteAll(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
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
