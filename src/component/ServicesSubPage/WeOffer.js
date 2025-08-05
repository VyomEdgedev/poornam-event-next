import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { apiClient } from '@/lib/api-client';

// JSON data structure for WeOffer services
const weOfferData = [
  {
    id: 1,
    icon: "/WeOffer1.svg",
    title: "Venue Selection",
    description: "We help you find the perfect venue."
  },
  {
    id: 2,
    icon: "/WeOffer2.svg",
    title: "Catering Services",
    description: "Exquisite menus tailored for your taste."
  },
  {
    id: 3,
    icon: "/WeOffer3.svg",
    title: "Decor & Design",
    description: "Transforming spaces into magical venues."
  },
  {
    id: 4,
    icon: "/WeOffer4.svg",
    title: "Entertainment",
    description: "Live bands, DJs, performers, and more."
  },
  {
    id: 5,
    icon: "/WeOffer5.svg",
    title: "Transportation",
    description: "Seamless transfers for you and your guests."
  },
  {
    id: 6,
    icon: "/WeOffer6.svg",
    title: "Wedding Coordination",
    description: "On-the-day management for peace of mind"
  },
  {
    id: 7,
    icon: "/WeOffer7.svg",
    title: "Photography & Videography",
    description: "Capturing every moment beautifully."
  },
  {
    id: 8,
    icon: "/WeOffer8.svg",
    title: "Guest Management",
    description: "RSVPs and guest accommodations handled."
  }
];

function WeOffer({serviceId}) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await apiClient.get(`api/service/getServicePageById/${serviceId}/event`);
        let categoryArr;
        if (Array.isArray(response.data.serviceCategory)) {
          categoryArr = response.data.serviceCategory;
        } else if (response.data.serviceCategory) {
          
          categoryArr = [response.data.serviceCategory];
        }
        setCategories(categoryArr);
      } catch (err) {
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };
   fetchCategories();
  }, [serviceId]);

    return (
         <Box
                sx={{
                  px: { xs: 2, sm: 1, md: 1, lg: 15, xl: 28 },
                  py: { xs: 4, sm: 6, md: 8 },
                    bgcolor: "#FFF7E4"
                }}
              >
        <Box textAlign="center"
        px={{xs : "5%", sm:"10%", md: "15%"}} >
            <Typography sx={{
                fontSize: { xs: "32px", sm: "32px", md: "34px" }
                , fontFamily: "Gloock"
            }}>
                {`What's inside Your 'Shaadi ka Pitara'?`}</Typography>
            
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
                {categories.map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={service.id || index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box textAlign="center">
                            <Box
                                sx={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    border: '2px solid #DAA412',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '0 auto',
                                }}
                            >
                                <Image
                                    src={service.image?.url || "/Weoffer1.svg"}
                                    alt={service.name}
                                    width={40}
                                    height={40}
                                    objectFit="contain"
                                />
                            </Box>
                            <Box sx={{ padding: "10px" }}>
                                <Typography 
                                    fontWeight={600} 
                                    sx={{ 
                                        fontFamily: "Akatab,Sans-serif", 
                                        fontSize: { xs: "13px", sm: "13px", md: "13px" } 
                                    }}
                                >
                                    {service.name}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="text.primary" 
                                    sx={{ 
                                        width: {xs:"100%", sm:"180px", md:"200px", lg:"100%"}, 
                                        fontFamily: "Akatab,Sans-serif", 
                                        fontSize: { xs: "16px", sm: "16px", md: "16px" } 
                                    }}
                                >
                                    {service.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
    )
}

export default WeOffer;

