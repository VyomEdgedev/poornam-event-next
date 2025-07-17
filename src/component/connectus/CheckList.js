import React from 'react'
import { Grid, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';

function CheckList() {
  return (
    <Grid container
      display="flex"
      justifyItems="center"
      alignContent="center"
      justifyContent="space-evenly"
      textAlign="left"
      padding={{ xs: "30px", sm: "50px", md: "60px" }}>
      <Grid>
        <Typography variant="body1"
          component={"p"}
          sx={{ frontFamily: "Akatab,Sans-serif", fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" } }}
          dangerouslySetInnerHTML={{
            __html: `    <strong>Visit Our Studio (We Server Chai & Checklists)</strong>`,
          }}
        />
        <Typography variant="body1"
          component={"p"} sx={{ frontFamily: "Akatab,Sans-serif", fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" } }}
          dangerouslySetInnerHTML={{
            __html: `   202, 2nd Floor, Kothari Manjur, Janjeerwala Square, Near Janjeerwala Square,
          <br /> Diamond Colony, New Palasia, Indore, Madhya Pradesh 452001`,
          }}
        />


      </Grid>
      <Grid
        container
        alignItems="center"
        spacing={2}
        component="a"
        href="https://www.google.com/maps/place/202+Kothari+Manjur,+Janjeerwala+Square,+Near+Janjeerwala+Square,+Diamond+Colony,+New+Palasia,+Indore,+Madhya+Pradesh+452001/@22.719568,75.857727,17z/data=!3m1!4b1!4m6!3m5!1s0x3962f9c8d7e8f0a5:0x7c6b2d8e9f8c4b1!8m2!3d22.719568!4d75.8599157!16s%2Fg%2F11c1lq_5t?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"

        data-testid="notify-button"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            backgroundColor: '#f0f0f0',
            borderRadius: 2,
          },
        }}
      >
        {/* Icon Section */}
        <Grid item>
          <Box
            sx={{
              width: 100,
              height: 100,
              position: 'relative',
            }}
          >
            <Image
              src="/locationicon.svg" // ✅ Replace with your actual icon
              alt="Location Icon"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CheckList;