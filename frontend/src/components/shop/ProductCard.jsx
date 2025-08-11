// src/components/ProductGrid.jsx

import React from "react";
import "../../styles/shop.css";
import { products } from "../../data/products";

const ProductGrid = () => {
  return (
    <div className="product-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

