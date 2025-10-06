import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";



const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container  >
      <div className="poornam-section">
        <div className="content-wrapper">
          <div className="left-content">
            <Typography component={"h2"}
              fontFamily="Gloock, serif">
              {`The Poornam Experience`}
            </Typography>
            {/* <h2 className="title"> {`The Poornam Experience`}</h2>*/}
            <p className="subtitle">
              {` We plan weddings the way your dadi tells stories- with love, 
              drama, and perfect timing.`}
            </p>

            <div className="process-section">
              <h3 className="process-title">{`Our Process`}</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Vision`}</div>
                    <div className="step-subtitle">{`Discovery`}</div>
                  </div>
                </div>
                <div className="step-arrow">
                  <Image src="/Arrow.svg" alt="Arrow" width={30} height={20} />
                </div>
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Planning &`}</div>
                    <div className="step-subtitle">{`Budgeting`}</div>
                  </div>
                </div>
                <div className="step-arrow">
                  <Image src="/Arrow.svg" alt="Arrow" width={30} height={20} />
                </div>
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Design &`}</div>
                    <div className="step-subtitle">{`Moodboarding`}</div>
                  </div>
                </div>
                <div className="step-arrow">
                  <Image src="/Arrow.svg" alt="Arrow" width={30} height={20} />
                </div>
                <div className="process-step">
                  <div className="step-content">
                    <div className="step-title">{`Final Execution`}</div>
                    <div className="step-subtitle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Box sx={{ position: "relative" }}>
            <Grid container spacing={1} justifyContent={{ xs: "center", sm: "center", md: "center" }}
              columns={{ xs: 12, sm: 8, md: 4, lg: 4 }} >
              {/* Left Large Image */}
              <Grid item xs={12} sm={6} position={"relative"}>
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    height: '100%',
                  }}
                >
                  <Image
                    src="/experience1.webp"
                    alt="Wedding Ritual"
                    width={257}
                    height={380}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 3,
                    }}
                  />
                </Box>
              </Grid>

              {/* Right: Two stacked images */}
              <Grid item xs={12} sm={6} md={2}>
                <Grid container direction={{ xs: "column", sm: "column", md: "coloum" }}
                  spacing={0} sx={{ flexWrap: { xs: "nowrap" } }}>
                  <Grid item>
                    <Box
                      sx={{
                        position: { xs: "initial", sm: "initial", md: "absolute" },
                        top: 40,
                        borderRadius: 3,
                        overflow: 'hidden',

                      }}
                    >
                      <Image
                        src="/experience3.webp"
                        alt="Question Cards"
                        width={119}
                        height={100}
                        style={{
                          // width: '100%',
                          // height: 'auto',
                          objectFit: 'cover',
                          borderRadius: 3,
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box
                      sx={{
                        position: { xs: "initial", sm: "initial", md: "absolute" },
                        top: 150,
                        borderRadius: 3,
                        // overflow: 'hidden',
                      }}
                    >
                      <Image
                        src="/experience2.webp"
                        alt="Help Desk"
                        width={119}
                        height={130}
                        style={{
                          // width: '100%',
                          // height: 'auto',
                          objectFit: 'cover',
                          borderRadius: 3,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

        </div>
      </div>
    </Container>
  );
};

export default Experience;


