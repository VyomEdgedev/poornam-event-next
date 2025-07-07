import React from "react";
import AboutUsBanner from "./AboutUsBanner";
import OurStories from "./OurStories";
import MagicMakers from "./MagicMakers";
import Owners from "./Owners"
import  History  from "./History";
import PoornamVows from "./PoornamVows";

export default function () {
    return (
        <>
            <AboutUsBanner></AboutUsBanner>
            <OurStories></OurStories>
            <MagicMakers></MagicMakers>
            <Owners></Owners>
            <History></History>
            <PoornamVows></PoornamVows>
        </>
    )
}