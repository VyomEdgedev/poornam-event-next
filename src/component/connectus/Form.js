import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid, stack } from '@mui/material';
import CustomButton from '@/common-component/button/CustomButton';

const MyForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        weddingDate: '',
        location: '',
        numberOfGuests: '',
        yourMessage: ''

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission logic here
    };

    return (
        <Box sx={{ px: { xs: 2, md: 0.5 }, py: { xs: 2, md: 7 }, }} >
            <Grid
                container 
                spacing={0}
                display='flex'
                alignItems="center"
                justifyContent="center"

                sx={{ width: "100%", columnGap: { md: "3" }, rowGap: { xs: '9' } }}
            >
                {/* Left Side - Title + Filters */}
                <Grid item xs={12} md={2} sx={{ width: "50%" }} >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: `'Gloock'`,
                            color: "#0D1A46",
                            mb: 3,
                            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.5rem", }
                        }}
                    >
                        Tell Us Everything  (Yes, Even the Drama)
                    </Typography>
                    <Grid
                        component="img"
                        src="/FormImg.png"
                        alt="Sample"
                        sx={{ width: "100%", maxWidth: 300, borderRadius: 2 }}
                    />
</Grid> 
 <Grid
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ width: "250px", mx: '5%', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }} >
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" } }}><strong>Full Name</strong></Typography>
                        <TextField
                            placeholder="Your Full Name"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="fullNname"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Email</strong></Typography>
                        <TextField
                            placeholder="Your Email"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Phone</strong></Typography>
                        <TextField
                            placeholder="Your Phone"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Wedding Date (optional)</strong></Typography>
                        <TextField
                            placeholder="Your Wedding Date"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="weddingDate"
                            value={formData.weddingDate}
                            onChange={handleChange}
                            required
                        />
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }} ><strong>Location</strong></Typography>
                        <TextField
                            placeholder="Venue Location"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Number of Guests</strong></Typography>
                        <TextField
                            placeholder="Estimated Guests"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="numberOfGuests"
                            value={formData.numberOfGuests}
                            onChange={handleChange}
                            required
                        />
                        <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>What's on your mind?</strong></Typography>
                        <TextField
                            placeholder="Your Message"
                            variant="outlined"
                            sx={{
                                fontFamily: "Roboto",
                                '& .MuiInputBase-root': {
                                    height: '30px',
                                    fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                    width: "135%"
                                }
                            }}
                            name="yourMessage"
                            value={formData.yourMessage}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#DAA412",
                                color: "#fff",
                                borderRadius: "15px",
                                px: 4,
                                py: 1,
                                textTransform: "none",
                                fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
                                "&:hover": { bgcolor: "#333" },
                            }}
                        >
                            Let's Begin the Dream
                        </Button>
                    </Grid>
                </Grid>
                  


           

        </Box>
    );
};

export default MyForm;