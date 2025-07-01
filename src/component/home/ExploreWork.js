"use client";
import React, { useState } from "react";
import { Box, Typography, Button, Grid, Stack } from "@mui/material";

const filters = [
  "All",
  "Wedding",
  "Corporate",
  "Private Events",
  "Decoration",
  "Catering",
];

const gallery = [
  {
    img: "/explore1.jpg",
    category: "Wedding",
  },
  {
    img: "/explore1.jpg",
    category: "Decoration",
  },
  {
    img: "/explore1.jpg",
    category: "Catering",
  },
];

export default function ExploreWork() {
  const [selected, setSelected] = useState("Wedding");

  return (
    <Box
      sx={{ px: { xs: 2, md: 5 }, py: { xs: 6, md: 5 } }}
    >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{ columnGap: { md: "150px" }  , rowGap:{xs:'20px'}}}
      >
        {/* Left Side - Title + Filters */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: `'Georgia', serif`,
              color: "#0D1A46",
              mb: 3,
            }}
          >
            Explore <br /> Our Work
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setSelected(filter)}
                variant={selected === filter ? "contained" : "outlined"}
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: 50,
                  borderColor: "#F7C35F",
                  color: selected === filter ? "#fff" : "#F7C35F",
                  backgroundColor:
                    selected === filter ? "#0D1A46" : "transparent",
                  fontWeight: 500,
                  px: 2,
                  "&:hover": {
                    backgroundColor:
                      selected === filter ? "#0D1A46" : "#F7C35F22",
                    borderColor: "#F7C35F",
                  },
                }}
              >
                {filter}
              </Button>
            ))}
          </Stack>
        </Grid>

        {/* Right Side - Images */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: { xs: "auto", md: "unset" },
              whiteSpace: { xs: "nowrap", md: "normal" },
              scrollBehavior: "smooth",
              pb: { xs: 2, md: 0 },
            }}
          >
            {gallery.map((item, index) => (
              <Box
                key={index}
                component="img"
                src={item.img}
                alt={`Gallery ${index}`}
                sx={{
                  height: 260,
                  width: 260,
                  minWidth: 260,
                  borderRadius: 2,
                  objectFit: "cover",
                  border: index === 0 ? "3px solid #007FFF" : "none",
                  flexShrink: 0,
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
