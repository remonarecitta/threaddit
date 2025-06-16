import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart-removebg-preview.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    return (
        <div className='navbar'>
             <div className='nav-logo'>
             <Link style={{textDecoration : 'none'}} to='/'><img alt='logo' src={logo} onClick={() => setMenu('shop')}/></Link>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu('shop')}><Link style={{textDecoration : 'none'}} to='/'>Shop</Link>{menu ==='shop'?<hr/>:<></>}</li>
                <li onClick={() => setMenu('men')}><Link style={{textDecoration : 'none'}} to='/men'>Men</Link>{menu ==='men'?<hr/>:<></>}</li>
                <li onClick={() => setMenu('women')}><Link style={{textDecoration : 'none'}} to='/women'>Women</Link>{menu ==='women'?<hr/>:<></>}</li>
                <li onClick={() => setMenu('accessories')}><Link style={{textDecoration : 'none'}} to='/accessories'>accessories</Link>{menu ==='accessories'?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signUp'><button>Sign Up</button></Link>
            <Link to='/cart'><img alt='cart' src={cart} /></Link>
            <div className='nav-cart-count'>{getCartCount()}</div>
            </div>
        </div>
    )}

export default Navbar;