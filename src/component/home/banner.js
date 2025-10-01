"use client";
import CustomButton from "@/common-component/button/CustomButton";
import { Box, Typography, Stack, Container } from "@mui/material";
import Image from "next/image";
import ConnectModal from "@/common-component/modal/ConnectModal";
import Link from "next/link";
import {useContext, useState } from "react";
import Styles from "@/styles/Home.module.scss";
import { loaderContext } from "@/contextApi/loaderContext";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const {loading ,setLoading} = useContext(loaderContext);
  
  
  

  const handleWeddingPlan = () => {
    setOpen(true);
  };

  const handleTalkToPlanner = () => {
    window.open("https://wa.me/919519066885", "_blank");
  };

  return (
    <Box sx={{ backgroundColor: "#030b1d", overflow: "hidden", pt: { xs: 12, md: 0 } }}>
      <Container>
        <>
          <ConnectModal open={open} setOpen={setOpen} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            <Box
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              position="relative"
            >
              <Box
                mb={2}
                sx={{
                  display: { xs: "none", md: "block" },
                  position: "absolute",
                  top: 10,
                  left: 0,
                  zIndex: 6,
                  width: { xs: 80, lg: 100 },
                }}
              >
                <Link href="/" passHref  >
                  <Image
                    src={"/logo2.png"}
                    alt="Logo"
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  zIndex: 5,
                  height: { xs: "100%", md: "50%" },
                  position: { xs: "initial", md: "absolute" },
                  top: { xs: "20px", sm: "100px", md: "130px", lg: "170px" },
                  mt: { xs: "4px", sm: "15px", md: 0 },
                  ml:{xs:"5px",sm:0}
                }}
              >
                <Typography
                  component={"h1"}
                  fontWeight="400"
                  sx={{
                    color: "#E6C365",
                    fontFamily: "Gloock, serif",
                    whiteSpace: { xs: "wrap", md: "nowrap" },
                    zIndex: 7,
                    letterSpacing: "2px",
                  }}
                >
                  Shaadiyaan Banti Hain Yaadon&nbsp;Se...
                </Typography>

                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "24px",
                      md: "28px",
                      lg: "32px ",
                    },
                    color: "#FFF5D9",
                    fontWeight: 400,
                    fontFamily: "Akatab,Sans-serif ",
                    letterSpacing: "1px",
                  }}
                >
                  {`   Let’s Make Yours Legendary`}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    color: "#FFF5D9",
                    textAlign: { xs: "left", md: "left" },
                    fontFamily: "Akatab,Sans-serif",
                    fontWeight: 400,
                    mb: 3,
                    letterSpacing: "0.5px",
                  }}
                >
                 {` Luxury meets laughter, chaos choreographed-beautiful weddings across Indore, Bhopal & Ujjain.`}
                </Typography>

                <Stack
                  direction={"row"}
                  spacing={2}
                  marginTop={{ xs: 0, md: 4, lg: 5 }}
                  marginBottom={{ xs: 3, md: 0, lg: 0 }}
                  alignContent={{ xs: "center", md: "flex-start" }}
                >
                  <CustomButton
                    ariaLabel={"Plan My Wedding"}
                    variant="primary"
                    onClick={handleWeddingPlan}
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: 400,
                    }}
                  >
                    Plan My Wedding
                  </CustomButton>

                  <CustomButton
                    ariaLabel={"Talk to Our Planner"}
                    variant="outlined"
                    sx={{
                      color: "#000D1F",
                      background: "#FFFFFF",
                      borderColor: "#DAA412",
                      width: { xs: "178px", sm: "auto" },
                      height: "46px",
                      borderRadius: "30px",
                      textTransform: "none",
                      fontFamily: "Akatab,Sans-serif",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "#DAA412",
                        color: "#FFFFFF",
                      },
                    }}
                    onClick={handleTalkToPlanner}
                  >
                    Talk to Our Planner
                  </CustomButton>
                </Stack>
              </Box>
            </Box>

            {/* Image Section */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                overflow: { xs: "visible", md: "hidden" },
                position: "relative",
                right: { md: "-150px" },
                display: "flex",
                justifyContent: 'center'

              }}
            >
              <Image
                src="/sadhi.png"
                alt="Bridal Hero"
                width={500}
                height={405}
                className={Styles.HomeBrideImg}
              />
            </Box>
          </Box>
        </>
      </Container>
    </Box>
  );
}
