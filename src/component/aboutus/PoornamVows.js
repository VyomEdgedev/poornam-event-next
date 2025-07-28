import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { keyframes } from "@emotion/react";

const vows = [
  { img: "/AboutVows3.png", title: "Emotions Ka Khayal" },
  { img: "/AboutVows4.png", title: "Riwaaz Ko Rang Denge" },
  { img: "/AboutVows5.png", title: "Aapki Tension,Ab Hamari" },
  { img: "/AboutVows6.png", title: "Banayenge SapneKo Haqiqat" },
  { img: "/AboutVows7.png", title: "Sunenge Dil Se" },
  { img: "/AboutVows1.png", title: "Yaadon Ka Wada" },
  { img: "/AboutVows2.png", title: "Har Scene,Screen-Ready" },
];

const rotateParent = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const rotateChildren = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const fireGlow = keyframes`
  0% {
    box-shadow: 0 0 10px 5px rgba(255, 87, 34, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 140, 0, 0.8);
  }
  100% {
    box-shadow: 0 0 10px 5px rgba(255, 87, 34, 0.6);
  }
`;

const PoornamVows = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const containerSize = isMobile ? 280 : isTablet ? 400 : 600;
  const radius = isMobile ? 90 : isTablet ? 140 : 220;
  const avatarSize = isMobile ? 60 : isTablet ? 80 : 120;
  const centerSize = isMobile ? 120 : isTablet ? 150 : 200;

  return (
    <Grid
      container
      width="fit-content"
      margin="0 auto"
      sx={{ px: { xs: 1, sm: 2, md: 3 } }}
    >
      <Box sx={{ p: 1, textAlign: "center", width: "100%" }}>
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.5rem" },
            fontFamily: "Gloock,Sans-serif",
          }}
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          Poornam Vows
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
            fontFamily: "Akatab,Sans-serif",
          }}
          variant="subtitle1"
          gutterBottom
        >
          {` Poornam's 7 Pheras of Promise  `}
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: containerSize,
            height: containerSize,
            mx: "auto",
            my: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              animation: `${rotateParent} 20s linear infinite`,
            }}
          >
            {vows.map((vow, index) => {
              const angle = (index / vows.length) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    left: `calc(50% + ${x}px - ${avatarSize / 2}px)`,
                    top: `calc(50% + ${y}px - ${avatarSize / 2}px)`,
                    width: avatarSize,
                    height: avatarSize + 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: `${rotateChildren} 20s linear infinite`,
                  }}
                >
                  <Avatar
                    src={vow.img}
                    alt={vow.title || `Vow ${index + 1}`}
                    sx={{
                      width: avatarSize,
                      height: avatarSize,
                      border: "2px solid #fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                  {vow.title && (
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 0.5,
                        fontSize: {
                          xs: "0.6rem",
                          sm: "0.7rem",
                          md: "0.8rem",
                        },
                        textAlign: "center",
                        maxWidth: "80px",
                      }}
                    >
                      {vow.title}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: centerSize,
              height: centerSize,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid #ccc",
              animation: `${fireGlow} 1.5s ease-in-out infinite`,
              background:
                "radial-gradient(circle at center, rgba(255, 87, 34, 0.3), transparent)",
              zIndex: 2,
            }}
          >
            <Avatar
              src="/AboutVows8.png"
              alt="Center Ritual"
              variant="circular"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default PoornamVows;
