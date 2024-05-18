import React, { useEffect, useState } from "react";
import "./CartPage.scss";
import CartItem from "../../componets/Cart/CartItem";
import axios from "axios";
import { API_URL } from "../../utils/api";
import { Navigate, useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);
  useEffect(() => {
    calculateCartValue();
  }, [cartProducts]);

  const fetchCart = async () => {
    try {
      let data = await axios.get(`${API_URL}/cart`, {
        headers: {
          Authorization: localStorage.getItem("user-ecommerce-auth-token"),
        },
      });
      setCartProducts(data.data.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const calculateCartValue = () => {
    let value = 0;
    for (let el of cartProducts) {
      console.log(el);
      value = value + el.product.price * el.quantity;
    }
    setCartValue(Math.ceil(value));
  };

  const handleCheckout = async () => {
    try {
      await axios.post(
        `${API_URL}/cart/checkout`,
        {
          totalValue: cartValue,
          cart: cartProducts,
        },
        {
          headers: {
            Authorization: localStorage.getItem("user-ecommerce-auth-token"),
          },
        }
      );
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cart-page">
      {cartValue !== 0 && <h1>Shopping Cart ${cartValue}</h1>}
      <div className="cart-items">
        {cartProducts.map((item) => (
          <CartItem fetchCartAgain={fetchCart} item={item} />
        ))}
        {cartValue !== 0 ? (
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout Now
          </button>
        ) : (
          <h2 onClick={() => nav("/")} className="checkout-btn">
            Your Cart Is Empty
            <br /> Click Here TO Shop Now !
          </h2>
        )}
      </div>
    </div>
  );
};

export default CartPage;
