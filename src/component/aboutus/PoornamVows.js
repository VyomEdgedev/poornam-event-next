import React from 'react';
import { Box, Typography, Grid, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const vows = [
  { img: '/AboutVows3.png' },
  { img: '/AboutVows4.png' },
  { img: '/AboutVows5.png' },
  { img: '/AboutVows6.png' },
  { img: '/AboutVows7.png' },
  { img: '/AboutVows1.png' },
  { img: '/AboutVows2.png' },
];

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const PoornamVows = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  // Calculate responsive values
  const containerSize = isMobile ? 280 : isTablet ? 400 : 600;
  const radius = isMobile ? 90 : isTablet ? 140 : 220;
  const avatarSize = isMobile ? 60 : isTablet ? 80 : 120;
  const centerSize = isMobile ? 120 : isTablet ? 150 : 200;

  return (
    <Grid container
      width='fit-content'
      margin='0 auto'
      sx={{ px: { xs: 1, sm: 2, md: 3 } }}
    >
      <Box sx={{ p: 1, textAlign: 'center', width: '100%' }}>
        <Typography 
          sx={{ 
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.5rem" }, 
            fontFamily: "Gloock,Sans-serif" 
          }} 
          variant="h3" 
          fontWeight="bold" 
          gutterBottom
        >
          Poornam Vows
        </Typography>
        <Typography 
          sx={{ 
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, 
           fontFamily: "Akatab,Sans-serif"
          }} 
          variant="subtitle1" 
          gutterBottom
        >
         {` Poornam's 7 Pheras of Promise  `}
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: containerSize,
            height: containerSize,
            mx: 'auto',
            my: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Orbiting container */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: '50%',
              top: '50%',
              animation: `${rotate} 20s linear infinite`,
            }}
          >
            {vows.map((vow, index) => {
              const angle = (index / vows.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              
              return (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    left: `calc(50% + ${x}px - ${avatarSize/2}px)`,
                    top: `calc(50% + ${y}px - ${avatarSize/2}px)`,
                    width: avatarSize,
                    height: avatarSize,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    src={vow.img}
                    alt={vow.title || `Vow ${index + 1}`}
                    sx={{ 
                      width: avatarSize, 
                      height: avatarSize,
                      border: '2px solid #fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  {vow.title && (
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        mt: 0.5, 
                        fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
                        textAlign: 'center',
                        maxWidth: '80px'
                      }}
                    >
                      {vow.title}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Box>

          {/* Center circle */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: centerSize,
              height: centerSize,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #ccc',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            <Avatar
              src="/AboutVows8.png"
              alt="Center Ritual"
              variant="circular"
              sx={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default PoornamVows;