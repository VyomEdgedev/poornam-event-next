import React from 'react'
import CustomBanner from '../banner/CustomBanner';
import CustomButton from '../button/CustomButton';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Page404() {
  const router = useRouter();
  const handlePage404W = () => {
    window.open("https://wa.me/919519066885", "_blank");
  };

  return (
    <Box>
      <CustomBanner
        showLogo={true}
        logoSrc="/logo2.webp"
        height={{ xs: "15vh", sm: "15vh", md: "40vh"}}
        
      />

      <Box padding="3%">
        <Box
          component="img"
          src="/Page404.png"
          alt="Sample"
          sx={{
            display: 'block',
            width: '300px',
            height: '260px',
            mx: 'auto',
          }}
        />

        <Box
          component="img"
          src="/404Icon.svg"
          alt="Sample"
          sx={{
            display: 'block',
            width: '300px',
            height: '260px',
            mx: 'auto',
          }}
        />

        <Box display="flex" justifyContent="center" justifyItems="center">
          <Box
            border="1px solid #BEBBB2"
            bgcolor="#FFFCF5"
            borderRadius="10px"
            padding="3%"
            display="inline-block"
            textAlign="center"
          >
            <Typography
              variant="h2"
              sx={{
                color: "#DAA412",
                fontSize: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
                fontFamily: 'Gloock,serif',
              }}
              dangerouslySetInnerHTML={{
                __html: `<strong>Oops.. </strong>The Band Baaja Didn&apos;t Make It Here!`,
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '0.95rem', md: '1.2rem' },
                fontFamily: "Akatab,Sans-serif"
              }}
              dangerouslySetInnerHTML={{
                __html: `This page is missing like your favorite cousin on <strong>time.</strong>`,
              }}
            />
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" justifyItems="center">
          <Box padding="10px" display="inline-block" textAlign="center">
            <Typography
              sx={{
                fontSize: { xs: '0.95rem', sm: '0.95rem', md: '1.2rem' },
                fontFamily: "Akatab,Sans-serif"
              }}
              dangerouslySetInnerHTML={{
                __html: `But don&apos;t worry - we&apos;ve got plenty of magical moments waiting for you! <br />Let&apos;s get you back to where the <strong>celebration is still on!</strong>`,
              }}
            />
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={{xs: '10px', sm: '20px', md: '30px'}}
          padding="20px"
        >
        
            <CustomButton ariaLabel={"Home"} onClick={() => router.push('/')}  sx={{ fontSize: {  xs: '12px', sm: '13px', md: '16px' }}} >
              Take Me Home
            </CustomButton>
          
          
          
            <CustomButton ariaLabel={"Contact Us"} onClick={() => router.push('/contact')} sx={{ fontSize: {  xs: '12px', sm: '13px', md: '16px' }}}>
              Contact Us
            </CustomButton>

          
          <CustomButton ariaLabel={"Plan My Wedding"} sx={{ fontSize: { xs: '12px', sm: '13px', md: '16px' }}} onClick={handlePage404W}>
            Plan My Wedding
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Page404;
