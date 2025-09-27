import React from "react";
// import grainLeft from "../../assets/grain-left.png"
// import grainRight from "../../assets/grain-right.png";
import "./policy.css"

const PolicyCard = ({ title, content }) => {
  return (
    <div className="policy-wrapper">
      {/* <img src={grainLeft} alt="grain left" className="grain grain-left" /> */}
      <div className="policy-card">
        <h2>{title}</h2>
        <div className="policy-content">{content}</div>
      </div>
      {/* <img src={grainRight} alt="grain right" className="grain grain-right" /> */}
    </div>
  );
};

export default PolicyCard;
