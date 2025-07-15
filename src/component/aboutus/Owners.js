import React from 'react'
import { Grid, Card, CardMedia, Box, Typography, Container } from "@mui/material";




export default function Owners() {
    return (
        <Container sx={{ py: 4 }}>
            <Grid container spacing={4} justifyContent="center" gap="180px">
                {/* Card 1 */}
                <Grid item xs={12} sm={6} md={5}>
                    <Card sx={{ position: "relative", height: 450, width: 350 }}>
                        <CardMedia
                            component="img"
                            height="450"
                            image="/AadiJain.png" // ✅ Replace with your image path or URL
                            alt="Image 1"
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: 300,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                bgcolor: "rgba(0, 0, 0, 0.4)",
                                display: "block",
                                justifyContent: "center",
                                alignItems: "bottom",
                                px: 2,
                                py: 1,

                            }}
                        >

                            <Typography color="white" sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" }, fontFamily: "Akatab" }}>
                                <strong>{`Aadi Jain - The Visionary (Founder & Creative Director)`}</strong>
                            </Typography>
                            <Typography color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" }, fontFamily: "Akatab" }}>
                               {` The clam in your chaos, the brain behind every baraat.
                                Swati's superpower? Turning Pinterest boards into
                                physical mandaps, without breaking the bank or a sweat.`}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} sm={6} md={5}>
                    <Card sx={{ position: "relative", height: 450, width: 350 }}>
                        <CardMedia
                            component="img"
                            height="450"
                            image="/RichiJain.png" // ✅ Replace with your image path or URL
                            alt="Image 2"
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: 300,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                bgcolor: "rgba(0, 0, 0, 0.4)",
                                display: "block",
                                justifyContent: "center",
                                alignItems: "bottom",
                                px: 5,
                                py: 5,

                            }}
                        >
                           <Typography color="white" sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },  fontFamily: "Akatab,Sans-serif" }}>
                                <strong>{`Richi Anand Jain - CEO`}</strong>
                            </Typography>
                            <Typography color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" },  fontFamily: "Akatab,Sans-serif" }}>
                               {` He once planned a wedding where the horse fainted.
                                he had a backup in 22 minutes. Enough said.`}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

