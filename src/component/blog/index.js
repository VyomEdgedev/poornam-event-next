import CustomBanner from '@/common-component/banner/CustomBanner'
import React from 'react'
import WeddingPlanning from './WeddingPlanning';
import SearchFilter from './SearchFilter';
import PlanningTips from './PlanningTips';
import BlogSection from './BlogSection';
import PicksSection from './PicksSection';
const Blog = () => {
  return (
    <>
 <CustomBanner
  title="Shaadi Ki Planning? Gyaan Bhi, Fun Bhi!"
//   subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
  paragraphSubtitle="Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with ❤️, dhol, and a bit of dholak. For brides, grooms, families, and even the baaratis. Let’s get planning, Poornam-style."
  backgroundImage="/blogbanner.png"
  showLogo={true}
  logoSrc="/logo.png"
  />

  <WeddingPlanning/>
  <SearchFilter/>
  <PlanningTips/>
  <BlogSection/>
  <PicksSection/>
    </>
  )
}

export default Blog;