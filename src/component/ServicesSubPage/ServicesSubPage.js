import CustomBanner from '@/common-component/banner/CustomBanner';
import CustomButton from '@/common-component/button/CustomButton';
import React from 'react'
import WhyChoose from './WhyChoose';
import YourDream from './YourDream'
import WeOffer from './WeOffer';
import WhyPoornam from './WhyPoornam';
import WeddingKit from './WeddingKit';
import { Stack } from '@mui/material';
import CapturedMoments from './CapturedMoments';
import FAQSection from '../home/FAQ';

  const handleWeddingPlan = () => {
    // Add your navigation or action logic here
    console.log("Plan My Wedding clicked");
  };

  const handleTalkToPlanner = () => {
    // Add your navigation or action logic here
    console.log("Talk to Our Planner clicked");
  };
function ServicesSubPage() {
  return (
    <>
      <CustomBanner
        title="Destination Weddings."
        // subtitle="From planning to 'I do', we' ve got your back!"
        paragraphSubtitle="From the palaces of Udaipur to the beaches of Goa, Poornam Events plans Usforgettable destination weddings that look royal, feel intimate , and run like clockwork."
        backgroundImage="/serviceSPBanner.png"
        showLogo={true}
        logoSrc="/logo.png">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          marginLeft={5}
        >
          <CustomButton
            variant="primary"
            onClick={handleWeddingPlan}
            sx={{
              fontFamily: "Akatab,Sans-serif",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
              fontWeight: 400,
               width: { xs: "178px", sm: "auto" },
            }}
          >
            Let's Plan Together
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
              }
            }}
            onClick={handleTalkToPlanner}
          >
            Book Consultation
          </CustomButton>

        </Stack>
      </CustomBanner>

      <WhyChoose></WhyChoose>
       <WeOffer></WeOffer>
       <CapturedMoments></CapturedMoments>
       <WhyPoornam></WhyPoornam>
      <YourDream></YourDream> 
      <WeddingKit></WeddingKit>
      <FAQSection></FAQSection>
    </>
  )
}

export default ServicesSubPage;