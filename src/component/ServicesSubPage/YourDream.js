import React, { useContext } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { loaderContext } from "@/contextApi/loaderContext";

const YourDream = ({ Blogs }) => {
  const router = useRouter();
  const {loading ,setLoading} = useContext(loaderContext);

  const handleNaviagate =  (path)=>{
    setLoading(true);
    router.push(path)
  }
  
  const relatedBlogs=Blogs; 
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        component="h2"
        align="center"
        sx={{
          fontWeight: "400",
          mb: 2,
          fontFamily: "Gloock,serif",
        }}
      >
        {`Real Talk About  ${relatedBlogs[0]?.category?.name}`}
      </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2, lg: 6, xl: 7 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {relatedBlogs?.map((blog, index) => (
            <Grid item key={blog._id || index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
                elevation={1}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 14,
                    textAlign: "center",
                    minHeight: { xs: 250, sm: 280, md: 300 },
                  }}
                >
                  <Image
                    src={blog.featuredImage?.url || "/YourDream1.png"}
                    alt={blog.alt || "Royal Rajasthani Theme"}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <CardContent>
                  <Typography
                    component="h6"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "400",
                    }}
                  >
                    {blog.meta.title}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "500",
                      color: "#000000",
                      mb: 2,
                    }}
                  >
                    {/* {blog.meta.description} */}
                  </Typography>
                  <CustomButton
                    onClick={() =>handleNaviagate(`/blog/${blog.uid}`)}
                  >
                    Read More
                  </CustomButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
  );
};

export default YourDream;
