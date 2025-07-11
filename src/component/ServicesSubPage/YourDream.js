import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
import CustomButton from '@/common-component/button/CustomButton';


const YourDreamData = [
    {
        id: 1,
        image: "./YourDream1.png",
        alt: "Royal Rajasthani Theme",
        title: "Udaipur",
        description: "For that royal Rajasthani Magic.",
        ctr: "Read More"
    },
    {
        id: 2,
        image: "./YourDream2.png",
        alt: "Royal Rajasthani Theme",
        title: "Goa",
        description: "For Beachside vows & sunset pheras.",
        ctr: "Read More"
    },
    {
        id: 3,
        image: "./YourDream3.png",
        alt: "Royal Rajasthani Theme",
        title: "Mahabaleshwar",
        description: "For mountain serenity & mity mornings.",
        ctr: "Read More"
    }
];

const YourDream = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography
                variant="h3"
                component="h2"
                align="center"
                sx={{ fontWeight: "400", mb: 2, fontFamily: 'Gloock,serif', fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}
            >
               Real Talk About [Service Name]s
            </Typography>
           
            <Grid container spacing={4} justifyContent="center">
                {YourDreamData.map(({ id, tag, image, alt, title, description, ctr }) => (
                    <Grid item key={id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                width: "95%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",

                            }}
                            elevation={1}
                        >
                        
                            <Box
                                sx={{
                                    width: "340px",
                                    height: 300,
                                    backgroundColor: "red",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: 14,
                                    textAlign: "center",
                                    minHeight: { xs: 250, sm: 280, md: 300 }
                                }}
                            >
                                <img
                                    src={image}
                                    alt={alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />



                            </Box>
                            <CardContent>
                                <Typography variant="subtitle1" component="div" sx={{ fontFamily: "Akatab,Sans-serif", fontWeight: '400', fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1rem' } }}>
                                    {title}
                                </Typography>
                                <Typography variant="body1" component="p" sx={{ fontFamily: "Akatab,Sans-serif", fontWeight: '500', color: "#000000", fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1.125rem' } }}>
                                    {description}
                                </Typography>
                                <CustomButton>{ctr}</CustomButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default YourDream;