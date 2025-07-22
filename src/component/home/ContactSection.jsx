import React, { useState } from 'react';
import { Box, Grid, Typography, TextField } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';

export default function ContactSection() {
    const [open, setOpen] = useState(false)
    const handleWeddingPlan = () => {
        // Add your navigation or action logic here
        setOpen(true)
    };
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleLetChat = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Your submit logic here
        console.log("Form submitted:", formData);
    };

    return (
        <Box sx={{ px: 2, py: { xs: 4, sm: 6, md: 5 } }}>
            <Grid
                container
                spacing={{ xs: 3, sm: 1, md: 10 }}
                justifyContent="center"
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
                            __html: `Get in Touch with <br /> the Heart Behind <br /> the Brand`,
                        }}
                    />
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            color: '#000000',
                            fontFamily: 'Akatab, Sans-serif',
                            fontWeight: 400,
                        }}
                    >
                        {`Let’s connect and make your dream wedding a reality.`}
                    </Typography>
                </Grid>

                {/* Right Form Side */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={handleLetChat}
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: { xs: '100%', sm: '400px', md: '600px' },
                        }}
                    >
                        {/* Name Field */}
                        <Box>
                            <Typography
                                variant="body1"
                                component="label"
                                htmlFor="user-name"
                                sx={{
                                    mb: 0.5,
                                    fontFamily: 'Akatab, Sans-serif',
                                    fontWeight: 500,
                                    color: '#000000',
                                }}
                            >
                                {` Your Name`}
                            </Typography>
                            <TextField
                                id="user-name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                variant="outlined"
                                size="small"
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#ccc',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1976d2', // Hover color
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#DAA412', // Focus (click) color
                                            borderWidth: 2,
                                        },
                                    },
                                }}

                            />
                        </Box>

                        {/* Message Field */}
                        <Box>
                            <Typography
                                variant="body1"
                                component="label"
                                htmlFor="user-message"
                                sx={{
                                    mb: 0.5,
                                    fontFamily: 'Akatab, Sans-serif',
                                    fontWeight: 500,
                                    color: '#000000',
                                }}
                            >
                                {`   Your Message`}
                            </Typography>
                            <TextField
                                id="user-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                variant="outlined"
                                size="small"
                                fullWidth
                                multiline
                                rows={3}
                                error={!!errors.message}
                                  helperText={errors.message}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#ccc',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#1976d2', // Hover color
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#DAA412', // Focus (click) color
                                            borderWidth: 2,
                                        },
                                    },
                                }}


                            />
                        </Box>

                        {/* Submit Button */}
                        <CustomButton data-testid="notify-button"
                            type="submit"
                            variant="primary"
                            onClick={handleWeddingPlan}
                            sx={{
                                fontFamily: "Akatab,Sans-serif",
                                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                                fontWeight: 400,
                            }}
                        >
                            Let's Chat
                        </CustomButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
