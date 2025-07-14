import React, { useState } from 'react';
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
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomButton from '@/common-component/button/CustomButton';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
 
}));

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#D4A574',
  color: 'white',
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.spacing(3),
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#C19660',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
}));

const FilterChip = styled(Chip)(({ theme, selected }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: selected ? theme.palette.primary.main : theme.palette.background.default,
  color: selected ? 'white' : theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.dark : theme.palette.action.hover,
  },
}));

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const categories = ['Tips', 'Trends', 'Venues', 'Real Weddings', 'Budget'];
  const locations = ['Indore', 'Bhopal', 'Jabalpur', 'Goa', 'Udaipur'];

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleLocationToggle = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const handleSearch = () => {
    console.log('Search:', { searchValue, selectedCategories, selectedLocations });
    // Handle search logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 1, md: 4 } }}>
      <Grid container spacing={{ xs: 2, md: 8 }} alignItems="flex-start">
        {/* Left Side - Main Heading */}
          <Grid item xs={12} md={6} sx={{ py: { xs: 1, md: 10 } }}>
            <StyledPaper elevation={0}>
              <Typography
                variant="h2"
                component="h3"
                sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: '400',
            color: '#000000',
            lineHeight: 1.2,
            mb: 1,
            fontFamily: 'Gloock,serif',
                }}
              >
                Find What You Need
              </Typography>
              <Typography
                variant="body1"
                sx={{
            color: '#000000',
            fontFamily:'Akatab,Sans-serif',
            fontSize: { xs: '0.95rem', md: '1.125rem' },
            lineHeight: 1.2,
                }}
              >
                Search for valuable insights to aid your planning journey.
              </Typography>
            </StyledPaper>
          </Grid>

          {/* Right Side - Search and Filters */}
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={0}>
            {/* Search Input */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, color: '#000D1F' ,fontFamily:"Akatab,Sans-serif" }}
              >
                Search
              </Typography>
              <TextField
                fullWidth
                placeholder="How to plan haldi?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: 'background.default',
                  },
                }}
              />
            </Box>

            {/* Filter by Category */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
              >
                Filter by Category
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {categories.map((category) => (
                  <FilterChip
                    key={category}
                    label={category}
                    selected={selectedCategories.includes(category)}
                    onClick={() => handleCategoryToggle(category)}
                    clickable
                  />
                ))}
              </Box>
            </Box>

            {/* Filter by Location */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
              >
                Filter by Location
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {locations.map((location) => (
                  <FilterChip
                    key={location}
                    label={location}
                    selected={selectedLocations.includes(location)}
                    onClick={() => handleLocationToggle(location)}
                    clickable
                  />
                ))}
              </Box>
            </Box>

            {/* Search Button */}
            <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
             
              <CustomButton 
                onClick={handleSearch}   data-testid="notify-button">Search</CustomButton>
            </Box>
          </StyledPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchFilter;