import { Grid, Typography } from '@mui/material'
import React from 'react'

function MagicMakers() {
    return (
        <Grid
            container
            sx={{
                height: { xs: "10vh", sm: "12vh", md: "15vh" },
                backgroundImage: 'url(/MagicMakers.png)', // Your image path here
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                width: "100%",
                display: "block"

            }}>
            <Grid

                sx={{ textAlign: "center" }} >
                <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" }, fontFamily: "Gloock,Sans-serif" }}>
                    {`Meet the Magic Makers`}</Typography>
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },  frontFamily: "Akatab,Sans-serif" }}>
                    {`The heart and soul behind your dreamy Shaadi.`}</Typography>
            </Grid>


        </Grid>
    )
}

export default MagicMakers;