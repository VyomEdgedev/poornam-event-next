'use client';
import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Card, CardMedia, Chip, IconButton,
  CircularProgress
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import axios from 'axios';
import { apiClient } from '@/lib/api-client';

const cardData = {
  image: "/SubBlog.png",
  category: "Budget & Planning",
  title: "Shaadi Mein Budget Toh Hai, Par Planning Kaha Hai?",
  author: "Author",
  date: "02-07-2025"
};

const BlogCard = () => {
 const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get('/api/blogs/event');
          console.log(response);
        const data = response.data.blogs;
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          setPosts([]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  // if (loading) return <CircularProgress sx={{ m: 5 }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;
  return (
    <Box  display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            px={{ xs: 2, sm: 6, md: 10 }}
            py={5}>
               {posts.map((post, idx) => (
      <Card
        sx={{
          position: 'relative',
          borderRadius: 2,
          width: { xs: '100%', sm: "100%", md: "100%", lg: "74%", xl: "74%" },
          height: 449,
          overflow: 'hidden'
        }}
      >
        <CardMedia
          component="img"
          image={post.featuredImage?.url}
          alt={post.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Share icon top-right */}
        <IconButton  data-testid="notify-button"
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
            // bgcolor: 'rgba(0,0,0,0.4)',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' }
          }}
        >
          <ShareIcon   data-testid="notify-button"/>
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
             frontFamily: "Akatab,Sans-serif",
            }}
          >
            Category: {post.category?.name || "N/A"}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 600,
              frontFamily: "Akatab,Sans-serif",
            }}
          >
            {post.title}

          </Typography>
          <Chip
            label={`${post.authorName || "Author"} | ${new Date(post.createdAt).toLocaleDateString('en-GB')}`}
            variant="outlined"
            sx={{
              mt: 1,
              color: 'white',
              borderColor: 'white',
              fontSize: '0.8rem',
              frontFamily: "Akatab,Sans-serif",
            }}
          />
        </Box>
      </Card>
           ))}
    </Box>

  );
};

export default BlogCard;
