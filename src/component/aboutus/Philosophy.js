import { Grid, Typography, Box, Card, CardContent } from '@mui/material';
import React from 'react'

function Philosophy() {
    return (
        <>
            <Box container
                padding="5px">
                <Grid container
                    display="flex"
                    justifyContent="space-evenly"
                    justifyItems="center"
                >
                    <Grid container padding="30px">
                        <Typography sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem" }, fontFamily: "Gloock,Sans-serif " }}>
                          {` Our Philosophy`}</Typography>
                    </Grid>

                    <Grid container
                        component="img"
                        src="/Book.svg"
                        alt="Sample"
                        alignItems="center"
                        sx={{ padding: "30px" }}
                    />
                    <Grid>
                        <Card sx={{ maxWidth: 400, m: 2, p: 2, boxShadow: 3 }}>
                            <CardContent>
                                {/* Main title text */}
                                <Typography variant="h6" component="div" fontWeight="bold" gutterBottom fontFamily="Akatab,Sans-serif">
                                    {`   Our Humble Beginnings`}
                                </Typography>

                                {/* Supporting description text */}
                                <Typography variant="body2" color="text.secondary" fontFamily="Akatab,Sans-serif">
                                    {` Founded by a passionate team, Poornam began
                                    with the idea of bringing joy and creativity to
                                    Indian weddings.`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Box container
                padding="30px">
                <Grid container
                    display="flex"
                    justifyContent="space-evenly"
                    justifyItems="center"
                >
                    <Grid container
                        component="img"
                        src="/Dart.svg"
                        alt="Sample"
                        alignItems="center"
                        sx={{ padding: "30px" }}
                    />
                    <Grid>
                        <Card sx={{ maxWidth: 400, m: 2, p: 2, boxShadow: 3 }}>
                            <CardContent>
                                {/* Main title text */}
                                <Typography variant="h6" component="div" fontWeight="bold" gutterBottom fontFamily="Akatab,Sans-serif">
                                    {`  Our Mission`}
                                </Typography>

                                {/* Supporting description text */}
                                <Typography variant="body2" color="text.secondary" fontFamily="Akatab,Sans-serif">
                                    {`  To create memorable moments filled with creativity, care, joy, and authenticity.`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container padding="30px">
                        <Typography sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "2.5rem" }, fontFamily: "Gloock,Sans-serif" }}>
                            { `Why We Exist`}
                        </Typography>
                          
                    </Grid>
                </Grid>


            </Box>
        </>
    )
}

export default Philosophy;