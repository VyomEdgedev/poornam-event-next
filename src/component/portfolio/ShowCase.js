import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, Card, CardContent, Box, Chip } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Image from "next/image";
import CustomMultiSelect from "@/common-component/CustomMultiSelect/CustomMultiSelect";
import { apiClient } from "@/lib/api-client";


// const weddingThemesData = [
//   {
//     id: 1,
//     tag: "Rajasthan",
//     image: "/show1.png",
//     alt: "Royal Rajasthani Theme",
//     title: "Royal Rajasthani",
//     description: "A regal affair in royal palaces."
//   },
//   {
//     id: 2,
//     tag: "Beach",
//     image: "/show2.png",
//     alt: "Royal Rajasthani Theme",
//     title: "Boho Beach",
//     description: "An elegant beach ceremony."
//   },
//   {
//     id: 3,
//     tag: "Modern",
//     image: "/show3.png",
//     alt: "Royal Rajasthani Theme",
//     title: "Minimal Chic",
//     description: "Simplicity meets elegance."
//   }
// ];
const namesList = [
  
     "All",
"Haldi",
"Mehndi",
"Sangeet",
"Wedding",
"Reception",
"Engagement",
"Bride & Groom",
"Ceremonies",
"Decor",
"Photoshoot",
];
const staticDescriptions = [
  "A regal affair in royal palaces.",
  "An elegant beach ceremony.",
  "Simplicity meets elegance."
];

const ShowCase = () => {
  const [ themes, setThemes ] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedNames, setSelectedNames] = React.useState([]);
console.log(themes);

  useEffect(()=>{
    const fetchThemes = async () => {
      try{
        const response = await apiClient.get('/api/portfolio/event');
        console.log(response);
        const data = response.data;
        if(Array.isArray(data)){
          setThemes(data);
        }else{
          setThemes([]);
        }
      }catch(error){
        setError(error);
      }finally{
        setLoading(false);
      }
    }
    fetchThemes();
  },[])


  
const handleChange = (event) => {
    setSelectedNames(
      typeof event.target.value === 'string'
        ? event.target.value.split(',')
        : event.target.value
    );
  };
  const handleFilter = () => {
   
  }
  const handleBrowse = () => {
    
  }
  return (
    <Container maxWidth="xl" sx={{ py: 2, }}>
      
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ fontWeight: "400", mb: 1, fontFamily: 'Gloock,serif', fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}
      >
        {` Visual Showcase `}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        align="center"

        sx={{ mb: 2, fontFamily: "Akatab,Sans-serif", fontWeight: '400' }}
      >
        {`Highlighting exquisite captures from different weddings.`}
      </Typography>
      <Box textAlign="center" mb={4} display={"flex"} justifyContent={"center"} gap={2} flexWrap="wrap">
       
        {/* <CustomButton onClick={handleFilter} data-testid="notify-button" 
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
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
            fontWeight: 400,
            "&:hover": {
              borderColor: "#f4ce6a",
              backgroundColor: "#DAA412",
                    color: "#FFFFFF",
               cursor: 'pointer'
            }
          }}
          
        >
          {` Filter by Category `}
      
        </CustomButton> */}
           <CustomMultiSelect
        names={namesList}
        value={selectedNames}
        onChange={handleChange}
        label="Filter by Category"
      />
           <CustomButton onClick={handleBrowse} data-testid="notify-button" sx={{ width: { xs: "178px", sm: "auto" } }}>{`Browse Gallery`} </CustomButton>
          
      </Box>
      <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 6, xl: 6 }} justifyContent="center">
        {loading? (
          <Typography>Loading...</Typography>
        ):(
          themes?.map((item, idx) =>(

          <Grid item key={item._id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: 'pointer'

              }}
              elevation={1}
            >
              <Chip
                label={item.category?.name || "No Category"}
                size="small"
                sx={{ position: "absolute", top: 8, left: 8, backgroundColor: "#ddd", fontSize: 11, zIndex: 2 }}
              />
              <Box
                sx={{
                  position: "relative",
                  width: "350px",
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 14,
                  textAlign: "center",
                  minHeight: { xs: 250, sm: 280, md: 300 }
                }}
              >
                <Image
                  src={item?.images[0]?.url}
                  alt={item.category?.name || "No Tiltle"}
                  layout="fill"
                  objectFit="cover"
                />




              </Box>
              <CardContent>
                <Typography variant="body1" component="p"
                  sx={{
                    fontFamily: "Akatab,Sans-serif", fontWeight: '400',
                    fontSize: {
                      xs: '0.9rem', sm: '0.9rem', md: '1rem',
                      cursor: 'pointer'
                    }
                  }}>
                  {item.category?.name || "No Tiltle"}
                </Typography>
                <Typography variant="body1" component="p" sx={{ fontFamily: "Akatab,Sans-serif", fontWeight: '500', color: "#000000", fontSize: { xs: '0.9rem', sm: '0.9rem', md: '1.125rem' } }}>
                  {staticDescriptions[idx] || "A beautiful wedding  monent."}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          )
          ))}
      </Grid>
    </Container>
  );
};

export default ShowCase;
