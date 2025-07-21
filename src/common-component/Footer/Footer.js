import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import { red } from "@mui/material/colors";



const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#011d4a", padding: "2px" }}>
      {/* Top dark blue section */}
      <Box sx={{ color: "#FFF1CA", pt: 4, pb: 5 }}>
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
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Box sx={{ display: "inline-block" }}>
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={100}
                      height={60}
                      style={{ height: "auto" }}

                    />
                  </Box>
                </a>
              </Link>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", lineHeight: 1.6, fontFamily: "Akatab,Sans-serif", padding: "14px" }}
              >
                {`  Born from a dream in 2017, Poornam Events is where traditions
                meet timeless celebration. We don’t just plan weddings — we
                create moments that live forever.`}
              </Typography>
            </Grid>

            {/* Quick Links - 16.6% on desktop */}
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{ textAlign: "left", width: "130px", padding: "10px", display: { xs: "contents", md: "grid" }, gap: "1px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 600, color: "#E4E4E4", fontFamily: "Akatab,Sans-serif" }}
                >
                  Quick Links
                </Typography>
                {[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/aboutus" },
                  { label: "Services", href: "/services" },
                  { label: "Portfolio", href: "/portfolio" },
                  { label: "Blogs", href: "/blog" },
                  { label: "Connect us", href: "/contact" },
                ].map((item) => (
                  <Link key={item.href} href={item.href} style={{ textDecoration: "none" }} >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "13px",
                        mb: 0.5,
                        color: "white",
                        textDecoration: "none",
                        underline: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}>
                      {item.label}
                    </Typography>

                  </Link>

                ))}
              </Box>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={4} md={2} >
              <Box sx={{ textAlign: "left", width: "200px", padding: "10px", display: { xs: "contents", md: "grid" }, gap: "5px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 600, color: "#E4E4E4" }}
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
                  <Link
                    key={service}
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography

                      variant="body2"
                      sx={{
                        fontSize: "13px",
                        mb: 0.5,
                        color: "white",
                        textDecoration: "none",
                        '&:hover': {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {service}
                    </Typography>
                  </Link>

                ))}
              </Box>
            </Grid>

            {/* Contact */}
            <Grid item xs={12} sm={4} md={2}>
              <Box sx={{
                textAlign: "left",
                width: "250px",
                padding: { xs: "1px", md: "10px" },
                display: { xs: "grid", md: "grid" },
                gap: "5px",
              }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 600, color: "white" }}
                >
                  Contact
                </Typography>

                <Typography variant="body2" sx={{ fontSize: "13px", color: "white" }}>
                  Phone: 9519066885
                </Typography>

                <Typography variant="body2" sx={{ fontSize: "13px", color: "white" }}>
                  Email:{" "}
                  <Box
                    component="a"
                    href="mailto:info@poornamevents.com"
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                  >
                    info@poornamevents.com
                  </Box>
                </Typography>

                <Box>
                  {[
                    { icon: FacebookIcon, url: "https://www.facebook.com/poornamevents" },
                    { icon: InstagramIcon, url: "https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw==" },
                    { icon: TwitterIcon, url: "https://twitter.com" },
                    { icon: YouTubeIcon, url: "https://www.youtube.com/@poornam-wedding-planner" },
                    { icon: LinkedIn, url: "https://www.linkedin.com/company/poornam-events/" },
                  ].map(({ icon: Icon, url }, i) => (
                    <IconButton
                      key={i}
                      sx={{ color: "#DAA412", p: 0.5 }}
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
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom mustard section */}
      <Box sx={{ backgroundColor: "#d59700", color: "#000D1F", py: 0.5 }}>
        <Container maxWidth="lg">
          <Grid container sx={{ display: { xs: "block", md: "flex" } }} alignItems="center" justifyContent="space-between">
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
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"

                sx={{ fontSize: "13px", textAlign: "center", color: "black", }}
              >
                <Link href="/disclaimer" underline="hover" style={{ color: "black", textDecoration: "none" }}>
                  Disclaimer
                </Link>{" "}
                |
                <Link href="/privacy-policy" underline="hover" style={{ color: "black", textDecoration: "none" }}>
                  Privacy Policy
                </Link>{" "}
                |
                <Link href="/terms" underline="hover" style={{ color: "black", textDecoration: "none" }}>
                  T&C
                </Link>{" "}
                |
                <Link href="/cookies" underline="hover" style={{ color: "black", textDecoration: "none" }}>
                  Cookies
                </Link>
              </Typography>
            </Grid>

            {/* Right - Developer logo */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                textAlign: { xs: "center", md: "right" },
                position: "relative",
                mt: { xs: 1, md: 0 },
              }}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: '13px', color: 'black' }}
              >
                Developed by{' '}
                <Link
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  passHref
                  legacyBehavior
                >
                  <Box
                    component="a"
                    sx={{
                      fontWeight: 600,
                      color: 'black',
                      textDecoration: 'none',
                      '&:hover': {
                        color: 'black',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    Vyomedge
                  </Box>
                </Link>
              </Typography>

              {/* Responsive logo wrapper */}
              <Box
                sx={{
                  display: "inline-block",
                  mt: { xs: 1, md: 0 },
                  position: { xs: "static", md: "absolute" },
                  top: { md: "-25px" },
                  right: { xs: "-20", sm: "-20", md: "-45px" },
                  height: "20px",

                }}
              >
                <a
                  color="black"
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                >
                  <Image
                    src="/developer.png"
                    alt="Developer Logo"
                    width={30}
                    height={30}
                    sx={{
                      width: { xs: "10px", sm: "20px", md: "30px" },
                      height: { xs: "10px", sm: "20px", md: "30px" } // inherits responsive height from Box
                    }}
                  />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box >
  );
};

export default Footer;
