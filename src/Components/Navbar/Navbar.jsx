import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu]=useState("shop");
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link> Shop</Link> Shop {menu==="shop"?<h1/>:<></>} </li>
                <li onClick={()=>{setMenu("mens")}}><Link>Men</Link>{menu==="mens"?<h1/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link>Women</Link>{menu==="womens"?<h1/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link>Kids</Link>{menu==="kids"?<h1/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
