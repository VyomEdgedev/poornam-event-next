import React, { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import SubCard from "./SubCard";
import Subtext from "./Subtext";
import FAQSection from "@/common-component/Faq/FAQSection";
import SEO from "@/common-component/SEO/seo";
import { loaderContext } from "@/contextApi/loaderContext";
import Loader from "@/common-component/loader/Loader";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function SubBlog({ blog }) {
  const {loading ,setLoading} = useContext(loaderContext);
  useEffect(()=>{
      setLoading(false);
  },[])
  if(loading) return <Loader/>

    return (
    <>
      <SEO
        url={`${SITE_URL}/blog`}
        metaTitle={blog?.meta?.title}
        metaDescription={blog?.meta?.description}
        keywords={blog?.meta?.keywords}
        canonical={`${SITE_URL}/blog/${blog?.meta?.canonicalUrl || ""}`}
        ogTitle={blog?.ogTags?.title}
        ogDescription={blog?.ogTags?.description}
        ogImage={`${SITE_URL}/blog-og.jpg`}
        twitterTitle={blog?.ogTags?.title}
        twitterDescription={blog?.ogTags?.description}
        twitterImage={`${SITE_URL}/blog-twitter.jpg`}
        robots="index, follow"
      />
      <Box>
        <SubCard blogimg={blog} />
        <Subtext blogtext={blog?.description} />
        {Array.isArray(blog?.faq) && blog.faq.length > 0 && (
          <FAQSection faqData={blog.faq} />
        )}
      </Box>
    </>
  );
}




