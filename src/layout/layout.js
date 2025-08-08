import React from "react";

import Navbar  from "../common-component/navbar/navbar"

import styled from "../styles/style.module.scss";
import Footer from "@/common-component/Footer/Footer";
import CookiesBanner from "@/component/footerbottom/cookies";
export default function Layout({ children }) {
  return (
    <div>
      <CookiesBanner/>
      <Navbar></Navbar>
      <main >{children}</main>
      <Footer></Footer>
    </div>
  );
}
