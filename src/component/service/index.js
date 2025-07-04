import CustomBanner from '@/common-component/banner/CustomBanner';
import React from 'react'
import ShaddiService from './ShaddiService';
import SignatureAddOns from './SignatureAddOns';
import Experience from './Experience';
import WeddingChecklist from './WeddingChecklist';
import WeddingFooter from './WeddingFooter';

const Service = () => {
  return (
    <>
 <CustomBanner
  title="We Don't Just Plan Weddings"
  subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
  paragraphSubtitle="From Big Fat Indian Shaadis to intimate royal vibes- we design, plan, and execute it all."
  backgroundImage="/servicebanner.png"
  showLogo={true}
  logoSrc="/logo.png"
  />
<ShaddiService/> 
<SignatureAddOns/>
<Experience /> 
<WeddingChecklist/>
<WeddingFooter/> 

    </>
  )
}

export default Service;