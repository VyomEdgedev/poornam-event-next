import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Chip,
  IconButton
} from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import Link from 'next/link';

const postsData = [
  {
    id: 1,
    category: "Real Weddings",
    title: "Beach Bliss",
    description: "Beautiful beach wedding setup",
    publishDate: "October 10, 2023",
    videoThumbnail: true,
    image: "/recent.png"
  },
  {
    id: 2,
    category: "Planning Tips",
    title: "Garden Elegance",
    description: "Stunning garden flowers",
    publishDate: "October 5, 2023",
    videoThumbnail: true,
    image: "/recent2.png"
  },
  {
    id: 3,
    category: "Theme & Decor",
    title: "Rustic Romance",
    description: "Rustic decor inspiration",
    publishDate: "September 20, 2023",
    videoThumbnail: true,
    image: "/recent3.png"
  }
];

const RecentPosts = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>

      <Typography

        component="h2"
        align="center"
        sx={{
          mb: 3,
          fontWeight: 400,
          color: '#000000',
          fontFamily: 'Gloock,serif'
        }}
      >
        {` Recent Posts`}
      </Typography>

      <Grid container spacing={4} marginBottom={5} alignContent={"center"} justifyContent={"center"}>

        {postsData.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}  >
            <Link href={"https://www.youtube.com/@poornam-wedding-planner"} target='_blank' passHref legacyBehavior>
              <Card
                component={'a'}
                target='_blank'
                sx={{
                  textDecoration: "none",
                  width: '267px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: "Akatab,Sans-serif",
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-2px)'
                  },
                  cursor: 'pointer',

                }}
              >


                <Box sx={{ position: 'relative', }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      height: 280,
                      objectFit: 'cover'
                    }}
                  />


                  <Chip
                    component="p"
                    label={post.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      backgroundColor: "#ddd",
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: 500,
                      cursor: 'pointer',
                      borderRadius: 0,
                      borderBottomRightRadius: "5px",
                      opacity: 0.8
                    }}
                  />


                  {post.videoThumbnail && (
                    <IconButton
                      aria-label='play'
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.9)'
                        },
                        width: 60,
                        height: 42,
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                      component="a"
                    >
                      <PlayArrow sx={{ fontSize: 30 }} color='inherit' />
                    </IconButton>
                  )}


                </Box>

                <CardContent sx={{ pt: 2 }}>
                  <Typography

                    component="h6"
                    sx={{
                      mb: 1,
                      fontWeight: 400,
                      color: '#000000',
                      fontFamily: "Akatab,Sans-serif",
                      cursor: 'pointer'
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography

                    component="h6"
                    sx={{
                      width: '100%',
                      color: '#000000',
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: 500
                    }}
                  >
                    Published on {post.publishDate}
                  </Typography>
                </CardContent>
              </Card>
            </Link>


          </Grid>
        ))}

      </Grid>
    </Container>
  );
};

export default RecentPosts;




