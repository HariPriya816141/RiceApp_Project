import { useRef } from "react";
import BlogHero from "../../components/blog/BlogHero";
import RecentBlogPosts from "../../components/blog/RecentBlogPosts";
import PopularCategories from "../../components/blog/PopularCategories";
import FeaturedStory from "../../components/blog/FeaturedStory";
import Testimonials from "../../components/blog/Testimonials";
import Newsletter from "../../components/blog/NewsLetter";

const Blog = () => {
  const popularCategoriesRef = useRef(null);
  const voicesBehindRef = useRef(null);
  return (
    <div>
      <BlogHero
        onPopulaCategoriesClick={() =>
          popularCategoriesRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onVoicesBehindClick={() =>
          voicesBehindRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <RecentBlogPosts />
      <div ref={popularCategoriesRef} >
        <PopularCategories/>
      </div>
      <FeaturedStory />
      <div ref={voicesBehindRef} >
        <Testimonials/>
      </div>
      <Newsletter />
    </div>
  );
};

export default Blog;
