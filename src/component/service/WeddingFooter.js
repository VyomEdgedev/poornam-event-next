import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import { LocationOn, Email } from '@mui/icons-material';
import Image from 'next/image';

const WeddingFooter = () => {
  return (
    <Container sx={{
      py: { xs: 2, md: 8 },
      justifyContent: {
        xs: "center",
        sm: "space-between",
        md: "space-between",
        lg: "space-between",
      },
      textAlign: {
        xs: "center",
        sm: "left",
        md: "left",
        lg: "left",
      }


    }}>


      <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
       alignItems={"center"}
       >
        <Grid item size={{ xs: 12, sm: 5, md: 5, lg: 5 }}>
          <Typography
           
            component="h3"
            sx={{
              fontWeight: '400',
              color: '#000000',
              fontFamily: 'Gloock,serif',
              letterSpacing: '6%',
            }}
            dangerouslySetInnerHTML={{
              __html: `
            Your Wedding.
            <br />
            Our Mission.`,
            }}
          />
        </Grid>
        <Grid  item size={{ xs: 12, sm: 7, md: 7, lg: 7 }}>
          <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
         
            >

            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent:{xs:"center",sm:"start"}
                }}
                
              >
                <Image src="/weddingfooter1.png" alt="Email Icon" width={40} height={40} />
                <Typography
                 component={"p"}
                  sx={{
                    color: '#000000',
                    fontWeight: '400',
                    fontFamily: 'Akatab, sans-serif',

                  }}
                >
                  {` Serving Indore, Bhopal, Ujjain & beyond.`}
                </Typography>
              </Box>
            </Grid>
            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent:{xs:"center",sm:"start"}
                }}
              >
                <Image src="/weddingfooter.png" alt="Email Icon" width={40} height={40} />
                <Typography
                 component={"p"}
                  sx={{
                    color: '#000000',
                    fontWeight: '400',
                    fontFamily: 'Akatab, sans-serif',
                  }}
                >
                  Available at{' '}
                  <Box
                    component="a"
                    href="mailto:info@poornamevents.com"
                    sx={{
                      color: '#DAA412',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    info@poornamevents.com
                  </Box>
                </Typography>
              </Box>

            </Grid>
          </Grid>
        </Grid>

      </Grid>
      { /* <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          
          gap: { xs: 2,sm:2, md: 30, lg:2 },
           backgroundColor: 'red',
        }}
      >}
        {/* Left side - Main heading */}
      { /*<Box sx={{ flex: '0 0 auto' }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: '400',
              color: '#000000',
              fontSize: { xs: '1.5rem', md: '2rem', lg: '2.25rem' },
              lineHeight: 1.2,
              fontFamily: 'Gloock,serif',
              letterSpacing:'6%',
            }}
           dangerouslySetInnerHTML={{
                __html: `
            Your Wedding.
            <br />
            Our Mission.`,
              }}
            />
        </Box>}

        {/* Right side - Contact info */}
      {  /* <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 2 },
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >}
      {/* Location */}
      {/*  <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Image src="/weddingfooter1.png" alt="Email Icon" width={40} height={40} />
            <Typography
              variant="body2"
              sx={{
                color: '#000000',
                fontWeight: '400',
              fontSize: { xs: '1rem', md: '1rem', lg: '1.25rem' },
              lineHeight: 1.2,
              fontFamily: 'Akatab, sans-serif',
              
              }}
            >
             {` Serving Indore, Bhopal, Ujjain & beyond.`}
            </Typography>
          </Box>}

          {/* Email */}
      { /* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Image src="/weddingfooter.png" alt="Email Icon" width={40} height={40} />
            <Typography
              variant="body2"
              sx={{
                color: '#000000',
                fontWeight: '400',
              fontSize: { xs: '1rem', md: '1rem', lg: '1.25rem' },
              lineHeight: 1.2,
              fontFamily: 'Akatab, sans-serif',
              }}
            >
              Available at{' '}
              <Box
                component="a"
                href="mailto:info@poornamevents.com"
                sx={{
                  color: '#DAA412',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                info@poornamevents.com
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>*/}
    </Container>
  );
};

export default WeddingFooter;