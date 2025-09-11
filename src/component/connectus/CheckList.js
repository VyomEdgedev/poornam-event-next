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

            component={"h6"}
            sx={{
              fontFamily: "Akatab,Sans-serif",
              fontWeight: "800",
              textAlign: { xs: "center", sm: "start", md: "start" },
            }}
            dangerouslySetInnerHTML={{
              __html: `    Visit Our Studio (We Serve Chai & Checklists)`,
            }}
          />
          <Typography
            
            component={"p"}
            sx={{
              fontFamily: "Akatab,Sans-serif",
              fontWeight:"400",
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
          href="https://www.google.com/maps/place/Poornam+Events/@22.7267398,75.8806682,20z/data=!4m10!1m2!2m1!1s202,+2nd+Floor,+Kothari+Manjur,+Janjeerwala+Square,+Near+Janjeerwala+Square,+Diamond+Colony,+New+Palasia,+Indore,+Madhya+Pradesh+452001!3m6!1s0x3962fdfe51d60cbd:0xd00dd93d1df328a7!8m2!3d22.7267501!4d75.8810795!15sCocBMjAyLCAybmQgRmxvb3IsIEtvdGhhcmkgTWFuanVyLCBKYW5qZWVyd2FsYSBTcXVhcmUsIE5lYXIgSmFuamVlcndhbGEgU3F1YXJlLCBEaWFtb25kIENvbG9ueSwgTmV3IFBhbGFzaWEsIEluZG9yZSwgTWFkaHlhIFByYWRlc2ggNDUyMDAxWoEBIn8yMDIgMm5kIGZsb29yIGtvdGhhcmkgbWFuanVyIGphbmplZXJ3YWxhIHNxdWFyZSBuZWFyIGphbmplZXJ3YWxhIHNxdWFyZSBkaWFtb25kIGNvbG9ueSBuZXcgcGFsYXNpYSBpbmRvcmUgbWFkaHlhIHByYWRlc2ggNDUyMDAxkgEYZXZlbnRfbWFuYWdlbWVudF9jb21wYW55qgHgAQoJL20vMDFfeXZ5CggvbS8wY3c0bBABKiAiHDIwMiAybmQgZmxvb3Iga290aGFyaSBtYW5qdXIoADIfEAEiG-NTmXYFMIuWOQ9gVZ8l6ztyu2T4hphe5fnTETKDARACIn8yMDIgMm5kIGZsb29yIGtvdGhhcmkgbWFuanVyIGphbmplZXJ3YWxhIHNxdWFyZSBuZWFyIGphbmplZXJ3YWxhIHNxdWFyZSBkaWFtb25kIGNvbG9ueSBuZXcgcGFsYXNpYSBpbmRvcmUgbWFkaHlhIHByYWRlc2ggNDUyMDAx4AEA!16s%2Fg%2F11t1vv9958?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
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
                width: 150,
                height: 150,
                position: "relative",
              }}
            >
              <Image
                src="/locationicon.svg" 
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
