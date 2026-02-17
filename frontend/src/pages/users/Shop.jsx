import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiClient } from "../../api/config";

import ShopHero from "../../components/shop/ShopHero.jsx";
import ProductCard from "../../components/shop/ProductCard.jsx";
import FlashDeal from "../../components/shop/FlashDeal.jsx";
import ShopCarousel from "../../components/shop/ShopCarousel.jsx";

const Shop = () => {
  const productRef = useRef(null);
  const location = useLocation();

  const [products, setProducts] = useState([]);

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiClient.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("scrollTo") === "product" && productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <ShopHero
        products={products}
        onShopClick={() =>
          productRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div ref={productRef}>
        <ProductCard products={products} />
      </div>
      <FlashDeal
        onShopClick={() =>
          productRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <ShopCarousel />
    </>
  );
};

export default Shop;
