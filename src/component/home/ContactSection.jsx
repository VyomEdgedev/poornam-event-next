import React from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';

export default function ContactSection() {
    const handleLetChat = () => {
        // Add your navigation or action logic here
        console.log("Let's Chat clicked");
    };

    return (
        <Box sx={{ px: 2, py: { xs: 4, sm: 6, md: 10 } }}>
            <Grid container spacing={{ xs: 3, sm: 1, md: 3 }} justifyContent="center" display="flex"
            sx={{
                    display: {
                        xs: 'grid',
                        sm: 'flex',
                        md: 'flex',
                    }, 
                    
                   
                }}
            
            >
                {/* Left Text Side */}
                <Grid item xs={12} md={8}>
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            fontFamily: 'Gloock, serif',
                            fontWeight: 400,
                            mb: { xs: 1, sm: 1, md: 2 },
                            lineHeight: 1.2,
                        }}
                        dangerouslySetInnerHTML={{
                            __html: `Get in Touch with <br />
                            the Heart Behind <br />
                            the Brand`,
                        }}
                    />
                    <Typography variant="body1" component={"p"} sx={{ color: '#000000', fontFamily: "Akatab, Sans-serif", fontWeight: '400' }}>
                        {` Let’s connect and make your dream wedding a reality.`}
                    </Typography>
                </Grid>

                {/* Right Form Side */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: { xs: '100%', sm: '400px', md: '600px' },
                        }}
                    >
                        <Box>
                            <Typography variant="body1" component={"p"} sx={{ mb: 0.5, fontFamily: "Akatab, Sans-serif", fontWeight: '500', color: '#000000' }}>
                                {` Your Name`}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter your name"
                                variant="outlined"
                                size="small"
                            />
                        </Box>

                        <Box>
                            <Typography variant="body1" component={"p"} sx={{ mb: 0.5, fontFamily: "Akatab, Sans-serif", fontWeight: '500', color: '#000000' }}>
                                {`   Your Message`}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="How can we help you?"
                                variant="outlined"
                                size="small"
                                multiline
                                rows={3}
                            />
                        </Box>
                        <CustomButton data-testid="notify-button" onClick={handleLetChat} sx={{ mt: 1 }}>
                            {`Let's Chat`}
                        </CustomButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

