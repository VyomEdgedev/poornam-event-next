import { Grid, Typography, Stack, Box, Container } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
function SocialMedia() {
  return (
    <Container>
      <Grid columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
      container
     
      py="10px"
      marginBottom={{xs: 2, sm: 4, md: 4, lg: 4, xl: 4}}
     // spacing={{ xs: 0, sm:0, md: 4, lg: 5, xl: 5 }}
    >

      <Grid    item size={{ xs: 12, sm: 6, md: 4 }}
      //sx={{px:{xs: 0, sm: 1, md: 4, lg: 18, xl: 30}}}
      textAlign={{xs:"center", sm:"start"}}
      >
        <Typography
          variant='h3'
          component={'h3'}
         
         
         // padding="20px"
          sx={{ fontFamily: 'Gloock', fontSize: { xs: "24px", sm: "28px", md: "36px" }, lineHeight: 1.5 }}
          dangerouslySetInnerHTML={{
            __html: `  Follow Us
                        on <br /> Social Media`,
          }}
        />

      </Grid>
      <Grid   item size={{ xs: 12, sm: 6, md: 8 }}
       // padding="1px"
       // justifyContent={{xs:"center", sm:"end"}}
        >
        <Box 
        //mt={2}
          display="flex"
         // justifyItems="center"
          justifyContent={{xs:"center", sm:"flex-end"}}>
              <IconButton data-testid="notify-button"
            color="primary"
            component="a"
            href="https://www.facebook.com/poornamevents" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
         
          >
            <FacebookIcon sx={{
               borderRadius: '50%',
              backgroundColor: '#fff',
              // color:"black",
              width: { xs: 55, sm: 70, md: 80 },
              height: { xs: 55, sm: 70, md: 80 },
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
             href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
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
        {  <IconButton data-testid="notify-button"
            component="a"
            href="https://www.linkedin.com/company/poornam-events/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            color="primary"
            size="large"
          >
            <LinkedInIcon data-testid="notify-button"
              fontSize="inherit"
              borderRadius="50%"
              sx={{
                backgroundColor: '#fff',
                width: { xs: 55, sm: 70, md: 80 },
                height: { xs: 55, sm: 70, md: 80 },
                fontSize: { xs: 25, sm: 40, md: 60 }, 
                cursor: 'pointer', 
                
              }}
            />
          </IconButton>}

        </Box>

      </Grid>
    </Grid>
    </Container>
  )
}

export default SocialMedia

