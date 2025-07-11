import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import { color } from 'framer-motion';
import CustomButton from '@/common-component/button/CustomButton';


const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Form submitted');
};

function Chat() {
    return (
        <Grid sx={{ bgcolor: "FFFAED" }} 
          container direction
           item xs={12} md={4} 
              spacing={2} 
               >
            <Grid
        container
                display="flex"
                justifyContent="center"
                alignContent="center"
                gap="40%"
                padding="6%"
                sx={{ width: "100%" , padding:"60px"}}>
                <Grid
                  textAlign="left">
                    <Typography variant="h6"
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, fontFamily: "Gloock, serif", fontWeight: "400" }}
                        color="#000000"  >
                            Prefer Talking?
                    </Typography>
                    <Typography variant="h1"
                        sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "3rem",fontFamily: "Gloock, serif", fontWeight: "400" , marginBottom:"20px" } }}
                        color="#000000"  >
                        We Do Too!
                    </Typography>
                    <CustomButton onClick={handleSubmit}>Start Chat</CustomButton>
                   
                </Grid>
                <Grid item xs={12} md={4} 
                container spacing={2} direction
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    textAlign="center"
                    sx={{ padding: "30px"  }}

                     >

                    <Grid  >
                        <Grid >
                            <Grid 
                                component="img"
                                src="/chat.png"
                                alt="Sample"
                                alignItems="center"
                                // bgcolor={'red'}
                               sx={{padding:"20px"}}
                            />
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" }, fontFamily: "Akatab, sans-serif" }}
                                color="#000000" gutterBottom  >
                                Call Us
                            </Typography>
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem", fontFamily: "Akatab, sans-serif", fontWeight:"700"} }}
                                color="#000000" gutterBottom  >
                                +91 9519066885
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Grid
                                component="img"
                                src="/chat.png"
                                alt="Sample"
                                   sx={{padding:"20px"}}
                            /></Grid>
                        <Grid>
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem", fontFamily: "Akatab, sans-serif",  } }}
                                color="#0D1A46" gutterBottom  >
                                    Whatsapp
                            </Typography>
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem", fontFamily: "Akatab, sans-serif",fontWeight:"700" } }}
                                color="#0D1A46"   >
                                +91 9519066885
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>




        </Grid>
    )
}

export default Chat;