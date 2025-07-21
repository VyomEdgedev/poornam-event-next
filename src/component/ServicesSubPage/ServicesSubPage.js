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
        logoSrc="/logo.png"
        breadcrumbs={[
          { href: '/', isHome: true },
          // { href: '/blog', label: 'Blog' },
          { href: '/services', label: 'services' },
          { href: '/servicessubpage', label: 'Destination Wedding' }
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: '370px',
          left: '50px',
          lg: { top: '320px', left: '50px' },
          md: { top: '280px', left: '20px' },
          sm: { top: '260px', left: '10px' },
          xs: { top: '210px', left: '20px' }
        }}
        overlay={{
          background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
          width: '70%',
          responsive: {
            md: {
              width: '100%',
              background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)'
            }
          }
        }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          marginLeft={0}
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
              }
            }}
            onClick={handleTalkToPlanner}
          >
            {`   Book Consultation`}
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