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
      <div className='nav__b1'>
        <Link to={"/"} ><img src={logo} alt='website logo'/></Link>
        <div className='nav__b1-sub'>
          <img src={pin} alt='Map Pin'/>
          <Link to={"/some-link"} className='link-no-decoration'>Delivery to Vancouver</Link>
        </div>
      </div>
      <div>
        <input type='text' id="searchInput" placeholder='Search Bobbuilds.ca'/>
        <img src={search} alt='Search Icon' />
      </div>
      <div className='nav__b3'>
        <Link to={"/OrderHistory"}><button>Returns & Orders</button></Link>
        <Link className='link-no-decoration' to={"/Cart"}><p><span>0</span> Cart</p></Link>
      </div>
    </nav>
  )
}

export default Header
