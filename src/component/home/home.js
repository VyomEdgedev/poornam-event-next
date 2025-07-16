import React from "react";
import Banner from "./banner";
import WeddingHero from "./WeddingHero";
import OurServices from "./OurService";
import ExploreWork from "./ExploreWork";
import Testimonials from "./Testimonials";
import OurPortfolio from "./OurPortfolio";
import AboutSection from "./AboutSection";
import ExecutiveCard from "./ExecutiveCard";
import { Typography } from "@mui/material";
import ResourcesSection from "./ResourcesSection";
import FAQSection from "./FAQ";
import InspirationSection from "./InspirationSection";
import ContactSection from "./ContactSection";
import HomeSnapshot from "./HomeSnapshot"
export default function  HomePage() {
  return (
    <>
  
  <Banner></Banner>
    <WeddingHero></WeddingHero>
    <OurServices></OurServices>
 <AboutSection></AboutSection>

   <OurPortfolio></OurPortfolio>
   <Testimonials></Testimonials>
  <HomeSnapshot></HomeSnapshot>
   <ResourcesSection></ResourcesSection>
   <FAQSection></FAQSection>
  <InspirationSection></InspirationSection>
 <ContactSection></ContactSection>
  </>
  )
}
