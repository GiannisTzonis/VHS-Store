import React from "react";
//
import { CartContext } from "./cartContext";
import { useContext } from "react";
//

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieModel = ({ title, poster_path, id }) => {
  //
  const product = { title, poster_path, id };
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.title);
  // console.log(cart.items);
  //

  return (
    <div className="box">
      {productQuantity > 0 ? (
        <button
          onClick={() => {
            console.log(title, "was removed from the cart");
            cart.deleteFromCart(product.title, product.id);
          }}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            console.log(title, "was added to the cart");
            cart.addOneToCart(product.title, product.id);
          }}
        >
          Add
        </button>
      )}
      <h1>{title}</h1>
      <img src={API_IMG + poster_path}></img>
    </div>
  );
};

export default MovieModel;
