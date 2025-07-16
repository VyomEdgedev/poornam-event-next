import { Grid, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SocialMedia() {
  return (
    <Grid
      container
      display="flex"
      justifyItems="center"
      justifyContent="space-evenly"
      padding="10px"
    >

      <Grid container>
        <Typography
          variant='h3'
          component={'h3'}
          textAlign="center"
          padding="10px"
          sx={{ fontFamily: 'Gloock', fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } }}
          dangerouslySetInnerHTML={{
            __html: `  Follow Us <br />
                        on <br /> Social Media`,
          }}
        />

      </Grid>
      <Grid container

        padding="1px">
        <Box mt={1}
          display="flex"
          justifyItems="center"
          justifyContent="space-evenly">
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
            href="https://www.instagram.com/openai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OpenAI Instagram"

          >
            <InstagramIcon sx={{ fill: 'url(#instagramGradient)', fontSize: { xs: 30, sm: 40, md: 60 } }} />
          </IconButton>
          <IconButton data-testid="notify-button"
            color="primary"
            aria-label="Twitter"
            onClick={() => window.open('https://twitter.com/your_username', '_blank')}
          >
            <TwitterIcon sx={{ fontSize: { xs: 30, sm: 40, md: 60 } }} />
          </IconButton>
          <IconButton data-testid="notify-button"
            component="a"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            color="error"        // red theme—YouTube style
            size="large"
          >
            <YouTubeIcon fontSize="inherit" sx={{ fontSize: { xs: 30, sm: 40, md: 60 } }} />
          </IconButton>
          <IconButton data-testid="notify-button"
            component="a"
            href="https://www.linkedin.com/in/your_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            color="primary"
            size="large"
          >
            <LinkedInIcon data-testid="notify-button" fontSize="inherit" sx={{ fontSize: { xs: 30, sm: 40, md: 60 } }} />
          </IconButton>

        </Box>

      </Grid>
    </Grid>
  )
}

export default SocialMedia

