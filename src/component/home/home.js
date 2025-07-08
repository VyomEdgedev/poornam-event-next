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
import HomeSnapshot from "./HomeSnapshot";
export default function () {
  return (<>
  
  <Banner></Banner>
  <WeddingHero></WeddingHero>
  <OurServices></OurServices>
  <AboutSection></AboutSection>
  
  {/* <ExecutiveCard
  title="Luxury Wedding Planning"
  subtitle="Bespoke, Opulent, Iconic"
>
  <Typography variant="body2" sx={{ color: '#ccc' }}>
    We craft events that feel magical — from theme to confetti, sparkle to vows.
  </Typography>
</ExecutiveCard> */}
  {/* <ExploreWork></ExploreWork> */}
  <Testimonials></Testimonials>
  <HomeSnapshot></HomeSnapshot>
  {/* <OurPortfolio></OurPortfolio> */}
  <ResourcesSection></ResourcesSection>
  <FAQSection></FAQSection>
  <InspirationSection></InspirationSection>
  <ContactSection></ContactSection>
  </>
  )
}
