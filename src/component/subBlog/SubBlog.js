import React, { useEffect, useState } from "react";
import CustomBanner from "@/common-component/banner/CustomBanner";
import { Box } from "@mui/material";
import FAQSection from "../home/FAQ";
import SubCard from "./SubCard";
import Subtext from "./Subtext";
import { useRouter } from "next/router";

const faqData = [
  {
    question: "Do you only plan weddings in Indore?",
    answer: "Nope! We serve Bhopal, Ujjain, and beyond.",
  },
  {
    question: "Can you help with last-minute weddings?",
    answer: " Absolutely. We’ve pulled off 3-day prep shaadis with a smile.",
  },
  {
    question: "Do you provide decorators and photographers too?",
    answer: "Yes! We provide decorators and photographers too.",
  },
  {
    question: "Do you offer budget planning help?",
    answer: "Of course! We even have a free planner you can download.",
  },
];
export const SubBlog = () => {
  const [faq, setFaq] = useState([]);
  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       console.log("dddddddddddddddddddddddddd", id);
  //       const response = await apiClient.get(`api/blogs/${id}/event`);
  //       // console.log('dddddddddddddddddddddddddd' , id)
  //       console.log(response);
  //       const blog = response?.data?.blog;
  //       console.log(blog.faq, "ssssssssssssssssssssssssssss");
  //       if (blog && blog.faq) {
  //         setFaq(blog.faq);
  //       } else {
  //         setFaq([]);
  //       }
  //     } catch (error) {
  //       // setError(error);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);
  return (
    <Box>
      {/* <CustomBanner
        backgroundImage="/SubBlogBanner.png"
        showLogo={true}
        logoSrc="/logo.png"
        breadcrumbs={[
          { href: "/", isHome: true },
          { href: "/blog", label: "Blog" },
          { href: "/subblog", label: "Blog details" },
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: "400px",
          left: "47px",
          lg: { top: "350px", left: "60px" },
          md: { top: "300px", left: "10px" },
          sm: { top: "330px", left: "3px" },
          xs: { top: "310px", left: "20px" },
        }}
        overlay={{
          background:
            "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
          width: "70%",
          responsive: {
            md: {
              width: "100%",
              background:
                "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)",
            },
          },
        }}
      ></CustomBanner> */}
      <SubCard setFaq={setFaq} ></SubCard>
      <Subtext></Subtext>
      <FAQSection faq={faq.length !== 0 ? faq : faqData}></FAQSection>
    </Box>
  );
};
