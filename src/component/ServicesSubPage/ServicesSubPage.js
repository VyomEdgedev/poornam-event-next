import CustomBanner from "@/common-component/banner/CustomBanner";
import CustomButton from "@/common-component/button/CustomButton";
import React, { useEffect, useState } from "react";
import WhyChoose from "./WhyChoose";
import YourDream from "./YourDream";
import WeOffer from "./WeOffer";
import WhyPoornam from "./WhyPoornam";
import WeddingKit from "./WeddingKit";
import { Box, Stack } from "@mui/material";
import CapturedMoments from "./CapturedMoments";
import FAQSection from "@/common-component/Faq/FAQSection";
import ConnectModal from "@/common-component/modal/ConnectModal";
import { useRouter } from "next/router";
import { apiClient } from "@/lib/api-client";

function ServicesSubPage() {
  const router = useRouter();
  const { id } = router.query;
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const handleWeddingPlan = () => {
    // Add your navigation or action logic here
    setOpen(true);
  };

  const handleTalkToPlanner = () => {
    // Add your navigation or action logic here
    window.open("https://wa.me/919519066885", "_blank");
  };

  const myFAQData = [
    {
      question: " What guest size qualifies as an intimate wedding?",
      answer:
        "Anywhere between 20 to 100 guests — basically anyone you’d personally hug at your reception.",
    },
    {
      question: "Is it possible to make a small wedding look luxurious?",
      answer:
        " Absolutely! With fewer guests, your budget allows for richer décor, curated food, and personalized experiences.",
    },
    {
      question: "Do you work with home venues?",
      answer:
        "Yes! We love transforming home gardens, terraces, courtyards, and even drawing rooms into magical spaces.",
    },

    {
      question: "Can we still have a sangeet or mehendi for small weddings?",
      answer:
        " Of course! In fact, we make them even more fun with interactive setups and cozy vibe-focused entertainment.",
    },
  ];
  useEffect(() => {
    if (!id) return;
    const fetchService = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await apiClient.get(
          `api/service/getServicePageById/${id}/event`
        );
        setService(response.data);
      } catch (err) {
        console.error("Error fetching service:", err);
        setError(err.message || "Failed to fetch service");
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);
  const title = service?.title || "Service";
  const description = service?.meta?.description || "Service Description";
  const bannerImage = service?.featuredImage?.url || "/serviceSPBanner.png";
  return (
    <>
      <CustomBanner
        title={title}
        // subtitle="From planning to 'I do', we' ve got your back!"
        paragraphSubtitle={description}
        backgroundImage="/serviceSPBanner.png"
        showLogo={true}
        logoSrc="/logo2.png"
        breadcrumbs={[
          { href: "/", isHome: true },
          // { href: '/blog', label: 'Blog' },
          { href: "/services", label: "services" },
          { href: `/services/${id}`, label: title },
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: "300px",
          left: "25px",
          lg: { top: "280px", left: "25px" },
          md: { top: "170px", left: "26px" },
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
        {/* <Stack direction={{ xs: "row", sm: "row" }} spacing={2} marginLeft={0}>
          <CustomButton
            variant="primary"
            onClick={handleWeddingPlan}
            sx={{
              fontFamily: "Akatab,Sans-serif",
              fontSize: { xs: "15px", sm: "16px", md: "16px" },
              fontWeight: 400,
              width: { xs: "178px", sm: "auto" },
            }}
          >
            {`  Let's Plan Together`}
          </CustomButton>
          <CustomButton
            variant="outlined"
            sx={{
              color: "#000D1F",
              background: "#FFFFFF",
              borderColor: "#DAA412",
              width: { xs: "178px", sm: "auto" },
              height: "46px",
              borderRadius: "30px",
              textTransform: "none",
              fontFamily: "Akatab,Sans-serif",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
              fontWeight: 400,
              "&:hover": {
                borderColor: "#f4ce6a",
                color: "#f4ce6a",
              },
            }}
            onClick={handleTalkToPlanner}
          >
            {`   Book Consultation`}
          </CustomButton>
          <ConnectModal open={open} setOpen={setOpen} />
        </Stack> */}
      </CustomBanner>
      {/* <Box
        sx={{
          px: { xs: 2, sm: 5, md: 8, lg: 22, xl: 28 },
          py: { xs: 4, sm: 6, md: 8 },
          //             // bgcolor: '#f8f9fa'
        }}
      > */}
      <WhyChoose title={title} description={service?.description || ''} />
      <WeOffer serviceId={id} />
      <WhyPoornam poornamId={id}  service={service}/>
      {/* </Box> */}
      <CapturedMoments title={title} service={service} />
      <YourDream blogId={id} />
      <WeddingKit />
      <FAQSection faqData={service?.faq || []} />
    </>
  );
}

export default ServicesSubPage;
