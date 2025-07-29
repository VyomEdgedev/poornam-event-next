import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function OurStories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/AboutHistory.json") // ✅ Must match filename in public/
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
    <Box sx={{
      display: "block",
      justifyItems: "center",
      justifyContent: "center",
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto",
      px: { xs: 6, sm: 4, md:12, lg:22, xl:22 },
      py: { xs: 2, sm: 6, md: 1 },
      fontFamily: "Akatab,Sans-serif",
      fontWeight: "400",
      fontSize: { xs: "0.8rem", sm: "1rem", md: "1.5rem" }
    }}>
      {data.map((item, index) => (
        <Box key={index} style={{ marginBottom: "0.5rem" }}>
          <h5 style={{ color: "black", objectFit: "contain" }}>{item.heading}</h5>
          <h5 style={{ color: "black" }}>{item.h6}</h5>
          {item.paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: "Akatab,Sans-serif", lineHeight: 1.5 }}>{p}</p>
          ))}
        </Box>
      ))}
    </Box>
  );
}

