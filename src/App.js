import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import ShopItems from "./components/ShopItems";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { FaCartArrowDown } from "react-icons/fa";

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
          <li className="nav-cart" onClick={toggleCart}>
            <div className="cart-icon">
              <FaCartArrowDown />{" "}
              <span className="number-of-items">{numOfItemsInCart}</span>
            </div>
          </li>
        </ul>
      </nav>

      <main>
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
      </main>

      <Footer />
    </>
  );
}

export default App;
