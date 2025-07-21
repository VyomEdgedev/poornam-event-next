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
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';


const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blog" },
  { label: "Connect us", href: "/contact" },
];


export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = usePathname();
  const isDarkBg = true;
  const iconColor = isDarkBg ? '#FFFFFF' : '#192249';

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
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <Link key={index} href={item.href} style={{ textDecoration: "none" }}>
                    <Button
                      sx={{
                        color: isActive ? "#DAA412" : "#FFFFFF",
                        borderRadius: "20px",
                        textTransform: "none",
                        fontWeight: 500,
                        px: 2,
                        py: 0.5,
                        minWidth: "auto",
                        fontSize: "14px",
                        "&:hover": {
                          backgroundColor: "#192249",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              <IconButton href="https://wa.me/919610366885" target="_blank" sx={{ color: "#25D366" }}>
                <WhatsAppIcon />
              </IconButton>
            </Box>
          ) : (
            <Box display="flex" justifyContent="space-between" width="100%">
              <Link href="/" passHref>
                <Image src="/logo.png" alt="Logo" width={50} height={50} style={{ cursor: 'pointer' }} />
              </Link>
              <Box
              >
                <IconButton edge="end" color="inherit" onClick={() => setOpenDrawer(true)} 
                sx={{
                  backgroundColor: isDarkBg ? '#192249' : '#FFFFFF',
                  boxShadow: 'none',
                }}>
                  <MenuIcon  />
                </IconButton>
              </Box>

              <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box width={250} role="presentation" onClick={() => setOpenDrawer(false)}>
                  <List sx={{ backgroundColor: "#0A163ED4", color: "#CBEFFF", height: "667px", padding: " 11% 25% " }}>
                    {navItems.map((item, index) => (

                      <React.Fragment key={index}>
                        <ListItem disablePadding>
                          <ListItemButton component="a" href={item.href}>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        </ListItem>
                        <hr />
                      </React.Fragment>



                    ))}
                    <ListItem>
                      <IconButton href="https://wa.me/919519066885" target="_blank" sx={{ color: "#25D366" }} data-testid="notify-button">
                        <WhatsAppIcon data-testid="notify-button" />
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
