import riceimg from '../../assets/about/rice.jpg';
import '../../styles/about.css';

const OurStorySec = () => {
  return (
      <div className="our-story-section">
      <div className="our-story-content">
        <h2 className="section-heading">Our Story</h2>
        <p className="story-text">
          Born from generations of rice cultivation expertise, we transformed tradition into a modern brand rooted in quality, purity, and sustainability. Our rice journeys from the finest paddies to your table with care and commitment. 
        </p>
        <p className="story-text">
          Whether it’s a daily meal or a festive celebration, our rice brings taste and trust together — nourishing lives with every grain.
        </p>
      </div>
      <div className="our-story-image-container">
        <img src={riceimg} alt="Premium rice on plate" className="story-image" />
      </div>
    </div>
  )
}

export default OurStorySec
