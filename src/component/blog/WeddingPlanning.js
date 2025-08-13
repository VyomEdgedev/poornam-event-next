import React, { useState } from "react";
import { Box, Button, Container, Typography, Grid } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import ConnectModal from "@/common-component/modal/ConnectModal";

export default function WeddingPlanning() {
  const [open, setOpen] = useState(false);

  const handleWeddingPlan = () => {
    setOpen(true);
  };

  return (
    <Box>

      <Container sx={{ py: 4 }}>
        <ConnectModal open={open} setOpen={setOpen} />
        <Grid
          container
          justifyContent={{xs:"center"}}
          alignItems={{xs: "center"}}
          spacing={{ xs: 3, sm: 5, lg: 10, xl: 12 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {/* Text Content */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Box>
              <Typography
                component="h2"
                mb="0.5"
                fontWeight={400}
                sx={{ fontFamily: "Gloock, serif", color: "#000000" }}
              >
                {` Shaadi Ki Planning?`}
              </Typography>
              <Typography
                component="h2"
                fontWeight={400}
                color="#DAA412"
                sx={{ fontFamily: "Gloock, serif" }}
              >
                {` Gyaan Bhi, Fun Bhi!`}
              </Typography>
              <Typography
               
                component="p"
                sx={{
                  mt:1,
                  mb: 3,
                  color: "#000000",
                  fontFamily: "Akatab,Sans-serif",
                  
                  fontWeight: "400",
                }}
              >
                {`  Welcome to the only wedding blog that understands your vibe, your chaos, and your cousin who always wants to dance at haldi. From serious planning tips to hilarious shaadi stories, we’ve written it all — with love, dhol, and a bit of dholak.`}
              </Typography>
              <CustomButton
                onClick={handleWeddingPlan}
                data-testid="notify-button"
              >{`Start Planning`}</CustomButton>
            </Box>
          </Grid>

          {/* Image Content */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Box
              component="img"
              src="./weddingplanning.jpg"
              alt="Wedding Planning"
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "100%",
                },
                height: {
                  xs: "400px",
                  sm: "340px",
                  md: "300px",
                  lg: "400px",
                  xl: "400px",
                },
                borderRadius: 2,
                boxShadow: 3,
                display: "block",
                mx: "auto",
              }}
              // <p><em>Hello</em>, <span style="text-decoration: underline;"><strong>World!</strong></span></p>

              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
