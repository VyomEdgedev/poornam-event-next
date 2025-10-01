import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
} from "@mui/material";

export default function WeddingSection() {

  return (
    <Container>
      <Box
        sx={{
          py: { xs: 3, sm: 6 },
          margin: 0,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { sm: "100%", md: "50%" } }}>
          <Box
            sx={{
              fontSize: {
                xs: "24px",
                sm: "26px",
                md: "32px",
                lg: "38px ",
              },
              fontFamily: "Gloock, serif",
              fontWeight: 400,
              color: "#000D1F",
              mb: 1,
              letterSpacing: "0.7px",
            }}
          >
            {` It's Not Just a`}
            <Box
              component="span"
              sx={{
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                color: "#DAA412",
                ml: 0.5,
              }}
            >
              Wedding...
            </Box>
          </Box>

          <Typography
            component="p"
            className="h4_heading"
            sx={{
              fontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
            }}
          >
            {`It’s a Story You’ll Tell Forever`}
          </Typography>

          <Typography
            component="p"
            sx={{
              mb: 1,
              fontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
            }}
          >
            {` Shaadi ka stress is real. One minute you're choosing napkin colors,
          next minute you're crying over seating arrangements. We get it.`}
          </Typography>

          <Typography
            component="p"
            className="h4_heading"
            sx={{
              fontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
            }}
          >
            {` At Poornam, we don’t just manage weddings:`}
          </Typography>

          <Typography
            component="p"
            sx={{
              fontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "18px" },
            }}
          >
            {` We manage Meltdowns, Moodboards, and Mom’s wishlist. From the first dance
          to the final goodbye hug, we’re there.`}
          </Typography>
        </Box>

        <Grid
          mt={{ xs: 5, sm: 3, md: 0 }}
          container
          spacing={{
            xs: 1,
            sm: 3,

          }}
          sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-end",
              xl: "flex-end",
            },
          }}
        >
          <Grid item xs={6} sm={6} md={6}>
            <Box
              component="img"
              src="./weddinghero1.webp"
              alt="Colorful wedding archway with many floral arrangements in yellow, pink, orange, and green colors creating a vibrant path"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                objectFit: "cover",
                height: { xs: 200, sm: 200, md: 230, lg: 260, xl: 260 },
              }}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} sx={{ position: "relative" }}>
            <Box
              component="img"
              src="./weddinghero2.webp"
              alt="Elegant wedding stage decorated with a big pink floral chandelier composed of roses, hydrangeas, and ornamental hanging crystals with vintage style seating"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "4px",
                boxShadow: 3,
                objectFit: "cover",
                mt: { xs: 4, sm: 6, md: 6, lg: 10, xl: 10 },
                height: { xs: 200, sm: 200, md: 220, lg: 260, xl: 260 },
              }}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
