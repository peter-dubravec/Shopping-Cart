import React from "react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
} from "../images/index";

const ShopItems = ({ addToCart }) => {
  const items = [
    { name: "Sweater", price: 50, quantity: 1, img: image1, id: 1 },
    { name: "Sweater", price: 35, quantity: 1, img: image2, id: 2 },
    { name: "Sweater", price: 89, quantity: 1, img: image3, id: 3 },
    { name: "Sweater", price: 47, quantity: 1, img: image4, id: 4 },
    { name: "Sweater", price: 85, quantity: 1, img: image5, id: 5 },
    { name: "Sweater", price: 76, quantity: 1, img: image6, id: 6 },
  ];

  return (
    <div className="shop-container">
      {items.map((item) => (
        <div key={item.id} className="shop-item">
          <img src={item.img} alt="t-shirt"></img>
          <p>{item.name}</p>
          <p>Price: {item.price}$</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
export default ShopItems;
