import { Grid, Typography } from '@mui/material'
import React from 'react'

function CheatSheet() {
    return (
        <Grid>
            <Grid textAlign="center" width="100%" padding="5px"
            >
                <Typography  sx={{ fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.5rem" },   fontFamily: "Gloock, serif", }}> 
                    {`Still Confused?`}
                    <br />{` Here's Cheat Sheet`}</Typography>
            </Grid>
            <Grid
            container
             display="flex"
                justifyItems="center"
                justifyContent={"center"}
                gap={10}
                padding="30px"
               
            >
                <Grid  padding="5px" >
                    <Grid display="flex"
                        textAlign="left"
                        
                        >
                        <Grid

                            component="img"
                            src="/Cloud.svg"
                            alt="Sample"
                            alignItems="center" />

                        <Typography width="250px"  frontFamily="Akatab,Sans-serif">{`"I want a destination wedding but don't know where!" `}</Typography>
                    </Grid>
                    <Grid  textAlign="center" >
                        <Typography    frontFamily= "Akatab,Sans-serif" textAlign="center"><strong>{`We've got suggestions.`}</strong></Typography>
                    </Grid>
                </Grid>  
                 <Grid  padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                       
                        >
                        <Grid

                            component="img"
                            src="/Cloud.svg"
                            alt="Sample"
                            alignItems="center" />

                        <Typography   width="250px" frontFamily= "Akatab,Sans-serif">{`"Mom wants 500 guests, I want 50!"`} </Typography>
                    </Grid>
                    <Grid  textAlign="center" >
                        <Typography  frontFamily= "Akatab,Sans-serif" textAlign="center"><strong>{`We'll nogotiate for you.`}</strong></Typography>
                    </Grid>
                </Grid>  
                 <Grid   padding="5px">
                    <Grid display="flex"
                        textAlign="left"
                      
                        >
                        <Grid

                            component="img"
                            src="/Cloud.svg"
                            alt="Sample"
                            alignItems="center" />

                        <Typography  width="250px"  frontFamily= "Akatab,Sans-serif">{`"Need someone to handle everthing!"`} </Typography>
                    </Grid>
                    <Grid  textAlign="center" >
                        <Typography   frontFamily= "Akatab,Sans-serif"
                         textAlign="center"><strong>{`We love everthing.`}</strong></Typography>
                    </Grid>
                </Grid>  

               </Grid>



        </Grid>
    )
}

export default CheatSheet