import "./cart-item.styles.scss";

import React from "react";

const CartItem = ({ item: { quantity, imageUrl, price, name } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{quantity} &times; ${price}</span>
      </div>
    </div>
  );
};

export default CartItem;
