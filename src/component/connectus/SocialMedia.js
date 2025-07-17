import { Grid, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RealEstateAgent } from '@mui/icons-material';
import { red } from '@mui/material/colors';


function SocialMedia() {
    const isBelow482 = useMediaQuery('(max-width:482px),(spacing:50px)');
    const responsiveSpacing = isBelow482
    const isDesktop = useMediaQuery(('md')); // md = 900px+
    return (
        <Grid
            container
            display="flex"
            justifyItems="center"
            justifyContent="space-evenly"
            padding={{ xs: "20px", sm: "20px", md: "30px" }}
            bgcolor="#FFFAED">
            <Grid

                component="img"
                src="/Phone.png"
                alt="Sample"
                alignItems="center"
                sx={{
                    width: { xs: 130, sm: 180, md: 230 },
                    height: { xs: 130, sm: 180, md: 230 },
                }} >

            </Grid>
            <Grid container>
                <Typography
                    variant='h3'
                    component={'h3'}
                    textAlign="center"
                    padding="20px"
                    sx={{
                        fontFamily: 'Gloock',
                        fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, lineHeight: 1.5
                    }}
                    dangerouslySetInnerHTML={{
                        __html: `  Follow Us <br />
                        on <br /> Social Media`,
                    }}
                />

            </Grid>
            <Grid container
                alignItems={isBelow482 ? 'center' : "center"}
                justifyContent={isBelow482 ? 'coloum' : 'row'}
                direction={isDesktop ? 'column' : 'row'}
                spacing={isDesktop ? 2 : 1}
                position="relative"
                sx={{ px: "5px" }}


            >
                <Box mt={0}>
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
                        <InstagramIcon sx={{
                            fill: 'url(#instagramGradient)',
                            backgroundColor: '#fff',
                            width: { xs: 20, sm: 30, md: 40 },
                            height: { xs: 20, sm: 30, md: 40 },
                            borderRadius: '50%',

                            fontSize: { xs: 20, sm: 30, md: 40 }, cursor: 'pointer'
                        }} />
                    </IconButton>
                    <IconButton data-testid="notify-button"
                        color="primary"
                        aria-label="Twitter"
                        onClick={() => window.open('https://twitter.com/your_username', '_blank')}
                    >
                        <TwitterIcon sx={{
                            backgroundColor: '#fff',
                            width: { xs: 20, sm: 30, md: 40 },
                            height: { xs: 20, sm: 30, md: 40 },
                            borderRadius: '50%',

                            fontSize: { xs: 20, sm: 30, md: 40 }, cursor: 'pointer'
                        }} />
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
                        <YouTubeIcon fontSize="inherit"
                            sx={{
                                backgroundColor: '#fff',
                                width: { xs: 20, sm: 30, md: 40 },
                                height: { xs: 20, sm: 30, md: 40 },
                                borderRadius: '50%',

                                fontSize: { xs: 20, sm: 30, md: 40 }, cursor: 'pointer'
                            }} />
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
                        <LinkedInIcon data-testid="notify-button" fontSize="inherit"
                            sx={{
                                backgroundColor: '#fff',
                                width: { xs: 20, sm: 30, md: 40 },
                                height: { xs: 20, sm: 30, md: 40 },
                                borderRadius: '50%',

                                fontSize: { xs: 20, sm: 30, md: 40 }, cursor: 'pointer'
                            }} />
                    </IconButton>

                </Box>

            </Grid>
        </Grid>
    )
}

export default SocialMedia