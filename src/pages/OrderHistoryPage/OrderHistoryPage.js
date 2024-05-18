import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/api";
import OrderHistory from "../../componets/OrderHistory/OrderHistory";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

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
  return <div className="cart-page">
    {orders.map((orderItem)=><OrderHistory orderItem={orderItem} />)}
  </div>;
};

export default OrderHistoryPage;
