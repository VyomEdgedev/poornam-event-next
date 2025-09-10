import React, { useState } from "react";
import CustomBanner from "@/common-component/banner/CustomBanner";
import WeddingPlanning from "./WeddingPlanning";
import SearchFilter from "./SearchFilter";
import PlanningTips from "./PlanningTips";
import BlogSection from "./BlogSection";
import PicksSection from "./PicksSection";
import SEO from "@/common-component/SEO/seo";

const Blog = ({ initialPosts, initialCategories }) => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const [posts, setPosts] = useState(initialPosts);
  const [categories, setCategories] = useState(initialCategories);

  return (
    <>
      <SEO
        url={`${SITE_URL}/blog`}
        metaTitle="Wedding Planning Tips & Real Weddings Blog"
        metaDescription="Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India."
        keywords="wedding planning tips India, blog destination wedding"
        canonical={`${SITE_URL}/blog`}
        ogTitle="Wedding Planning Tips & Real Weddings Blog"
        ogDescription="Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India."
        ogImage={`${SITE_URL}/blog-og.jpg`}
        twitterTitle="Wedding Planning Tips & Real Weddings Blog"
        twitterDescription="Read expert wedding planning tips, real Indian weddings & destination ideas. For couples in MP & across India."
        twitterImage={`${SITE_URL}/blog-twitter.jpg`}
        robots="index, follow"
      />

      <CustomBanner
        headingtag={"h1"}
        title="Shaadi Ki Planning? Gyaan Bhi, Fun Bhi!"
        paragraphSubtitle="Welcome to the only wedding blog that understands your vibe..."
        backgroundImage="/blogbanner.png"
        showLogo={true}
        logoSrc="/logo2.png"
        breadcrumbs={[
          { href: "/", isHome: true },
          { href: "/blog", label: "Blog" },
        ]}
        overlay={{
          background:
            "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
          width: "80%",
          responsive: {
            md: {
              width: "100%",
              background:
                "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)",
            },
          },
        }}
      />

      <WeddingPlanning />
      <SearchFilter
        posts={posts}
        setPosts={setPosts}
        categories={categories}
        setCategories={setCategories}
      />
      <BlogSection
        posts={posts}
        setPosts={setPosts}
        categories={categories}
        setCategories={setCategories}
      />
      <PlanningTips />
      <PicksSection />
    </>
  );
};

export default Blog;
