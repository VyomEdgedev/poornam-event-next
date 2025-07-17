import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
};

function Chat() {
    const theme = useTheme();
    const isSmOrBelow600 = useMediaQuery(theme.breakpoints.down('sm')); // sm = 600px

    return (
        <Grid container
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ bgcolor: "#FFFAED", p: 2 }} spacing={2}
            direction={isSmOrBelow600 ? 'column' : 'row'} >

            {/* Left Content */}
            <Grid item xs={12} sm={8} md={4}>
                <Typography
                    variant="h6"
                    component="h6"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                        fontFamily: "Gloock, serif",
                        fontWeight: 400,
                        color: "#000"
                    }}
                >
                    {` Prefer Talking?`}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
                        fontFamily: "Gloock, serif",
                        fontWeight: 400,
                        mb: 2,
                        color: "#000"
                    }}
                >
                    {`  We Do Too!`}
                </Typography>
                <CustomButton onClick={handleSubmit} data-testid="notify-button">
                    {`  Start Chat`}
                </CustomButton>
            </Grid>

            {/* Right Content */}
            <Grid
                item
                xs={12}
                md={8}
                container
                // ✅ Changes here
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                {/* Call Us */}
                <Grid item xs={12} sm={6} md={6} textAlign="center">
                    <Grid component="img" src="/chat.png" alt="Call" sx={{ padding: 2 }} />
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontFamily: 'Akatab, sans-serif' }}>
                        {`  Call Us`}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{ fontWeight: 700, fontFamily: 'Akatab, sans-serif' }}
                    >
                        {` +91 9519066885`}
                    </Typography>
                </Grid>

                {/* WhatsApp */}
                <Grid item xs={12} sm={6} md={6} textAlign="center">
                    <Grid component="img" src="/chat.png" alt="WhatsApp" sx={{ padding: 2 }} />
                    <Typography variant="h6"
                        component="h6"
                        sx={{ fontFamily: 'Akatab, sans-serif', color: '#0D1A46' }}>
                        {`   WhatsApp`}
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, fontFamily: 'Akatab, sans-serif', color: '#0D1A46' }}
                    >
                        {`  +91 9519066885`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Chat;

