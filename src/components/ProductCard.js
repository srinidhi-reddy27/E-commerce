// src/components/ProductCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <div className="product-card">
      <div className="product-slider">
        <button className="slider-btn prev" onClick={prevImage}>❮</button>
        <img
          src={product.images[currentImage]}
          alt={product.name}
          className="product-image"
        />
        <button className="slider-btn next" onClick={nextImage}>❯</button>
        <div className="slider-dots">
          {product.images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentImage === index ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>₹{product.price.toFixed(2)}</p>
        {product.originalPrice && (
          <p className="original-price">₹{product.originalPrice.toFixed(2)}</p>
        )}
        <Link to={`/product/${product.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;