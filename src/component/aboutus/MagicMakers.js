import { Grid, Typography } from '@mui/material'
import React from 'react'

function MagicMakers() {
    return (
        <Grid
            container
            sx={{
                height: { xs: '100px', sm: '120px', md: '150px' },
                width: '100%',
                                        backgroundImage: `linear-gradient(
                                rgba(0, 13, 31, 0.5),
                                rgba(0, 13, 31, 0.5)
                            ), url(/MagicMakers.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
            <Grid

                sx={{ textAlign: "center" }} >
                <Typography sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" }, fontFamily: "Gloock,Sans-serif" }}>
                    {`Meet the Magic Makers`}</Typography>
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" }, frontFamily: "Akatab,Sans-serif" }}>
                    {`The heart and soul behind your dreamy Shaadi.`}</Typography>
            </Grid>


        </Grid>
    )
}

export default MagicMakers;