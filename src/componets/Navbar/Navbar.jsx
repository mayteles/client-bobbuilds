import React from 'react';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const nav=useNavigate()
  return (
    <div className="navbar">
      <div onClick={()=>nav("/")}>Home</div>
      <div onClick={()=>nav("/register")}>Register</div>
      <div onClick={()=>nav("/cart")}>Cart</div>
      <div onClick={()=>nav("/orders")}>Order</div>
    </div>
  );
};

export default Navbar;
