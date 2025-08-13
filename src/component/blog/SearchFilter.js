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

const SearchFilter = ({ setPosts, catgeory }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const debounceTimeout = useRef(null);

  // ✅ API call
  const fetchSuggestions = async (query, category) => {
    try {
      const panel = "event";
      const queryParams = new URLSearchParams();

      queryParams.append("query", query ||category);
    

      const url = `/api/blogs/${panel}/search/allblog?${queryParams.toString()}`;
      const response = await apiClient.get(url);

      if (response.status === 200) {
        const results = response.data.results || [];
        setSuggestions(results);
        setOpenSuggestions(true);

        // If filtering only by category, update posts list immediately
        if (category && !query) {
          setPosts(results);
        }
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

  // ✅ Debounce calls
  useEffect(() => {
    if (!searchValue && !selectedCategory) {
      setSuggestions([]);
      setOpenSuggestions(false);
      return;
    }
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(searchValue, selectedCategory);
    }, 300);
    return () => clearTimeout(debounceTimeout.current);
  }, [searchValue, selectedCategory]);

  // ✅ Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".search-suggestion-box")) {
        setOpenSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handlers
  const handleSearchChange = (e) => setSearchValue(e.target.value);

  const handleCategoryToggle = (categoryName) => {
    setSelectedCategory((prev) => (prev === categoryName ? null : categoryName));
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
          {/* Heading */}
          <Grid item xs={12} md={6} sx={{ py: 2 }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 400,
                color: "#000",
                mb: 1,
                fontFamily: "Gloock,serif",
              }}
            >
              Find What You Need
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 400,
                color: "#000",
                fontFamily: "Akatab,Sans-serif",
              }}
            >
              Search for valuable insights to aid your planning journey.
            </Typography>
          </Grid>

          {/* Search + Filters */}
          <Grid item xs={12} md={6}>
            {/* Search */}
            <Box sx={{ mb: 3 }} className="search-suggestion-box">
              <Typography
                component="h6"
                sx={{
                  mb: 0,
                  fontWeight: 500,
                  color: "#000D1F",
                  fontFamily: "Akatab,Sans-serif",
                }}
              >
                Search
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="How to plan haldi?"
                value={searchValue}
                onChange={handleSearchChange}
                variant="outlined"
                autoComplete="off"
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                onFocus={() => setOpenSuggestions(true)}
              />

              {/* Suggestions */}
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

            {/* Categories */}
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h6"
                sx={{
                  mb: 0,
                  fontWeight: 500,
                  fontFamily: "Akatab, sans-serif",
                  color: "text.primary",
                }}
              >
                Filter by Category
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {catgeory.map((category) => (
                  <FilterChip
                    key={category.name}
                    label={category.name}
                    selected={selectedCategory === category.name}
                    onClick={() => handleCategoryToggle(category.name)}
                    clickable
                    variant="filled"
                    component="p"
                    sx={{
                      margin: "4px",
                      fontWeight: 400,
                      fontFamily: "Akatab, sans-serif",
                      backgroundColor:
                        selectedCategory === category.name
                          ? "#DAA412"
                          : "#0000000D",
                      color:
                        selectedCategory === category.name ? "white" : "black",
                      "&:hover": {
                        backgroundColor:
                          selectedCategory === category.name
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
