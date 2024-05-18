import React, { useEffect } from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("user-ecommerce-auth-token");


  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("user-ecommerce-auth-token");
      localStorage.removeItem("user-ecommerce");
      window.location.reload()
    } else {
      nav("/register");
    }
  };
  return (
    <div className="navbar">
      <div onClick={() => nav("/")}>Home</div>
      {token && (
        <>
          {" "}
          <div onClick={() => nav("/cart")}>Cart</div>
          <div onClick={() => nav("/orders")}>Order</div>
        </>
      )}
      <div onClick={handleLogout}>{token ? "Logout" : "Signup/Sigin"}</div>
    </div>
  );
};

export default Navbar;
