import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButton from "@/common-component/button/CustomButton";
import { apiClient } from "@/lib/api-client";


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

const SearchFilter = ({ setPosts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const categories = ["Tips", "Trends", "Venues", "Real Weddings", "Budget"];
  const debounceTimeout = useRef(null);

  const fetchSuggestions = async (query, categories) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    try {
      const panel = "event";
      const queryParams = new URLSearchParams();
      queryParams.append("query", query);
      if (categories.length) queryParams.append("categories", categories.join(","));
      const url = `/api/blogs/${panel}/search/allblog?${queryParams.toString()}`;
      const response = await apiClient.get(url);
      if (response.status === 200) {
        setSuggestions(response.data.results || []);
        setOpenSuggestions(true);
      } else {
        setSuggestions([]);
        setOpenSuggestions(false);
      }
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
      setSuggestions([]);
      setOpenSuggestions(false);
    }
  };
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(searchValue, selectedCategories);
    }, 300); 
    return () => clearTimeout(debounceTimeout.current);
  }, [searchValue, selectedCategories]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const handleSuggestionClick = (blog) => {
    setOpenSuggestions(false);
    setSearchValue(blog.title);
    setPosts([blog]); 
  };

  return (
    <Box backgroundColor="#FFF7E4" position="relative">
      <Container sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container justifyContent="center" spacing={7.5}>
          {/* Heading Section */}
          <Grid item xs={12} md={6} sx={{ py: 2 }}>
            <Typography
              component="h2"
              sx={{ fontWeight: 400, color: "#000", mb: 1, fontFamily: "Gloock,serif" }}
            >
              Find What You Need
            </Typography>
            <Typography
              component="p"
              sx={{ fontWeight: 400, color: "#000", fontFamily: "Akatab,Sans-serif" }}
            >
              Search for valuable insights to aid your planning journey.
            </Typography>
          </Grid>

          {/* Search and Filters */}
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h6"
                sx={{ mb: 0, fontWeight: 500, color: "#000D1F", fontFamily: "Akatab,Sans-serif" }}
              >
                Search
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="How to plan haldi?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                variant="outlined"
                autoComplete="off"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                onFocus={() => setOpenSuggestions(true)}
              />
              {/* Suggestions dropdown */}
              {openSuggestions && suggestions.length > 0 && (
                <Paper
                  sx={{
                    position: "absolute",
                    zIndex: 10,
                    mt: 0.5,
                    width: "100%",
                    maxHeight: 300,
                    overflowY: "auto",
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <List dense>
                    {suggestions.map((blog) => (
                      <ListItem
                        key={blog._id}
                        disablePadding
                        onClick={() => handleSuggestionClick(blog)}
                      >
                        <ListItemButton>
                          <ListItemText primary={blog.title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              )}
            </Box>

            {/* Category Filter */}
            <Box sx={{ mb: 3 }}>
              <Typography component="h6" sx={{ mb: 0, fontWeight: 500, color: "text.primary" }}>
                Filter by Category
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
                      color: selectedCategories.includes(category) ? "white" : "black",
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchFilter;
