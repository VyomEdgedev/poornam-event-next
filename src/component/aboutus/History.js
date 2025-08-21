import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function OurStories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/AboutHistory.json") 
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Container>
    <Box sx={{
      display: "block",
      justifyItems: "center",
      justifyContent: "center",
      width: "100%",
      margin: "0 auto",
      py: { xs: 1, sm: 2, md: 1 },
      fontFamily: "Akatab,Sans-serif",
      fontWeight: "500",
      color:"#000000",
      
    }}>
      {data.map((item, index) => (
        <Box key={index} style={{ marginBottom: "0.5rem" }}>
          <Typography component="h6" sx={{  color: "black", mb: 1, fontFamily: "Akatab,Sans-serif",fontWeight:600}}>{item.heading}</Typography>
           <Typography component="p"  sx={{fontFamily: "Akatab,Sans-serif",fontWeight:500,  mb:1}}>{item.subheading}</Typography>
          {item.paragraphs.map((p, i) => (
           
            <Typography component="p" key={i} sx={{fontFamily: "Akatab,Sans-serif",fontWeight:500, mt:1}}>{p}</Typography>
          ))}
        </Box>
      ))}
    </Box>
    </Container>
  );
}

