import { Button, Navbar, Modal } from "react-bootstrap";
import toastr from "toastr";
import { useState, useContext } from "react";
import { CartContext } from "../cartContext";
import CartProduct from "./CartProduct";
import purchaseMovies from "../methods/purchaseMovies";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.length;
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      toastr.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar className="nav">
        <span className="glitch">VHF Store</span>

        <Navbar.Toggle />
        <Navbar.Collapse className="navCart">
          <Button className="navButton" onClick={handleShow}>
            Cart: {productsCount} Movies
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>{cart.items.length} Movies in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  title={currentProduct.title}
                  id={currentProduct.id}
                ></CartProduct>
              ))}

              <Button
                variant="success"
                onClick={handleClick}
                disabled={loading}
              >
                Purchase items!
              </Button>
            </>
          ) : (
            <span>There are no movies in your cart!</span>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
