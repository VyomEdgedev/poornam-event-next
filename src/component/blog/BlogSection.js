import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { apiClient } from "@/lib/api-client";
import Link from "next/link";

// const blogData = {
//   title: "Latest From the Blog",
//   viewAllText: "View All Blogs",
// };

// const BlogSection = ({posts, setPosts , setCategories}) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const isBelow1150 = useMediaQuery("(max-width:1150px),(spacing:50px)");
//   const responsiveSpacing = isBelow1150
//     ? { xs: 2, sm: 3, md: 2, lg: 8, xl: 25 } 
//     : { xs: 2, sm: 3, md: 2, lg: 8, xl: 25 }; 
//   const router = useRouter();
  
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await apiClient.get('/api/blogs/all/event'); 
//         const data = response.data.blogs;
//         if (Array.isArray(data)) {
//           setPosts(data);
//         } else {
//           setPosts([]);
//         }
//          const categoryrepons = await apiClient.get('/api/category/getuserpanel/event');
//          setCategories(categoryrepons.data)
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, [setPosts, setCategories]);

//   const sortedPosts = [...posts]
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, 2);


//   if (loading) return null;
//   if (error) return null;
//   if (!sortedPosts.length) return null;

//   return (
//     <Box
//       sx={{
//         py: 5,
//         px: { xs: 2, sm: 8, md: 5, lg: 10, xl: 3 },
//         backgroundColor: "#fff",
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* Header */}
//         <Box sx={{ textAlign: "center", mb: 4 }}>
//           <Typography
           
//             component="h2"
//             sx={{
//               fontFamily: "Gloock,serif",
//               fontWeight: 400,
//               color: "#000000",
//               mb: 3,
             
//             }}
//           >
//             {blogData.title}
//           </Typography>
//         </Box>

//         <Grid
//           container
//           spacing={responsiveSpacing}
//           alignItems={isBelow1150 ? "center" : "center"}
//           justifyContent={isBelow1150 ? "center" : "center"}
//           sx={{ px: 0 }}
//         >
//           {sortedPosts.map((post, idx) => (
//             <Grid item xs={12} sm={8} md={6} key={post._id || idx}>
//               <Box>
//                 <Link href={`/blog/${post.uid}`} 
//                 style={{textDecoration:"none"}}
//                 >
//                 <Card 
//                 // onClick={() => router.push(`/blog/${post.uid}`)}
//                   sx={{
//                     width: {
//                       xs: "350px",
//                       sm: "400px",
//                       md: "460px",
//                       lg: "460px",
//                       xl: "460px",
//                     },
//                     height: "auto",
//                     display: "flex",
//                     flexDirection: "column",
//                     borderRadius: 1,
//                     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//                     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                     mx: "auto",
//                     "&:hover": {
//                       transform: "translateY(-5px)",
//                       boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
//                     },
//                     cursor: "pointer",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       width: {
//                         xs: "100%",
//                         sm: "100%",
//                         md: "460px",
//                         lg: "460px",
//                         xl: "460px",
//                       },
//                       height: {
//                         xs: "250px",
//                         sm: "250px",
//                         md: "300px",
//                         lg: "350px",
//                         xl: "350px",
//                       },
//                       margin: "0 auto",
//                     }}
//                   >
//                     <Image
//                       src={post.featuredImage?.url}
//                       alt={post.featuredImage?.altText}
//                       fill
//                       style={{
//                         objectPosition: "center",
//                       }}
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     />
//                   </Box>
//                   <Typography
                    
//                     component="h6"
//                     sx={{
//                       fontWeight: 400,
//                       fontFamily: "Akatab,Sans-serif",
//                       color: "#000000",
//                       mb: 1,
                     
//                       textAlign: "cover",
//                       pt: 2,
//                       px: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
//                     }}
//                   >
//                     {post.title}
//                   </Typography>
//                   <CardContent sx={{ p: 1.5, flexGrow: 1 }}>
//                     <Typography
//                     component={"h6"}
//                       label={post.category}
//                       sx={{
                      
//                         fontFamily: "Akatab,Sans-serif",
//                         color: "#00000080",
//                         textAlign: "center",
//                         fontWeight: 500,
//                         mb: 1.5,
//                         height: 24,
//                       }}
//                     >
//                       {post.category?.name}
//                     </Typography>

//                     <Typography
                     
//                       component="h6"
//                       sx={{
//                         color: "#000000",
                      
//                         fontWeight: 400,
//                         fontFamily: "Akatab,Sans-serif",
                    
                       
//                         fontWeight: "bold",
//                         textAlign: "center",
//                       }}
//                     >
//                       {post.authorName}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//                 </Link>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default BlogSection;


const BlogSection = ({ posts }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isBelow1150 = useMediaQuery("(max-width:1150px)");

  const responsiveSpacing = isBelow1150
    ? { xs: 2, sm: 3, md: 2, lg: 8, xl: 25 }
    : { xs: 2, sm: 3, md: 2, lg: 8, xl: 25 };

  const sortedPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);

  if (!sortedPosts.length) return null;
  return (
    <Box sx={{ py: 5, px: { xs: 2, sm: 8, md: 5, lg: 10, xl: 3 }, backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "Gloock,serif",
              fontWeight: 400,
              color: "#000000",
              mb: 3,
            }}
          >
            Wedding Blog
          </Typography>
        </Box>

        <Grid container spacing={responsiveSpacing} alignItems="center" justifyContent="center">
          {sortedPosts?.map((post, idx) => (
            <Grid item xs={12} sm={8} md={6} key={post._id || idx}>
                   <Box>
                <Link href={`/blog/${post.uid}`} 
                style={{textDecoration:"none"}}
                >
                <Card 
                // onClick={() => router.push(`/blog/${post.uid}`)}
                  sx={{
                    width: {
                      xs: "350px",
                      sm: "400px",
                      md: "460px",
                      lg: "460px",
                      xl: "460px",
                    },
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 1,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    mx: "auto",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "460px",
                        lg: "460px",
                        xl: "460px",
                      },
                      height: {
                        xs: "250px",
                        sm: "250px",
                        md: "300px",
                        lg: "350px",
                        xl: "350px",
                      },
                      margin: "0 auto",
                    }}
                  >
                    <Image
                      src={post.featuredImage?.url}
                      alt={post.featuredImage?.altText}
                      fill
                      style={{
                        objectPosition: "center",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Box>
                  <Typography
                    
                    component="h6"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Akatab,Sans-serif",
                      color: "#000000",
                      mb: 1,
                     
                      textAlign: "cover",
                      pt: 2,
                      px: { xs: 2, sm: 2, md: 2, lg: 2, xl: 2 },
                    }}
                  >
                    {post.title}
                  </Typography>
                  <CardContent sx={{ p: 1.5, flexGrow: 1 }}>
                    <Typography
                    component={"h6"}
                      label={post.category}
                      sx={{
                      
                        fontFamily: "Akatab,Sans-serif",
                        color: "#00000080",
                        textAlign: "center",
                        fontWeight: 500,
                        mb: 1.5,
                        height: 24,
                      }}
                    >
                      {post.category?.name}
                    </Typography>

                    <Typography
                     
                      component="h6"
                      sx={{
                        color: "#000000",
                      
                        fontWeight: 400,
                        fontFamily: "Akatab,Sans-serif",
                    
                       
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {post.authorName}
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default BlogSection;
