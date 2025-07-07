import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";

export default function WeddingSection() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py:{xs:1, md:2},
        px: { xs: 2, md: 7 },
        // maxWidth: "1200px",
        width: "100%",
        margin: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 4, md: 6 },
      }}
    >
      <Box sx={{ flex: 1, maxWidth: { md: "55%" }}}>
        <Typography
          variant={isSmDown ? "h4" : "h3"}
          component="h1"
          sx={{
            fontFamily: 'Gloock, serif',
            fontWeight: 400,
            color: "#000D1F",
            mb: 0.6,
            lineHeight: 1.3,
            
          }}
        >
          It's Not Just a{" "}
          <Box
            component="span"
            sx={{fontFamily: 'Gloock, serif', fontWeight: 400, color: "#DAA412" }}
          >
            Wedding...
          </Box>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ mb: 0, frontFamily: "Akatab,Sans-serif",color: "#000D1F", fontWeight: 400 , fontSize:"1.75rem" }}
        >
          It's a Story You'll Tell Forever
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 2, frontFamily: "Akatab,Sans-serif",color: "#000D1F", fontWeight: 400 ,fontSize:"1rem"}}
        >
          Shaadi ka stress is real. One minute you're choosing napkin colors,
          next minute you're crying over seating arrangements. We get it.
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            fontSize:"1.75rem",
            frontFamily: "Akatab,Sans-serif",
            color: "#000D1F", 
            fontWeight: 400,
            mb: 0.6,
          }}
        >
          At Poornam, we don’t just manage weddings:
        </Typography>

        <Typography variant="body2" sx={{ fontSize:"1rem" ,frontFamily: "Akatab,Sans-serif",color: "#000D1F",  }}>
          We manage Meltdowns, Moodboards, and Mom’s wishlist. From the first dance
          to the final goodbye hug, we’re there.
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
              height: 261,
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
              height: "auto",
              borderRadius: 1,
              boxShadow: 3,
              objectFit: "cover",
              mt: 8,
              width:200,
              height: 259,
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

