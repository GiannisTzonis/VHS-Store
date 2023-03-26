import CartProvider from "../cartContext";
import NavbarComponent from "./Navbar";
import MainContainer from "./MainContainer";

function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      <MainContainer />
    </CartProvider>
  );
}

export default App;
