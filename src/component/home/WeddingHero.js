import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

export default function WeddingSection() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py:{xs:1, sm:2, md:2},
        px: { xs: 2,sm: 4, md: 7 },
        // maxWidth: "1200px",
        width: "100%",
        margin: "auto", 
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 3, sm:4, md: 6 },
      }}
    >
      <Box sx={{ flex: 1, maxWidth: { md: "55%" }}}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: 'Gloock, serif',
            fontWeight: 400,
            color: "#000D1F",
            mb: {xs:0.8, sm:0.6},
            lineHeight: 1.2,
            
            
          }}
        >
         {` It's Not Just a`}
          <Box
            component="span"
            sx={{fontFamily: 'Gloock, serif', fontWeight: 400, color: "#DAA412", ml: 0.5 }}
          >
            Wedding...
          </Box>
        </Typography>

        <Typography
          variant="h4"
          component="h4"
          sx={{ mb: 0, frontFamily: "Akatab,Sans-serif",color: "#000D1F", fontWeight: 400 , lineHeight: 1.2}}
        >
          {`It's a Story You'll Tell Forever`}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{ mb: 2, frontFamily: "Akatab,Sans-serif",color: "#000D1F", fontWeight: 400 , lineHeight: 1.3}}
        >
         {` Shaadi ka stress is real. One minute you're choosing napkin colors,
          next minute you're crying over seating arrangements. We get it.`}
        </Typography>

        <Typography
          variant="h4"
          component="h4"
          sx={{
            frontFamily: "Akatab,Sans-serif",
            color: "#000D1F", 
            fontWeight: 400,
            mb: 0.6,
          }}
        >
         {` At Poornam, we don’t just manage weddings:`}
        </Typography>

        <Typography  variant="body1"
          component="p" sx={{ frontFamily: "Akatab,Sans-serif",color: "#000D1F",  fontWeight: 400,
            lineHeight: 1.3 }}>
         {` We manage Meltdowns, Moodboards, and Mom’s wishlist. From the first dance
          to the final goodbye hug, we’re there.`}
        </Typography>
      </Box>

      <Grid
        container
        spacing={1}
        sx={{ maxWidth: { xs: "100%", md: "55%" }, justifyContent: "center" }}
      >
        <Grid item xs={6} sm={6} md={6} >
          <Box
            component="img"
            src="./weddinghero1.png"
            alt="Colorful wedding archway with many floral arrangements in yellow, pink, orange, and green colors creating a vibrant path"
            sx={{

              width: "100%",
              height: "auto",
              borderRadius: 3,
              boxShadow: 3,
              objectFit: "cover",
              height: { xs: 180, sm: 220, md: 261 },
            }}
            onError={(e) => {
              e.target.onerror = null;

            }}
          />
        </Grid>

        <Grid item xs={6} sm={6} md={6}  sx={{ position: "relative" }}>
          <Box
            component="img"
            src="./weddinghero2.png"
            alt="Elegant wedding stage decorated with a big pink floral chandelier composed of roses, hydrangeas, and ornamental hanging crystals with vintage style seating"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 1,
              boxShadow: 3,
              objectFit: "cover",
              mt: { xs: 4, sm: 6, md: 8 },
              height: { xs: 160, sm: 200, md: 259 },
            }}
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}


