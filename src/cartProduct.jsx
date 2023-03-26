import { CartContext } from "./cartContext";
import { useContext } from "react";
import MovieModel from "./MovieModel.jsx";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const title = props.title;
  const quantity = props.quantity;

  return (
    <div className="cartItem">
      <h3>{title}</h3>
      {/* <p>{quantity} total.</p> */}
      <button
        className="btn-close"
        onClick={() => cart.deleteFromCart(title)}
      ></button>
    </div>
  );
}

export default CartProduct;
