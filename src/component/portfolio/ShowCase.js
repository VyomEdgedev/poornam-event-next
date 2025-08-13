import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Dialog,
  IconButton,
} from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import Image from "next/image";
import CustomMultiSelect from "@/common-component/CustomMultiSelect/CustomMultiSelect";
import { apiClient } from "@/lib/api-client";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShowCase = () => {
  const [allThemes, setAllThemes] = useState([]);
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNames, setSelectedNames] = useState([
    { _id: "all", name: "All" },
  ]);
  const [categories, setCategories] = useState([{ _id: "all", name: "All" }]);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const portfolioImages = themes.map((item) => ({
    src: item?.images[0]?.url,
    alt: item.category?.name,
  }));

  useEffect(() => {
    const fetchThemes = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get("/api/portfolio/event");
        console.log(response);
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
        } else {
          setAllThemes([]);
          setThemes([]);
        }
      } catch (error) {
        setAllThemes([]);
        setThemes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchThemes();
  }, []);

  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const handleCloseModal = () => setOpen(false);
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === portfolioImages.length - 1 ? 0 : prev + 1
    );
  };
  const handleChange = (selectedObjs) => {
    console.log("Selected objects:", selectedObjs);

    if (selectedObjs.length === 0) {
      setSelectedNames([{ _id: "all", name: "All" }]);
      setThemes(allThemes);
      return;
    }

    const hasAll = selectedObjs.some((obj) => obj._id === "all");
    const otherSelections = selectedObjs.filter((obj) => obj._id !== "all");

    if (hasAll && otherSelections.length > 0) {
      const finalSelection = otherSelections;
      setSelectedNames(finalSelection);
      setThemes(
        allThemes.filter((item) =>
          finalSelection.some((obj) => obj._id === item.category?._id)
        )
      );
    } else if (hasAll) {
      setSelectedNames([{ _id: "all", name: "All" }]);
      setThemes(allThemes);
    } else {
      setSelectedNames(selectedObjs);
      setThemes(
        allThemes.filter((item) =>
          selectedObjs.some((obj) => obj._id === item.category?._id)
        )
      );
    }
  };
  const handleBrowse = () => {
    const filters = selectedNames.filter((obj) => obj._id !== "all");
    const filterQuery =
      filters.length > 0 ? filters.map((obj) => obj._id).join(",") : "all";
    router.push(`/browsegallery?filter=${encodeURIComponent(filterQuery)}`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Typography
      
        component="h2"
        align="center"
        sx={{
          fontWeight: "400",
          mb: 1,
          fontFamily: "Gloock,serif",
        
        }}
      >
        {` Visual Showcase `}
      </Typography>
      <Typography
      
        component="p"
        align="center"
        sx={{ mb: 2, fontFamily: "Akatab,Sans-serif", fontWeight: "400" }}
      >
        {`Highlighting exquisite captures from different weddings.`}
      </Typography>
      <Box
        textAlign="center"
        mb={4}
        display={"flex"}
        justifyContent={"center"}
        gap={2}
        flexWrap="wrap"
      >
        <CustomMultiSelect
          names={categories}
          value={selectedNames}
          onChange={handleChange}
          label="Filter by Category"
          multiple={true}
        />
        <CustomButton
          onClick={handleBrowse}
          data-testid="notify-button"
          sx={{ width: { xs: "178px", sm: "auto" } }}
        >
          {`Browse Gallery`}{" "}
        </CustomButton>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 2, md: 4, lg: 6, xl: 6 }}
        justifyContent="center"
      >
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
                    {/* {staticDescriptions[idx] || "A beautiful wedding moment."} */}
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
          sx: { backgroundColor: "rgba(0,0,0,0.5)" },
        }}
      >
       <Box sx={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', mt:3 }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "#fff",
              zIndex: 10,
              backgroundColor:"#DAA412",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <CloseIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: 20,
            color: "#fff",
              zIndex: 10,
              backgroundColor:"#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
          {/* Image */}
          <Box sx={{ height:"100vh",width:"100%", }}>
          
            {portfolioImages.length > 0 && (
              <Image
                src={portfolioImages[currentIndex].src}
                alt={portfolioImages[currentIndex].alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            )}
          </Box>
          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: 20,
               color: "#fff",
              zIndex: 10,
              backgroundColor:"#DAA412 !important",
              // p: { xs: 0.5, sm: 0.75, md: 1 }, 
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 18, sm: 20, md: 24, lg: 28 } }} />
          </IconButton>
        </Box>
      </Dialog>
    </Container>
  );
};

export default ShowCase;
