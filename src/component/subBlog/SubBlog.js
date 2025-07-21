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
              breadcrumbs={[
          { href: '/', isHome: true },
           { href: '/blog', label: 'Blog' },
        //  { href: '/services', label: 'services' },
          { href: '/subblog', label: 'Sub Blog page' }
        ]}
        // Optional: customize breadcrumbs position
        breadcrumbsPosition={{
          top: '370px',
          left: '52px',
          lg: { top: '320px', left: '50px' },
          md: { top: '280px', left: '20px' },
          sm: { top: '260px', left: '10px' },
          xs: { top: '210px', left: '20px' }
        }}
        overlay={{
          background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)',
          width: '70%',
          responsive: {
            md: {
              width: '100%',
              background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 90%)'
            }
          }
        }}>
            </CustomBanner >
        <SubCard></SubCard>
        <Subtext></Subtext>
            <FAQSection></FAQSection>
  </Box>
  )
}
