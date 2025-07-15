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


const postsData = [
  {
    id: 1,
    category: "Real Weddings",
    title: "Beach Bliss",
    description: "Beautiful beach wedding setup",
    publishDate: "October 10, 2023",
    videoThumbnail: true,
    image: "/api/placeholder/400/300" 
  },
  {
    id: 2,
    category: "Planning Tips",
    title: "Garden Elegance",
    description: "Stunning garden flowers",
    publishDate: "October 5, 2023",
    videoThumbnail: true,
    image: "/api/placeholder/400/300"
  },
  {
    id: 3,
    category: "Theme & Decor",
    title: "Rustic Romance",
    description: "Rustic decor inspiration",
    publishDate: "September 20, 2023",
    videoThumbnail: true,
    image: "/api/placeholder/400/300"
  }
];

const RecentPosts = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{
          mb: 6,
          fontWeight: 400,
          fontSize: { xs: '2.5rem', md: '3rem' },
          color: '#000000',
          fontFamily: 'Gloock,serif'
        }}
      >
       {` Recent Posts`}
      </Typography>

     
      <Grid container spacing={4} alignContent={"center"} justifyContent={"center"}>
        {postsData.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                width:'267px',
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
                }
              }}
            >
            
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="div"
                  sx={{
                    height: 280,
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                 
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: '#0000000D',
                      fontSize: '0.65rem',
                      fontWeight: 500
                      
                    }}
                  />
                  
             
                  {post.videoThumbnail && (
                    <IconButton  data-testid="notify-button"
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.9)'
                        },
                        width: 60,
                        height: 42,
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 30 }} />
                    </IconButton>
                  )}
                  
                 
                  <Typography
                    variant="caption"
                    sx={{
                      position: 'absolute',
                      bottom: 70,
                      // left: 13,
                      // right: 12,
                      color: '#000000',
                      fontSize: '0.8rem'
                    }}
                  >
                    {post.description}
                  </Typography>
                </CardMedia>
              </Box>

              
              <CardContent sx={{pt: 2 }}>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 400,
                    color: '#000000',
                    fontSize: '0.85em'
                  }}
                >
                  {post.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    width: '100%',
                    color: '#000000',
                    fontSize: '1rem',
                    lineHeight: 1.4,
                    
                  }}
                >
                  Published on {post.publishDate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RecentPosts;