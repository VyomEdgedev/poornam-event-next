import CustomBanner from "@/common-component/banner/CustomBanner";
import CustomButton from "@/common-component/button/CustomButton";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import WeddingThemes from "./WeddingThemes";
import ShowCase from "./ShowCase";
import RecentPosts from "./RecentPosts";
import SocialMediaFollow from "./SocialMediaFollow";
import FAQSection from "@/common-component/Faq/FAQSection";
import SEO from "@/common-component/SEO/seo";
import ConnectModal from "@/common-component/modal/ConnectModal";
import { loaderContext } from "@/contextApi/loaderContext";
import Loader from "@/common-component/loader/Loader";

const Portfolio = ({ gallery }) => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const myFAQData = [
    {
      question: "What events do you showcase in your gallery?",
      answer:
        "We feature weddings, pre-wedding shoots, engagements, and other curated celebrations.",
    },
    {
      question: "Are these real events?",
      answer: "Yes, all events shown are real and managed by our expert team.",
    },
    {
      question: "Can I get ideas from your gallery for my event?",
      answer:
        "Yes, we tailor every event to your vision, even if inspired by past work.",
    },
    {
      question: "How often do you update your gallery?",
      answer: "We add fresh content regularly to showcase our latest events.",
    },
  ];
  const [open, setOpen] = useState(false);
  const {loading ,setLoading} = useContext(loaderContext);
  
  const handleportfolio = () => {
    setOpen(true);
  };

  useEffect(()=>{
     setLoading(false);
  },[])

  if(loading) return <Loader/>

  return (
    <>
      <>
        <SEO
          url="https://www.poornamevents.com/gallery"
          metaTitle="Wedding Gallery  | Poornam Events"
          metaDescription="Browse our gallery of weddings curated in Indore, Bhopal & destination locations."
          keywords="wedding gallery Indore, wedding gallery"
          canonical="https://www.poornamevents.com/gallery"
          ogTitle="Wedding Gallery  | Poornam Events"
          ogDescription="Browse our gallery of weddings curated in Indore, Bhopal & destination locations."
          ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle="Wedding Gallery  | Poornam Events"
          twitterDescription="Browse our gallery of weddings curated in Indore, Bhopal & destination locations."
          twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
        />
      </>
      <CustomBanner
        title="Let’s Make Shaadi Magic Together!"
        // subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
        paragraphSubtitle={`From planning to "I do", we've got your back`}
        backgroundImage="/portfoliobanner.png"
        showLogo={true}
        logoSrc="/logo2.png"
        breadcrumbs={[
          { href: "/", isHome: true },
          // { href: '/blog', label: 'Blog' },
          { label: "Gallery" },
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: "320px",
          left: "25px",
          lg: { top: "300px", left: "25px" },
          md: { top: "200px", left: "26px" },
          sm: { top: "330px", left: "3px" },
          xs: { top: "200px", left: "20px" },
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
      >
        <CustomButton
          data-testid="notify-button"
          fontFamily="Akatab, Sans-serif !important"
          onClick={handleportfolio}
        >
          {` Plan My Wedding`}
        </CustomButton>
        <ConnectModal open={open} setOpen={setOpen} />
      </CustomBanner>
      <WeddingThemes />
      <ShowCase categoriesGallery={gallery}   />
      <RecentPosts />
      <FAQSection faqData={myFAQData} />
      <SocialMediaFollow />
    </>
  );
};

export default Portfolio;
