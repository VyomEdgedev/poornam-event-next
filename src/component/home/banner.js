// components/HeroSection.js
"use client";
import CustomButton from "@/common-component/button/CustomButton";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
    const handleWeddingPlan = () => {
    // Add your navigation or action logic here
    alert("Plan My Wedding clicked");
    console.log("Plan My Wedding clicked");
  };

  const handleTalkToPlanner = () => {
     window.open("https://wa.me/919610366885", "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#030b1d",
        pt: { xs: 6, sm: 5, md: 0 },
        px: { xs: 0, sm: 0, md: 1 },
      }}
    >
      
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "space-between",
            padding: "0px 10px",
          }}
        >


          {/* Text Section */}
          <Box flex={1} display="flex" flexDirection="column" justifyContent="center"  position="relative"
         >
            <Box mb={2} sx={{ display: { xs: "none", md: "block" },position:"absolute" , top:0 , left:0 ,zIndex:6}
            
          }>
              <Image src={"/logo.png"} alt="Logo" width={120} height={120}/>

            </Box>
            <Box sx={{ zIndex:5 , width:{xs:'100%',md:'100%'},height:{xs:'100%',md:'50%'}, position:{xs:"initial",md:"absolute"}, top:{xs:"0",md:"150px"}, left:{xs:0,md:0} }}>
            <Typography
              variant="h3"
              fontWeight="regular"
              sx={{
                color: "#E6C365",
                // position:"absolute",
                fontSize: { xs: "1.4rem", sm: "2.4rem", md: "3.5rem" },
                fontFamily: 'Gloock, serif',
                // width:"900px",
                textAlign: { xs: "center", md: "left" },
                ml:5,
                mb:1,
                whiteSpace:{xs:'wrap',md:'nowrap'},
                zIndex:7
                  
              }}
            >
              Shaadiyaan Banti Hain Yaadon Se...
            </Typography> 
            
             <Typography
              variant="h5"
              sx={{ color: "#FFF5D9", mb: 2, fontWeight: 400,
                frontFamily: "Akatab,Sans-serif",
                
                ml:5,
               }}
            >
              Let’s Make Yours Legendary
            </Typography> 
            <Typography
              sx={{
                color: "#FFF5D9",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                frontFamily: "Akatab,Sans-serif",
                fontWeight: 400,
                mb: 3,
                ml:5,
                

              }}
            >
              Luxury meets laughter, chaos choreographed-beautiful weddings across
              Indore, Bhopal & Jabalpur.
            </Typography>
            
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              marginLeft={5}
              alignContent={{xs:"center",md:"flex-start"}}
            >
              <CustomButton 
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
              <CustomButton
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
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                  "&:hover": {
                    borderColor: "#f4ce6a",
                    color: "#f4ce6a",
                    
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
              overflow: "hidden",
              // borderRadius: 2,
              zIndex:1             


            }}
          >
            <Image
              src={"/sadhi.png"}
              alt="Bridal Hero"
              width={1200}
              height={1600}
              priority
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
                // borderRadius: "12px",
                transform: 'scaleX(-1)',
                zIndex:1

              }}
            />
          </Box> 
        </Box>
    </Box>
  );
}


