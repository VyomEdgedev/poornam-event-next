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
        <Grid item size={{ xs: 12, sm: 7, md: 7, lg: 7 }}>
          <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}

          >

            <Grid item size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  justifyContent: { xs: "center", sm: "start" },
                 
                  
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
                justifyContent: { xs: "center", sm: "start" }
              }}
            >
              <Image src="/weddingfooter.png" alt="Email Icon"

                width={40} height={40} />
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
                  href="mailto:eventspoornam@gmail.com"
                  sx={{
                    color: '#DAA412',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  eventspoornam@gmail.com
                </Box>
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Grid>

    </Grid>
      
    </Container >
  );
};

export default WeddingFooter;