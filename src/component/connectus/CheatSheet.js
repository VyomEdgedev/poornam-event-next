import { Grid, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

function CheatSheet() {
    return (
        <Grid>
            <Grid textAlign="center" width="100%" padding={{ xs: "30px", sm: "50px", md: "40px" }}>
                <Typography variant='h2' sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" }, fontFamily: "Gloock, serif", }}>
                    {`Still Confused?`}
                    <br />{` Here's Cheat Sheet`}</Typography>
            </Grid>
            <Grid
                container
                display="flex"
                justifyItems="center"
                justifyContent={"center"}
                gap={{ xs: "10px", sm: "20px", md: "50px"  }}
                padding="5px"
            >
                <Grid padding="5px" >
                    <Grid display="flex"
                        textAlign="left"
                    >
                        <Grid
                        >
                            <Image
                                src="/Cloud.svg"
                                alt="Sample"
                                width={70}
                                height={70}
                                alignItems="center" />
                        </Grid>
                        <Typography
                            variant='body1'
                            component="p"
                            width="250px"
                            px={2}
                            frontFamily="Akatab,Sans-serif">
                            {`"I want a destination wedding but don't know where!" `}
                        </Typography>
                    </Grid>
                    <Grid textAlign="left" >
                        <Typography
                            variant='body1'
                            component="p"
                            frontFamily="Akatab,Sans-serif"
                            textAlign="left"
                            px={3}>
                            <strong>{`We've got suggestions.`}</strong></Typography>
                    </Grid>
                </Grid>
                <Grid padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                    >
                        <Grid
                        >
                            <Image
                                src="/Cloud.svg"
                                alt="Sample"
                                width={70}
                                height={70}
                                alignItems="center" />
                        </Grid>
                        <Typography
                            variant='body1'
                            component="p"
                            width="250px"
                            px={2}
                            frontFamily="Akatab,Sans-serif">
                            {`"Mom wants 500 guests, I want 50!"`} </Typography>
                    </Grid>
                    <Grid textAlign="left" >
                        <Typography frontFamily="Akatab,Sans-serif"
                            textAlign="left"
                            px={3}>
                            <strong>{`We'll nogotiate for you.`}</strong></Typography>
                    </Grid>
                </Grid>
                <Grid padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                    >
                        <Grid
                        >
                            <Image
                                src="/Cloud.svg"
                                alt="Sample"
                                width={70}
                                height={70}
                                alignItems="center" />
                        </Grid>
                        <Typography
                            variant='body1'
                            component="p"
                            width="250px"
                            px={2}
                            frontFamily="Akatab,Sans-serif">
                            {`"Need someone to handle everthing!"`} </Typography>
                    </Grid>
                    <Grid textAlign="left" >
                        <Typography
                            variant='body1'
                            component="p"
                            frontFamily="Akatab,Sans-serif"
                            textAlign="left"
                            px={3}>
                            <strong>{`We love everthing.`}</strong></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default CheatSheet