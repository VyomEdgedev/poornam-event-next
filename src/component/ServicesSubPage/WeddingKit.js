import { Grid, Box, Typography, TextField, CircularProgress, Container } from '@mui/material'
import CustomButton from '@/common-component/button/CustomButton'
import React, { useState } from 'react'
import { apiClient } from '@/lib/api-client';
import { toast, ToastContainer } from 'react-toastify';
function WeddingKit() {
 const [email, setEmail] = useState('');
  const [error, setError] = useState('');
const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNotifyClick = async () => {
     setError('');
    setSuccess('');
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
       const payload = {
        formType: "contactus",
        email: email.trim(),
        sourcePage: "/services",
      };
      const response = await apiClient.post('/api/userform/event', { email });
       toast.success("Thank you! You are now subscribed.");
      setEmail('');
    } catch (error) {
      const errorMsg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "";

      if (errorMsg.includes("E11000") || errorMsg.includes("duplicate key")) {
        toast.error("You are already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
};
  
  return (
    <Box 
    // px={{xs : "5%", sm:"2%", md: "0%", lg:"5%" ,xl:"10%"}} 
    py={{xs : "5px", sm:"10px", md: "10px"}}  bgcolor="#FFF7E4" >
    <Container>
      <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
      <Box textAlign="left">
        <Typography component="h2" sx={{   fontFamily: 'Gloock, serif', }}>
        {`  Not Just a Wedding. Your Wedding.`}
        </Typography>
        <Typography component="p" color="#000000"
          sx={{ fontFamily: "Akatab, serif",  }}>
         {`We're here to help you plan a wedding that's unforgettable, personal,
          and oh-so-magical. Drop your email, and we'll make sure you're the first
          to get our latest tips, updates, and exclusive ideas before anyone else.`}
        </Typography>
      </Box>
        
        
         </Grid>
      <Grid item size={{ xs: 12, sm: 6, md: 6 }} >  
        <Box>
        <Box textAlign="left">
          <Typography component="p" sx={{ mb: 0.5, fontFamily: "Akatab,Sans-serif", fontWeight: '500', color: '#000000' }}>
            Email*
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email address"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error)}
              helperText={error}
              disabled={loading}
          />
        </Box>
        <Typography component="p" color= "rgba(0, 0, 0, 0.5)" sx={{ mb: 0.5, fontFamily: "Akatab,Sans-serif", fontWeight: '500' }}>
         {` Big shhadi secrets and  surprises are on the way. stay tuned!`}
        </Typography>
        <Box textAlign={"left"}>
        {success && (
            <Typography variant="p" color="success.main" sx={{ mt: 1 }}>
              {success}
            </Typography>
          )}
         
          <CustomButton 
            data-testid="notify-button"
            onClick={handleNotifyClick}
            sx={{ mt: 2, width: 130, height: 50}}
            disabled={loading}
          >
             {loading ? (
              <CircularProgress size={20} sx={{ color: "#DAA412" }} />
            ) : (
              "Notify Me"
            )}
          </CustomButton>
          </Box>
      </Box></Grid>
      </Grid>
<ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
  

    </Container>
    </Box >

  )
}

export default WeddingKit;