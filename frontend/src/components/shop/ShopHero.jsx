// src/components/ShopHero.jsx

import React from "react";
import { Button } from "antd";
import "../../styles/shop.css";
//import { products } from "../../data/products";

const ShopHero = ({ products, onShopClick }) => {
  const heroImage = products?.[0]?.image;

  return (
    <div className="shop-hero">
      <div className="shop-hero-text">
        <h1>Welcome to Our Rice Collection</h1>
        <p>Premium quality Basmati, Brown, and Organic Rice just for you.</p>
        <Button type="default" size="large" className="shop-now-btn" onClick={onShopClick}>
          Shop Now
        </Button>
      </div>
      <div className="shop-hero-image">
        {heroImage && <img src={heroImage} alt="Rice Hero" />}
      </div>
    </div>
  );
};

export default ShopHero;


