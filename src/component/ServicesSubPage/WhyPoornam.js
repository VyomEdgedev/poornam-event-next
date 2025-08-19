import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { apiClient } from "@/lib/api-client";
import Image from "next/image";

const WhyPoornam = ({ poornamId , service }) => {

  return (
    <Box
      sx={{
        // px: { xs: 10, sm: 12, md: 8, lg: 22, xl: 33 },
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
                service?.whyPoornam[0]?.title  || service?.whyPoornam?.title,
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
            <Typography
              component="p"
              sx={{
                fontFamily: "Akatab, Sans-serif",
                lineHeight: 1.6,
                color: "#000000",
                mx: { xs: "auto", md: 0 },
              }}
            >
              {service?.whyPoornam?.description || service?.whyPoornam[0]?.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPoornam;
