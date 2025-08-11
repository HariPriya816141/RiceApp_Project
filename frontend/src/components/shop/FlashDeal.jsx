// FlashDeal.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import '../../styles/flashdeal.css';

const FlashDeal = ({ onShopClick }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate(); // ✅ Hook to programmatically navigate

  useEffect(() => {
    const targetTime = new Date().getTime() + 5 * 60 * 60 * 1000;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime - now;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Unified handler
  const handleClick = () => {
    if (onShopClick) {
      onShopClick(); // scroll within Shop page
    } else {
      navigate('/shop'); // redirect to Shop page
    }
  };

  return (
    <div className="flash-deal-banner">
      <h2>⚡ Flash Sale! Up to 30% Off ⚡</h2>
      <p className="timer">
        {timeLeft.hours.toString().padStart(2, '0')}:
        {timeLeft.minutes.toString().padStart(2, '0')}:
        {timeLeft.seconds.toString().padStart(2, '0')}
      </p>
      <button className="shop-flash-btn" onClick={handleClick}>
        Shop Now
      </button>
    </div>
  );
};

export default FlashDeal;


