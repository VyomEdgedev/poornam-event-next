import React from 'react'
import CustomBanner from '@/common-component/banner/CustomBanner'
import { Box } from '@mui/material'
import FAQSection from '../home/FAQ'
import SubCard from './SubCard'
import Subtext from './Subtext'


export const SubBlog = () => {
  return (
  <Box>
     <CustomBanner
                backgroundImage="/SubBlogBanner.png"
                showLogo={true}
                logoSrc="/logo.png"
            >
            </CustomBanner >
        <SubCard></SubCard>
        <Subtext></Subtext>
            <FAQSection></FAQSection>
  </Box>
  )
}
