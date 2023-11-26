import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Debug from '../Components/Debug';
import NavigationHistory from '../Context/HistoryContext';
import Cart from '../Components/Cart';
import Authentication from '../Components/Authentication';
import { useAuth } from '../Context/AuthenticationContext';
import '../Css/Body.css'

function Body() {
    const context = useAuth();

    console.log(context);

    const { isLoggedIn, toggleLogin } = context;

    return (
        <div className="menu-container">
            <Router>
                <ul className="ul-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/authentication">Authentication</Link>
                    </li>
                    <li>
                        <Link to="/debug">Debug</Link>
                    </li>
                    <li onClick={toggleLogin} className="login-button">
                        {isLoggedIn ? 'Вийти' : 'Увійти'}
                    </li>
                </ul>
                <NavigationHistory>
                    <Routes>
                        <Route path="/debug" element={<Debug />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/authentication" element={<Authentication toggleLogin={toggleLogin} />} />
                    </Routes>
                </NavigationHistory>
            </Router>
        </div>
    );
}

export default Body;