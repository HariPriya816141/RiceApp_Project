import { useNavigate } from "react-router-dom";
import "../../styles/homeCarousel.css";

export const slideData = [
  {
    heading: "Bringing You the Finest Grains of Tradition",
    caption: "Sourced from India’s heartland. Nourishing every meal with purity.",
    image: "/home/83.png",
  },
  {
    heading: "From Our Fields to Your Family",
    caption: "Every grain is a story of care, tradition, and nutrition.",
    image: "/home/84.png",
  },
  {
    heading: "Legacy You Can Taste",
    caption: "Rice that carries the heritage of Indian soil in every bite.",
    image: "/home/85.png",
  },
  {
    heading: "Crafted with Care, Delivered with Love",
    caption: "Experience authentic rice perfected over generations.",
    image: "/home/83.png",
  },
];

const HeroContentBox = ({ heading, caption, image, index }) => {
  const navigate = useNavigate();
  return (
    <div className="hero-content-wrapper">
        <div className="hero-content-box">
      <h1>{heading}</h1>
      <p>{caption}</p>
      <div className="cta-buttons">
        <button className="primary-btn" onClick={() => navigate("/shop?scrollTo=product")}>Explore Our Range</button>
        <button className="secondary-btn" onClick={() => navigate("/about")}>Discover the Taste of Legacy</button>
      </div>
    </div>
    {/* hero content box ends */}
    <div className="image-container">
        <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
    </div>
    </div>
  );
};

export default HeroContentBox;

