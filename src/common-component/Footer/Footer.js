import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  styled,
  CircularProgress,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import CookiesBanner from "@/component/footerbottom/cookies";
import { apiClient } from "@/lib/api-client";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Footer = () => {
  const [AllPortfolioData, setAllPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPortfolio = async () => {
    try {
      const res = await apiClient.get("/api/service/AllServicePages/event");
      console.log(res?.data);
      setAllPortfolioData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching portfolio", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);
  // const [open, setOpen] = useState(false);
  return (
    <Box sx={{ backgroundColor: "#011d4a" }}>
      {/* Top dark blue section */}
      <Container>
        <Box sx={{ flexGrow: 1, py: 5 }}>
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12 }}
            alignItems={"flex-start"}
            spacing={4}
          >
            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }} item>
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Box sx={{ display: "inline-block", mb: 2 }}>
                    <Image
                      src="/logo2.png"
                      alt="Logo"
                      width={100}
                      height={40}
                      style={{ height: "auto" }}
                    />
                  </Box>
                </a>
              </Link>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Akatab,Sans-serif",
                  color: "#FFF1CA",
                }}
              >
                {`  Born from a dream in 2017, Poornam Events is where traditions
                meet timeless celebration. We don’t just plan weddings — we
                create moments that live forever.`}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 4, sm: 3, md: 2, lg: 2 }}
              pt={{ sx: 0, sm: 0, md: 5 }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  display: { xs: "contents", md: "grid" },
                }}
              >
                <Typography
                  component={"p"}
                  sx={{
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
                  { label: "Gallery", href: "/gallery" },
                  { label: "Blogs", href: "/blog" },
                  { label: "Connect us", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{ textDecoration: "none", width: "fit-content" }}
                  >
                    <Typography
                      variant="body2"
                      component={"p"}
                      sx={{
                        fontFamily: "Akatab,Sans-serif",
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
            <Grid
              size={{ xs: 8, sm: 4, md: 3, lg: 3 }}
              pt={{ sx: 0, sm: 0, md: 5 }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  display: { xs: "contents", md: "grid" },
                }}
              >
                <Typography
                  variant="h6"
                  component={"p"}
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: "#E4E4E4",
                    fontFamily: "Akatab,Sans-serif",
                  }}
                >
                  Services
                </Typography>
                {loading ? (
                  <CircularProgress />
                ) : (
                  <Box sx={{ maxHeight: "150px", overflowY: "auto" }}>
                    {AllPortfolioData.map((item, i) => (
                      <Link
                        key={i}
                        href={`/services/${item.uid}`}
                        style={{ textDecoration: "none", width: "fit-content" }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            fontFamily: "Akatab,Sans-serif",
                            mb: 0.5,
                            color: "#E4E4E4",
                            fontWeight: 400,
                            textDecoration: "none",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {item.title.length > 28
                            ? item.title.slice(0, 28) + "..."
                            : item.title}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid
              size={{ xs: 12, sm: 5, md: 3, lg: 3 }}
              pt={{ sx: 0, sm: 0, md: 5 }}
            >
              <Box
                sx={{
                  textAlign: "left",
                  // width: "250px",
                  display: { xs: "grid", md: "grid" },
                }}
              >
                <Typography
                  variant="h6"
                  component={"p"}
                  sx={{
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
                  sx={{
                    fontFamily: "Akatab,Sans-serif",
                    color: "#E4E4E4",
                    fontWeight: 400,
                  }}
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
                  component="p"
                  sx={{
                    fontFamily: "Akatab,Sans-serif",
                    color: "#E4E4E4",
                    fontWeight: 400,
                  }}
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
        </Box>
      </Container>

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
                component="p"
                sx={{
                  fontFamily: "Akatab,Sans-serif",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                © 2025 Poornam Events.
              </Typography>
            </Grid>

            {/* Center - Policies */}
            <Grid item xs={12} md={4}>
              <Typography
                component="p"
                sx={{
                  fontFamily: "Akatab,Sans-serif",
                  textAlign: "center",
                  color: "black",
                  textDecoration: "none",
                  "&:hover": {
                    //textDecoration: "underline",
                  },
                }}
              >
                <Link
                  href="/disclaimer"
                  className="hoverlink"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Disclaimer
                </Link>{" "}
                &nbsp;|&nbsp;
                <Link
                  href="/privacy-policy"
                  className="hoverlink"
                  style={{ color: "black", textDecoration: "none", mx: 2 }}
                >
                  Privacy Policy
                </Link>
                {"  "}
                &nbsp;|&nbsp;
                <Link
                  href="/terms"
                  className="hoverlink"
                  style={{ color: "black", textDecoration: "none", mx: 2 }}
                >
                  T&C
                </Link>
              </Typography>
            </Grid>

            {/* Right - Developer logo */}
            {/* <Grid
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
                component="p"
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

        
              <Box
                sx={{
                  display: "inline-block",
                  // mt: { xs: 0, md: 0, lg: 1 },
                  position: { xs: "absolute", sm: "absolute", md: "absolute" },
                  top: {xs:"0px",sm:"-2px", md: "-50px", lg: "-50px" },
                  right: {xs:"-25px", sm:"-40px", md: "10px", lg: "10px" },
                  width: { xs: "20px", sm: "30px", md: "50px" },
                  marginLeft:"8px"
                }}
              >
                <Link href="https://vyomedge.com/" passHref legacyBehavior>
                  <a
                    color="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    <Image
                      src="/developer.png"
                      alt="Developer Logo"
                      layout="responsive"
                      width={100}
                      height={100}
                      priority
                    />
                  </a>
                </Link>
              </Box>
            </Grid> */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                textAlign: { xs: "center", md: "right" },
                mt: { xs: 0, md: 0 },
              }}
            >
              <Box
                sx={{
                  textAlign: { xs: "center", md: "right" },
                  
                  // width: "fit-content",
                }}
              >
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontSize: "14px", color: "black",position: "relative",width:"fit-content",margin:"auto"}}
                >
                  Developed by{" "}
                  <Link
                    href="https://vyomedge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    legacyBehavior
                  >
                    <Typography
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
                    </Typography>
                    
                  </Link>
                   <Typography 
                sx={{
                  display: "inline-block",
                  // mt: { xs: 0, md: 0, lg: 1 },
                  position: { xs: "absolute", sm: "absolute", md: "absolute" },
                  top: { xs: "3px", sm: "-2px", md: "-50px", lg: "-50px" },
                  right: { xs: "-25px", sm: "-40px", md: "10px", lg: "10px" },
                  width: { xs: "20px", sm: "30px", md: "50px" },
                  marginLeft: "8px",
                }}
              >
                <Link href="https://vyomedge.com/" passHref legacyBehavior>
                  <a
                    color="black"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    <Image
                      src="/developer.png"
                      alt="Developer Logo"
                      layout="responsive"
                      width={100}
                      height={100}
                      priority
                    />
                  </a>
                </Link>
              </Typography>
                </Typography>
              </Box>

              {/* Responsive logo wrapper */}
             
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
