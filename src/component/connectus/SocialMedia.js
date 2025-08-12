import { Grid, Typography,Box, Container } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

function SocialMedia() {
  const isBelow482 = useMediaQuery("(max-width:482px),(spacing:50px)");
  const isDesktop = useMediaQuery("md"); // md = 900px+
  return (
    <Box sx={{ backgroundColor: "#FFF7E4" }}>
      <Container>
        <Grid
          container
          alignItems={"center"}
          spacing={4}
          py={3}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              sx={{
                width: { xs: 230, sm: 180, md: 220 },
                height: { xs: 230, sm: 180, md: 220 },
                position: "relative",
                margin: { xs: "auto", sm: 0 },
              }}
            >
              <Image
                src="/Phone.png"
                alt="Sample"
                fill // this will make the image fill the Box
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography
              variant="h3"
              component={"h3"}
              textAlign="center"
              sx={{
                fontFamily: "Gloock",
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                lineHeight: 1.5,
              }}
              dangerouslySetInnerHTML={{
                __html: `  Follow Us 
                        on Social Media`,
              }}
            />
          </Grid>
          <Grid
            item size={{ xs: 12, sm: 4, md: 4 }}
            alignItems={isBelow482 ? "center" : "center"}
            justifyContent={isBelow482 ? "coloum" : "row"}
            spacing={isDesktop ? 2 : 1}
            position="relative"
          >
            <Box mt={0} sx={{display:"flex",flexDirection:{sx:"row",sm:"column"},alignItems:{xs:"center",sm:"flex-end"}, justifyContent:{xs:"center",sm:"flex-end"}}}>
              <IconButton
                data-testid="notify-button"
                component="a"
                href="https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OpenAI Instagram"
                sx={{
                  width: { xs: 45, sm: 40, md: 50 },
                  height: { xs: 45, sm: 40, md: 50 },
                  padding: 0,
                  borderRadius: "50%",
                  px: "8px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/instaIcon1.svg"
                    alt="Twitter"
                    fill
                    style={{ objectFit: "contain", borderRadius: "50%" }}
                  />
                </Box>
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                sx={{
                  width: { xs: 45, sm: 40, md: 50 },
                  height: { xs: 45, sm: 40, md: 50 },
                  padding: 0,
                  borderRadius: "50%",
                  px: "8px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/twitterIcon1.svg"
                    alt="Twitter"
                    fill
                    style={{ objectFit: "contain", borderRadius: "50%" }}
                  />
                </Box>
              </IconButton>
              <IconButton
                data-testid="notify-button"
                component="a"
                href="https://www.youtube.com/@poornam-wedding-planner"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                color="error" // red theme—YouTube style
                size="large"
                sx={{
                  width: { xs: 45, sm: 40, md: 50 },
                  height: { xs: 45, sm: 40, md: 50 },
                  padding: 0,
                  borderRadius: "50%",
                  px: "8px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/YoutubeIcon1.svg"
                    alt="Twitter"
                    fill
                    style={{ objectFit: "contain", borderRadius: "50%" }}
                  />
                </Box>
              </IconButton>
              <IconButton
                data-testid="notify-button"
                component="a"
                href="https://www.linkedin.com/company/poornam-events/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                color="primary"
                sx={{
                  width: { xs: 45, sm: 40, md: 50 },
                  height: { xs: 45, sm: 40, md: 50 },
                  padding: 1,
                  borderRadius: "50%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/LinkedIcon1.svg"
                    alt="Twitter"
                    fill
                    style={{ objectFit: "contain", borderRadius: "50%" }}
                  />
                </Box>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SocialMedia;
