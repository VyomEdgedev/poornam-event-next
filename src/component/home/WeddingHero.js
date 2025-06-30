'use client';

import { Box, Typography, Grid, useMediaQuery, useTheme, Stack } from '@mui/material';
import Image from 'next/image';

const WeddingHero = () => {
  const theme = useTheme();

  // 📏 Custom stacking breakpoint at 750px
  const isCompact = useMediaQuery('(max-width:900px)');

  return (
    <Box
      sx={{
        px: { xs: 2, md: 5 },
        py: { xs: 2, md: 5 },
        bgcolor: 'white',
        position: 'relative',
        // overflow: 'hidden',
      }}
    >
      <Grid
        container
        // spacing={2}
        alignItems="center"
        justifyContent="space-between"
        direction={isCompact ? 'column' : 'row'}
      >
        {/* LEFT - TEXT */}
        <Grid item xs={12} md={4} width={ isCompact ? '100%' : '50%'}>
          <Typography
            variant={isCompact ? 'h5' : 'h3'}
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            <Box component="span" sx={{ color: '#0A1E3F' }}>it’s Not </Box>
            <Box component="span" sx={{ color: '#D99F0B' }}>Just a Wedding...</Box>
          </Typography>

          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            It’s a Story You’ll Tell Forever
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Shaadi ka stress is real. One minute you're choosing napkin colors, 
            next minute you're crying over seating charts. We get it.
          </Typography>

          <Typography variant="body1" color="text.secondary">
            At Poornam, we don’t just manage weddings: We manage meltdowns, 
            moodboards, and Mom’s wishlist. From the first dance to the final 
            goodbye hug, we’re there.
          </Typography>
        </Grid>

        {/* RIGHT - IMAGE STACK */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: 'url("/image1.png")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              pt: 10,
              pb: 5,
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
              sx={{
                width: '100%',
                flexWrap: 'wrap',
                gap: 3,
              }}
            >
              {/* Image 1 */}
              <Box
                sx={{
                  transform: 'rotate(-5deg)',
                  bgcolor: '#fff8dc',
                  p: 1,
                  width: { xs: 140, sm: 160 },
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/wedding2.jpg"
                  alt="Wedding Stage"
                  width={160}
                  height={160}
                  style={{ width: '100%', height: 'auto', borderRadius: 6, objectFit: 'cover' }}
                />
              </Box>

              {/* Image 2 */}
              <Box
                sx={{
                  transform: 'rotate(6deg)',
                  bgcolor: '#fff8dc',
                  p: 1,
                  width: { xs: 140, sm: 160 },
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <Image
                  src="/wedding2.jpg"
                  alt="Bride Walk"
                  width={160}
                  height={160}
                  style={{ width: '100%', height: 'auto', borderRadius: 6, objectFit: 'cover' }}
                />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeddingHero;
