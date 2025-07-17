// import React, { useState } from 'react';
// import { TextField, Button, Box, Typography, Grid, stack } from '@mui/material';
// import CustomButton from '@/common-component/button/CustomButton';

// const MyForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         phone: '',
//         weddingDate: '',
//         location: '',
//         numberOfGuests: '',
//         yourMessage: ''

//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
//         // Handle form submission logic here
//     };

//     return (
//         <Box sx={{ px: { xs: 2, md: 0.5 }, py: { xs: 2, md: 7 }, }} >
//             <Grid
//                 container 
//                 spacing={0}
//                 display='flex'
//                 alignItems="center"
//                 justifyContent="center"

//                 sx={{ width: "100%", columnGap: { md: "3" }, rowGap: { xs: '9' } }}
//             >
//                 {/* Left Side - Title + Filters */}
//                 <Grid item xs={12} md={2} sx={{ width: "50%" }} >
//                     <Typography
//                         variant="h4"
//                         sx={{
//                             fontWeight: "400",
//                             fontFamily: "Gloock, serif",
//                             color: "#000000",
//                             mb: 3,
//                             fontSize: { xs: "1.3rem", sm: "1.8rem", md: "3rem", }
//                         }}
//                     >
//                         Tell Us Everything  <br />(Yes, Even the Drama)
//                     </Typography>
//                     <Grid
//                         component="img"
//                         src="/FormImg.png"
//                         alt="Sample"
//                         sx={{ width: "100%", maxWidth: 300, borderRadius: 2 }}
//                     />
// </Grid> 
//  <Grid
//                         component="form"
//                         onSubmit={handleSubmit}
//                         sx={{ width: "250px", mx: '5%', p: 2, display: 'flex', flexDirection: 'column', gap: 1 , }} >
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" } }}><strong>Full Name</strong></Typography>
//                         <TextField
//                             placeholder="Your Full Name"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Roboto",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="fullNname"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Email</strong></Typography>
//                         <TextField
//                             placeholder="Your Email"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Roboto",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="email"
//                             type="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Phone</strong></Typography>
//                         <TextField
//                             placeholder="Your Phone"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Roboto",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Wedding Date (optional)</strong></Typography>
//                         <TextField
//                             placeholder="Your Wedding Date"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Akatab, sans-serif",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="weddingDate"
//                             value={formData.weddingDate}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }} ><strong>Location</strong></Typography>
//                         <TextField
//                             placeholder="Venue Location"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Roboto",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="location"
//                             value={formData.location}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>Number of Guests</strong></Typography>
//                         <TextField
//                             placeholder="Estimated Guests"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Roboto",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="numberOfGuests"
//                             value={formData.numberOfGuests}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Typography sx={{ fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem", } }}><strong>{`What's on your mind?`}</strong></Typography>
//                         <TextField
//                             placeholder="Your Message"
//                             variant="outlined"
//                             sx={{
//                                 fontFamily: "Roboto",
//                                 '& .MuiInputBase-root': {
//                                     height: '30px',
//                                     fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                     width: "135%"
//                                 }
//                             }}
//                             name="yourMessage"
//                             value={formData.yourMessage}
//                             onChange={handleChange}
//                             required
//                         />
//                         <Button
//                             variant="contained"
//                             sx={{
//                                 bgcolor: "#DAA412",
//                                 color: "#fff",
//                                 borderRadius: "15px",
//                                 px: 4,
//                                 py: 1,
//                                 textTransform: "none",
//                                 fontSize: { xs: "0.7rem", sm: "0.7rem", md: "0.9rem" },
//                                 "&:hover": { bgcolor: "#333" },
//                             }}
//                         >
//                          {`   Let's Begin the Dream`}
//                         </Button>
//                     </Grid>
//                 </Grid>





//         </Box>
//     );
// };

// export default MyForm;

