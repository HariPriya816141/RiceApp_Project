import React from "react";
import DiamondLine from "../home/DiamondLine";
import "../../styles/homeCarousel.css";
import "../../styles/about.css";

const AboutHero = ({ onMissionClick, onTeamClick }) => {
  return (
    <div className="hero-section about-hero">
      <DiamondLine />

      <div className="hero-content-wrapper">
        {/* Left: Content Box */}
        <div className="hero-content-anim-wrapper">
          <div className="hero-content-box">
            <h1>Know Us Better</h1>
            <p>
              Rooted in tradition, growing with innovation. Discover our journey
              from the soil to your soul.
            </p>
            <div className="cta-buttons">
              <button className="primary-btn" onClick={onMissionClick}>Our Mission</button>
              <button className="secondary-btn" onClick={onTeamClick}>Meet the Team</button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="image-container">
          <div style={{ maxWidth: "350px", margin: "0 auto" }}>
            <img
              src="/about/aboutLogo.png"
              alt="About Us"
              className="slide-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
