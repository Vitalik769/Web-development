import React from 'react';
import { useAuth } from '../Context/AuthenticationContext';
import { useCart } from '../Context/CartContext';
import '../Css/Header.css'

const Header = ({ toggleLogin }) => { 
    const { isLoggedIn } = useAuth();
    const { cartItems } = useCart();

    const handleLoginClick = () => {
        toggleLogin(); 
    };

    return (
        <div>
            <h2>Authentication Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</h2>
            <button onClick={handleLoginClick}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
            <h2>Cart Items:</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default Header;
