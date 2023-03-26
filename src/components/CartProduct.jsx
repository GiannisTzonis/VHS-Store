import { CartContext } from "../cartContext";
import { useContext } from "react";
import MovieModel from "./MovieModel.jsx";

function CartProduct({ title, id }) {
  const cart = useContext(CartContext);

  return (
    <div className="cartItem">
      <h3>{title}</h3>
      <button
        className="btn-close"
        onClick={() => cart.deleteFromCart(id)}
      ></button>
    </div>
  );
}

export default CartProduct;
