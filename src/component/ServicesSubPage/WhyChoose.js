import { Grid, Card, Typography, Box, Container } from '@mui/material'
import { color } from 'framer-motion'
import React from 'react'


const WhyChoose = ({ title , description}) => {

    return (
        <Box
        //  px={{xs : "5%", sm:"10%", md: "14%"}} 
         py = {{xs : "20px", sm:"20px", md: "20px"}} 
         textAlign = "center" >
            <Container>
  <Box
  display="flex"
  justifyContent="space-evenly"
  alignItems="flex-start" 
  textAlign="center"
  sx={{ flexDirection: { xs: "column", md: "row" }, margin: 2, padding: 1, gap: 6 }}
>

  <Box
    component="img"
    src="/Arches.svg"
    alt="Sample"
    height="120px"
    sx={{ flexShrink: 0 }}
  />
  <Box sx={{ textAlign: "left" }}>
    <Typography component="h3" sx={{ fontFamily: "Gloock, Sans-serif" }}>
      {`${title} with Poornam?`}
    </Typography>
    <Typography
      dangerouslySetInnerHTML={{ __html: description }}
      component="p"
      sx={{ fontFamily: "Akatab, Sans-serif" }}
    />
  </Box>
</Box>


    </Container>
        </Box >
    )
}

export default WhyChoose
