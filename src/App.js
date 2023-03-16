import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShopItems from "./components/ShopItems";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const cartClone = [...cart];
    const getItem = cartClone.find((elem) => elem.id === item.id);
    setNumOfItemsInCart((curr) => curr + 1);
    if (getItem) {
      getItem.quantity += 1;
      setCart([...cartClone]);
      return;
    }
    setCart([...cart, item]);
  };

  const toggleCart = () => {
    let cart = document.querySelector(".show-cart");
    cart.style.width === "0px"
      ? (cart.style.width = "500px")
      : (cart.style.width = "0px");
  };

  return (
    <>
      <Header toggleCart={toggleCart} numOfItemsInCart={numOfItemsInCart} />
      <main>
        <Cart
          cart={cart}
          setNumOfItemsInCart={setNumOfItemsInCart}
          setCart={setCart}
          numOfItemsInCart={numOfItemsInCart}
        />

        <Routes>
          <Route path="/Shopping-Cart/" element={<HomePage />} />
          <Route path="/shop" element={<ShopItems addToCart={addToCart} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
