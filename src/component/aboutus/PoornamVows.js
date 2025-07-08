import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
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
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PoornamVows = () => {
  return (
    <Grid container
     width= 'fit-content'
        margin= '0 auto' >
      <Box sx={{ p: 1, textAlign: 'center' }}>
      <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.5rem" }, fontFamily: "Gloock" }} variant="h3" fontWeight="bold" gutterBottom>
        Poornam Vows
      </Typography>
      <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" }, fontFamily: "Akatab" }} variant="subtitle1" gutterBottom>
        Poornam’s 7 Pheras of Promise
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: 600,
          height: 600,
          mx: 'auto',
        }}
      >

        {/* Vows arranged in a circle */}
        {/* Orbiting container */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%)',
            animation: `${rotate} 20s linear infinite`,
          }}
        >

          {vows.map((vow, index) => {
            const angle = (index / vows.length) * 2 * Math.PI;
            const radius = 220;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                  width: 100,
                  height: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  src={vow.img}
                  alt={vow.title}
                  sx={{ width: 120, height: 120, mb: 1 }}
                />
                <Typography variant="caption">{vow.title}</Typography>
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
            width: 200,
            height: 200,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid #ccc',

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
