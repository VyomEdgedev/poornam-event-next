import React from "react";

import Navbar  from "../common-component/navbar/navbar"

import styled from "../styles/style.module.scss";
import Footer from "@/common-component/Footer/Footer";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main >{children}</main>
      <Footer></Footer>
    </div>
  );
}
