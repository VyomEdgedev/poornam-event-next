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
  NoSsr,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";

const capitalizeWords = (text) => {
  if (!text) return "";
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

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

const SearchFilter = ({ setPosts, catgeory, initialPosts }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [openSuggestions, setOpenSuggestions] = useState(false);
  const debounceTimeout = useRef(null);
  const initialPostsRef = useRef(initialPosts || []);
  useEffect(() => {
    const { search, category } = router.query;
    if (search) {
      setSearchValue(search);
      setSelectedCategory(null);
      fetchSuggestions(search, null);
      setOpenSuggestions(true);
    } else if (category) {
      setSelectedCategory(category);
      setSearchValue("");
      fetchSuggestions("", category);
    } else {
      setPosts(initialPostsRef.current);
    }
  }, [router.query]);

  const fetchSuggestions = async (query, category) => {
    try {
      const panel = "event";
      const queryParams = new URLSearchParams();
      if (query) queryParams.append("query", query);
      if (category) queryParams.append("query", category);

      const url = `/api/blogs/${panel}/search/allblog?${queryParams.toString()}`;
      const response = await apiClient.get(url);

      if (response.status === 200) {
        const results = response.data.results || [];
        setSuggestions(results);
        setOpenSuggestions(true);
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

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) setSelectedCategory(null);

    router.replace(
      {
        pathname: router.pathname,
        query: { search: value || undefined },
      },
      undefined,
      { shallow: true }
    );

    if (!value) {
      setPosts(initialPostsRef.current);
      return;
    }
  };

  useEffect(() => {
    if (!searchValue && !selectedCategory) return;
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(searchValue, selectedCategory);
    }, 300);
    return () => clearTimeout(debounceTimeout.current);
  }, [searchValue, selectedCategory]);


  // Category select
  const handleCategoryToggle = (categoryName) => {
    const newCategory = selectedCategory === categoryName ? null : categoryName;
    setSelectedCategory(newCategory);

    // Clear search when selecting category
    if (newCategory) setSearchValue("");

    router.replace(
      {
        pathname: router.pathname,
        query: { category: newCategory || undefined }, // only `category` param
      },
      undefined,
      { shallow: true }
    );

    if (!newCategory) {
      setPosts(initialPostsRef.current);
      return;
    }

    fetchSuggestions("", newCategory);
  };

  // Suggestion click
  const handleSuggestionClick = (blog) => {
    setOpenSuggestions(false);
    setSearchValue(blog.title);
    setPosts([blog]);
  };


  return (
    <Box backgroundColor="#FFF7E4" position="relative">
      <Container sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container justifyContent="center" spacing={0} columns={12}>
          {/* Heading */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{display:"flex",alignItems:"center"}}>
           <Box>
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
           </Box>
          </Grid>

          {/* Search + Filters */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            {/* Search */}
            
              <Box sx={{ mb: 3, position: "relative" }} className="search-suggestion-box">
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#ccc",
                        borderRadius: 1
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a", // Hover color
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a", // Focus (click) color
                        borderWidth: 2,
                      },
                    },
                    backgroundColor: "white"
                  }}
                  // sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                  onFocus={() => setOpenSuggestions(true)}
                />

                {/* Suggestions */}
                {openSuggestions && suggestions.length > 0 && (
                  <Paper
                    sx={{
                      position: "absolute",
                      top: "calc(100% + 1px)", // exactly below the TextField block
                      left: 0,
                      right: 0,
                      width: "100%",          // match TextField width
                      zIndex: 10,
                      maxHeight: 240,
                      overflowY: "auto",
                      bgcolor: "background.paper",
                      borderRadius: 1,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <List dense sx={{ py: 0 }}>
                      {suggestions.slice(0, 5).map((blog) => (
                        <ListItem
                          key={blog._id}
                          disablePadding
                          onClick={() => handleSuggestionClick(blog)}
                          sx={{
                            borderBottom: "1px solid #f0f0f0",
                            "&:last-child": {
                              borderBottom: "none",
                            },
                          }}
                        >
                          <ListItemButton
                            sx={{
                              py: 0.5,
                              px: 1.5,
                              "&:hover": {
                                backgroundColor: "#f5f5f5",
                              },
                            }}
                          >
                            <ListItemText
                              primary={blog.title}
                              primaryTypographyProps={{
                                fontSize: "0.8rem",
                                fontWeight: 400,
                                fontFamily: "Akatab, sans-serif",
                                color: "#333",
                                noWrap: true,
                              }}
                            />
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
              
              <Box  sx={{ display: "flex", flexWrap: "wrap", gap: 1 ,height:"140px", overflow:"auto"}} >
                {catgeory.map((category) => (
                  <FilterChip
                    key={category.name}
                    label={capitalizeWords(category.name)}
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
