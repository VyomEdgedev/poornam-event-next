import CustomBanner from "@/common-component/banner/CustomBanner";
import React, { useContext, useEffect } from "react";
import ShaddiService from "./ShaddiService";
import SignatureAddOns from "./SignatureAddOns";
import Experience from "./Experience";
import WeddingChecklist from "./WeddingChecklist";
import WeddingFooter from "./WeddingFooter";
import SEO from "@/common-component/SEO/seo";
import { loaderContext } from "@/contextApi/loaderContext";
import Loader from "@/common-component/loader/Loader";

const Service = (props) => {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const {loading ,setLoading} = useContext(loaderContext);

  useEffect(()=>{
    setLoading(false);
  },[]);
  
  if(loading) return <Loader/>
  return (
    <>
      <SEO
        url="https://www.poornamevents.com/services"
        metaTitle="Wedding Planner Services | Indore, Bhopal & Ujjain"
        metaDescription="Discover our full-service wedding planning offerings: destination, themed, intimate weddings & more."
        keywords="wedding planner service list, event management Indore"
        canonical="https://www.poornamevents.com/services"
        ogTitle="Wedding Planner Services | Indore, Bhopal & Ujjain"
        ogDescriptio="Discover our full-service wedding planning offerings: destination, themed, intimate weddings & more."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Wedding Planner Services | Indore, Bhopal & Ujjain"
        twitterDescription="Discover our full-service wedding planning offerings: destination, themed, intimate weddings & more."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow" //  default'
      />
      <CustomBanner
        title="We Don't Just Plan Weddings"
        subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
        paragraphSubtitle="From Big Fat Indian Shaadis to intimate royal vibes- we design, plan, and execute it all."
        backgroundImage="/servicebanner.webp"
        showLogo={true}
        logoSrc="/logo2.webp"
        breadcrumbs={[
          { href: "/", isHome: true },
          { label: "Services" },
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

      <ShaddiService services={props?.services}/>

      <SignatureAddOns />

      <Experience />

      <WeddingChecklist />

      <WeddingFooter />

    </>
  );
};

export default Service;
