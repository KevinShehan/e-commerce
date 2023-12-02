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
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}> Shop</Link> {menu==="shop"?<h1/>:<></>} </li>
                <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<h1/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{menu==="womens"?<h1/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<h1/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart' style={{textDecoration:'none'}}><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
