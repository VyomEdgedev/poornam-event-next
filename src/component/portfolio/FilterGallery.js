import CustomBanner from '@/common-component/banner/CustomBanner'
import CustomMultiSelect from '@/common-component/CustomMultiSelect/CustomMultiSelect';
import { apiClient } from '@/lib/api-client';
import { Box, Card, CardContent, Chip, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const FilterGallery = () => {
  const [themes, setThemes] = useState([]);
  const [allThemes, setAllThemes] = useState([]);
  const [categories, setCategories] = useState([{ _id: "all", name: "All" }]);
  const [selectedFilters, setSelectedFilters] = useState([{ _id: "all", name: "All" }]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    const fetchAllThemes = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/api/portfolio/event");
        const data = response.data;
        if (Array.isArray(data)) {
          setAllThemes(data);
          setThemes(data);
 
          const uniqueCategories = [];
          const map = {};
          data.forEach((item) => {
            if (item.category && !map[item.category._id]) {
              uniqueCategories.push({
                _id: item.category._id,
                name: item.category.name,
              });
              map[item.category._id] = true;
            }
          });
          setCategories([{ _id: "all", name: "All" }, ...uniqueCategories]);
        }
      } catch (error) {
        console.error("Error fetching themes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllThemes();
  }, []);

  
  useEffect(() => {
    if (router.isReady && allThemes.length > 0 && categories.length > 1) {
      const filterParam = router.query.filter || "all";
      const filterIds = filterParam.split(",");
      
      console.log("FilterGallery - URL filter param:", filterParam);
      console.log("FilterGallery - Filter IDs:", filterIds);
      
      if (filterIds.includes("all")) {
        setSelectedFilters([{ _id: "all", name: "All" }]);
        setThemes(allThemes);
      } else {
     
        const filterObjects = filterIds.map(id => {
          const category = categories.find(cat => cat._id === id);
          return category || { _id: id, name: id };
        });
        setSelectedFilters(filterObjects);
        
    
        const filteredThemes = allThemes.filter((item) =>
          filterIds.includes(item.category?._id)
        );
        setThemes(filteredThemes);
      }
    }
  }, [router.isReady, router.query.filter, allThemes, categories]);


const handleFilterChange = (selectedObjs) => {
  console.log("FilterGallery - Selected objects:", selectedObjs);
  

  if (selectedObjs.length === 0) {
    setSelectedFilters([{_id:"all", name:"All"}]);
    setThemes(allThemes);
    router.replace(`/browsegallery?filter=all`, undefined, { shallow: true });
    return;
  }

  const hasAll = selectedObjs.some(obj => obj._id === "all");
  const otherSelections = selectedObjs.filter(obj => obj._id !== "all");
  
  if (hasAll && otherSelections.length > 0) {
    // Remove "All" and keep only other selections
    const finalSelection = otherSelections;
    setSelectedFilters(finalSelection);
    setThemes(
      allThemes.filter((item) =>
        finalSelection.some(obj => obj._id === item.category?._id)
      )
    );
    const filterQuery = finalSelection.map(obj => obj._id).join(",");
    router.replace(`/browsegallery?filter=${encodeURIComponent(filterQuery)}`, undefined, { shallow: true });
  } else if (hasAll) {
    // Only "All" is selected
    setSelectedFilters([{_id:"all", name:"All"}]);
    setThemes(allThemes);
    router.replace(`/browsegallery?filter=all`, undefined, { shallow: true });
  } else {
    // Only specific categories are selected
    setSelectedFilters(selectedObjs);
    setThemes(
      allThemes.filter((item) =>
        selectedObjs.some(obj => obj._id === item.category?._id)
      )
    );
    const filterQuery = selectedObjs.map(obj => obj._id).join(",");
    router.replace(`/browsegallery?filter=${encodeURIComponent(filterQuery)}`, undefined, { shallow: true });
  }
};
  return (
    <>
    <CustomBanner
            title="Let’s Make Shaadi Magic Together!"
            // subtitle="We Orchestrate Celebrations You'll Tell Your Grandkids About."
            paragraphSubtitle={`From planning to "I do", we've got your back`}
            backgroundImage="/portfoliobanner.png"
            showLogo={true}
            logoSrc="/logo.png"
            breadcrumbs={[
              { href: "/", isHome: true },
              { href: "/gallery", label: "Gallery" },
          { href: "/browsegallery", label: "Browse Gallery" },
            ]}
            // Optional: customize breadcrumbs position
            breadcrumbsPosition={{
              top: "400px",
              left: "43px",
              lg: { top: "350px", left: "60px" },
              md: { top: "300px", left: "10px" },
              sm: { top: "330px", left: "3px" },
              xs: { top: "310px", left: "20px" },
            }}
            overlay={{
              background:
                "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)",
              width: "70%",
              responsive: {
                md: {
                  width: "100%",
                  background:
                    "linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)",
                },
              },
            }}
          >
            
          </CustomBanner>

 <Container maxWidth="xl" sx={{ py: 2, }}>
      
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{ fontWeight: "400", mb: 1, fontFamily: 'Gloock,serif', fontSize: { xs: '2rem', sm: '2rem', md: '3rem' } }}
      >
        {` Visual Showcase `}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        align="center"

        sx={{ mb: 2, fontFamily: "Akatab,Sans-serif", fontWeight: '400' }}
      >
        {`Highlighting exquisite captures from different weddings.`}
      </Typography>
      <Box textAlign="center" mb={4} display={"flex"} justifyContent={"center"} gap={2} flexWrap="wrap">|
        <CustomMultiSelect
      names={categories}
      value={selectedFilters}
      onChange={handleFilterChange}
      label="Filter by Category"
       />
     </Box>
         
      <Grid container spacing={{ xs: 2, sm: 2, md: 4, lg: 6, xl: 6 }} justifyContent="center">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : themes.length === 0 ? (
          <Typography>No data found.</Typography>
        ) : (
          themes.map((item, idx) => (
            <Grid item key={item._id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  cursor: "pointer",
                }}
                elevation={1}
              >
                <Chip
                  label={item.category?.name || "No Category"}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "#ddd",
                    fontSize: 11,
                    zIndex: 2,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    width: "350px",
                    height: 300,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 14,
                    textAlign: "center",
                    minHeight: { xs: 250, sm: 280, md: 300 },
                  }}
                >
                  <Image
                    src={item?.images[0]?.url}
                    alt={item.category?.name || "No Title"}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "400",
                      fontSize: {
                        xs: "0.9rem",
                        sm: "0.9rem",
                        md: "1rem",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {item.category?.name || "No Title"}
                  </Typography>
                                     <Typography
                     variant="body1"
                     component="p"
                     sx={{
                       fontFamily: "Akatab,Sans-serif",
                       fontWeight: "500",
                       color: "#000000",
                       fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.125rem" },
                     }}
                   >
                     {item.description || "A beautiful wedding moment."}
                   </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
 



</>

  )
}

export default FilterGallery