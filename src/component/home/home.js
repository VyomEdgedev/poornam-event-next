"use client"

import React, { useContext, useEffect } from "react";
import Banner from "./banner";
import WeddingHero from "./WeddingHero";
import OurServices from "./OurService";
import Testimonials from "./Testimonials";
import OurPortfolio from "./OurPortfolio";
import AboutSection from "./AboutSection";
import ResourcesSection from "./ResourcesSection";
import FAQSection from "./FAQ";
import InspirationSection from "./InspirationSection";
import ContactSection from "./ContactSection";
import HomeSnapshot from "./HomeSnapshot"
import SEO from "@/common-component/SEO/seo";
import { loaderContext } from "@/contextApi/loaderContext";
import Loader from "@/common-component/loader/Loader";

export default function HomePage(props) {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  const { loading, setLoading } = useContext(loaderContext);
  useEffect(() => {
    setLoading(false);
    return setLoading(false);
  }, [])

  if (loading) { return <Loader /> }

  return (
    <>
      <>
        <SEO
          url='https://www.poornamevents.com/'
          metaTitle='Wedding Planner in Madhya Pradesh | Poornam Events'
          metaDescription='Your trusted wedding planner serving Indore, Bhopal, Jabalpur, Ujjain, Pachmarhi, Pipariya and Gadarwara. Luxury and destination weddings since 2017.'
          keywords='wedding planner Indore, Bhopal, Jabalpur, Ujjain, Pachmarhi, Pipariya, Gadarwara, destination weddings Madhya Pradesh'
          canonical='https://www.poornamevents.com/'
          ogTitle='Wedding Planner in Madhya Pradesh | Poornam Events'
          ogDescription='Your trusted wedding planner serving Indore, Bhopal, Jabalpur, Ujjain, Pachmarhi, Pipariya and Gadarwara. Luxury and destination weddings since 2017.'
          ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle='Wedding Planner in Madhya Pradesh | Poornam Events'
          twitterDescription='Your trusted wedding planner serving Indore, Bhopal, Jabalpur, Ujjain, Pachmarhi, Pipariya and Gadarwara. Luxury and destination weddings since 2017.'
          twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
          isHomePage={true}
        />
      </>
      <Banner></Banner>
      <WeddingHero></WeddingHero>
      <OurServices services={props.services} />
      <AboutSection></AboutSection>
      <OurPortfolio></OurPortfolio>
      <Testimonials></Testimonials>
      <HomeSnapshot></HomeSnapshot>
      <ResourcesSection></ResourcesSection>
      <FAQSection></FAQSection>
      <InspirationSection categories={props.categorie}></InspirationSection>
      <ContactSection></ContactSection>
    </>
  )
}

