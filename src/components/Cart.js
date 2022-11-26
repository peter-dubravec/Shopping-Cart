import React from "react";
import { FaTimes } from "react-icons/fa";

const Cart = ({ setNumOfItemsInCart, setCart, cart, numOfItemsInCart }) => {
  const total = () => {
    const mySum = cart.reduce((sum, { price, quantity }) => {
      return sum + price * quantity;
    }, 0);
    return mySum;
  };

  const changeQuantity = (id, operator) => {
    const cartClone = [...cart];
    const item = cartClone.find((elem) => elem.id === id);
    if (operator === "+") {
      item.quantity += 1;
      setNumOfItemsInCart((curr) => curr + 1);
      setCart(cartClone);
    } else {
      item.quantity -= 1;
      if (item.quantity > 0) {
        setCart(cartClone);
        setNumOfItemsInCart((curr) => curr - 1);
        return;
      }
      removeItem(id);
    }
  };

  const removeItem = (id) => {
    const cartClone = [...cart];
    let quantityValue = cartClone.find((item) => item.id === id).quantity;
    const filteredCart = cartClone.filter((item) => item.id !== id);
    quantityValue = quantityValue === 0 ? 1 : quantityValue;
    setCart(filteredCart);
    setNumOfItemsInCart((curr) => curr - quantityValue);
  };

  const closeCart = () => {
    document.querySelector(".show-cart").style.width = "0px";
  };

  return (
    <div className="show-cart">
      <div className="wrapper">
        <FaTimes className="close-btn" onClick={closeCart} />
        {cart.map((item, i) => {
          return (
            <div className="container" key={i}>
              <p className="item-name">{item.name}</p>
              <p className="item-price">Price: {item.price}$</p>
              <div className="quantity">
                <button
                  className="btn-quantity"
                  onClick={() => changeQuantity(item.id, "-", item.quantity)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn-quantity"
                  onClick={() => changeQuantity(item.id, "+")}
                >
                  +
                </button>
              </div>
              <button
                className="btn-remove"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          );
        })}

        <div className="total">
          {numOfItemsInCart === 0 ? "Empty Cart" : "Total: " + total() + "$"}
        </div>
      </div>
    </div>
  );
};

export default Cart;
