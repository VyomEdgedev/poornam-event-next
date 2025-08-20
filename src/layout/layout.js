import React, { useEffect, useState } from "react";

import Navbar  from "../common-component/navbar/navbar"

import styled from "../styles/style.module.scss";
import Footer from "@/common-component/Footer/Footer";
import CookiesBanner from "@/component/footerbottom/cookies";
import ConnectModal from "@/common-component/modal/ConnectModal";
export default function Layout({ children }) {
   const [open, setOpen] = useState(false);
    useEffect(() => {
       const alreadyShown = localStorage.getItem("weddingModalShown");
   
       if (!alreadyShown) {
         const timer = setTimeout(() => {
           setOpen(true);
           localStorage.setItem("weddingModalShown", "true");
         }, 7000);
   
         return () => clearTimeout(timer);
       }
     }, []);
  return (
    <div>
      <CookiesBanner/>
      <Navbar></Navbar>
      <ConnectModal open={open} setOpen={setOpen} />
      <main >{children}</main>
      <Footer></Footer>
    </div>
  );
}
