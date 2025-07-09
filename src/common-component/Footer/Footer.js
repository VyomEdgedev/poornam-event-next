import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <Box>
      {/* Top dark blue section */}
      <Box sx={{ backgroundColor: "#011d4a", color: "#E4E4E4", pt: 4, pb: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{

            "@media (min-width:600px)": {
              justifyContent: "flex-start"
            },
            "@media (min-width:900px)": {
              justifyContent: "center"
            },
          }}>
            {/* Logo and About - 50% width on desktop */}
            <Grid
              item
              xs={12}
              sx={{
                width: "100%",
                "@media (min-width:600px)": {
                  width: "100%",
                },
                "@media (min-width:900px)": {
                  width: "30%", // 900px se upar full width
                },
              }}
            >
              <Box sx={{ mb: 2 }}>
                <img src="/logo.png" alt="Logo" width="100" />
              </Box>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", lineHeight: 1.6, fontFamily:"Akatab,Sans-serif" }}
              >
                Born from a dream in 2017, Poornam Events is where traditions
                meet timeless celebration. We don’t just plan weddings — we
                create moments that live forever.
              </Typography>
            </Grid>

            {/* Quick Links - 16.6% on desktop */}
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ textAlign: "left", width: "130px", padding: "10px", display: "grid", gap: "1px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 600,  color:"#E4E4E4", fontFamily:"Akatab,Sans-serif" }}
                >
                  Quick Links
                </Typography>
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/aboutus" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "Connect us", href: "/connectus" },
                ].map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    sx={{ fontSize: "13px", mb: 0.5 , color:"#E4E4E4"}}
                  >
                    <Link key={item} href={item.href} sx={{ color: "white", underline: "hover" }} >{item.label}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={4} md={2} >
              <Box sx={{ textAlign: "left", width: "200px", padding: "10px", display: "grid", gap: "5px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 600 }}
                >
                  Services
                </Typography>
                {[
                  "Destination Weddings",
                  "Intimate Wedding",
                  "Themed & Designer Weddings",
                  "Artist Management",
                  "Prewedding & Photography",
                  "Special Effects",
                ].map((service) => (
                  <Typography
                    key={service}
                    variant="body2"
                    sx={{ fontSize: "13px", mb: 0.5 }}
                  >
                    <Link href="#" color="inherit" underline="hover">
                      {service}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ textAlign: "left", width: "228px", padding: "10px", display: "grid", gap: "5px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 600 }}
                >
                  Contact
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "13px" }}>
                  Phone: 9610366885
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "13px", mb: 1 }}>
                  Email:{" "}
                  <Link
                    href="mailto:info@poornamevents.com"
                    color="inherit"
                    underline="hover"
                  >
                    info@poornamevents.com
                  </Link>
                </Typography>
                <Box>
                  {[
                    { icon: FacebookIcon, url: "https://facebook.com" },
                    { icon: InstagramIcon, url: "https://instagram.com" },
                    { icon: TwitterIcon, url: "https://twitter.com" },
                    { icon: YouTubeIcon, url: "https://youtube.com" },
                  ].map(({ icon: Icon, url }, i) => (
                    <IconButton
                      key={i}
                      sx={{ color: "red", p: 0.5 }}
                      size="small"
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Box>

                {/* <Box>
                  {[Facebook, Instagram, Twitter, YouTube].map((Icon, i) => (
                    <IconButton
                      key={i}
                      sx={{ color: "red", p: 0.5 }}
                      size="small"
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Box>*/}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom mustard section */}
      <Box sx={{ backgroundColor: "#d59700", color: "#000D1F", py: 1.5 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Left - Copyright */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "13px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                © 2025 Poornam Events.
              </Typography>
            </Grid>

            {/* Center - Policies */}
            <Grid item xs={12} md={4} >
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", textAlign: "center" ,}}
              >
                <Link href="/disclaimer" underline="hover" color="inherit">
                  Disclaimer
                </Link>{" "}
                |
                <Link href="/privacy" underline="hover" color="inherit" sx={{ mx: 1 }}>
                  Privacy Policy
                </Link>{" "}
                |
                <Link href="/terms" underline="hover" color="inherit">
                  T & C
                </Link>{" "}
                |
                <Link href="/cookies" underline="hover" color="inherit" sx={{ ml: 1 }}>
                  Cookies
                </Link>
              </Typography>
            </Grid>

            {/* Right - Developer logo */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ textAlign: { xs: "center", md: "right" } }}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: "13px" }}
              >
                Developed by{" "}
                <Link
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 600 }}
                >
                  Vyomedge
                </Link>
              </Typography>
              <Box component="span" sx={{ ml: 0} }>
                <a
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <img src="./developer.png" alt="Developer Logo" height={24} />
                </a>
              </Box> 
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
