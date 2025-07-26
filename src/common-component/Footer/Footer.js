import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#011d4a", padding: "2px" }}>
      {/* Top dark blue section */}
      <Box
        sx={{
          color: "#FFF1CA",
          pt: { xs: 0, sm: 0, md: 2, lg: 4, xl: 4 },
          pb: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}
            sx={{
              "@media (min-width:600px)": {
                justifyContent: "flex-start",
              },
              "@media (min-width:900px)": {
                justifyContent: "space-evenly",
              },
            }}
          >
            {/* Logo and About - 50% width on desktop */}
            <Grid
              item
              xs={12}
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "30%",
                  lg: "30%",
                  xl: "40%",
                },
                marginLeft: {
                  xs: "0px",
                  sm: "0px",
                  md: "0px",
                  lg: "-10px",
                  xl: "-10px",
                },
              }}
            >
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Box sx={{ display: "inline-block" }}>
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={120}
                      height={60}
                      style={{ height: "auto" }}
                    />
                  </Box>
                </a>
              </Link>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  fontFamily: "Akatab,Sans-serif",
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "13px",
                    lg: "15px",
                    xl: "15px",
                  },
                }}
              >
                {`  Born from a dream in 2017, Poornam Events is where traditions
                meet timeless celebration. We don’t just plan weddings — we
                create moments that live forever.`}
              </Typography>
            </Grid>

            {/* Quick Links - 16.6% on desktop */}
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              paddingLeft={{ xs: "11px", sm: "11px", md: "0px" }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  width: "130px",
                  padding: "10px",
                  display: { xs: "contents", md: "grid" },
                  gap: "1px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    mb: 1,
                    fontWeight: 600,
                    color: "#E4E4E4",
                    fontFamily: "Akatab,Sans-serif",
                  }}
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
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "15px",
                        mb: 0.5,
                        color: "#E4E4E4",
                        textDecoration: "none",
                        fontWeight: 400,
                        underline: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Services */}
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              paddingLeft={{ xs: "11px", sm: "11px", md: "0px" }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  width: "240px",
                  padding: "10px",
                  display: { xs: "contents", md: "grid" },
                  gap: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    mb: 1,
                    fontWeight: 600,
                    color: "#E4E4E4",
                    fontFamily: "Akatab,Sans-serif",
                  }}
                >
                  Services
                </Typography>
                {[
                  { label: "Destination Weddings", href: "/servicessubpage" },
                  { label: "Intimate Wedding", href: "/services" },
                  { label: "Themed & Designer Weddings", href: "/services" },
                  { label: "Artist Management", href: "/services" },
                  { label: "Prewedding & Photography", href: "/services" },
                  { label: "Special Effects", href: "/services" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "15px",
                        mb: 0.5,
                        color: "#E4E4E4",
                        fontWeight: 400,
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Contact */}
            <Grid
              item
              xs={12}
              sm={4}
              md={2}
              paddingLeft={{ xs: "10px", sm: "10px", md: "0px" }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  width: "250px",
                  padding: { xs: "1px", md: "10px" },
                  display: { xs: "grid", md: "grid" },
                  gap: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    mb: 1,
                    fontWeight: 600,
                    color: "#E4E4E4",
                    fontFamily: "Akatab,Sans-serif",
                  }}
                >
                  Contact
                </Typography>

                {/* <Typography variant="body2" sx={{ fontSize: "15px", color: "#E4E4E4" ,fontWeight:400,}}>
                  Phone: 9519066885
                </Typography> */}
                <Typography
                  variant="body2"
                  sx={{ fontSize: "15px", color: "#E4E4E4", fontWeight: 400 }}
                >
                  Phone:{" "}
                  <a
                    href="tel:9519066005"
                    style={{ color: "#E4E4E4", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    9519066885
                  </a>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontSize: "15px", color: "#E4E4E4", fontWeight: 400 }}
                >
                  Email:{" "}
                  <Box
                    component="a"
                    href="mailto:info@poornamevents.com"
                    style={{ color: "white", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    info@poornamevents.com
                  </Box>
                </Typography>
                <Box>
                  {[
                    {
                      img: "/facebook1.svg",
                      url: "https://www.facebook.com/poornamevents",
                      alt: "Facebook",
                    },
                    {
                      img: "/instagram.svg",
                      url: "https://www.instagram.com/poornamevents?igsh=MXc5cTd3Z2x3ejRsaw==",
                      alt: "Instagram",
                    },
                    {
                      img: "/X.svg",
                      url: "https://x.com/",
                      alt: "Twitter",
                    },
                    {
                      img: "/youtube.svg",
                      url: "https://www.youtube.com/@poornam-wedding-planner",
                      alt: "YouTube",
                    },
                    {
                      img: "/linkedin.svg",
                      url: "https://www.linkedin.com/company/poornam-events/",
                      alt: "LinkedIn",
                    },
                  ].map(({ img, url, alt }, i) => (
                    <Box
                      key={i}
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ pr: 1, mt: 1, display: "inline-block" }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={alt}
                        sx={{
                          width: 28,
                          height: 28,
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bottom mustard section */}
      <Box sx={{ backgroundColor: "#d59700", color: "#000D1F", py: 1.5 }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{ display: { xs: "block", md: "flex" } }}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent={{ xs: "center", md: "space-between" }}
          >
            {/* Left - Copyright */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  textAlign: { xs: "center", md: "left" },
                  paddingLeft: { xs: 0, md: 1 },
                }}
              >
                © 2025 Poornam Events.
              </Typography>
            </Grid>

            {/* Center - Policies */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                sx={{ fontSize: "14px", textAlign: "center", color: "black" }}
              >
                <Link
                  href="/disclaimer"
                  underline="hover"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Disclaimer
                </Link>{" "}
                &nbsp;|&nbsp;
                <Link
                  href="/privacy-policy"
                  underline="hover"
                  style={{ color: "black", textDecoration: "none", mx: 2 }}
                >
                  Privacy Policy
                </Link>
                {"  "}
                &nbsp;|&nbsp;
                <Link
                  href="/terms"
                  underline="hover"
                  style={{ color: "black", textDecoration: "none", mx: 2 }}
                >
                  T&C
                </Link>{" "}
                &nbsp;|&nbsp;
                <Link
                  href="/cookies"
                  underline="hover"
                  style={{ color: "black", textDecoration: "none", mx: 1 }}
                >
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
                mt: { xs: 0, md: 0 },
              }}
            >
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: "14px", color: "black" }}
              >
                Developed by{" "}
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
                      color: "black",
                      textDecoration: "none",
                      "&:hover": {
                        color: "black",
                        textDecoration: "none",
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
                  mt: { xs: 0, md: 0, lg: 1 },
                  position: { xs: "static", sm: "static", md: "absolute" },
                  top: { md: "-35px", lg: "-55px", xl: "-55px" },
                  right: { xs: "-20px", sm: "-20px", md: "10px" },
                  height: "20px",
                }}
              >
                <a
                  color="black"
                  href="https://vyomedge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block" }}
                  sx={{
                    width: { xs: "12px", sm: "20px", md: "30px" },
                    height: { xs: "12px", sm: "20px", md: "30px" },
                  }}
                >
                  <Image
                    src="/developer.png"
                    alt="Developer Logo"
                    width={50}
                    height={50}
                    sizes="(max-width: 600px) 25px, (max-width: 960px) 40px ,(max-width: 1200px) 50px,90vw,"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
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
