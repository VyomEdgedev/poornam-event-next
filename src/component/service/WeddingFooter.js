import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { LocationOn, Email } from '@mui/icons-material';

const WeddingFooter = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 1, md: 8} }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          
          gap: { xs: 2, md: 4 },
          // backgroundColor: 'red',
        }}
      >
        {/* Left side - Main heading */}
        <Box sx={{ flex: '0 0 auto' }}>
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
        </Box>

        {/* Right side - Contact info */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 4 },
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Location */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <LocationOn
              sx={{
                color: '#000000',
                fontSize: 20
              }}
            />
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
          </Box>

          {/* Email */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Email
              sx={{
                color: '#666',
                fontSize: 20
              }}
            />
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
                component="span"
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
      </Box>
    </Container>
  );
};

export default WeddingFooter;