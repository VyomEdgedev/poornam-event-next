import CustomBanner from '@/common-component/banner/CustomBanner';
import React from 'react'
import ShaddiService from './ShaddiService';
import SignatureAddOns from './SignatureAddOns';
import Experience from './Experience';
import WeddingChecklist from './WeddingChecklist';
import WeddingFooter from './WeddingFooter';
import SEO from '@/common-component/SEO/seo';

const Service = () => {
  return (
    <>

      <SEO
        url='http://www.poornamevents.com/services'
        metaTitle='Wedding Planner Services | Indore, Bhopal & Ujjain'
        metaDescription='Discover our full-service wedding planning offerings: destination, themed, intimate weddings & more.'
        keywords='wedding planner service list, event management Indore'
        canonical='http://www.poornamevents.com/services'
        ogTitle='Wedding Planner Services | Indore, Bhopal & Ujjain'
        ogDescriptio='Discover our full-service wedding planning offerings: destination, themed, intimate weddings & more.'
        ogImage='https://www.poornamevent.com/og-image.jpg'
        twitterTitle='Wedding Planner Services | Indore, Bhopal & Ujjain'
        twitterDescription='Discover our full-service wedding planning offerings: destination, themed, intimate weddings & more.'
        twitterImage='https://www.poornamevent.com/logoo.jpg'
        robots="index, follow"//  default
      />
      <CustomBanner
        title="We Don't Just Plan Weddings"
        subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
        paragraphSubtitle="From Big Fat Indian Shaadis to intimate royal vibes- we design, plan, and execute it all."
        backgroundImage="/servicebanner.png"
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
      />
      <ShaddiService />
      <SignatureAddOns />
      <Experience />
      <WeddingChecklist />
      <WeddingFooter />

    </>
  )
}

export default Service;