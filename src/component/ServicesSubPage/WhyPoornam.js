import React from 'react'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

const WhyPoornam = () => {
    return (
        <Box container
            px="10%"  
        >
            <Grid container
                display="flex"
                justifyContent="space-evenly"
                justifyItems="center"
            >
                <Grid container
                    px="10px"
                    py="50px">
                    <Typography sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "2.2rem" }, fontFamily: "Gloock" }}>
                        Why Poornam for <br /> Your Destination Wedding?</Typography>
                </Grid>

                <Grid container
                    component="img"
                    src="/WhyPoornam.png"
                    alt="Sample"
                    alignItems="center"
                    sx={{ padding: "30px" }}
                />
                <Grid>
                    <Card sx={{ maxWidth: 400, m: 2, p: 2, boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="body2" color="text.primary"
                                sx={{ fontFamily: "Akatab", fontSize: { xs: "0.9rem", sm: "0.9rem", md: "0.9rem"}}}>
                                With years of experience and a personal touch, Poornam
                                Events dedicates itself to making your destination weddings
                                dreams come true. We tailor each experience to your needs,
                                ensuring every detail is meticulously managed for a perfect
                                celebration.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WhyPoornam