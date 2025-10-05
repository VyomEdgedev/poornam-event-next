import React, { useEffect, useState } from "react";

import Navbar from "../common-component/navbar/navbar"

import styled from "../styles/style.module.scss";
import Footer from "@/common-component/Footer/Footer";
import CookiesBanner from "@/component/footerbottom/cookies";
import ConnectModal from "@/common-component/modal/ConnectModal";
import LoaderContextProvider from "@/contextApi/loaderContext";
export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //   }, 7000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div>
      <LoaderContextProvider>
        <CookiesBanner />
        <Navbar></Navbar>
        <ConnectModal open={open} setOpen={setOpen} />
        <main >{children}</main>
        <Footer></Footer>
      </LoaderContextProvider>
    </div>
  );
}
