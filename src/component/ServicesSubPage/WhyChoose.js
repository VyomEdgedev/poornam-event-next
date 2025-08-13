import { Grid, Card, Typography, Box } from '@mui/material'
import { color } from 'framer-motion'
import React from 'react'


const WhyChoose = ({ title }) => {

    return (
        <Box
         px={{xs : "5%", sm:"10%", md: "14%"}} 
         py = {{xs : "20px", sm:"20px", md: "20px"}} 
         textAlign = "center" >
    <Box container
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        textAlign="center"
        sx={{ flexDirection: { xs: 'column', md: 'row' }, margin: 2, padding: 1, gap: 6 }}// column on mobile, row on desktop
    >
        {/* Center Image */}
        <Box container
            component="img"
            src="/Arches.svg"
            alt="Sample"
            height="120px"

        />
        <Box sx={{ textAlign: "left" }} >
            <Typography component="h3" sx={{ fontFamily: "Gloock,Sans-serif" }}>
                {`${title} with Poornam?`}</Typography>
            <Typography component="p" sx={{ fontFamily: "Akatab,Sans-serif", }}>
                {`Weddings are once-in-a-lifetime. So why settle for a banquet hall when you can say "I do" by the sea, in the hills, or under a palace dome?
                        A destination wedding isn't just a ceremony. It's a celebration + vacation + reunion + memory factory. And with Poornam Events handling every detail – it becomes effortless magic.`}
            </Typography>
        </Box>


    </Box>


        </Box >
    )
}

export default WhyChoose
