import React, { useState } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import ConnectModal from '@/common-component/modal/ConnectModal';

const tools = [
  {
    title: 'Budget Calculator',
    icon: '/cal.png', // Replace with your actual path or image URL
  },
  
  {
    title: 'Top 10 Mandap Themes for 2025',
    icon: '/Vector.png',
  },
  {
    title: 'Wedding Checklist',
    icon: '/checklist0.png',
  },
];

export default function ResourcesSection() {
  const [open, setOpen] = useState(false)
const handleDownloadClick = () => {
  setOpen(true)
}
  return (
    
    <Box sx={{ py:{ xs: 4, md: 8 }, px: 0, backgroundColor: '#fff' }} >
      <ConnectModal open={open} setOpen={setOpen} />
      <Grid container spacing={{ xs: 6, sm: 5, md: 5 ,lg:45 }} alignItems="center" justifyContent={'space-evenly'}>
        {/* Left Section */}
        <Grid item xs={12} md={8} >
          <Typography
            variant="h2"
            sx={{ fontFamily: 'serif', fontWeight: 700, mb: 1 }}
          >
            Resources
          </Typography>
          <Typography variant="body1" component={"p"} color="textSecondary">
            Love From Our Couples
          </Typography>
          <Typography variant="h6" component="h6" sx={{ mt: 2 ,fontSize:"1.50rem" }}>
            Grab your free tools:
          </Typography>
          <Button 
          onClick={handleDownloadClick}
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
          <Grid container spacing={{xs:2,sm:4,md:4,lg:4}} justifyContent={'center'} flexWrap={"nowrap"}>
            {tools.map((tool, index) => (
              <Grid item xs={12} sm={4} key={index}  textAlign="center">
                <Box
                  component="img"
                  src={tool.icon}
                  alt={tool.title}
                  sx={{ height: 80, mb: 2 }}
                />
                <Typography variant="body1" component={"p"} sx={{ fontWeight: 400 }}>
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
