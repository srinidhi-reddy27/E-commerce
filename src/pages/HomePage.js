// src/pages/HomePage.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import { getFrequentlyBought, products } from '../data/products';
import './HomePage.css';

const HomePage = () => {
  // Get frequently bought products for each category
  const frequentlyBoughtElectronics = getFrequentlyBought(3).filter(
    (product) => product.category === 'Electronics'
  );
  const frequentlyBoughtClothing = getFrequentlyBought(3).filter(
    (product) => product.category === 'Clothing'
  );
  const frequentlyBoughtHomeGoods = getFrequentlyBought(3).filter(
    (product) => product.category === 'Home Goods'
  );

  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Welcome to MyShop</h1>
        <p>Your one-stop shop for everything you need!</p>
      </div>

      {/* Frequently Bought in Electronics */}
      <div className="frequently-bought-section">
        <h2>Frequently Bought in Electronics</h2>
        <div className="product-grid">
          {frequentlyBoughtElectronics.length > 0 ? (
            frequentlyBoughtElectronics.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No frequently bought items available.</p>
          )}
        </div>
      </div>

      {/* Frequently Bought in Clothing */}
      <div className="frequently-bought-section">
        <h2>Frequently Bought in Clothing</h2>
        <div className="product-grid">
          {frequentlyBoughtClothing.length > 0 ? (
            frequentlyBoughtClothing.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No frequently bought items available.</p>
          )}
        </div>
      </div>

      {/* Frequently Bought in Home Goods */}
      <div className="frequently-bought-section">
        <h2>Frequently Bought in Home Goods</h2>
        <div className="product-grid">
          {frequentlyBoughtHomeGoods.length > 0 ? (
            frequentlyBoughtHomeGoods.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No frequently bought items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;