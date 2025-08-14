import React, { useState } from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import ConnectModal from "@/common-component/modal/ConnectModal";

const tools = [
  {
    title: "Budget Calculator",
    icon: "/cal.png", // Replace with your actual path or image URL
  },

  {
    title: "Top 10 Mandap Themes for 2025",
    icon: "/Vector.png",
  },
  {
    title: "Wedding Checklist",
    icon: "/checklist0.png",
  },
];

export default function ResourcesSection() {
  const [open, setOpen] = useState(false);
  const handleDownloadClick = () => {
    setOpen(true);
  };
  return (
    <Box sx={{ backgroundColor: "#fff" ,py:3}}>
      <Container>
        <ConnectModal open={open} setOpen={setOpen} />
        <Grid
          container
          // spacing={{ xs: 6, sm: 6, md: 5, lg: 45 }}
          alignItems="center"
          justifyContent={"space-between"}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {/* Left Section */}
          <Grid
            item
            size={{ xs: 12, sm: 5, md: 5, lg: 5 }}
            textAlign={{xs:"center",sm:"left"}}
          >
            <Typography
              component="h2"
              sx={{  fontFamily: "Gloock, serif", fontWeight: 400, mb: 1 }}
            >
              {`Resources`}
            </Typography>
            <Typography  component="p" color="#000000">
              {`Love From Our Couples`}
            </Typography>
            <Typography
              component="h5"
               sx={{  fontFamily: "Akatab,Sans-serif",fontWeight: 600 , mt: 2, }}
            >
           {`   Grab your free tools:`}
            </Typography>
            <Button
              onClick={handleDownloadClick}
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#E1A900",
                borderRadius: "25px",
                px: 3,
                py: 1,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#c79400",
                },
              }}
            >
              Download Your Kit Now
            </Button>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            // size={{ xs: 12, sm: 5, md: 5, lg: 6 }}
            size={{ xs: 12, sm: 7, md: 7, lg: 7 }}
            mt={{xs:5,sm:0}}
          >
            <Grid
              container
              spacing={{ xs: 2, sm: 4, md: 4, lg: 4 }}
              justifyContent={"space-between"}
              flexWrap={"nowrap"}
            >
              {tools.map((tool, index) => (
                <Grid item xs={12} sm={4} key={index} textAlign="center">
                  <Box
                    component="img"
                    src={tool.icon}
                    alt={tool.title}
                    sx={{ height: 100, mb: 2 }}
                  />
                  <Typography
                    component="h6"
                    
                    sx={{  fontFamily: "Akatab,Sans-serif",fontWeight: 500 }}
                  >
                    {tool.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
