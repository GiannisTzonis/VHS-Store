import React from "react";
import { CartContext } from "./cartContext";
import { useState, useContext } from "react";
import CartProduct from "./cartProduct";
import handleClick from "./handleClick";

function CartModel() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.length;

  return (
    <div className="cartBox">
      {productsCount > 0 ? (
        <>
          <h2 className="cartTitle">{productsCount} Movies in your cart:</h2>

          {cart.items.map((currentProduct, idx) => (
            <CartProduct
              title={currentProduct.title}
              quantity={currentProduct.quantity}
            ></CartProduct>
          ))}

          <button className="purchaseB" onClick={handleClick}>
            Purchase Movies
          </button>
        </>
      ) : (
        <h2 className="cartTitle">There are no items in your cart</h2>
      )}
    </div>
  );
}

export default CartModel;