import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

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

    const isBelow900 = useMediaQuery('(max-width:900px),(spacing:20px)');
    const responsiveSpacing = isBelow900
    return (
        <Box sx={{
            px: { xs: 12, sm: 15, md: 7 },
            py: { xs: 2, sm: 5, md: 7 },
            fontFamily: "Akatab, sans-serif"
        }}>
            <Grid
                container
                spacing={{ xs: 2, sm: 5, md: 7 }}
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
                sx={{ width: "100%" }}
            >
                {/* Left Side - Title + Image */}
                <Grid
                    container spacing={responsiveSpacing}
                    alignItems={isBelow900 ? 'center' : "center"}
                    justifyContent={isBelow900 ? 'center' : 'center'}
                    item xs={12} sm={4} md={4}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: "400",
                            fontFamily: "Gloock, serif",
                            color: "#000000",
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                            lineHeight: 1.2
                        }}
                        dangerouslySetInnerHTML={{
                            __html: `Tell Us Everything <br /> (Yes, Even the Drama)`,
                        }}
                    />


                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: { xs: 300, sm: 400, md: 500 },
                            height: { xs: 250, sm: 300, md: 520 },
                            borderRadius: 2,
                            overflow: "hidden",
                            position: "relative",
                            px: { xs: 5, sm: 10, md: 2 },

                        }}
                    >
                        <Image
                            src="/FormImg.png"
                            alt="Wedding planning imagery"
                            fill
                            style={{
                                objectFit: "cover"
                            }}
                            sizes="(max-width: 600px) 300px, (max-width: 900px) 350px, 450px"
                            priority
                        />
                    </Box>
                </Grid>

                {/* Right Side - Form */}
                <Grid item xs={12} md={6}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3,
                            maxWidth: { xs: 350, sm: 400, md: 500 },
                            width: { xs: "100%", sm: "350px", md: "540px" },
                            mx: { xs: 0, sm: 0, md: 0 },

                        }}
                    >
                        {/* Full Name */}
                        <Box>
                            <Typography
                                variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {`Full Name `}
                            </Typography>
                            <TextField
                                placeholder="Your Full Name"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {/* Email */}
                        <Box>
                            <Typography variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {` Email `}
                            </Typography>
                            <TextField
                                placeholder="Your Email"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {/* Phone */}
                        <Box>
                            <Typography variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {`Phone`}
                            </Typography>
                            <TextField
                                placeholder="Your Phone"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {/* Wedding Date */}
                        <Box>
                            <Typography variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {` Wedding Date (optional)`}
                            </Typography>
                            <TextField
                                placeholder="Your Wedding Date"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="weddingDate"
                                value={formData.weddingDate}
                                onChange={handleChange}
                            />
                        </Box>

                        {/* Location */}
                        <Box>
                            <Typography variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {`Location`}
                            </Typography>
                            <TextField
                                placeholder="Venue Location"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {/* Number of Guests */}
                        <Box>
                            <Typography variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {`Number of Guests`}
                            </Typography>
                            <TextField
                                placeholder="Estimated Guests"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="numberOfGuests"
                                value={formData.numberOfGuests}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {/* Message */}
                        <Box>
                            <Typography variant="body1"
                                component="p"
                                sx={{
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    fontFamily: "Akatab, sans-serif",
                                    mb: 1.5,
                                    fontWeight: "600"
                                }}
                            >
                                {`What's on your mind?`}
                            </Typography>
                            <TextField
                                placeholder="Your Message"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    fontFamily: "Akatab, sans-serif",
                                    '& .MuiInputBase-root': {
                                        height: { xs: '30px', md: '35px' },
                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                        fontFamily: "Akatab, sans-serif"
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        fontFamily: "Akatab, sans-serif"
                                    }
                                }}
                                name="yourMessage"
                                value={formData.yourMessage}
                                onChange={handleChange}
                                required
                            />
                        </Box>

                        {/* Submit Button */}
                        <Button data-testid="notify-button"
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: "#DAA412",
                                color: "#fff",
                                borderRadius: "25px",
                                py: { xs: 1.5, md: 2 },
                                mt: 3,
                                textTransform: "none",
                                fontSize: { xs: "1rem", md: "1.1rem" },
                                fontFamily: "Akatab, sans-serif",
                                fontWeight: "600",
                                height: { xs: '45px', md: '50px' },
                                "&:hover": {
                                    bgcolor: "#C4941A"
                                }
                            }}
                        >
                            {`Let's Begin the Dream`}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MyForm;