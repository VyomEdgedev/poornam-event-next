import React, { useContext } from "react";
import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Loader from "@/common-component/loader/Loader";
import { loaderContext } from "@/contextApi/loaderContext";
import { useRouter } from "next/router";

export default function AboutSection() {
  const {loading ,setLoading} = useContext(loaderContext);

  const router = useRouter();

  if (loading) return <Loader />;

  const handleNavigate = () => {
    setLoading(true);
    router.push("/aboutus");
  };


  return (
    <Container>
      <Box
        sx={{
          bgcolor: "#fff",
          marginTop: "10px",
          marginBottom: "10px",
          py: { xs: 3, md: 5 },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "Gloock, serif",
            fontWeight: "400",
            color: "#000D1F",
            mb: 3,
          }}
        >
          {`Crafting Weddings with Soul Since 2017`}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Akatab,Sans-serif",
            color: "#000000",
            fontWeight: "400",
            mb: 2,
          }}
        >
          {` At Poonam Events, we turn your wedding dreams into unforgettable memories. Founded by `}
          <strong>Aadi Jain</strong>
          {`, a self-taught planner with a passion for perfection, and `}
          <strong>Richi Anand Jain</strong>
          {`, the creative spirit behind our signature style — we've been planning heartfelt celebrations across India since 2017.`}
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Akatab,Sans-serif",
            fontWeight: "400",
            mb: 4,
          }}
        >
          {`  From intimate gatherings to grand destination weddings, our team
          brings emotion, elegance, and flawless execution to every event.`}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" } }}>
          <CustomButton onClick={handleNavigate}>
                {`Meet Our Story`}
          </CustomButton>
        </Box>
      </Box>
    </Container>
  );
}
