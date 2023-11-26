import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    const handleAddToCart = () => {
        const newProduct = { id: Math.random(), name: 'New Product' };
        addToCart(newProduct);
    };

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div>
            <h2>Cart</h2>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
