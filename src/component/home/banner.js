// components/HeroSection.js
"use client";
import CustomButton from "@/common-component/button/CustomButton";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import ConnectModal from "@/common-component/modal/ConnectModal";
import { useEffect, useState } from "react";
import { color } from "framer-motion";
export default function HeroSection() {
  const [open, setOpen] = useState(false)
  const [autoOpened, setAutoOpened] = useState(false);
const handleWeddingPlan = () => {
    setOpen(true)
  };

  const handleTalkToPlanner = () => {
     window.open("https://wa.me/919519066885", "_blank");
  };
useEffect(() => {
  const alreadyShown = localStorage.getItem("weddingModalShown");

  if (!alreadyShown) {
    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem("weddingModalShown", "true");
    }, 7000);

    return () => clearTimeout(timer);
  }
}, []);
  return (
    <Box
      sx={{
        backgroundColor: "#030b1d",
        pt: { xs: 10, sm: 10, md: 1, lg: 0,xl:0 },
        px: { xs: 0, sm: 0, md: 1 },
      }}
    >
      <ConnectModal open={open} setOpen={setOpen} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",  
            padding: { xs: "0 0px", sm: "5px 10px", md: "0 10px" },
            

          }}
        >


          {/* Text Section */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="center"  position="relative"
         >
            <Box mb={2} sx={{display: { xs: "none", sm:"none", md: "block" },position:"absolute" , top:10 , left:19 ,zIndex:6,  width: { xs: 80, sm: 80, md: 80, lg: 120 }, }

            
          }>
              <Image src={"/logo.png"} alt="Logo" width={120} height={120}
              
               style={{
      width: "100%",      // allow the image to fill its wrapper
      height: "auto",
    }}
         />

            </Box>
            <Box sx={{ zIndex:5 , width:{xs:'100%',md:'100%'},height:{xs:'100%',md:'50%'}, position:{xs:"initial",sm:"initial",md:"absolute"}, top:{xs:"20px",sm:"100px",md:"130px",lg:"170px"}, left:{xs:0,sm:0,md:0,}, mt:{xs:"4px",sm:"15px",md:0,lg:0}}}>
            <Typography
              variant="h1"
              component="h1"
              fontWeight="regular"
              sx={{
                color: "#E6C365",
                // position:"absolute",
                // fontSize: { xs: "1.4rem", sm: "2.4rem", md: "3.5rem" },
                fontFamily: 'Gloock, serif',
                // width:"900px",
                textAlign: { xs: "left", sm: "left", md: "left" },
                ml:{xs:3,sm:2,md:5,lg:5},
                mb:1,
                whiteSpace:{xs:'wrap',md:'nowrap', lg:'nowrap'},
                zIndex:7,
                letterSpacing:"2px"
                  
              }}
            >
             {` Shaadiyaan Banti Hain Yaadon Se...`}
            </Typography> 
            
             <Typography
              variant="h5"
              component={"h5"}
              sx={{ color: "#FFF5D9", mb: 2, fontWeight: 400,
                frontFamily: "Akatab,Sans-serif",
                textAlign: { xs: "left", md: "left" },
                ml:{xs:3,sm:2,md:5,lg:5},
                letterSpacing:"1px"
               }}
            >
           {`   Let’s Make Yours Legendary`}
            </Typography> 
            <Typography
            variant="p"
            component={"p"}
              sx={{
                color: "#FFF5D9",
                textAlign: { xs: "left", md: "left" },
                frontFamily: "Akatab,Sans-serif",
                fontWeight: 400,
                whiteSpace:{xs:'wrap', sm:'wrap',md:'nowrap'},
                width:{xs:'85%', sm:'80%',md:'100%'},
                mb: 3,
                ml:{xs:3,sm:2,md:5,lg:5},
                letterSpacing:"0.5px"
                
                

              }}
            >
             {` Luxury meets laughter, chaos choreographed-beautiful weddings across
              Indore, Bhopal & Ujjain.`}
            </Typography>
            
            <Stack
              direction={{ xs: "row", sm: "row" }}
              spacing={2}
              marginTop={{xs: 0, sm: 0, md: 4, lg:5}}
              marginLeft={{xs: 3, sm: 3, md: 5, lg:5}}
              alignContent={{xs:"center",md:"flex-start"}}
            >
              <CustomButton   data-testid="notify-button"
                variant="primary" 
                onClick={handleWeddingPlan}
                sx={{
                  fontFamily: "Akatab,Sans-serif",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem"  },
                   fontWeight: 400,
                }}
              >
                Plan My Wedding
              </CustomButton>
              <CustomButton  data-testid="notify-button"
                variant="outlined"
                sx={{ 
                  color: "#000D1F", 
                  background:"#FFFFFF",
                  borderColor: "#DAA412",
                  width: { xs: "178px", sm: "auto" }, 
                  height: "46px", 
                  borderRadius: "30px",
                  textTransform: "none",
                  fontFamily: "Akatab,Sans-serif",
                  fontSize: { xs: "0.70rem", sm: "1rem", md: "1rem" },
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    // borderColor: "#f4ce6a",
                    backgroundColor: "#DAA412",
                    color: "#FFFFFF",
                  }
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
              // borderRadius: 2,
              zIndex:1             


            }}
          >
            <Image
              src="/sadhi.png"
              alt="Bridal Hero"

              width={1000}

              height={800}
              
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                transform: "scaleX(-1)",
                
              }}
            />
          </Box> 
        </Box>
    </Box>
  );
}


