import { Button, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "./cartContext";
import CartProduct from "./cartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const productsCount = cart.items.length;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch(
      "https://run.mocky.io/v3/0366a156-69f7-4f44-bb20-e90dd288833b",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart.items }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  // const productsCount = cart.items.reduce(
  //   (sum, product) => sum + product.quantity,
  //   0
  // );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand className="glitch">VHF Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  title={currentProduct.title}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              {/* <h1>Total: {cart.getTotalCost().toFixed(2)}</h1> */}

              <Button variant="success" onClick={checkout}>
                Purchase items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
