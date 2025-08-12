import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Chip,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "@/common-component/button/CustomButton";

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#D4A574",
  color: "white",
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(3),
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#C19660",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

const FilterChip = styled(Chip)(({ theme, selected }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: selected ? "#DAA412" : theme.palette.background.default,
  color: selected ? "white" : theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "6px",
  "&:hover": {
    backgroundColor: selected ? "#DAA412" : theme.palette.action.hover,
  },
}));

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const categories = ["Tips", "Trends", "Venues", "Real Weddings", "Budget"];
  const locations = ["Indore", "Bhopal", "Jabalpur", "Goa", "Udaipur"];
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleLocationToggle = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const handleSearch = () => {
    console.log("Search:", {
      searchValue,
      selectedCategories,
      selectedLocations,
    });
    // Handle search logic here
  };

  return (
    <Box backgroundColor="#FFF7E4">
      <Container
        sx={{
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid
          container
          justifyContent={{ xs: "center" }}
          alignItems={{ xs: "center" }}
          spacing={{ xs: 3, sm: 5, md: 7.5, lg: 18 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {/* Left Side - Main Heading */}
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              py: { xs: 1, sm: 2, md: 2 },
            }}
          >
            <Typography
             component="h2"
              sx={{
                fontWeight: "400",
                color: "#000000",

                mb: 1,
                fontFamily: "Gloock,serif",
              }}
            >
              {` Find What You Need`}
            </Typography>
            <Typography
              component="p"
              sx={{
                  fontWeight: "400",
                color: "#000000",
                fontFamily: "Akatab,Sans-serif",
              }}
            >
              {` Search for valuable insights to aid your planning journey.`}
            </Typography>
          </Grid>

          {/* Right Side - Search and Filters */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            {/* Search Input */}
            <Box sx={{ mb: 3 }}>
              <Typography
               
                component="h6"
                sx={{
                  mb: 0,
                  fontWeight: 500,
                  color: "#000D1F",
                  fontFamily: "Akatab,Sans-serif",
                }}
              >
                {`Search`}
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="How to plan haldi?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    backgroundColor: "background.default",
                  },
                }}
              />
            </Box>

            {/* Filter by Category */}
            <Box sx={{ mb: 3 }}>
              <Typography
              
                component="h6"
                sx={{ mb: 0, fontWeight: 500, color: "text.primary" }}
              >
                {`  Filter by Category`}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {categories.map((category) => (
                  <FilterChip
                    key={category}
                    label={category}
                    selected={selectedCategories.includes(category)}
                    onClick={() => handleCategoryToggle(category)}
                    clickable
                    variant="filled"
                    sx={{
                      margin: "4px",
                      fontWeight: 400,
                      fontFamily: "Akatab, sans-serif",
                      backgroundColor: selectedCategories.includes(category)
                        ? "#DAA412"
                        : "#0000000D",
                      color: selectedCategories.includes(category)
                        ? "white"
                        : "black",
                      "&:hover": {
                        backgroundColor: selectedCategories.includes(category)
                          ? "#DAA412"
                          : "grey.400",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Filter by Location */}
            <Box sx={{ mb: 3 }}>
              <Typography
               
                component="h6"
                sx={{ mb: 0, fontWeight: 500, color: "text.primary" }}
              >
                {`  Filter by Location`}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {locations.map((location) => (
                  <FilterChip
                    key={location}
                    label={location}
                    selected={selectedLocations.includes(location)}
                    onClick={() => handleLocationToggle(location)}
                    clickable
                    variant="filled"
                    sx={{
                      margin: "4px",
                      fontWeight: 500,
                      fontFamily: "Akatab, sans-serif",
                      backgroundColor: selectedLocations.includes(location)
                        ? "#DAA412"
                        : "#0000000D",
                      color: selectedLocations.includes(location)
                        ? "white"
                        : "black",
                      "&:hover": {
                        backgroundColor: selectedLocations.includes(location)
                          ? "#DAA412"
                          : "grey.400",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                // justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <CustomButton
                onClick={handleSearch}
                data-testid="notify-button"
              >{`Search`}</CustomButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchFilter;
