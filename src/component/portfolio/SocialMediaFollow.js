import { Grid, Typography, Stack, Box, Container } from '@mui/material'
import React from 'react'

function SocialMedia() {
  return (
    <Container>
      <Grid columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        container
        py="10px"
        marginBottom={{ xs: 2, sm: 2,md: 3  }}
    
      >

        <Grid item size={{ xs: 12, sm: 4, md: 4 }}
          textAlign={{ xs: "center", sm: "start" }}
        >
          <Typography
            component={'h2'}
            sx={{ fontFamily: 'Gloock,serif' }}
            dangerouslySetInnerHTML={{
              __html: `  Follow Us
                        on <br /> Social Media`,
            }}
          />

        </Grid>
        <Grid item size={{ xs: 12, sm: 8, md: 8 }}
         justifyContent={{xs:"center", sm:"flex-end"}}
         justifyItems={{xs:"center", sm:"flex-end"}}
         alignItems={"center"}
         marginTop={2}
        >
        
          <Box>
            {[
              {
                img: "/facebook2.svg",
                url: "https://www.facebook.com/poornamevents",
                alt: "Facebook",
              },
              {
                img: "/instagram2.svg",
                url: "https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw==",
                alt: "Instagram",
              },
              {
                img: "/twitter2.svg",
                url: "https://x.com/",
                alt: "Twitter",
              },
              {
                img: "/youtube2.svg",
                url: "https://www.youtube.com/@poornam-wedding-planner",
                alt: "YouTube",
              },
              {
                img: "/linkedin2.svg",
                url: "https://www.linkedin.com/company/poornam-events/",
                alt: "LinkedIn",
              },
            ].map(({ img, url, alt }, i) => (
              <Box
                key={i}
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              
                sx={{ pr: 1, mt: 1, display: "inline-block", ml:{xs:3, sm:3, md:6 }}}
              >
                <Box
                  component="img"
                  src={img}
                  alt={alt}
                
                  sx={{
                    width: { xs: 35, sm:45, md: 68, },
                    height: { xs: 35,sm:45, md: 68, },
                    fontSize: { xs: 25, sm: 40, md: 60 }, cursor: 'pointer',
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

        </Grid>
      </Grid>
    </Container>
  )
}

export default SocialMedia

