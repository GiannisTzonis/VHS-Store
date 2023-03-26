import { CartContext } from "../cartContext";
import { useContext } from "react";
import apiRoutes from "../constants/apiRoutes";

const MovieModel = ({ title, posterPath, id }) => {
  const cart = useContext(CartContext);
  const isAdded = cart.items.find((item) => item.id === id);

  return (
    <div className="box">
      {isAdded ? (
        <button
          onClick={() => {
            cart.deleteFromCart(id);
          }}
        >
          Remove
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            cart.addOneToCart(title, id);
          }}
        >
          Add
        </button>
      )}
      <h1 className="movieTitle">{title}</h1>
      <img src={apiRoutes.imageUrl + posterPath}></img>
    </div>
  );
};

export default MovieModel;
