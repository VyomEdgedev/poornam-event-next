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
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import style from "@/styles/style.module.scss"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
  { label: "About", href: "/aboutus" },
  { label: "Connect us", href: "/contact" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const pathname = usePathname();
  const isDarkBg = true;
  const iconColor = isDarkBg ? "#FFFFFF" : "#192249";

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        boxShadow: "none",

        marginTop: {
          xs: "0px",
          md: "10px",
          lg: "15px",
          xl: "20px",
        },
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "center" }}>
       
        {/* desktop navbar  */}
          <Box
            display="flex"
            alignItems="center"
            className={style.deskop_nav_bar}
            sx={{
              backgroundColor: "rgba(10, 17, 56, 0.85)",
              borderRadius: "30px",
              px: 2,
              py: 1,
              
            }}
            gap={2}
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
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
            <IconButton
              href="https://wa.me/919519066885"
              target="_blank"
              sx={{ color: "#25D366" }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Box>

        {/* mobile navbar */}
          <Box
            display="flex"
            justifyContent={"space-between"}
            width="100%"
            backgroundColor="rgba(0, 13, 31, 0.4)"
            padding={0.5}
            className={style.mobile_nav_bar}
            sx={{px:"18px"}}
          >
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="Logo"
                width={65}
                height={65}
                style={{ cursor: "pointer", marginLeft: "-2px" }}
              />
            </Link>
            <Box>
              <IconButton
                onClick={() => setOpenDrawer(true)}
                sx={{
                  color: "#DAA412",
                  // backgroundColor: isDarkBg ? '#192249' : '#FFFFFF',
                  boxShadow: "none",
                  marginTop:"15px",
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              PaperProps={{
                sx: {
                  zIndex: 1300,
                  // ✅ Use colon instead of equal
                },
              }}
            >
              <ListItem
                sx={{
                  backgroundColor: "#0A163ED4",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 1300,
                  py: 1,
                  px: 2,
                
                }}
              >
                {/* WhatsApp Button (left) */}
                <IconButton
                  component="a"
                  href="https://wa.me/919519066885"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#25D366" }}
                >
                  <WhatsAppIcon />
                </IconButton>
                {/* Close Button (right) */}
                <IconButton
                  edge="end"
                  onClick={() => setOpenDrawer(false)}
                  sx={{ color: "#DAA412", 
               
                  }}
                >
                  <CloseIcon sx={{ fontSize: 24 }} />
                </IconButton>
              </ListItem>
              {/* <ListItem sx={{ backgroundColor: "#0A163ED4", justifyContent: "align-end", zIndex: 1300 }}>
                  <IconButton
                    component="a" // ✅ required to make href work
                    href="https://wa.me/919519066885"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "#25D366" }}

                  >
                    <WhatsAppIcon />
                    <CloseIcon sx={{ fontSize: 24, color: "red" ,alignItems:""}} />
                  </IconButton>
                </ListItem> */}

              {/* Menu Items */}
              <Box
                width={250}
                height={"100%"}
                role="presentation"
                onClick={() => setOpenDrawer(false)}
              >
                <List
                  sx={{
                    backgroundColor: "#0A163ED4",
                    color: "#CBEFFF",
                    height: "100%",
                    padding: "15% 25%",
                  }}
                >
                  {navItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem disablePadding>
                        <ListItemButton component={Link} href={item.href} selected={pathname === item.href}
                           sx={{
                          borderRadius: "10px",
                          backgroundColor:
                            pathname === item.href ? "#192249" : "transparent",
                          color:
                            pathname === item.href ? "#DAA412" : "#CBEFFF",
                          "&:hover": {
                            backgroundColor: "#192249",
                          },
                        }}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      </ListItem>
                      <hr />
                    </React.Fragment>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

      </Toolbar>
    </AppBar>
  );
}
