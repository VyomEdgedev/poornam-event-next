import { Grid, Typography, Stack } from '@mui/material'
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
            padding="30px"
            bgcolor="#FFFCF5">
            <Grid

                component="img"
                src="/Phone.png"
                alt="Sample"
                alignItems="center" ></Grid>
            <Grid container>
                <Typography
                    textAlign="center"
                    padding="50px"
                    sx={{ fontFamily: 'Gloock', fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" } }}>
                    <strong>Follow Us <br />
                        on <br /> Social Media</strong></Typography>
            </Grid>
            <Grid container
                padding="10px">
                <Stack mt={2}>
                    <svg width={0} height={0}>
                        <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#f09433" />
                            <stop offset="25%" stopColor="#e6683c" />
                            <stop offset="50%" stopColor="#dc2743" />
                            <stop offset="75%" stopColor="#cc2366" />
                            <stop offset="100%" stopColor="#bc1888" />
                        </linearGradient>
                    </svg>
                    <IconButton
                        component="a"
                        href="https://www.instagram.com/openai"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="OpenAI Instagram"
                    >
                        <InstagramIcon sx={{ fill: 'url(#instagramGradient)' }} />
                    </IconButton>
                    <IconButton
                        color="primary"
                        aria-label="Twitter"
                        onClick={() => window.open('https://twitter.com/your_username', '_blank')}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.youtube.com/your_channel"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        color="error"        // red theme—YouTube style
                        size="large"
                    >
                        <YouTubeIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        color="primary"
                        size="large"
                    >
                        <LinkedInIcon fontSize="inherit" />
                    </IconButton>

                </Stack>

            </Grid>
        </Grid>
    )
}

export default SocialMedia