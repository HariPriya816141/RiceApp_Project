import React from "react";
import { BsSuitDiamondFill } from "react-icons/bs";
import "../../styles/homeCarousel.css";

const DiamondLine = () => {
  let cumulativeTop = 0;
  let cumulativeRight = 0;

  const diamonds = Array.from({ length: 12 }, (_, i) => {
    const size = 12 + i * 4; // Smaller increment = better fit
    cumulativeTop += size * 1; // reduced spacing
    cumulativeRight += size * 0.8;

    // const rotation = i % 2 === 0 ? "rotate(45deg)" : "rotate(-45deg)";

    return (
      <BsSuitDiamondFill
        key={i}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          color: "rgba(185, 63, 6, 1)",
          transform: "rotate(45deg)",
          position: "absolute",
          top: `${cumulativeTop}px`,
          right: `${cumulativeRight}px`, // ⬅️ this is key change
          borderRadius: "4px",
          transition: "all 0.3s ease-in-out",
          animation: `diamondPulse 2s ease-in-out ${i * 0.2}s infinite`,

        }}
      />
    );
  });

  return (
    <div className="diamond-line-wrapper">
<div className="diamond-line">{diamonds}</div>
    </div>
  ) 
};

export default DiamondLine;


