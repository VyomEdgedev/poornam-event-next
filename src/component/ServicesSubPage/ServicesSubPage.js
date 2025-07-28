import CustomBanner from '@/common-component/banner/CustomBanner';
import CustomButton from '@/common-component/button/CustomButton';
import React, { useState } from 'react'
import WhyChoose from './WhyChoose';
import YourDream from './YourDream'
import WeOffer from './WeOffer';
import WhyPoornam from './WhyPoornam';
import WeddingKit from './WeddingKit';
import { Box, Stack } from '@mui/material';
import CapturedMoments from './CapturedMoments';
import FAQSection from '@/common-component/Faq/FAQSection';
import ConnectModal from '@/common-component/modal/ConnectModal';



function ServicesSubPage() {
const [open, setOpen] = useState(false)
const handleWeddingPlan = () => {
  // Add your navigation or action logic here
   setOpen(true)
};

const handleTalkToPlanner = () => {
  // Add your navigation or action logic here
  window.open("https://wa.me/919519066885", "_blank");
};


  const myFAQData = [
  {
    question: ' What guest size qualifies as an intimate wedding?',
    answer: 'Anywhere between 20 to 100 guests — basically anyone you’d personally hug at your reception.',
  },
  {
    question: 'Is it possible to make a small wedding look luxurious?',
    answer: " Absolutely! With fewer guests, your budget allows for richer décor, curated food, and personalized experiences.",
  },
  {
    question: 'Do you work with home venues?',
    answer: "Yes! We love transforming home gardens, terraces, courtyards, and even drawing rooms into magical spaces.",
  },
  
  {
    question: 'Can we still have a sangeet or mehendi for small weddings?',
    answer: " Of course! In fact, we make them even more fun with interactive setups and cozy vibe-focused entertainment.",
  },
  
];

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
          top: '400px',
          left: '47px',
          lg: { top: '350px', left: '60px' },
          md: { top: '300px', left: '20px' },
          sm: { top: '330px', left: '7px' },
          xs: { top: '310px', left: '20px' }
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
          direction={{ xs: "row", sm: "row" }}
          spacing={2}
          marginLeft={0}
        >
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
              }
            }}
            onClick={handleTalkToPlanner}
          >
            {`   Book Consultation`}
          </CustomButton>
            <ConnectModal open={open} setOpen={setOpen} />
        </Stack>
      </CustomBanner>
<Box sx={{
     px: { xs: 2, sm: 5, md:8 ,lg: 22, xl: 28 },
                py: { xs: 4, sm: 6, md: 8 },
    //             // bgcolor: '#f8f9fa'
}}  >

   <WhyChoose/>
      <WeOffer/>
      
      <WhyPoornam/>
</Box>
     
      <CapturedMoments></CapturedMoments>
      <YourDream></YourDream>
      <WeddingKit></WeddingKit>
      <FAQSection faqData={myFAQData} />;
    </>
  )
}

export default ServicesSubPage;