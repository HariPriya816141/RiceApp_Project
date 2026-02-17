import React from 'react';
import DiamondLine from "../home/DiamondLine";
import "../../styles/homeCarousel.css";
import '../../styles/blog.css';

const BlogHero = ({onPopulaCategoriesClick, onVoicesBehindClick}) => {
  return (
    <div className="hero-section blog-hero">
          <DiamondLine />
    
          <div className="hero-content-wrapper blog-row">
            {/* Left: Content Box */}
            <div className="hero-content-anim-wrapper ">
              <div className="hero-content-box blog-box">
                <h1>Explore, Learn & Savor the Rice Story</h1>
                <p>
                  Delve into the world of premium grains, recipes, kitchen tips, and cultural heritage — straight from our rice experts.
                </p>
                <div className="cta-buttons">
                  <button className="primary-btn" onClick={onPopulaCategoriesClick}>Popular Categories</button>
                  <button className="secondary-btn" onClick={onVoicesBehindClick}>Voices Behind</button>
                </div>
              </div>
            </div>
    
            {/* Right: Image */}
            <div className="image-container blog-image-wrap">
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <img
                  src="/blog/blogLogo.png"
                  alt="Blog"
                  className="slide-image"
                />
              </div>
            </div>
          </div>
        </div>
  );
};

export default BlogHero;



