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
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
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
                cursor: 'pointer'
              }}
            >

             
              <Box sx={{ position: 'relative' }}>
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
                    top: 12,
                    left: 12,
                    backgroundColor: '#0000000D',
                   fontFamily: "Akatab,Sans-serif",
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                />

               
                {post.videoThumbnail && (
                  <Link href={"https://www.youtube.com/@poornam-wedding-planner"} target="_blank" passHref legacyBehavior>
                    <IconButton
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
                      <PlayArrow sx={{ fontSize: 30 }} color='inherit'/>
                    </IconButton>
                  </Link>
                )}

                
                {/* <Typography
                  variant="caption"
                  component="p"
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    left: 12,
                    color: '#000000',
                    fontSize: '0.8rem',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    padding: '2px 6px',
                    borderRadius: 1
                  }}
                >
                  {post.description}
                </Typography> */}
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
                 
                  component="p"
                  sx={{
                    width: '100%',
                    color: '#000000',
                   fontFamily: "Akatab,Sans-serif",
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




// Api
// import React from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Container,
//   Chip,
//   IconButton
// } from '@mui/material';
// import { PlayArrow } from '@mui/icons-material';


// const postsData = [
//   {
//     id: 1,
//     category: "Real Weddings",
//     title: "Beach Bliss",
//     description: "Beautiful beach wedding setup",
//     publishDate: "October 10, 2023",
//     videoThumbnail: true,
//     image: "/recent.png"
//   },
//   {
//     id: 2,
//     category: "Planning Tips",
//     title: "Garden Elegance",
//     description: "Stunning garden flowers",
//     publishDate: "October 5, 2023",
//     videoThumbnail: true,
//     image: "/recent2.png"
//   },
//   {
//     id: 3,
//     category: "Theme & Decor",
//     title: "Rustic Romance",
//     description: "Rustic decor inspiration",
//     publishDate: "September 20, 2023",
//     videoThumbnail: true,
//     image: "/recent3.png"
//   }
// ];

// const RecentPosts = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 2 }}>

//       <Typography
//         variant="h2"
//         component="h2"
//         align="center"
//         sx={{
//           mb: 3,
//           fontWeight: 400,
//           fontSize: { xs: '2.5rem', md: '3rem' },
//           color: '#000000',
//           fontFamily: 'Gloock,serif'
//         }}
//       >
//         {` Recent Posts`}
//       </Typography>


//       <Grid container spacing={4} marginBottom={5} alignContent={"center"} justifyContent={"center"}>
//         {postsData.map((post) => (
//           <Grid item xs={12} sm={6} md={4} key={post.id}>
//             <Card
//               sx={{
//                 width: '267px',
//                 height: '100%',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 fontFamily: "Akatab,Sans-serif",
//                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                 borderRadius: 2,
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   boxShadow: '0 8px 15px rgba(0, 0, 0, 0.15)',
//                   transform: 'translateY(-2px)'
//                 },
//                 cursor: 'pointer'

//               }}
//             >

//               <Box sx={{ position: 'relative' }}>
//                 <CardMedia
//                   component="div"
//                   sx={{
//                     height: 280,
//                     backgroundColor: '#e0e0e0',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     cursor: 'pointer'
//                   }}
//                 >

//                   <Chip
//                     label={post.category}
//                     size="small"
//                     sx={{
//                       position: 'absolute',
//                       top: 12,
//                       left: 12,
//                       backgroundColor: '#0000000D',
//                       fontSize: '0.65rem',
//                       fontWeight: 500,
//                       cursor: 'pointer'

//                     }}
//                   />

                    
//                   {post.videoThumbnail && (
//                     <IconButton data-testid="notify-button"
//                       sx={{
//                         backgroundColor: 'rgba(0, 0, 0, 0.8)',
//                         color: 'white',
//                         borderRadius: 2,
//                         '&:hover': {
//                           backgroundColor: 'rgba(0, 0, 0, 0.9)'
//                         },
//                         width: 60,
//                         height: 42,
//                         cursor: 'pointer'
//                       }}
//                     >
//                       <PlayArrow sx={{ fontSize: 30 }} />
//                     </IconButton>
//                   )}


//                   <Typography
//                     variant="caption"
//                     component="p"
//                     sx={{
//                       position: 'absolute',
//                       bottom: 70,
//                       // left: 13,
//                       // right: 12,
//                       color: '#000000',
//                       fontSize: '0.8rem'
//                     }}
//                   >
//                     {post.description}
//                   </Typography>
//                 </CardMedia>
//               </Box>


//               <CardContent sx={{ pt: 2 }}>
//                 <Typography
//                   variant="h6"
//                   component="h6"
//                   sx={{
//                     mb: 1,
//                     fontWeight: 400,
//                     color: '#000000',
//                     fontSize: '0.85em',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   {post.title}
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   component="p"
//                   sx={{
//                     width: '100%',
//                     color: '#000000',
//                     fontSize: '1rem',
//                     lineHeight: 1.4,

//                   }}
//                 >
//                   Published on {post.publishDate}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default RecentPosts;
