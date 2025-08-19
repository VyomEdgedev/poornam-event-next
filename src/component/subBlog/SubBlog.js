import React from "react";
import { Box, CircularProgress } from "@mui/material";
import SubCard from "./SubCard";
import Subtext from "./Subtext";
import FAQSection from "@/common-component/Faq/FAQSection";
import SEO from "@/common-component/SEO/seo";
import { apiClient } from "@/lib/api-client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default function SubBlog({ blog }) {

  if (!blog) {

    return (
      <Box sx={{ py: 8, textAlign: "center", height: "60.5vh" }}>
        <CircularProgress
          sx={{
            color: "#DAA412",
            m: 5,
          }}
        />
      </Box>
    );
  }

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





















// import React, { useEffect, useState } from "react";
// import CustomBanner from "@/common-component/banner/CustomBanner";
// import { Box, CircularProgress } from "@mui/material";

// import SubCard from "./SubCard";
// import Subtext from "./Subtext";
// import { useRouter } from "next/router";
// import { apiClient } from "@/lib/api-client";
// import FAQSection from "@/common-component/Faq/FAQSection";
// import SEO from "@/common-component/SEO/seo";

// const FAQData = [
//   {
//     question: "Do you only plan weddings in Indore?",
//     answer: "Nope! We serve Bhopal, Ujjain, and beyond.",
//   },
//   {
//     question: "Can you help with last-minute weddings?",
//     answer: " Absolutely. We’ve pulled off 3-day prep shaadis with a smile.",
//   },
//   {
//     question: "Do you provide decorators and photographers too?",
//     answer: "Yes! We provide decorators and photographers too.",
//   },
//   {
//     question: "Do you offer budget planning help?",
//     answer: "Of course! We even have a free planner you can download.",
//   },
// ];
// export const SubBlog = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [faq, setFaq] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [blog, setBlog] = useState(null);
//    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL 
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await apiClient.get(`api/blogs/${id}/event`);
//         setBlog(response?.data?.blog);
//       } catch (error) {
//         console.error("Error fetching Blog:", error);
//         setError(err.message || "Failed to fetch Blog");
//         setBlog(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (!id) return;
//     fetchBlogs();
//   }, [id]);
  
//   return (
    
//     <>
    
//       {loading ? (
//         <Box sx={{ py: 8, textAlign: "center", height:"60.5vh" }}>
//           <CircularProgress
//             sx={{
//               color: "#DAA412",
//               m: 5,
//             }}
//           />
//         </Box>
//       ) : (
//         <>
//          <SEO
//           url='http://www.poornamevents.com/blog'
//           metaTitle={blog?.meta?.title}
//           metaDescription={blog?.meta?.description}
//           keywords={blog?.meta?.keywords}
//           canonical={`http://www.poornamevents.com/blog/${blog?.meta?.canonicalUrl}`}
//           ogTitle={blog?.ogTags?.title}
//           ogDescription={blog?.ogTags?.description}
          
//           ogImage={`${SITE_URL}/blog-og.jpg`}
//           twitterTitle={blog?.ogTags?.title}
//           twitterDescription={blog?.ogTags?.description}
//           twitterImage={`${SITE_URL}/blog-twitter.jpg`}
//           robots="index, follow"
//         />
       
//         <Box>
//           {/* <CustomBanner
//         backgroundImage="/SubBlogBanner.png"
//         showLogo={true}
//         logoSrc="/logo.png"
//         breadcrumbs={[
//           { href: "/", isHome: true },
//           { href: "/blog", label: "Blog" },
//           { href: "/subblog", label: "Blog details" },
//         ]}
//         // Optional: customize breadcrumbs position
//         breadcrumbsPosition={{
//           top: "400px",
//           left: "47px",
//           lg: { top: "350px", left: "60px" },
//           md: { top: "300px", left: "10px" },
//           sm: { top: "330px", left: "3px" },
//           xs: { top: "310px", left: "20px" },
//         }}
//         overlay={{
//           background:
//             "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
//           width: "70%",
//           responsive: {
//             md: {
//               width: "100%",
//               background:
//                 "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)",
//             },
//           },
//         }}
//       ></CustomBanner> */}

//           <SubCard blogimg={blog} setFaq={setFaq}></SubCard>
//           <Subtext blogtext={blog?.description}></Subtext>
//           {/* <FAQSection faq={blog?.faq.length !== 0 ? blog?.faq : faqData}>

//       </FAQSection> */}
//           {blog?.faq.length >= 0 && <FAQSection faqData={blog?.faq} />}
//         </Box>
//          </>
//       )}
//     </>
//   );
// };
// export async function getStaticProps() {
//   const response = await apiClient.get(`api/blogs/${id}/event`);
//   const data = await response.data.blog
//   console.log(data)
//   return {
//     props: {
//       data: data
//     },
//   }
// }






