import React from "react";
import Form from "../connectus/Form"
import Banner from "./ConnectUSBanner"
import Chat from "./Chat";
import CheckList from "./CheckList";
import SocialMedia from "./SocialMedia";
import CheatSheet from "./CheatSheet";
import FreeCall from "./FreeCall";
import Planner from "./Planner";


export default function () {
  return (<>
  <Banner></Banner>
  <Form></Form>
  <Chat></Chat>
  <CheckList></CheckList>
  <SocialMedia></SocialMedia>
  <CheatSheet></CheatSheet>
  <FreeCall></FreeCall>
  <Planner></Planner>
  </>
  )
}
