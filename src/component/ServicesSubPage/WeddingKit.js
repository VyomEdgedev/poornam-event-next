import { Grid, Box, Typography, TextField } from '@mui/material'
import CustomButton from '@/common-component/button/CustomButton'
import React from 'react'


const handleLetChat = () => {
  // Add your navigation or action logic here
  console.log("Let's Chat clicked");
};
function WeddingKit() {
  return (

    <Box px="10%" py="10px" textAlign="center" bgcolor="#FFFAF0" >
      <Box container
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        textAlign="center"
      
      sx={{ flexDirection: { xs: 'column', md: 'row' }, margin: 2, padding: 1, gap: 5 }}// column on mobile, row on desktop
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
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5, frontFamily: "Akatab,Sans-serif", fontWeight: '500' }}>
         {` Big shhadi secrets and  surprises are on the way. stay tuned!`}
        </Typography>
        <CustomButton  data-testid="notify-button" onClick={handleLetChat} sx={
          { mt: 2, width: 130, height: 50 }
        }>{`Notify Me`}</CustomButton>
      </Box>
    </Box>

    </Box >



  )
}

export default WeddingKit;