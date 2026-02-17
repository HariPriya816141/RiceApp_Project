import React from 'react'
import DiamondLine from "../home/DiamondLine";
import "../../styles/homeCarousel.css";
import "../../styles/contact.css"

const ContactHero = ({onGetInTouchClick, onWriteToUsClick}) => {
  return (
    <div className="hero-section contact-hero">
          <DiamondLine />
    
          <div className="hero-content-wrapper contact-row">
            {/* Left: Content Box */}
            <div className="hero-content-anim-wrapper ">
              <div className="hero-content-box contact-box">
                <h1>Contact Us</h1>
                <p>
                  Get in touch with us for queries, suggestions, or just to say hello.
                </p>
                <div className="cta-buttons">
                  <button className="primary-btn" onClick={onGetInTouchClick}>Get in Touch</button>
                  <button className="secondary-btn" onClick={onWriteToUsClick}>Write to us</button>
                </div>
              </div>
            </div>
    
            {/* Right: Image */}
            <div className="image-container contact-image-wrap">
              <div style={{ maxWidth: "350px", margin: "0 auto" }}>
                <img
                  src="/contact/contactLogo.png"
                  alt="Contact Us"
                  className="slide-image"
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactHero
