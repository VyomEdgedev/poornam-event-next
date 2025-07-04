import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const tools = [
  {
    title: 'Budget Calculator',
    icon: '/cal.png', // Replace with your actual path or image URL
  },
  {
    title: 'Wedding Checklist',
    icon: '/checklist.png',
  },
  {
    title: 'Top 10 Mandap Themes for 2025',
    icon: '/Vector.png',
  },
];

export default function ResourcesSection() {
  return (
    <Box sx={{ py: 1, px: 2, backgroundColor: '#fff' }} >
      <Grid container spacing={6} alignItems="center" justifyContent={'space-evenly'}>
        {/* Left Section */}
        <Grid item xs={12} md={8} justifyItems={'center'}>
          <Typography
            variant="h4"
            sx={{ fontFamily: 'serif', fontWeight: 700, mb: 1 }}
          >
            Resources
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Love From Our Couples
          </Typography>
          <Typography variant="h6" sx={{ mt: 3 }}>
            Grab your free tools:
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#E1A900',
              borderRadius: '25px',
              px: 3,
              py: 1,
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#c79400',
              },
            }}
          >
            Download Your Kit Now
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={8} >
          <Grid container spacing={4} justifyContent={'center'}>
            {tools.map((tool, index) => (
              <Grid item xs={12} sm={4} key={index}  textAlign="center">
                <Box
                  component="img"
                  src={tool.icon}
                  alt={tool.title}
                  sx={{ height: 80, mb: 2 }}
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {tool.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
