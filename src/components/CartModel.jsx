import React, { useCallback } from "react";
import { CartContext } from "../cartContext";
import { useState, useContext } from "react";
import CartProduct from "./CartProduct";
import { Button } from "react-bootstrap";
import toastr from "toastr";
// import { toastr } from "react-toastr";
import purchaseMovies from "../methods/purchaseMovies";

function CartModel() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.length;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const jsonData = {
      data: {
        movies: cart.items.map((item) => item.id),
      },
    };

    try {
      setLoading(true);
      await purchaseMovies(jsonData);
      toastr.success("Successful Purchase");
    } catch (error) {
      toastr.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const moviesText = useCallback(() => {
    return productsCount === 1 ? "Movie" : "Movies";
  }, [productsCount]);

  return (
    <div className="cartBox">
      {productsCount > 0 ? (
        <>
          <h2 className="cartTitle">
            {productsCount} {moviesText()} in your cart:
          </h2>

          {cart.items.map((currentProduct) => (
            <CartProduct
              title={currentProduct.title}
              id={currentProduct.id}
              key={currentProduct.id}
            />
          ))}

          <button
            className="purchaseB"
            onClick={handleClick}
            disabled={loading}
          >
            Purchase {moviesText()}
          </button>
        </>
      ) : (
        <h2 className="cartTitle">There are no movies in your cart.</h2>
      )}
    </div>
  );
}

export default CartModel;
