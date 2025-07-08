// components/Header.js
"use client";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";


const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "Connect us", href: "/connectus" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",
        zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          {!isMobile ? (
            <Box
              display="flex"
              alignItems="center"
              sx={{
                backgroundColor: "rgba(10, 17, 56, 0.85)",
                borderRadius: "30px",
                px: 2,
                py: 1,
                width: "fit-content",
              }}
              gap={2}
            >
              {navItems.map((item, index) => (
                <Button
                  component="a"
                  key={index}
                  sx={{
                    color: item === " " ? "#ffca28" : "white",
                    borderRadius: "20px",
                    textTransform: "none",

                    fontWeight: 500,
                    px: 2,
                    py: 0.5,
                    minWidth: "auto",
                    fontSize: "14px",
                    '&:hover': {
                      backgroundColor: "#192249",
                    },
                  }}
                >
                  <Link key={index} href={item.href} passHref legacyBehavior>
                    <ListItem disablePadding>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </Link>
                </Button>
              ))}
              <IconButton href="https://wa.me/919000000000" target="_blank" sx={{ color: "#25D366" }}>
                <WhatsAppIcon />
              </IconButton>
            </Box>
          ) : (
            <Box display="flex" justifyContent="space-between" width="100%">
              <Box display="flex" alignItems="center">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
              </Box>
              <Box
              >
                <IconButton edge="end" color="inherit" onClick={() => setOpenDrawer(true)}>
                  <MenuIcon />

                </IconButton>
              </Box>

              <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box width={250} role="presentation" onClick={() => setOpenDrawer(false)}>
                  <List sx={{ backgroundColor: "#0A163ED4", color: "#CBEFFF", alignContent: "center", alignItems: "center", height: "667px", padding: "25%" }}>
                    {navItems.map((item, index) => (
                      <>
                        <ListItem key={index} disablePadding >
                          <ListItemButton>
                            <ListItemText primary={item} />
                          </ListItemButton>
                        </ListItem>
                        <hr />
                      </>

                    ))}
                    <ListItem>
                      <IconButton href="https://wa.me/919000000000" target="_blank" sx={{ color: "#25D366" }}>
                        <WhatsAppIcon />
                      </IconButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}