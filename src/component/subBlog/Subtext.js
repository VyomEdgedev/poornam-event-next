import React from "react";
import {
  Box,
} from "@mui/material";

const Subtext = ({ blogtext }) => {
 let processed = blogtext || "";

    processed = processed.replace(
    /(<iframe\b[^>]*?)\s*sandbox=(["']?)?[^"'\s>]*?(["']?)?([^>]*>)/gi,
    "$1 $4"
  );
  processed = processed.replace(
    /<table([^>]*)>([\s\S]*?)<\/table>/gi,
    '<div class="table-wrapper"><table$1>$2</table></div>'
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px={{ xs: 2, sm: 6, md: 10 }}
      py={2}
      sx={{ overflowX: "hidden" }}
    >
      <Box maxWidth="1100px" width="100%" textAlign="left">
        <Box>
          <Box
            component="div"
            sx={{
            // border: "1px solid #37863f",
            borderRadius: { xs: "10px", sm: "20px", md: "30px" },
            p: { xs: 3, md: 5 },
            lineHeight: 1.6,
            backgroundColor: "#fff",
            color: "#000D1F",

            "& *": {
              fontFamily: "Akatab, Sans-serif",
            },
            "& h1": {
              fontFamily: "Gloock, serif",
              fontWeight: 400,
              color: "#000D1F",
            },
            "& h2, & h3, & h4": {
              fontFamily: "Akatab, Sans-serif",
              fontWeight: 600,
              color: "#000D1F",
            },
            "& h3, & h4": {
              fontSize: { xs: "20px", sm: "22px", md: "28px" },
            },
            "& h5, & h6, & p": {
              fontWeight: 400,
              color: "#000D1F",
            },
            "& p": {
              fontSize: { xs: "16px", sm: "16px", md: "16px", lg: "18px" },
            },

            "& ul, & ol": {
              paddingLeft: "50px",
              fontSize: { xs: "16px", sm: "16px", md: "18px" },
              listStylePosition: "inside",
            },

            "& img": {
              maxWidth: "100%",
              height: "auto",
              display: "block",
              borderRadius: "10px",
            },

            "& .table-wrapper": {
              width: "100%",
              overflowX: "auto",
              display: "block",
            },
            "& table": {
              width: "100%",
              borderCollapse: "collapse",
            },
            "& table th, & table td": {
              border: "1px solid #ddd",
              padding: "8px",
              textAlign: "left",
              whiteSpace: "nowrap",
            },
            "& table th": {
              backgroundColor: "#f5f5f5",
            },
          }}
            dangerouslySetInnerHTML={{  __html: processed }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Subtext;
