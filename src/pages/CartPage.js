// src/pages/CartPage.js
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
          ))}
          <div className="cart-total">
            <h3>Total: ₹{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-slider">
        <img
          src={item.images[currentImage]}
          alt={`${item.name} image ${currentImage + 1}`}
          className="product-image"
        />
        <button className="slider-btn prev" onClick={prevImage}>❮</button>
        <button className="slider-btn next" onClick={nextImage}>❯</button>
        <div className="slider-dots">
          {item.images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImage === index ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>
          Qty: 
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
        </p>
        <p>Price: ₹{item.price.toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartPage;