import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

function WeOffer() {
    return (
        <Box textAlign="center" bgcolor="#FFFCF5"
        px={{xs : "5%", sm:"10%", md: "15%"}} >
            <Typography sx={{
                fontSize: { xs: "2rem", sm: "2rem", md: "2.1rem" }
                , fontFamily: "Gloock"
            }}>
                {`What's inside Your 'Shaadi ka Pitara'?`}</Typography>
            <Grid container
                display="flex"
                justifyContent="space-evenly"
                justifyItems="center"
                padding="20px"
                sx={{ gap: 5 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} >
                        <Box textAlign="center" >
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer1.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{   frontFamily: "Akatab,Sans-serif", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                    {`Venue Selection`} </Typography>
                                <Typography variant="body2" color="text.primary" sx={{   frontFamily: "Akatab,Sans-serif", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                    {`We help you find the perfect venue.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer2.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                  {`  Catering Services`}</Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                   {` Exquisite menus tailored for your taste.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container
                display="flex"
                justifyContent="space-evenly"
                justifyItems="center"
                padding="20px"
                sx={{ gap: 5 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer3.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                  {`  Decor & Design`} </Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                   {` Transforming spaces into magical venues.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer4.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                   {` Entertainment `}</Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                   {` Live bands, DJs, performers, and more.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container
                display="flex"
                justifyContent="space-evenly"
                justifyItems="center"
                padding="20px"
                sx={{ gap: 5 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer5.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                  {`  Transportation`} </Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                   {` Seamless transfers for ou and your guests.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer6.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                  {`  Wedding Coordination`} </Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                  {`  On-the-day management for peace of mind`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container
                display="flex"
                justifyContent="space-evenly"
                justifyItems="center"
                padding="20px"
                sx={{ gap: 5 }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer7.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                   {` Photography & Videography`}</Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                    {`Captuing every moment beautifully.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto', // centers the circle itself

                                }}
                            >
                                <Image
                                    src="/WeOffer8.svg"
                                    alt="Centered Icon"
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography fontWeight={600} sx={{ fontFamily: "Akatab", fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" } }}>
                                   {` Guest Management`}</Typography>
                                <Typography variant="body2" color="text.primary" sx={{ fontFamily: "Akatab", fontSize: { xs: "1rem", sm: "1rem", md: "1rem" } }}>
                                  {`RSVPs and guest accommodations handled.`}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WeOffer;