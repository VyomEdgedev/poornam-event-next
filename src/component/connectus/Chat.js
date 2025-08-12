import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import ConnectModal from "@/common-component/modal/ConnectModal";

function Chat() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    setOpen(true);
  };
  const theme = useTheme();
  const isSmOrBelow600 = useMediaQuery(theme.breakpoints.down("sm")); // sm = 600px

  return (
    <Box sx={{ bgcolor: "#FFF7E4" ,py:3}}>
      <Container>
        <Grid
          container
          //   justifyContent="space-evenly"
            alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
          //   direction={isSmOrBelow600 ? "column" : "row"}
        >
          <ConnectModal open={open} setOpen={setOpen} />
          {/* Left Content */}
          <Grid item size={{ xs: 12, sm: 5, md: 6 }} textAlign={{xs:"center",sm:"start",md:"start"}}>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                color: "#000",
              }}
            >
              {` Prefer Talking?`}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                mb: 2,
                color: "#000",
              }}
            >
              {`  We Do Too!`}
            </Typography>
            <CustomButton onClick={handleSubmit} data-testid="notify-button">
              {`  Start Chat`}
            </CustomButton>
          </Grid>

          {/* Right Content */}
          <Grid
            item
            size={{ xs: 12, sm: 7, md: 6 }}
            container
            // ✅ Changes here
            // bgcolor={"red"}
            spacing={{xs:5,sm:4,md:10,lg:15}}
            justifyContent={{xs:"center",sm:"center",md:"flex-end"}}
            alignItems="center"
          >
            {/* Call Us */}
            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <Grid
                component="img"
                src="/chat.png"
                alt="Call"
                sx={{ padding: 2 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontFamily: "Akatab, sans-serif" }}
              >
                {`  Call Us`}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontWeight: 700, fontFamily: "Akatab, sans-serif" }}
              >
                {` +91 9519066885`}
              </Typography>
            </Grid>

            {/* WhatsApp */}
            <Grid item xs={12} sm={6} md={6} textAlign="center">
              <Grid
                component="img"
                src="/chat.png"
                alt="WhatsApp"
                sx={{ padding: 2 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontFamily: "Akatab, sans-serif", color: "#0D1A46" }}
              >
                {`   WhatsApp`}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontFamily: "Akatab, sans-serif",
                  color: "#0D1A46",
                }}
              >
                {`  +91 9519066885`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Chat;
