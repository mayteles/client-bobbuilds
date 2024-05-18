import React from "react";
import "./OrderHistory.scss";
const OrderHistory = ({ orderItem }) => {
  return (
    <div className="cart-items single-order">
      {orderItem.cart.map((item) => (
        <div className="cart-item" key={item?._id}>
          <img src={item?.product.image} alt={item?.product.title} />
          <div className="item-details">
            <h2>{item?.product.title}</h2>
            <p>{item?.product.description}</p>
            <p className="price">${item?.product.price}</p>
            <p className="quantity">Quantity: {item?.quantity}</p>
          </div>
        </div>
      ))}
      <p className="total-order-value">${orderItem?.totalValue}</p>
    </div>
  );
};

export default OrderHistory;
