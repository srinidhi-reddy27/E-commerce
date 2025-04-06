// src/pages/ProductPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';
import ReviewAccordion from '../components/ReviewAccordion';
import { useCart } from '../contexts/CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  console.log('Product ID from URL:', id); // Debug log
  const product = getProductById(parseInt(id, 10));
  console.log('Product:', product); // Debug log
  const [currentImage, setCurrentImage] = useState(0);
  const { addToCart } = useCart(); // Access addToCart from context

  const nextImage = () => {
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Call addToCart with the product
      console.log('Added to cart:', product.name); // Debug log
    }
  };

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-page">
      <div className="product-details">
        <div className="product-slider-large">
          <button className="slider-btn prev" onClick={prevImage}>❮</button>
          <img
            src={product.images[currentImage]}
            alt={product.name}
            className="product-image-large"
          />
          <button className="slider-btn next" onClick={nextImage}>❯</button>
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price.toFixed(2)}</p>
          {product.originalPrice && (
            <p className="original-price">₹{product.originalPrice.toFixed(2)}</p>
          )}
          <p>{product.description}</p>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <ReviewAccordion reviews={product.reviews || []} />
    </div>
  );
};

export default ProductPage;