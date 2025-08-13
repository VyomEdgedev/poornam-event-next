import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const WhyPoornam = () => {
  return (
    <Box
        sx={{
          px: { xs: 10, sm: 12, md: 8, lg: 22, xl: 33 },
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
    <Box>
      <Grid container spacing={{ xs: 5, md: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "30px", sm: "36px", md: "40px" },
              fontFamily: "Gloock, Sans-serif",
              fontWeight: 400,
              textAlign: { xs: "center", md: "left" },
              lineHeight: 1.2,
              color: "#000000",
            }}
            dangerouslySetInnerHTML={{
              __html: ` Why Poornam for<br />
                        Your Destination<br />
                        Wedding?`,
            }}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          size={{ xs: 12, md: 4 }}
        >
          <Box
            component="img"
            src="/WhyPoornam.png"
            alt="Why Poornam Illustration"
            sx={{
              width: { xs: "100px", sm: "100px", md: "130px" },
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography
            component="p"
            sx={{
              fontFamily: "Akatab, Sans-serif",
              lineHeight: 1.6,
              color: "#666",
              // textAlign: { xs: 'center', md: 'left' },
              // maxWidth: { xs: '200px', md: '350px' },
              mx: { xs: "auto", md: 0 },
            }}
          >
            {`With years of experience and a personal touch, Poornam Events dedicates itself to making your destination wedding dreams come true. We tailor each experience to your needs, ensuring every detail is meticulously managed for a perfect celebration.`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default WhyPoornam;
