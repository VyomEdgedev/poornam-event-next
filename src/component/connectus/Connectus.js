import React from "react";
import Form from "../connectus/Form";
import Banner from "./ConnectUSBanner"
import Chat from "./Chat";
import CheckList from "./CheckList";
import SocialMedia from "./SocialMedia";
import CheatSheet from "./CheatSheet";
import FreeCall from "./FreeCall";
import Planner from "./Planner";
import FAQSection from "../home/FAQ";


export default function ContactUs() {
  return (<>
  <Banner></Banner>
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
