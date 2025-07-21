import React from "react";
import Form from "../connectus/Form";
import Chat from "./Chat";
import CheckList from "./CheckList";
import SocialMedia from "./SocialMedia";
import CheatSheet from "./CheatSheet";
import FreeCall from "./FreeCall";
import Planner from "./Planner";
import FAQ from "./FAQ";
import CustomBanner from "@/common-component/banner/CustomBanner";
import CustomButton from "@/common-component/button/CustomButton";
import SEO from "@/common-component/SEO/seo";


export default function ContactUs() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ;
  return (
    <>
      <>
        <SEO
          url='http://www.poornamevents.com/contact'
          metaTitle='Contact Poornam Events | Wedding Planner in MP'
          metaDescription='Get in touch with Poornam Events. Book your consultation for an unforgettable wedding experience.'
          keywords='wedding planner contact India, Poornam Events contact'
          canonical='http://www.poornamevents.com/contact'
          ogTitle='Contact Poornam Events | Wedding Planner in MP'
          ogDescription='Get in touch with Poornam Events. Book your consultation for an unforgettable wedding experience.'
          ogImage={`${SITE_URL}/og-image.jpg`}
          twitterTitle="Contact Poornam Events | Wedding Planner in MP"
          twitterDescription='Get in touch with Poornam Events. Book your consultation for an unforgettable wedding experience.'
          twitterImage={`${SITE_URL}/logoo.jpg`}
          robots="index, follow"
        />
      </>
      <CustomBanner
        title="Let's Make Shaadi Magic Together!"
        subtitle="From planning to 'I do', we' ve got your back!"
        // paragraphSubtitle="Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with ❤️, dhol, and a bit of dholak. For brides, grooms, families, and even the baaratis. Let’s get planning, Poornam-style."
        backgroundImage="/ConnectUsBanner.png"
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
      >
        <CustomButton data-testid="notify-button">{`Plan my Wedding`}</CustomButton>
      </CustomBanner >

      <Form></Form>
      <Chat></Chat>
      <CheckList></CheckList>
      <SocialMedia></SocialMedia>
      <CheatSheet></CheatSheet>
      <FreeCall></FreeCall>
      <Planner></Planner>
      <FAQ></FAQ>
    </>
  )
}
