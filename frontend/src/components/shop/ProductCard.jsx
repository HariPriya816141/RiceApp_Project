import React from "react";
import "../../styles/shop.css";
// import { products } from "../../data/products";

const ProductGrid = ({ products }) => {
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    alert(`${product.name} added to cart`);
  };
  return (
    <div className="product-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
