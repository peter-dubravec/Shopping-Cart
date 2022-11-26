import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import ShopItems from "./components/ShopItems";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Cart from "./components/Cart";

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

  const openCart = () => {
    document.querySelector(".show-cart").style.width = "500px";
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "isActive" : "";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive ? "isActive" : "";
              }}
            >
              Shop
            </NavLink>
          </li>
          <li className="cart" onClick={openCart}>
            Cart {numOfItemsInCart}
          </li>
        </ul>
      </nav>

      <Cart
        cart={cart}
        setNumOfItemsInCart={setNumOfItemsInCart}
        setCart={setCart}
        numOfItemsInCart={numOfItemsInCart}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopItems addToCart={addToCart} />} />
      </Routes>
    </>
  );
}

export default App;
