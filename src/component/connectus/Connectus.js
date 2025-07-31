import React, { useState } from "react";
import Form from "../connectus/Form";
import Chat from "./Chat";
import CheckList from "./CheckList";
import SocialMedia from "./SocialMedia";
import CheatSheet from "./CheatSheet";
import FreeCall from "./FreeCall";
import Planner from "./Planner";

import CustomBanner from "@/common-component/banner/CustomBanner";
import CustomButton from "@/common-component/button/CustomButton";
import SEO from "@/common-component/SEO/seo";
import FAQSection from "@/common-component/Faq/FAQSection";
import ConnectModal from "@/common-component/modal/ConnectModal";


export default function ContactUs() {
  const myFAQData = [
  {
    question: 'What does a wedding planner actually do?',
    answer: 'Think of us as your behind-the-scenes superheroes. From budget planning, vendor management, decor design, to handling last-minute family drama — we do everything except walk down the aisle for you.',
  },
  {
    question: 'Do you only work in Indore?',
    answer: " While we’re proudly rooted in Indore, we’ve planned weddings in Bhopal, Jabalpur, and across India. If your heart says “Shimla ki Shaadi”, our bags are already packed.",
  },
  {
    question: 'Can I hire you just for wedding day coordination?',
    answer: "Yes! If you’ve done the heavy lifting and just need a pro team to handle the “big day” chaos, we offer on-day execution services too. We'll make sure everything runs smoother than a sangeet playlist.",
  },
  {
    question: 'Do you plan small, intimate weddings too?',
    answer: 'Absolutely. From 500-guest big fat weddings to 50-person hilltop vows — we design every event with the same love, drama, and attention to detail.',
  },
   {
    question: 'How far in advance should I book Poornam Events?',
    answer: 'The sooner, the better — especially during peak wedding seasons (Oct–Feb). Some couples book us 9–12 months in advance. Others call us two weeks before. Either way, we deliver magic.',
  },
   {
    question: 'Do you handle destination wedding?',
    answer: 'Yes! Whether it’s a royal palace in Rajasthan or a beach in Kerala, we manage logistics, travel, stay, and every tiny flower petal that needs to fall just right.',
  },
   {
    question: ' What if I already have some vendors booked?',
    answer: 'No problem! We can seamlessly collaborate with your chosen vendors or suggest our trusted ones. Either way, your wedding will be chef’s kiss perfect.',
  },
   {
    question: 'Is hiring a wedding planner expensive?',
    answer: 'Not when you consider the time, stress, and money we help you save. Plus, we tailor our packages based on your vision and budget. Trust us — we know how to party smart.',
  },
   {
    question: 'Will you help with the “not-so-fun” stuff too?',
    answer: 'You mean budgeting, guest RSVP chaos, or handling that one auntie who wants to change the seating chart? Yup. We’ve got it all covered.',
  },
   {
    question: ' How do I get started with Poornam Events?',
    answer: 'Easy! Just head to our Connect With Us page, fill out the form, or drop us a WhatsApp. We’ll set up a vibe-check call, and take it from there. Your dream wedding starts with a simple hello!',
  },
];

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ;
   const [open, setOpen] = useState(false)
  const handleWeddingPlan=() =>{
   
    setOpen(true)}
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
         breadcrumbs={[
          { href: "/", isHome: true },
          // { href: '/blog', label: 'Blog' },
          { label: "Connectus" },
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: "400px",
          left: "43px",
          lg: { top: "350px", left: "60px" },
          md: { top: "300px", left: "10px" },
          sm: { top: "330px", left: "3px" },
          xs: { top: "310px", left: "20px" },
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
        }}
      >
        
        <CustomButton onClick={handleWeddingPlan} data-testid="notify-button">{`Plan my Wedding`}</CustomButton>
        <ConnectModal open={open} setOpen={setOpen} />
      </CustomBanner >

      <Form></Form>
      <Chat></Chat>
      <CheckList></CheckList>
      <SocialMedia></SocialMedia>
      <CheatSheet></CheatSheet>
      <FreeCall></FreeCall>
      <Planner></Planner>
      <FAQSection faqData={myFAQData} />;

    </>
  )
}
