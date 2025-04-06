// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
  const { getCartItemCount } = useCart();
  console.log('Cart Item Count:', getCartItemCount()); // Debug log

  return (
    <header className="header">
      <div className="logo">MyShop</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/category/Electronics">Electronics</Link>
        <Link to="/category/Clothing">Clothing</Link>
        <Link to="/category/Home Goods">Home Goods</Link>
      </nav>
      <div className="cart">
        <Link to="/cart">Cart ({getCartItemCount()})</Link>
      </div>
    </header>
  );
};

export default Header;