import React from "react";

import Navbar  from "../common-component/navbar/navbar"

import styled from "../styles/style.module.scss";
export default function Layout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      <main >{children}</main>
    </div>
  );
}
