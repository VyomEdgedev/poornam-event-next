import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, IconButton, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Snapshot() {
    return (
        <Grid 
        container 
        textAlign="center"
       width= 'fit-content'
        margin= '0 auto' 
        
>
            <Grid >
                <Typography sx={{ fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.5rem" }, fontFamily: "Gloock" }}
                    variant="h3" fontWeight="bold" gutterBottom>
                   Life at Poornam</Typography>
                <Typography sx={{ fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" }, fontFamily: "Akatab" }}
                    variant="subtitle1" gutterBottom>
                  Behind the scenes of our creative hustle.</Typography>
                <Card sx={{ m: 2, boxShadow: 3, textAlign: "left" }}>
                    {/* Header: Avatar + User Info */}
                    <CardHeader
                        avatar={
                            <Avatar src="/images/profile.jpg" alt="user" />
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Team Poornam"
                        
                    />

                    {/* Post Image */}
                    <CardMedia
                        component="img"
                        height="300"
                        image="./snapshot2.png" // replace with your post image
                        alt="Instagram post"
                    />

                    {/* Post caption/content */}
                    <CardContent>
                        <Typography variant="body2" color="text.primary" >
                            Laughter, chai, and dance practice!
                        </Typography>
                    </CardContent>

                  
                </Card>
            </Grid>

        </Grid>

    );
}
