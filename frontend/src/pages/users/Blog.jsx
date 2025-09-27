import React from 'react'
import BlogHero from "../../components/blog/BlogHero"
import RecentBlogPosts from '../../components/blog/RecentBlogPosts'
import PopularCategories from '../../components/blog/PopularCategories'
import FeaturedStory from '../../components/blog/FeaturedStory'
import Testimonials from '../../components/blog/Testimonials'
import Newsletter from '../../components/blog/NewsLetter'

const Blog = () => {
  return (
    <div>
      <BlogHero/>
      <RecentBlogPosts/>
      <PopularCategories/>
      <FeaturedStory/>
      <Testimonials/>
      <Newsletter/>
          </div>
  )
}

export default Blog
