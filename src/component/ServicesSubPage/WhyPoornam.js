import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const WhyPoornam = ({ poornam }) => {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 2 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Gloock, Sans-serif",
                fontWeight: 400,
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.2,
                color: "#000000",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  poornam?.whyPoornam[0]?.title || poornam?.whyPoornam?.title,
              }}
            />
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 4, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/WhyPoornam.png"
              alt="Why Poornam Illustration"
              width={130}
              height={130}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "130px",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              sx={{
                boxShadow: 2,
                p: { xs: 1, md: 2 },
                borderRadius: 1,
                bgcolor: "#ffffff",
                maxHeight: 280,
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                  width: "6px", 
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#c1c1c1",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#999", 
                },
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontFamily: "Akatab, Sans-serif",
                  lineHeight: 1.6,
                  color: "#000000",
                  mx: { xs: "auto", md: 0 },
                  my: { xs: 2, md: "auto" },
                }}
              >
                {poornam?.whyPoornam?.description ||
                  poornam?.whyPoornam[0]?.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPoornam;
