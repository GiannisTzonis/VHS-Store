import React from "react";
import { CartContext } from "./cartContext";
import { useState, useContext } from "react";

function CartModel() {
  const cart = useContext(CartContext);
  const productsCount = cart.items;

  return (
    <div>
      {productsCount > 0 ? (
        <>
          <p>Items in your cart:</p>
          {cart.items.map((currentProduct, idx) => (
            <h2>{currentProduct.title}</h2>
          ))}
        </>
      ) : (
        <h2>There are no items in your cart</h2>
      )}
    </div>
  );
}

export default CartModel;
