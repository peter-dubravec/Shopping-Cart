import React from "react";

const ShopItems = ({ addToCart }) => {
  const items = [
    { name: "T-shirt", price: 50, quantity: 1, id: 1 },
    { name: "Jeans", price: 50, quantity: 1, id: 2 },
  ];

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
export default ShopItems;
