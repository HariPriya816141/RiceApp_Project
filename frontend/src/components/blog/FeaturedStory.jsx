import { Button, Tag } from "antd";
import "../../styles/blog.css"

const FeaturedStory = () => {
  return (
    <section className="featured-story">
      <div className="story-container">
        <div className="story-image">
          <img src="/assets/blogs/featured.jpg" alt="Featured Story" />
        </div>
        <div className="story-content">
          <Tag color="green" style={{ fontSize: '14px', padding: '4px 10px' }}>Editor's Pick</Tag>
          <h2>From Farm to Plate: The Journey of Every Grain</h2>
          <p>
            Explore the inspiring journey of how rice travels from the sunlit paddy fields of Hyderabad to your plate — a tale of hard work, tradition, and flavor.
          </p>
          <Button type="primary" className="story-btn">Read Full Story</Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
