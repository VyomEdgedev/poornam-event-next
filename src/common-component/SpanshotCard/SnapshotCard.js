// src/common-components/SnapshotCard.js

import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  IconButton, 
  Stack, Chip,
  Box
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Subtitles } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function SnapshotCard({ avatarSrc, title,Subtitles, imageSrc, caption, tags = []  }) {
  const [hover, setHover] = useState(false);
  return (
    <Card sx={{ m: 2, boxShadow: 0, textAlign: "left",position: 'relative',}}>
      <CardHeader
        avatar={<Avatar src={avatarSrc}  />}
        
        title={title}
       Subtitles={Subtitles}
      />
<Box
        sx={{ position: 'relative' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >      
      <CardMedia
        component="img"
        height="400"
        image={imageSrc}
        alt="Instagram post"
        
        
      />
 
        {hover && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              
            }}
            onClick={() => window.open('https://www.instagram.com/poornamevents/', '_blank')}
          >
            <InstagramIcon sx={{ color: 'white', fontSize: 60 }} />
          </Box>
        )}
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.primary" mb={1}>
          {caption}
        </Typography>
         <Stack direction="row" spacing={1} flexWrap="wrap">
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="filled" size="small" />
           
          ))}
        </Stack>
      </CardContent>

    </Card>
  );
}
