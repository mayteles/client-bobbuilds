import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/api";
import OrderHistory from "../../componets/OrderHistory/OrderHistory";
import { useNavigate } from "react-router-dom";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const nav=useNavigate()

  const fetchOrders = async () => {
    try {
      let data = await axios.get(`${API_URL}/orders`, {
        headers: {
          Authorization: localStorage.getItem("user-ecommerce-auth-token"),
        },
      });
      setOrders(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="cart-page">
      {orders.length !== 0 ? (
        orders.map((orderItem) => <OrderHistory orderItem={orderItem} />)
      ) : (
        <h2 onClick={() => nav("/")} className="checkout-btn">
        Your Order List Is Empty
        <br /> Click Here TO Shop Now !
      </h2>
      )}
    </div>
  );
};

export default OrderHistoryPage;
