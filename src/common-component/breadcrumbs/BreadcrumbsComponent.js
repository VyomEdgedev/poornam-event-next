import React from 'react';
import { Breadcrumbs, Typography, Box } from '@mui/material';
import { Home, NavigateNext } from '@mui/icons-material';
import Link from 'next/link';


const BreadcrumbsComponent = ({ 
  items = [], 
  separator = <NavigateNext fontSize="small" sx={{ color: '#DAA412' }} />,
  showHomeIcon = true,
  maxItems = 8,
  homeIconColor = '#DAA412',
  sx = {}
}) => {
  // If no items provided, return null or empty component
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Box sx={{ py: 2, px: 2, ...sx }}>
      <Breadcrumbs
        separator={separator}
        maxItems={maxItems}
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: 'text.secondary',
          },
          '& .MuiBreadcrumbs-li': {
            color: '#DAA412',
            display: 'flex',
            alignItems: 'center',
          }
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isHome = item.isHome || item.href === '/' || item.href === '/home';
          
          if (isLast) {
            return (
              <Typography
                key={index}
                color="#DAA412"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
              >
                {isHome && showHomeIcon && (
                  <Home sx={{ mr: 0.5, color: homeIconColor }} fontSize="inherit" />
                )}
                {item.label}
              </Typography>
            );
          }

          return (
            <Typography
              component={Link}
              key={index}
              underline="hover"
              color="inherit"
              href={item.href}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: '0.875rem',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                }
              }}
              onClick={item.onClick}
            >
              {isHome && showHomeIcon && (
                <Home sx={{ mr: 0, color: homeIconColor }} fontSize="inherit" />
              )}
              {item.label}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsComponent;