import CustomBanner from '@/common-component/banner/CustomBanner'
import CustomMultiSelect from '@/common-component/CustomMultiSelect/CustomMultiSelect';
import { apiClient } from '@/lib/api-client';
import { Box, Card, CardContent, Chip, Container, Grid, Typography ,Dialog, IconButton } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const FilterGallery = () => {
  const [themes, setThemes] = useState([]);
  const [allThemes, setAllThemes] = useState([]);
  const [categories, setCategories] = useState([{ _id: "all", name: "All" }]);
  const [selectedFilters, setSelectedFilters] = useState([{ _id: "all", name: "All" }]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [open, setOpen] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(0);

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
      
      // console.log("FilterGallery - URL filter param:", filterParam);
      // console.log("FilterGallery - Filter IDs:", filterIds);
      
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

    setSelectedFilters([{_id:"all", name:"All"}]);
    setThemes(allThemes);
    router.replace(`/browsegallery?filter=all`, undefined, { shallow: true });
  } else {
   
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

 const handleOpenModal = (idx) => {
    setCurrentIndex(idx);
    setOpen(true);
  };
  const handleCloseModal = () => setOpen(false);
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? themes.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === themes.length - 1 ? 0 : prev + 1));
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
       
        component="h2"
        align="center"
        sx={{ fontWeight: "400", mb: 1, fontFamily: 'Gloock,serif' }}
      >
        {` Visual Showcase `}
      </Typography>
      <Typography
       
        component="p"
        align="center"

        sx={{ mb: 2, fontFamily: "Akatab,Sans-serif", fontWeight: '400' }}
      >
        {`Highlighting exquisite captures from different weddings.`}
      </Typography>
      <Box textAlign="center" mb={4} display={"flex"} justifyContent={"center"} gap={2} flexWrap="wrap">
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
                component={"p"}
                  label={item.category?.name || "No Category"}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "#ddd",
                   
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
                   onClick={() => handleOpenModal(idx)}
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
                  
                    component="p"
                    sx={{
                      fontFamily: "Akatab,Sans-serif",
                      fontWeight: "400",
                    
                        cursor: "pointer",
                   
                    }}
                  >
                    {item.category?.name }
                  </Typography>
                                     <Typography
                    
                     component="h6"
                     sx={{
                       fontFamily: "Akatab,Sans-serif",
                       fontWeight: "500",
                       color: "#000000",
                     
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
    <Dialog
          open={open}
          onClose={handleCloseModal}
          fullScreen
          PaperProps={{
            sx: { backgroundColor: 'rgba(0,0,0,0.5)' }
          }}
        >
          <Box sx={{ position: 'relative', height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Close Button */}
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: 'absolute', top: 20, right: 20, color: "#DAA412", zIndex: 10 }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
            {/* Left Arrow */}
            <IconButton
              onClick={handlePrev}
              sx={{ position: 'absolute', left: 20,color: "#DAA412", zIndex: 10 }}
            >
              <ArrowBackIosNewIcon fontSize="large" />
            </IconButton>
            {/* Image */}
            <Box sx={{ maxWidth: '90vw', maxHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {themes.length > 0 && (
                <Image
                  src={themes[currentIndex]?.images[0]?.url}
                  alt={themes[currentIndex]?.category?.name || "No Title"}
                  width={900}
                  height={600}
                  style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }}
                />
              )}
            </Box>
            {/* Right Arrow */}
            <IconButton
              onClick={handleNext}
              sx={{ position: 'absolute', right: 20, color: "#DAA412", zIndex: 10 }}
            >
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </Box>
        </Dialog>
    </Container>
 



</>

  )
}

export default FilterGallery