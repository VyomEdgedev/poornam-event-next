import React from 'react'
import { Grid, Card, CardMedia, Box, Typography, Container } from "@mui/material";
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';




export default function Owners() {
    const isBelow1150 = useMediaQuery('(max-width:1150px),(spacing:50px)');
    const responsiveSpacing = isBelow1150
        ? { xs: 2, sm: 1, md: 7 }   // spacing when screen is small
        : { xs: 2, sm: 1, md: 7 }; // spacing when screen is large

    return (
        <Container sx={{ py: { xs: 5, sm: 4, md: 5 },
         px: { xs: 5, sm: 5, md: 3 } }}
         
        >
            <Grid container spacing={responsiveSpacing}
                alignItems={isBelow1150 ? 'center' : "center"}
                justifyContent={isBelow1150 ? 'center' : 'center'}
                gap={{ xs: 4, sm: 4, md: 15 }}>
                {/* Card 1 */}
                <Grid item xs={1} sm={6} md={5}>
                    <Card sx={{
                        width: { xs: 300, sm: 400, md: 500 },
                        height: { xs: 300, sm: 400, md: 550 },
                        position: 'relative'
                    }}>
                        <Image
                            src="/AadiJain.png"
                            alt="Aadi Jain"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: { xs: 150, sm: 250, md: 400 },
                                left: 0,
                                width: "100%",
                                height: "100%",
                                bgcolor: "rgba(0, 0, 0, 0.4)",
                                display: "block",
                                justifyContent: "center",
                                alignItems: "bottom",
                                px: 3,
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
                <Grid item xs={12} sm={6} md={1}>
                    <Card sx={{
                          width: { xs: 300, sm: 400, md: 500 },
                        height: { xs: 300, sm: 400, md: 550 },
                        position: 'relative'
                    }}>
                        <Image
                            src="/RichiAnandJain.png"
                            alt="Richi Anand Jain"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                top: { xs: 130, sm: 250, md: 400 },
                                left: 0,
                                width: "100%",
                                height: "100%",
                                bgcolor: "rgba(0, 0, 0, 0.4)",
                                display: "block",
                                justifyContent: "center",
                                alignItems: "bottom",
                                px: 5,
                                py: 3,

                            }}
                        >
                            <Typography color="white" sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" }, fontFamily: "Akatab,Sans-serif" }}>
                                <strong>{`Richi Anand Jain - CEO`}</strong>
                            </Typography>
                            <Typography color="white" sx={{ fontSize: { xs: "0.8rem", sm: "0.8rem", md: "0.8rem" }, fontFamily: "Akatab,Sans-serif" }}>
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

