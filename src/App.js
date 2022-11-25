import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import ShopItems from "./components/ShopItems";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

function App() {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const cartClone = [...cart];
    const getItem = cartClone.find((elem) => elem.id === item.id);
    if (getItem) {
      getItem.quantity += 1;
      setCart([...cartClone]);
      return;
    }
    setNumOfItemsInCart((curr) => curr + 1);
    setCart([...cart, item]);
  };

  const total = () => {
    const mySum = cart.reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0);
    return mySum;
  };

  const changeQuantity = (id, operator) => {
    const cartClone = [...cart];
    const item = cartClone.find((elem) => elem.id === id);
    switch (operator) {
      case "+":
        item.quantity += 1;
        break;
      case "-":
        item.quantity -= 1;
        break;
      default:
        console.error("Invalid operator");
    }
    setCart(cartClone);
  };

  const removeItem = (id) => {
    const cartClone = [...cart];
    const filteredCart = cartClone.filter((item) => item.id !== id);
    setCart(filteredCart);
    setNumOfItemsInCart((curr) => curr - 1);
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
      <div className="show-cart">
        {cart.map((item, i) => {
          return (
            <div key={i}>
              <h3>
                {item.name} Quantity:{" "}
                <button onClick={() => changeQuantity(item.id, "-")}>-</button>
                {item.quantity === 0 ? removeItem(item.id) : item.quantity}
                <button onClick={() => changeQuantity(item.id, "+")}>
                  +
                </button>{" "}
                Price: {item.quantity * item.price}$
              </h3>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          );
        })}

        <div>
          {numOfItemsInCart === 0 ? "Empty Cart" : "Total: " + total() + "$"}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopItems addToCart={addToCart} />} />
      </Routes>
    </>
  );
}

export default App;
