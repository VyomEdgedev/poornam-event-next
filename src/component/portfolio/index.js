import CustomBanner from '@/common-component/banner/CustomBanner'
import CustomButton from '@/common-component/button/CustomButton'
import { Button } from '@mui/material'
import React from 'react'
import WeddingThemes from './WeddingThemes'
import ShowCase from './ShowCase'
import RecentPosts from './RecentPosts'
import SocialMediaFollow from './SocialMediaFollow'
import FAQSection from '@/common-component/Faq/FAQSection'



const Portfolio = () => {
  const handleportfolio = () => {
    // Handle button click logic here
  }
  const myFAQData = [
    {
      question: 'Do you only plan weddings in Indore?',
      answer: 'Your custom answer here.',
    },
    {
      question: 'Can you help with last-minute weddings?',
      answer: 'Absolutely. We’ve pulled off 3-day prep shaadis with a smile..',
    },
    {
      question: 'Do you provide decorators and photographers too?',
      answer: 'Your custom answer here.',
    },
    {
      question: 'Do you offer budget planning help?',
      answer: 'Your custom answer here.',
    },

  ];

  return (
    <>
      <CustomBanner
        title="Let’s Make Shaadi Magic Together!"
        // subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
        paragraphSubtitle={`From planning to "I do", we've got your back`}
        backgroundImage="/portfoliobanner.png"
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
        }}
      ><CustomButton data-testid="notify-button" onClick={handleportfolio}>
          {` Plan My Wedding`}
        </CustomButton>
      </CustomBanner>

      <WeddingThemes />
      <ShowCase />
      <RecentPosts />

      <FAQSection faqData={myFAQData} />;

      <SocialMediaFollow />
    </>

  )
}

export default Portfolio