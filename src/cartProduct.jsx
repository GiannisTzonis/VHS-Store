import { CartContext } from "./cartContext";
import { useContext } from "react";
import MovieModel from "./MovieModel.jsx";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const title = props.title;
  const quantity = props.quantity;

  return (
    <>
      <h3>{title}</h3>
      {/* <p>{quantity} total.</p> */}
      <button
        className="deleteButton"
        onClick={() => cart.deleteFromCart(title)}
      >
        Remove
      </button>
      <hr></hr>
    </>
  );
}

export default CartProduct;
