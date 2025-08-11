import React from "react";
import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";

export default function WeddingSection() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box
        sx={{
          py: { xs: 3, sm: 6 },
          // width: "100%",
          margin: 0,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          // alignItems: "center",
          // gap: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { sm: "100%", md: "50%" } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Gloock, serif",
              fontWeight: 400,
              color: "#000D1F",
              mb: 2,
              lineHeight: 1.2,
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
          </Typography>

          <Typography
            variant="h5"
            component="h5"
            sx={{
              mb: 1,
              frontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
            }}
          >
            {`It's a Story You'll Tell Forever`}
          </Typography>

          <Typography
            sx={{
              mb: 2,
              frontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "18px" },
            }}
          >
            {` Shaadi ka stress is real. One minute you're choosing napkin colors,
          next minute you're crying over seating arrangements. We get it.`}
          </Typography>

          <Typography
            variant="h5"
            component="h4"
            sx={{
              frontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
              mb: 1,
            }}
          >
            {` At Poornam, we don’t just manage weddings:`}
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{
              frontFamily: "Akatab,Sans-serif",
              color: "#000D1F",
              fontWeight: 400,
              lineHeight: 1.3,
              fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "18px" },
            }}
          >
            {` We manage Meltdowns, Moodboards, and Mom’s wishlist. From the first dance
          to the final goodbye hug, we’re there.`}
          </Typography>
        </Box>

        <Grid
          mt={{xs:5,sm:2}}
          container
          spacing={3}
          sx={{
            // maxWidth: {
            //   xs: "100%",
            //   sm: "100%",
            //   md: "100%",
            //   lg: "60%",
            //   xl: "55%",
            // },
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
              src="./weddinghero1.png"
              alt="Colorful wedding archway with many floral arrangements in yellow, pink, orange, and green colors creating a vibrant path"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
                boxShadow: 3,
                objectFit: "cover",
                height: { xs: 220, sm: 200, md: 230, lg: 260, xl: 260 },
              }}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6} sx={{ position: "relative" }}>
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
                mt: { xs: 4, sm: 4, md: 4, lg: 8, xl: 8 },
                height: { xs: 210, sm: 200, md: 220, lg: 260, xl: 260 },
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
