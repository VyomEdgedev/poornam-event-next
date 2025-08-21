import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const PlanningTips = () => {
  // JSON data structure
  const sectionData = {
    title: "At Poornam Events,",
    subtitle: "we believe wedding planning shouldn't feel like a maths exam.",
    planningTips: "Expert Planning Tips:",
    services: [
      {
        id: 1,
        image: "/planningtips1.svg",
        title: "Expert Planning Tips",
        description: "Get the best advice for your special day.",
       color: "#D9D9D980",
      },
      {
        id: 2,
        image: "/planning1.svg",
        title: "Venue & Vendor Insights",
        description: "Discover the best options available.",
        color: "#D9D9D980",
      },
      {
        id: 3,
        image: "/planning2.svg",
        title: "Real Couple Stories",
        description: "Inspiration from those who have walked the path.",
        color: "#D9D9D980",
      },
      {
        id: 4,
        image: "/planning3.svg",
        title: "Budget Hacks",
        description: "Smart solutions for cost-effective planning.",
        color: "#D9D9D980",
      },
      {
        id: 5,
        image: "/planning4.svg",
        title: "Fun Reads",
        description: "Light-hearted content to ease your stress.",
        color: "#D9D9D980",
      },
    ],
  };

  const getIcon = (imagePath) => {
    return (
      <Image
        src={imagePath}
        alt="service icon"
        width={40}
        height={40}
        cursor="pointer"
      />
    );
  };

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 2, md: 2, lg: 3 },
      }}
    
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, sm: 6, md: 4.25, lg: 4.25, xl: 4.25 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {/* Left Column - Main Content */}
          <Grid item size={{ xs: 12, sm: 12, md: 6 }} justifyContent={"center"}>
            <Typography
              component="h2"
              sx={{
                cursor: "pointer",
                fontWeight: 400,
                mb: 2,
                fontFamily: "Gloock,serif",
                color: "#000D1F",
              }}
            >
              <span style={{ color: "#DAA412" }}>{sectionData.title}</span>
              <br />
              {sectionData.subtitle}
            </Typography>

            <Typography
              component="h5"
              sx={{
                fontWeight: 500,
                fontFamily: "Akatab,Sans-serif",
                color: "#000D1F",
                mt: 4,
                cursor: "pointer",
              }}
            >
              {sectionData.planningTips}
            </Typography>
          </Grid>

          {/* Right Column - Service Cards */}
          <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2, md: 2 },
              }}
            >
              {sectionData.services.map((service, index) => (
                <Card
                  key={service.id}
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      border: "1px solid #DAA412",
                    },
                    cursor: "pointer",
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: 1.5, sm: 2, md: 2 },
                      }}
                    >
                      {/* Icon */}
                      <Box
                        sx={{
                           width: { xs: 48, sm: 60, md: 60 },
                         height: { xs: 48, sm: 60, md: 60 },
                          backgroundColor: service.color,
                          borderRadius: 50,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          cursor: "pointer",
                        }}
                      >
                        {getIcon(service.image)}
                      </Box>

                      {/* Content */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                         
                          component="h6"
                          sx={{
                            fontFamily: "Akatab,Sans-serif",
                            fontWeight: 500,

                            color: "#000000",
                            mb: 0.5,
                            cursor: "pointer",
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                        
                          component="p"
                          sx={{
                            fontFamily: "Akatab,Sans-serif",
                            fontWeight: 400,
                            color: "#000000",
                           
                            cursor: "pointer",
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlanningTips;
