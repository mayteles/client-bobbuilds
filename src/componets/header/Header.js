import React from 'react';
import '../../styles/components/Header.scss';

import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.png';
import search from '../../assets/icons/search.svg';
import pin from '../../assets/icons/map-pin.png';
import cart from '../../assets/icons/fast-cart.png';


function Header() {
  return (
    <nav className='nav'>
      <div>
        <Link to={"/"} ><img src={logo} alt='website logo'/></Link>
        <div>
          <img src={pin} alt='Map Pin'/>
          <Link to={"/some-link"}>Delivery to Vancouver</Link>
        </div>
      </div>
      <div>
        <input type='text' id="searchInput" placeholder='Search Bobbuilds.ca'/>
        <img src={search} alt='Search Icon' />
      </div>
      <div>
        <Link to={"/OrderHistory"}><button>Returns & Orders</button></Link>
        <Link to={"/Cart"}>
          <div>
            <span>0</span>
            <img src={cart} alt='shopping cart'/>
          </div>
          <div>
            <p>Cart</p>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
