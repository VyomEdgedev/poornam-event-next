import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";


const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} py={8}>
        <Grid item size={{ xs: 12, sm: 8, md: 8, lg: 8 }}>
          <Typography variant="h4"
            component="h1"

            sx={{
              fontWeight: '400',
              color: '#000000',
              fontSize: { xs: '42px', md: '48px', lg: '48px' },
              lineHeight: 1.2,
              fontFamily: 'Gloock,serif',
              letterSpacing: '6%',
            }}>{`The Poornam Experience`}</Typography>
          <Typography
            variant="p"
            component="p"
            sx={{
              fontWeight: '400',
              color: '#000D1F',
              fontSize: { xs: '15px', md: '18px', lg: '18px' },

              fontFamily: 'Akatab,serif',
              letterSpacing: '6%',
            }}>
            {` We plan weddings the way your dadi tells stories- with love, 
              drama, and perfect timing.`}</Typography>


          <Typography
            variant="h4"
            component="h4"
            mt={8}
            sx={{
              fontWeight: '900',
              color: '#000D1F',
              fontSize: { xs: '18px', md: '20px', lg: '20px' },
              fontFamily: 'Akatab,serif',
              letterSpacing: '6%',
            }}>
            {`Our Process`}
          </Typography>
          <Grid sx={{
            display: "flex",
            flexDirection: {
              xs: "column",   // small screens
              sm: "column",   // small screens
              md: "row", // medium screens
              lg: "row"  // large screens
            },
            gap: 2,
          }} gap={3} item size={{ xs: 12, sm: 12, md: 9, lg: 9 }}>
            <Grid>
              <Typography variant="p" component="p"
                sx={{
                  fontWeight: '600',
                  color: '#000D1F',
                  fontSize: { xs: '15px', md: '18px', lg: '18px' },
                  fontFamily: 'Akatab,serif',
                  letterSpacing: '6%',
                  borderBottom: "2px solid #DAA412"
                }}>
                {`Vision Discovery`}</Typography>
            </Grid>
            <Grid sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              transform: isMobile ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}>
              <Image
                src="/Arrow.svg" alt="Arrow" width={30} height={20}

              />
            </Grid>
            <Grid>
              <Typography variant="p"
                component="p"
                sx={{
                  fontWeight: '600',
                  color: '#000D1F',
                  fontSize: { xs: '15px', md: '18px', lg: '18px' },
                  borderBottom: "2px solid #DAA412",
                  fontFamily: 'Akatab,serif',
                  letterSpacing: '6%',
                }}>{`Planning & Budgeting`}</Typography>
            </Grid>

            <Grid sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              transform: isMobile ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}>
              <Image
                src="/Arrow.svg" alt="Arrow" width={30} height={20}

              />
            </Grid>
            <Grid>
              <Typography variant="p"
                component="p"
                sx={{
                  fontWeight: '600',
                  color: '#000D1F',
                  fontSize: { xs: '15px', md: '18px', lg: '18px' },
                  borderBottom: "2px solid #DAA412",
                  fontFamily: 'Akatab,serif',
                  letterSpacing: '6%',
                }}>{`Design & Moodboarding`}</Typography>
            </Grid>
            <Grid sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              transform: isMobile ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease-in-out",
            }}>
              <Image
                src="/Arrow.svg" alt="Arrow" width={30} height={20}

              />
            </Grid>
            <Grid>
              <Typography variant="p"
                component="p"
                sx={{
                  fontWeight: '600',
                  color: '#000D1F',
                  fontSize: { xs: '15px', md: '18px', lg: '18px' },
                  borderBottom: "2px solid #DAA412",
                  fontFamily: 'Akatab,serif',
                  letterSpacing: '6%',
                }}>{`Final Execution`}</Typography>

            </Grid>
          </Grid>
        </Grid>



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
                  src="/experience1.png"
                  alt="Wedding Ritual"
                  width={257}
                  height={380}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
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
                      src="/experience3.jpg"
                      alt="Question Cards"
                      width={119}
                      height={100}
                      style={{
                        // width: '100%',
                        // height: 'auto',
                        objectFit: 'cover',
                        borderRadius: 5,
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
                      src="/experience2.jpg"
                      alt="Help Desk"
                      width={119}
                      height={130}
                      style={{
                        // width: '100%',
                        // height: 'auto',
                        objectFit: 'cover',
                        borderRadius: 5,
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

      </Grid>










      {/*<div>
        <div className="content-wrapper">
          <div className="left-content">
            <h1 className="title">{`The Poornam Experience`}</h1>
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
          </div>*/}



      {/* </div>
      </div>*/}
    </Container>
  );
};

export default Experience;


