'use client';
import React from 'react';
import {
  Box, Typography, Card, CardMedia, Chip, IconButton
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const cardData = {
  image: "/SubBlog.png",
  category: "Budget & Planning",
  title: "Shaadi Mein Budget Toh Hai, Par Planning Kaha Hai?",
  author: "Author",
  date: "02-07-2025"
};

const BlogCard = () => {
  return (
    <Box  display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            px={{ xs: 2, sm: 6, md: 10 }}
            py={5}>
      <Card
        sx={{
          position: 'relative',
          borderRadius: 2,
          width: { xs: '100%', sm: 500, md: 987 },
          height: 449,
          overflow: 'hidden'
        }}
      >
        <CardMedia
          component="img"
          image={cardData.image}
          alt={cardData.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Share icon top-right */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.4)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }
          }}
        >
          <ShareIcon />
        </IconButton>

        {/* Overlay Text */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            p: 2,
            bgcolor: 'rgba(0,0,0,0.4)',
            color: 'white'
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              fontFamily: 'Akatab'
            }}
          >
            Category: {cardData.category}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 600,
              fontFamily: 'Akatab'
            }}
          >
            {cardData.title}
          </Typography>
          <Chip
            label={`${cardData.author} | ${cardData.date}`}
            variant="outlined"
            sx={{
              mt: 1,
              color: 'white',
              borderColor: 'white',
              fontSize: '0.8rem',
              fontFamily: 'Akatab'
            }}
          />
        </Box>
      </Card>
    </Box>

  );
};

export default BlogCard;
