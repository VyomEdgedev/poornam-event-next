import React, { useState } from "react";
import OurStories from "./OurStories";
import MagicMakers from "./MagicMakers";
import Owners from "./Owners"
import History from "./History";
import PoornamVows from "./PoornamVows";
import Philosophy from "./Philosophy";
import Snapshot from "./Snapshot";
import ContactSection from "../home/ContactSection";
import CustomBanner from "@/common-component/banner/CustomBanner";
import CustomButton from "@/common-component/button/CustomButton";
import ConnectModal from "@/common-component/modal/ConnectModal";

export default function AboutUS() {
  const [open, setOpen] = useState(false)
  const handleWeddingPlan = () => {
    // Add your navigation or action logic here
    setOpen(true)
  };
  return (
    <>
      <CustomBanner
        title="Let's Make Shaadi Magic Together!"
        subtitle="From planning to 'I do', we' ve got your back!"
        // paragraphSubtitle="Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with ❤️, dhol, and a bit of dholak. For brides, grooms, families, and even the baaratis. Let’s get planning, Poornam-style."
        backgroundImage="/AboutUsBanner.png"
        showLogo={true}
        logoSrc="/logo.png"
        overlay={{
          background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
          width: '70%',
          responsive: {
            md: {
              width: '100%',
              background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)'
            }
          }
        }} >
        <ConnectModal open={open} setOpen={setOpen} />
        <CustomButton onClick={handleWeddingPlan} data-testid="notify-button">{`Plan my Wedding`}</CustomButton>
      </CustomBanner >


      <OurStories></OurStories>
     <MagicMakers></MagicMakers>

      <Owners></Owners>
      <History></History>
      <PoornamVows></PoornamVows>
      <Philosophy></Philosophy>
      <Snapshot></Snapshot>
              <ContactSection></ContactSection>
    </>
  )
}