import React, { useCallback } from "react";
import { CartContext } from "../cartContext";
import { useState, useContext } from "react";
import CartProduct from "./CartProduct";
import { Button } from "react-bootstrap";
import purchaseMovies from "../methods/purchaseMovies";
import toastr from "toastr";

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
      toastr.success(
        "Hello, it’s VHF Store. We are sending you a message to inform you that your payment has been successful."
      );
    } catch (error) {
      alert("Something went wrong");
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

          <Button
            className="purchaseB"
            variant="success"
            onClick={handleClick}
            disabled={loading}
          >
            Purchase {moviesText()}
          </Button>
        </>
      ) : (
        <h2 className="cartTitle">There are no movies in your cart.</h2>
      )}
    </div>
  );
}

export default CartModel;
