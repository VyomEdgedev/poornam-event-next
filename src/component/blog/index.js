import CustomBanner from '@/common-component/banner/CustomBanner'
import React, { useActionState, useState } from 'react'
import WeddingPlanning from './WeddingPlanning';
import SearchFilter from './SearchFilter';
import PlanningTips from './PlanningTips';
import BlogSection from './BlogSection';
import PicksSection from './PicksSection';
import SEO from '@/common-component/SEO/seo';

const Blog = () => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const [posts, setPosts] = useState([]);
  const [catgeory , setCategories] = useState([])
  return (
    <>
      <>
        <SEO
          url='http://www.poornamevents.com/blog'
          metaTitle='Wedding Planning Tips & Real Weddings Blog'
          metaDescription='Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India.'
          keywords='wedding planning tips India, blog destination wedding'
          canonical='http://www.poornamevents.com/blog'
          ogTitle='Wedding Planning Tips & Real Weddings Blog'
          ogDescription='Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India.'
          ogImage={`${SITE_URL}/blog-og.jpg`}
          twitterTitle='Wedding Planning Tips & Real Weddings Blog'
          twitterDescription='Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India.'
          twitterImage={`${SITE_URL}/blog-twitter.jpg`}
          robots="index, follow"
        />
      </>
      <CustomBanner
      headingtag={'h1'}
        title="Shaadi Ki Planning? Gyaan Bhi, Fun Bhi!"
        //   subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
        paragraphSubtitle="Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with ❤️, dhol, and a bit of dholak. For brides, grooms, families, and even the baaratis. Let’s get planning, Poornam-style."
        backgroundImage="/blogbanner.png"
        showLogo={true}
        logoSrc="/logo2.png"
        breadcrumbs={[
          { href: '/', isHome: true },
         { href: '/blog', label: 'Blog' },
         // { label: 'services' }
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: "320px",
          left: "25px",
          lg: { top: "290px", left: "25px" },
          md: { top: "200px", left: "26px" },
          sm: { top: "330px", left: "3px" },
          xs: { top: "220px", left: "20px" },
        }}
        overlay={{
          background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
          width: '70%',
          responsive: {
            md: {
              width: '100%',
              background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)',

            }
          }
        }}
      />

      <WeddingPlanning />
      <SearchFilter posts ={posts} setPosts= {setPosts}  catgeory={catgeory } setCategories={ setCategories}  />
      <BlogSection  posts ={posts} setPosts= {setPosts} catgeory={catgeory } setCategories={ setCategories}/>
      <PlanningTips />
      <PicksSection />
      
    </>
  )
}

export default Blog;