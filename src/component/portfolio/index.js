import CustomBanner from '@/common-component/banner/CustomBanner'
import CustomButton from '@/common-component/button/CustomButton'
import { Button } from '@mui/material'
import React from 'react'
import WeddingThemes from './WeddingThemes'
import ShowCase from './ShowCase'
import RecentPosts from './RecentPosts'
import SocialMediaFollow from './SocialMediaFollow'
import FAQSection from '@/common-component/Faq/FAQSection'
import SEO from '@/common-component/SEO/seo'



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
      <>
        <SEO
          url='http://www.poornamevents.com/portfolio'
          metaTitle='Wedding Gallery  | Poornam Events'
          metaDescription='Browse our portfolio of weddings curated in Indore, Bhopal & destination locations.'
          keywords='wedding portfolio Indore, wedding gallery'
          canonical='http://www.poornamevents.com/portfolio'
          ogTitle='Wedding Gallery  | Poornam Events'
          ogDescription='Browse our portfolio of weddings curated in Indore, Bhopal & destination locations.'
          ogImage='https://www.poornamevent.com/og-image.jpg'
          twitterTitle='Wedding Gallery  | Poornam Events'
          twitterDescription='Browse our portfolio of weddings curated in Indore, Bhopal & destination locations.'
            twitterImage='https://www.poornamevent.com/logoo.jpg'
          robots="index, follow"
        />
      </>
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