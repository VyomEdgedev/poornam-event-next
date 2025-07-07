import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';



const vows = [
  { img: '/AboutVows3.png', title: 'Emotions Ka Khayal' },
  { img: '/AboutVows4.png', title: 'Riwaaz Ko Rang Denge' },
  { img: '/AboutVows5.png', title: 'Aapki Tension, Ab Hamari' },
  { img: '/AboutVows6.png', title: 'Banayenge Sapne Ko Haqiqat' },
  { img: '/AboutVows7.png', title: 'Sunenge Dil Se' },
  { img: '/AboutVows1.png', title: 'Yaadon Ka Wada' },
  { img: '/AboutVows2.png', title: 'Har Scene, Screen-Ready' },
];




const PoornamVows = () => {
  return (
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
          {/* Rotating container of vow items */}

 <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            animation: 'orbit 20s linear infinite',
            transformOrigin: 'center center',
            '@keyframes orbit': {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            },
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
  );
};

export default PoornamVows;
