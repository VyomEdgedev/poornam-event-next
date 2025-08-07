import { Grid, Box, Typography, TextField, CircularProgress } from '@mui/material'
import CustomButton from '@/common-component/button/CustomButton'
import React, { useState } from 'react'
import { apiClient } from '@/lib/api-client';
import { toast } from 'react-toastify';
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
        formType: "notify",
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

    <Box px={{xs : "5%", sm:"2%", md: "0%", lg:"5%" ,xl:"10%"}} py={{xs : "5px", sm:"10px", md: "10px"}} textAlign="center" bgcolor="#FFF7E4" >
      <Box container
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        textAlign="center"
      
      sx={{ flexDirection: { xs: 'column', sm:'row', md: 'row' }, margin: 2, padding: 1, gap: 5 }}// column on mobile, row on desktop
      >
      <Box textAlign="left"  sx={{ width: { xs: "100%", sm: "50%" }}}>
        <Typography sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "2.2rem" },   fontFamily: 'Gloock, serif', }}>
        {`  Not Just a Wedding. Your Wedding.`}
        </Typography>
        <Typography variant="body2" color="text.primary"
          sx={{ fontFamily: "Akatab, serif", fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.1rem" } }}>
         {`We're here to help you plan a wedding that's unforgettable, personal,
          and oh-so-magical. Drop your email, and we'll make sure you're the first
          to get our latest tips, updates, and exclusive ideas before anyone else.`}
        </Typography>
      </Box>

      <Box>
        <Box textAlign="left">
          <Typography variant="body2" sx={{ mb: 0.5, frontFamily: "Akatab,Sans-serif", fontWeight: '500', color: '#000000' }}>
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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, frontFamily: "Akatab,Sans-serif", fontWeight: '500' }}>
         {` Big shhadi secrets and  surprises are on the way. stay tuned!`}
        </Typography>
        {success && (
            <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
              {success}
            </Typography>
          )}
          <CustomButton
            data-testid="notify-button"
            onClick={handleNotifyClick}
            sx={{ mt: 2, width: 130, height: 50 }}
            disabled={loading}
          >
             {loading ? (
              <CircularProgress size={20} sx={{ color: "#fff" }} />
            ) : (
              "Notify Me"
            )}
          </CustomButton>
      </Box>
    </Box>

    </Box >



  )
}

export default WeddingKit;