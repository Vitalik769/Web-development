import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './Context/AuthenticationContext';
import { CartProvider } from './Context/CartContext';
import './App.css';
import { Header, Body, Footer } from './Components/import';


function App() {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogin = () => {
    setIsLogged(prevIsLogged => !prevIsLogged);
  };

return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Body isLogged={isLogged} toggleLogin={toggleLogin} />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;