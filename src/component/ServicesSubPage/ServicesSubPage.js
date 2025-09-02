import CustomBanner from "@/common-component/banner/CustomBanner";
import React, { useEffect, useState } from "react";
import WhyChoose from "./WhyChoose";
import YourDream from "./YourDream";
import WeOffer from "./WeOffer";
import WhyPoornam from "./WhyPoornam";
import WeddingKit from "./WeddingKit";
import { Box, CircularProgress, Stack } from "@mui/material";
import CapturedMoments from "./CapturedMoments";
import FAQSection from "@/common-component/Faq/FAQSection";
import { useRouter } from "next/router";
import { apiClient } from "@/lib/api-client";
import SEO from "@/common-component/SEO/seo";

function ServicesSubPage(props) {
  const router = useRouter();
  const { id } = router.query;
  const service = props?.singleService;
  // const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const title = service?.title || "Service";
  const description = service?.meta?.description || "Service Description";
  const bannerImage = service?.featuredImage?.url || "/serviceSPBanner.png";
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <>
      {loading ? (
        <Box sx={{ py: 8, textAlign: "center", height: "60.5vh" }}>
          <CircularProgress
            sx={{
              color: "#DAA412",
              m: 5,
            }}
          />
        </Box>
      ) : (
        <>
          <SEO
            url="https://www.poornamevents.com/services"
            metaTitle={`${service?.meta?.title}`}
            metaDescription={`${service?.meta?.description}`}
            keywords={`${service?.meta?.keywords}`}
            canonical={`https://www.poornamevents.com/services/${id}`}
            ogTitle={`${service?.ogTags?.title}`}
            ogDescriptio={`${service?.ogTags?.description}`}
            ogImage={`${service?.ogTags?.image}` || `${SITE_URL}/og-image.jpg`}
            twitterTitle={`${service?.ogTags?.title}`}
            twitterDescription={`${service?.ogTags?.description}`}
            twitterImage={`${SITE_URL}/logoo.jpg`}
            robots="index, follow" //  default'
          />
          <CustomBanner
            title={title}
            paragraphSubtitle={description}
            backgroundImage="/serviceSPBanner.png"
            showLogo={true}
            logoSrc="/logo2.png"
            breadcrumbs={[
              { href: "/", isHome: true },
              { href: "/services", label: "services" },
              { href: `/services/${id}`, label: title },
            ]}
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
          />
          <WhyChoose title={title} description={service?.description || ""} />
          <WeOffer categoriesId={service?.serviceCategory || []} />
          <WhyPoornam poornam={service} />
          <CapturedMoments title={title} captured={service} />
          <YourDream Blogs={service?.relatedBlogs || []} />
          <WeddingKit />
          <FAQSection faqData={service?.faq || []} />
        </>
      )}
    </>
  );
}
export default ServicesSubPage;
