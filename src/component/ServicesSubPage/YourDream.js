import React, { useEffect, useState } from "react";
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
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

const YourDreamData = [
  {
    id: 1,
    image: "/YourDream1.png",
    alt: "Royal Rajasthani Theme",
    title: "Udaipur",
    description: "For that royal Rajasthani Magic.",
    ctr: "Read More",
  },
  {
    id: 2,
    image: "/YourDream2.png",
    alt: "Royal Rajasthani Theme",
    title: "Goa",
    description: "For Beachside vows & sunset pheras.",
    ctr: "Read More",
  },
  {
    id: 3,
    image: "/YourDream3.png",
    alt: "Royal Rajasthani Theme",
    title: "Mahabaleshwar",
    description: "For mountain serenity & mity mornings.",
    ctr: "Read More",
  },
];

const YourDream = ({ blogId }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get(
          `api/service/getServicePageById/${blogId}/event`
        );
        console.log("API blogs:", response);
        if (response?.data?.relatedBlogs) {
          setBlogs(response.data.relatedBlogs);
        } else {
          setBlogs([]);
        }
        if (response?.data?.relatedBlogs[0]?.category?.name) {
          setCategoryName(response.data.relatedBlogs[0]?.category.name);
        } else {
          setCategoryName();
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    if (blogId) {
      fetchBlogs();
    }
  }, [blogId]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{
          fontWeight: "400",
          mb: 2,
          fontFamily: "Gloock,serif",
          fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
        }}
      >
        {`Real Talk About  ${categoryName}`}
      </Typography>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2, lg: 6, xl: 7 }}
          justifyContent="center"
        >
          {blogs.map((blog, index) => (
            <Grid item key={blog._id || index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "95%",
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
                  {/*  <img
                                    src={image}
                                    alt={alt}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />*/}
                </Box>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "400",
                      fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1rem" },
                    }}
                  >
                    {blog.meta.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "500",
                      color: "#000000",
                      fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.125rem" },
                      mb: 2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {/* {description} */}
                  </Typography>
                  <CustomButton
                    onClick={() => router.push(`/blog/${blog.uid}`)}
                  >
                    Read More
                  </CustomButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default YourDream;
