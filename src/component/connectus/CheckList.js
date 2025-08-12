import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";

function CheckList() {
  return (
    <Container>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems={"center"}
        // justifyContent="space-evenly"
        // textAlign="left"
        py={4}
        columns={{ xs: 12, sm: 12, md: 12 }}
        // padding={{ xs: "30px", sm: "50px", md: "60px" }}
      >
        <Grid size={{ xs: 12, sm: 8, md: 8 }}
        alignContent="center"
        alignItems={"center"} >
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              frontFamily: "Akatab,Sans-serif",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" },
              textAlign: { xs: "center", sm: "start", md: "start" },
            }}
            dangerouslySetInnerHTML={{
              __html: `    <strong>Visit Our Studio (We Server Chai & Checklists)</strong>`,
            }}
          />
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              frontFamily: "Akatab,Sans-serif",
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
              textAlign: { xs: "center", sm: "start", md: "start" },
            }}
            dangerouslySetInnerHTML={{
              __html: `   202, 2nd Floor, Kothari Manjur, Janjeerwala Square, Near Janjeerwala Square,
          <br /> Diamond Colony, New Palasia, Indore, Madhya Pradesh 452001`,
            }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4, md: 4 }}
          container
          alignItems="center"
          justifyContent={"center"}
          spacing={2}
          component="a"
          href="https://www.google.com/maps/place/202+Kothari+Manjur,+Janjeerwala+Square,+Near+Janjeerwala+Square,+Diamond+Colony,+New+Palasia,+Indore,+Madhya+Pradesh+452001/@22.719568,75.857727,17z/data=!3m1!4b1!4m6!3m5!1s0x3962f9c8d7e8f0a5:0x7c6b2d8e9f8c4b1!8m2!3d22.719568!4d75.8599157!16s%2Fg%2F11c1lq_5t?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="notify-button"
          sx={{
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.02)",
              backgroundColor: "#f0f0f0",
              borderRadius: 2,
            },
          }}
        >
          {/* Icon Section */}
          <Grid item>
            <Box
              sx={{
                width: 100,
                height: 100,
                position: "relative",
              }}
            >
              <Image
                src="/locationicon.svg" // ✅ Replace with your actual icon
                alt="Location Icon"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckList;
