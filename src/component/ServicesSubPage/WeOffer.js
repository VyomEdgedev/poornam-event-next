import React, { Component, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { apiClient } from "@/lib/api-client";

// JSON data structure for WeOffer services
const weOfferData = [
  {
    id: 1,
    icon: "/WeOffer1.svg",
    title: "Venue Selection",
    description: "We help you find the perfect venue.",
  },
  {
    id: 2,
    icon: "/WeOffer2.svg",
    title: "Catering Services",
    description: "Exquisite menus tailored for your taste.",
  },
  {
    id: 3,
    icon: "/WeOffer3.svg",
    title: "Decor & Design",
    description: "Transforming spaces into magical venues.",
  },
  {
    id: 4,
    icon: "/WeOffer4.svg",
    title: "Entertainment",
    description: "Live bands, DJs, performers, and more.",
  },
  {
    id: 5,
    icon: "/WeOffer5.svg",
    title: "Transportation",
    description: "Seamless transfers for you and your guests.",
  },
  {
    id: 6,
    icon: "/WeOffer6.svg",
    title: "Wedding Coordination",
    description: "On-the-day management for peace of mind",
  },
  {
    id: 7,
    icon: "/WeOffer7.svg",
    title: "Photography & Videography",
    description: "Capturing every moment beautifully.",
  },
  {
    id: 8,
    icon: "/WeOffer8.svg",
    title: "Guest Management",
    description: "RSVPs and guest accommodations handled.",
  },
];

function WeOffer({ serviceId }) {
const categories = serviceId 
  return (
    <Box  
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: "#FFF7E4",
      }}
    >
      <Container>
      <Box textAlign="center" px={{ xs: "5%", sm: "10%", md: "15%" }}>
        <Typography
        component="h2"
          sx={{
            fontFamily: "Gloock",
          }}
        >
          {`What's inside Your 'Shaadi ka Pitara'?`}
        </Typography>

        <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 12 }} justifyContent="center" sx={{ mt: 3 }}>
          {categories.map((service, index) => (
            <Grid
              item
              size={{ xs: 12, sm: 4, md: 6 }}
              key={service.id || index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box textAlign="center">
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    // borderRadius: "50%",
                    border: "2px solid #DAA412",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    overflow:"hidden"
                  }}
                >
                  <Image
                    src={service.image?.url || "/Weoffer1.svg"}
                    alt={service.name}
                    width={100}
                    height={100}
                    objectFit="contain"
                  />
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Typography
                  component="h6"
                    fontWeight={600}
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    component="p"

                    color="#000000"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "180px",
                        md: "200px",
                        lg: "100%",
                      },
                      fontFamily: "Akatab,Sans-serif",
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Container>
    </Box>
  );
}

export default WeOffer;
