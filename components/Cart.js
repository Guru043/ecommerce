import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';  // Ensure this CSS file exists for styling

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h1>Cart Page</h1>
      
      {/* If the cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some products!</p>
      ) : (
        <div className="cart-items">
          {/* Loop through items in the cart */}
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              {/* Add a button to remove items from the cart */}
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout Button */}
      <div className="checkout-container">
        {cart.length > 0 && (
          <Link to="/checkout">
            <button className="checkout-button">Proceed to Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
