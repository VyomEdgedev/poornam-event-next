import { Grid, Typography, Divider } from '@mui/material'
import React from 'react'

function Planner() {
    return (
        <>
         <Grid container
            display="flex"
            justifyContent="space-evenly"
            justifyItems="center"
            sx={{ bgcolor: "#0D2650", color: "#D7A10F" }} 
            padding="30px">
            <Grid>
                <Typography sx={{fontFamily:"Akatab,serif" , fontSize: { xs: "1.1rem", sm: "1rem", md: "1.3rem" } }}>{`Wedding Planner in Indore`}</Typography> 
            </Grid>
             <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        mx: 1,
                        height: '40px',
                        backgroundColor: "#FFE6A3",
                        width: '2px',
                    }}
                />
            <Grid>
                <Typography sx={{fontFamily:"Akatab,serif" , fontSize: { xs: "1.1rem", sm: "1rem", md: "1.3rem" } }}>{`Wedding Planner Near Me`}</Typography>
              
            </Grid>
              
              <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        mx: 1,
                        height: '40px',
                         backgroundColor: "#FFE6A3",
                        width: '2px',
                    }}
                />
            <Grid>
                <Typography sx={{fontFamily:"Akatab,serif" , fontSize: { xs: "1.1rem", sm: "1rem", md: "1.3rem" } }}>{`Bhopal Wedding Planners`}</Typography>
            </Grid>
              <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                        mx: 1,
                        height: '40px',
                      backgroundColor: "#FFE6A3",
                        width: '2px',
                    }}
                />
            <Grid>
                <Typography  sx={{fontFamily:"Akatab,serif" , fontSize: { xs: "1.1rem", sm: "1rem", md: "1.3rem" } }}>{`Ujjain Shaadi Experts`}</Typography>
            </Grid>
            
                </Grid>
                <Grid sx={{paddingTop:"20px"}}>
                    <hr sx={{color:"#0000001A" }}/>
                </Grid>
                <Grid  container
                 padding="20px"
               textAlign="center"
                sx={{ bgcolor:"#rgba(0, 0, 0, 0.1)"}}>
                    <Typography   sx={{padding:'20px', fontFamily:"Akatab,serif"  , fontSize: { xs: "1.1rem", sm: "1rem", md: "1.3rem" }}}
                       dangerouslySetInnerHTML={{
                __html: `   Planning a wedding in <strong>Madhya Pradesh</strong> or anywhere in <strong>India?</strong>Let <strong>
                        Poornam Events</strong> be your trusted partner in joy, chaos, and celebration.`,
              }}
            />
                   
                </Grid>
                  
        </>
       
    )
}

export default Planner;