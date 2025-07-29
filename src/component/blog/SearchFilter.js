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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isBelow1250 = useMediaQuery("(max-width:1250px),(spacing:50px)");

  const responsiveSpacing = isBelow1250
    ? { xs: 2, sm: 0, md: 2, lg: 6, xl: 25 } // spacing when screen is small
    : { xs: 2, sm: 0, md: 2, lg: 6, xl: 25 }; // spacing when screen is large

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
    <Grid backgroundColor="#FFF7E4">
      <Container
        width="100%"
        maxWidth="xl"
        sx={{
          py: { xs: 1, sm: 1, md: 4 },
          px: { xs: 2, sm: 0, md: 0, lg: 10, xl: 0 },
        }}
      >
        <Grid
          container
          spacing={responsiveSpacing}
          alignItems={isBelow1250 ? "center" : "center"}
          justifyContent={isBelow1250 ? "center" : "center"}
        >
          {/* Left Side - Main Heading */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              py: { xs: 1, sm: 2, md: 2 },
              px: { xs: 2, sm: 4, md: 0, lg: 0, xl: 0 },
            }}
            width={{
              xs: "495px",
              sm: "495px",
              md: "400px",
              lg: "495px",
              xl: "495px",
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: "400",
                color: "#000000",
                lineHeight: 1.2,
                mb: 1,
                fontFamily: "Gloock,serif",
              }}
            >
              {` Find What You Need`}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: "#000000",
                fontFamily: "Akatab,Sans-serif",
                fontSize: { xs: "15px", sm: "16px", md: "18px" },
                lineHeight: 1.2,
              }}
            >
              {` Search for valuable insights to aid your planning journey.`}
            </Typography>
          </Grid>

          {/* Right Side - Search and Filters */}
          <Grid item xs={12} sm={8} md={6}>
            {/* Search Input */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  mb: 0,
                  fontWeight: 600,
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
                variant="h6"
                component="h6"
                sx={{ mb: 0, fontWeight: 600, color: "text.primary" }}
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
                      fontWeight: 500,
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
                variant="h6"
                component="h6"
                sx={{ mb: 0, fontWeight: 600, color: "text.primary" }}
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

            {/* Search Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
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
    </Grid>
  );
};

export default SearchFilter;
