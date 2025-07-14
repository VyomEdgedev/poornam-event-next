import React from "react";
import Form from "../connectus/Form";
import Chat from "./Chat";
import CheckList from "./CheckList";
import SocialMedia from "./SocialMedia";
import CheatSheet from "./CheatSheet";
import FreeCall from "./FreeCall";
import Planner from "./Planner";
import FAQSection from "../home/FAQ";
import CustomBanner from "@/common-component/banner/CustomBanner";
import CustomButton from "@/common-component/button/CustomButton";


export default function ContactUs() {
  return (<>
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
      <CustomButton   data-testid="notify-button">Plan my Wedding</CustomButton>
    </CustomBanner >

    <Form></Form>
    <Chat></Chat>
    <CheckList></CheckList>
    <SocialMedia></SocialMedia>
    <CheatSheet></CheatSheet>
    <FreeCall></FreeCall>
    <Planner></Planner>
    <FAQSection></FAQSection>
  </>
  )
}
