import React from "react";

import "./CartItem.scss";
import axios from "axios";
import { API_URL } from "../../utils/api";
const CartItem = ({ item, fetchCartAgain }) => {
  const handleUpdateCartQuantity = async (q) => {
    try {
      if (q === 0) {
        await axios.delete(`${API_URL}/cart/${item._id}`, {
          headers: {
            Authorization: localStorage.getItem("user-ecommerce-auth-token"),
          },
        });
      }
      await axios.patch(
        `${API_URL}/cart/${item._id}`,
        {
          quantity: q,
        },
        {
          headers: {
            Authorization: localStorage.getItem("user-ecommerce-auth-token"),
          },
        }
      );
      fetchCartAgain();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cart-item" key={item?._id}>
      <img src={item?.product.image} alt={item?.product.title} />
      <div className="item-details">
        <h2>{item?.product.title}</h2>
        <p>{item?.product.description}</p>
        <p className="price">${item?.product.price}</p>
        <p className="quantity">Quantity: {item?.quantity}</p>
        <div className="button-quantity-update">
          <button onClick={() => handleUpdateCartQuantity(item.quantity - 1)}>
            -
          </button>
          <button>{item?.quantity}</button>
          <button onClick={() => handleUpdateCartQuantity(item.quantity + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
