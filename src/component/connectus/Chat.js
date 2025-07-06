import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import { color } from 'framer-motion';


const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Form submitted');
};

function Chat() {
    return (
        <Grid sx={{ bgcolor: "#FFFCF5" }} 
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
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
                        color="#0D1A46" gutterBottom  >
                        <strong>    Prefer Talking?</strong>
                    </Typography>
                    <Typography variant="h1"
                        sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" } }}
                        color="#0D1A46" gutterBottom  >
                        <strong>We Do Too!</strong>
                    </Typography>

                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        sx={{ color: "white", bgcolor: "#DAA412", padding: "5px 10px", borderRadius: "15px" }}
                    >
                        Start Chat
                    </Button>
                </Grid>
                <Grid item xs={12} md={4} 
                container spacing={2} direction
                    display="flex"
                    justifyContent="center"
                    alignContent="center"
                    textAlign="center"
                    sx={{ padding: "30px" }}
                     >

                    <Grid  >
                        <Grid >
                            <Grid container
                                component="img"
                                src="/chat.png"
                                alt="Sample"
                                alignItems="center"
                               sx={{padding:"20px"}}
                            />
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" }, fontFamily: "Gloock" }}
                                color="#0D1A46" gutterBottom  >
                                Call Us
                            </Typography>
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem", fontFamily: "Gloock" } }}
                                color="#0D1A46" gutterBottom  >
                                <strong>+91 9519066885</strong>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                        <Grid>
                            <Grid
                                container
                                component="img"
                                src="/chat.png"
                                alt="Sample"
                                   sx={{padding:"20px"}}
                            /></Grid>
                        <Grid>
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem", fontFamily: "Gloock" } }}
                                color="#0D1A46" gutterBottom  >
                                Call Us
                            </Typography>
                            <Typography variant="h1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.5rem", fontFamily: "Gloock" } }}
                                color="#0D1A46" gutterBottom  >
                                <strong>+91 9519066885</strong>
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>




        </Grid>
    )
}

export default Chat;