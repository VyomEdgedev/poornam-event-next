import React from 'react';
import { Card, CardMedia, Container, Typography, Box, Grid, Chip } from '@mui/material';

const Subtext = () => {

    const SubtextData = {
        heading: "Learn how to make every rupee feel like a royal investment.",
        paragraph: "Because luxuryisn't always about the price tag - its about the experience. At Poornam Events, we specialize in crafting unforgettable weddings that feel grand, graceful, and deeply personal - without blowing your budget. From curated vendor deals to smat styling choices, we turn mindful spending into magical moments.",
        subHeading: "Smart. Elegant. Worth every rupee.",
        line: "Let us show you how royalty is vibe, not just a budget",
        line1: "Big dreams don't need big budgets.",
        line2: "They just need the right people planning them. we help you invest where it truly matters",
        line3: "- emotions, experience, and lifelong memories."
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            px={{ xs: 2, sm: 6, md: 10 }}
            py={4}
        >
            <Box maxWidth="1000px" width="100%" textAlign="left">
                <Box>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
                            fontWeight: 600,
                            fontFamily: "Akatab",
                        }}
                    >
                        {SubtextData.heading}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },

                            fontFamily: "Akatab",
                        }}
                    >
                        {SubtextData.paragraph}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
                            fontWeight: 600,
                            fontFamily: "Akatab",
                        }}
                    >
                        {SubtextData.subHeading}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },

                            fontFamily: "Akatab",
                        }}
                    >
                        {SubtextData.line}
                    </Typography>
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },

                                fontFamily: "Akatab",
                            }}
                        >
                            {SubtextData.line1}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },

                                fontFamily: "Akatab",
                            }}
                        >
                            {SubtextData.line2}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
                                fontWeight: 600,
                                fontFamily: "Akatab",
                            }}
                        >
                            {SubtextData.line3}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Subtext;