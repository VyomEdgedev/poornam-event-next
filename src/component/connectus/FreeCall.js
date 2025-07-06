import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Form submitted');
};

function FreeCall() {
    return (
        <Grid container 
        display="flex"
        justifyItems="center"
        justifyContent="space-evenly"
        padding="30px"
        >
            <Grid  lineHeight="60px">
                <Typography sx={{ fontFamily:'Roboto',fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" }}}><strong>JustWant to Chat Wedding Vibes Over Coffee?</strong></Typography>
                <Typography>We love meeting new couples (and yes, we'll bring the Pinterest boards).</Typography>
                <Button
                    type="submit"
                    margin="5px"
                    onClick={handleSubmit}
                    sx={{ padding:"50px" ,color: "white", bgcolor: "#DAA412", padding: "5px 10px", borderRadius: "15px" }}
                >
                    Schedule a Free 15-min Vibe Check Call
                </Button>
            </Grid>
            <Grid   component="img"
                            src="/Heart.svg"
                            alt="Sample"
                            alignItems="center"
                            padding="10px" /> 
        </Grid>
    )
}
export default FreeCall
