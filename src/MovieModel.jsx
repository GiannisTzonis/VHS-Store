import React from "react";
//
import { CartContext } from "./cartContext";
import { useContext } from "react";
//

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieModel = ({ title, poster_path }) => {
  //
  const product = { title, poster_path };
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.title);
  console.log(cart.items);
  //

  return (
    <div className="box">
      <button type="button" onClick={() => cart.addOneToCart(product.title)}>
        Add
      </button>
      <h1>{title}</h1>
      <img src={API_IMG + poster_path}></img>
    </div>
  );
};

export default MovieModel;
