import { Grid, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
function SocialMedia() {
  return (
    <Grid
      container
      display="flex"
      justifyItems="center"
      justifyContent="space-evenly"
      padding="10px"
      marginBottom={{xs: 3, sm: 4, md: 5, lg: 6, xl: 7}}
    >

      <Grid container>
        <Typography
          variant='h3'
          component={'h3'}
          textAlign="center"
          padding="20px"
          sx={{ fontFamily: 'Gloock', fontSize: { xs: "24px", sm: "28px", md: "32px" }, lineHeight: 1 }}
          dangerouslySetInnerHTML={{
            __html: `  Follow Us <br />
                        on <br /> Social Media`,
          }}
        />

      </Grid>
      <Grid container

        padding="1px">
        <Box mt={2}
          display="flex"
          justifyItems="center"
          justifyContent="space-evenly">
              <IconButton data-testid="notify-button"
            color="primary"
            aria-label="Facebook"
            onClick={() => window.open('https://www.facebook.com/poornamevents', '_blank')}
          >
            <FacebookIcon sx={{
              backgroundColor: '#fff',
              // color:"black",
              width: { xs: 55, sm: 70, md: 80 },
              height: { xs: 55, sm: 70, md: 80 },
              borderRadius: '50%',
             
              fontSize: { xs: 25, sm: 40, md: 60 }, cursor: 'pointer'
            }} />
          </IconButton>
          <svg width={0} height={0}>
            <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </svg>
          <IconButton data-testid="notify-button"
            component="a"
            href="https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw==" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OpenAI Instagram"

          >
            <InstagramIcon sx={{
              fill: 'url(#instagramGradient)',
              backgroundColor: '#fff',
              width: { xs: 55, sm: 70, md: 80 },
              height: { xs: 55, sm: 70, md: 80 },
              borderRadius: '50%',
              
              fontSize: { xs: 25, sm: 40, md: 60 }, cursor: 'pointer'
            }} />
          </IconButton>
          <IconButton data-testid="notify-button"
            color="primary"
            aria-label="Twitter"
            onClick={() => window.open('https://x.com/', '_blank')}
          >
            <XIcon sx={{
              // backgroundColor: '#fff',
              color:"black",
              width: { xs: 55, sm: 70, md: 80 },
              height: { xs: 55, sm: 70, md: 80 },
              borderRadius: '50%',
             
              fontSize: { xs: 25, sm: 40, md: 60 }, cursor: 'pointer'
            }} />
          </IconButton>
        
          <IconButton data-testid="notify-button"
            component="a"
            href="https://www.youtube.com/@poornam-wedding-planner"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            color="error"        // red theme—YouTube style
            size="large"
          >
            <YouTubeIcon fontSize="inherit" sx={{
              backgroundColor: '#fff',
              width: { xs: 55, sm: 70, md: 80 },
              height: { xs: 55, sm: 70, md: 80 },
              borderRadius: '50%',
             
              fontSize: { xs: 25, sm: 40, md: 60 }, cursor: 'pointer'
            }} />
          </IconButton>
          <IconButton data-testid="notify-button"
            component="a"
            href="https://www.linkedin.com/company/poornam-events/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            color="primary"
            size="large"
          >
            <LinkedInIcon data-testid="notify-button"
              fontSize="inherit" sx={{
                backgroundColor: '#fff',
                width: { xs: 55, sm: 70, md: 80 },
                height: { xs: 55, sm: 70, md: 80 },
               
                fontSize: { xs: 25, sm: 40, md: 60 }, cursor: 'pointer'
              }}
            />
          </IconButton>

        </Box>

      </Grid>
    </Grid>
  )
}

export default SocialMedia

