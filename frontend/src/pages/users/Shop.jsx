import { useEffect } from "react";
import ShopHero from "../../components/shop/ShopHero.jsx";
import ProductCard from "../../components/shop/ProductCard.jsx";
import FlashDeal from "../../components/shop/FlashDeal.jsx";
import { useRef } from "react";
import ShopCarousel from "../../components/shop/ShopCarousel.jsx";
import { useLocation } from 'react-router-dom';

const Shop = () => {
  const productRef = useRef(null);
  const location = useLocation();

    useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'product' && productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <ShopHero />
      <div ref={productRef}>
        <ProductCard />
      </div>
      <FlashDeal
        onShopClick={() =>
          productRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <ShopCarousel/>
    </>
  );
};

export default Shop;
