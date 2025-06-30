import React from "react";
import { Grid, Box } from "@mui/material";
import styled from "../styles/style.module.scss";
export default function layout1({ children }) {
    return (
        <div className={styled.layoutWrapper}>
            <main className={styled.layout}>{children}</main>
        </div>
    );
}
