import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { apiClient } from "@/lib/api-client";
import Image from "next/image";

const WhyPoornam = ({ poornamId }) => {
  const [whyPoornamData, setWhyPoornamData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWhyPoornam = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(
          `api/service/getServicePageById/${poornamId}/event`
        );
        console.log("WhyPoornam API response:", response);

        if (response?.data?.whyPoornam) {
          const { title, description } = response.data.whyPoornam;
          setWhyPoornamData({
            title: title || "",
            description: description || "",
          });
        }
      } catch (err) {
        console.error("Error fetching WhyPoornam data:", err);
        setWhyPoornamData({
          title: "",
          description: "",
        });
      } finally {
        setLoading(false);
      }
    };

    if (poornamId) {
      fetchWhyPoornam();
    } else {
      setLoading(false);
    }
  }, [poornamId]);
  // // Don't render anything if no data is available
  // if (loading) {
  //   return null; // or you can show a loading spinner
  // }

  // // Don't render the section if both title and description are empty
  // if (!whyPoornamData.title && !whyPoornamData.description) {
  //   return null;
  // }

  return (
    <Box
      sx={{
        // px: { xs: 10, sm: 12, md: 8, lg: 22, xl: 33 },
        py: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 2 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Gloock, Sans-serif",
                fontWeight: 400,
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.2,
                color: "#000000",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  whyPoornamData.title ||
                  `Why Poornam for<br />
                        Your Destination<br />
                        Wedding?`,
              }}
            />
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 4, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/WhyPoornam.png"
              alt="Why Poornam Illustration"
              width={130}
              height={130}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "130px",
              }}
            />
          </Grid>
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography
              component="p"
              sx={{
                fontFamily: "Akatab, Sans-serif",
                lineHeight: 1.6,
                color: "#000000",
                mx: { xs: "auto", md: 0 },
              }}
            >
              {whyPoornamData?.description ||
                `With years of experience and a personal touch, Poornam Events dedicates itself to making your destination wedding dreams come true. We tailor each experience to your needs, ensuring every detail is meticulously managed for a perfect celebration.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPoornam;
