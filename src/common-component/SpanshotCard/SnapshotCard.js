// src/common-components/SnapshotCard.js

import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  IconButton, 
  Stack, Chip
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Subtitles } from '@mui/icons-material';

export default function SnapshotCard({ avatarSrc, title,Subtitles, imageSrc, caption, tags = []  }) {
  return (
    <Card sx={{ m: 2, boxShadow: 3, textAlign: "left" }}>
      <CardHeader
        avatar={<Avatar src={avatarSrc}  />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
       Subtitles={Subtitles}
      />

      <CardMedia
        component="img"
        height="300"
        image={imageSrc}
        alt="Instagram post"
      />

      <CardContent>
        <Typography variant="body2" color="text.primary">
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
