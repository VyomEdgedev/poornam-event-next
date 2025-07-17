import { Grid, Typography, Stack, Box } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';



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
            gap={responsiveSpacing ? 2 : 0}
            padding={{ xs: "20px", sm: "20px", md: "18px" }}
            bgcolor="#FFF7E4">
            <Grid item width={150}>
                <Box
                    sx={{
                        width: { xs: 130, sm: 180, md: 220 },
                        height: { xs: 130, sm: 180, md: 220 },
                        position: 'relative',
                    }}
                >
                    <Image
                        src="/Phone.png"
                        alt="Sample"
                        fill // this will make the image fill the Box
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Box>
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
                direction={isDesktop ? '' : 'row'}
                spacing={isDesktop ? 2 : 1}
                position="relative"
                sx={{
                    px: "5px",
                    transform: {
                        xs: 'none', // No transform on mobile
                        sm: 'rotate(90deg) scale(1.2)', // Apply on tablet and desktop
                        md: 'rotate(90deg) scale(1.2)', // Apply on tablet and desktop
                        lg: 'rotate(90deg) scale(1.2)', // Apply on tablet and desktop
                    },
                    transition: 'transform 0.3s ease-in-out',
            
                }}


            >
            <Box mt={0}>

                <IconButton data-testid="notify-button"
                    component="a"
                    href="https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="OpenAI Instagram"
                    sx={{
                        width: { xs: 30, sm: 40, md: 50 },
                        height: { xs: 30, sm: 40, md: 50 },
                        padding: 0,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        px: "8px",
                          transform: {
                        xs: 'none', // No transform on mobile
                        sm: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        md: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        lg: 'rotate(270deg) scale(1.2)', // Apply on tablet
                    },

                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/instaIcon1.svg"
                            alt="Twitter"
                            fill
                            style={{ objectFit: 'contain', borderRadius: '50%' }}
                        />
                    </Box>
                </IconButton>
                <IconButton
                    component="a"
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    sx={{
                        width: { xs: 30, sm: 40, md: 50 },
                        height: { xs: 30, sm: 40, md: 50 },
                        padding: 0,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        px: "8px",
                         transform: {
                        xs: 'none', // No transform on mobile
                        sm: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        md: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        lg: 'rotate(270deg) scale(1.2)', // Apply on tablet
                    },
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/twitterIcon1.svg"
                            alt="Twitter"
                            fill
                            style={{ objectFit: 'contain', borderRadius: '50%' }}
                        />
                    </Box>
                </IconButton>
                <IconButton data-testid="notify-button"
                    component="a"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    color="error"        // red theme—YouTube style
                    size="large"
                    sx={{
                        width: { xs: 30, sm: 40, md: 50 },
                        height: { xs: 30, sm: 40, md: 50 },
                        padding: 0,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        px: "8px",
                        transform: {
                        xs: 'none', // No transform on mobile
                        sm: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        md: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        lg: 'rotate(270deg) scale(1.2)', // Apply on tablet
                    },

                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/YoutubeIcon1.svg"
                            alt="Twitter"
                            fill
                            style={{ objectFit: 'contain', borderRadius: '50%' }}
                        />
                    </Box>
                </IconButton>
                <IconButton data-testid="notify-button"
                    component="a"
                    href="https://www.linkedin.com/in/your_username"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    color="primary"
                    sx={{
                        width: { xs: 30, sm: 40, md: 50 },
                        height: { xs: 30, sm: 40, md: 50 },
                        padding: 0,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        px: "8px",
                        transform: {
                        xs: 'none', // No transform on mobile
                        sm: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        md: 'rotate(270deg) scale(1.2)', // Apply on tablet and desktop
                        lg: 'rotate(270deg) scale(1.2)', // Apply on tablet
                    },
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/LinkedIcon1.svg"
                            alt="Twitter"
                            fill
                            style={{ objectFit: 'contain', borderRadius: '50%' }}
                        />
                    </Box>
                </IconButton>

            </Box>

        </Grid>
        </Grid >
    )
}

export default SocialMedia