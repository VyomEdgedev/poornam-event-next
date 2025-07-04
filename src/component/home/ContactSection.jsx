import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

export default function ContactSection() {
  return (
    <Box sx={{ px: 4, py: 10, backgroundColor: '#fff' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Text Side */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'serif',
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            Get in Touch with <br />
            the Heart Behind <br />
            the Brand
          </Typography>
          <Typography variant="body1" sx={{ color: '#444' }}>
            Let’s connect and make your dream wedding a reality.
          </Typography>
        </Grid>

        {/* Right Form Side */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 400,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Your Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your name"
                variant="outlined"
                size="small"
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Your Message
              </Typography>
              <TextField
                fullWidth
                placeholder="How can we help you?"
                variant="outlined"
                size="small"
                multiline
                rows={3}
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                width: 'fit-content',
                mt: 1,
                borderRadius: '20px',
                backgroundColor: '#D4A016',
                textTransform: 'none',
                fontWeight: 500,
                px: 3,
                '&:hover': {
                  backgroundColor: '#b8860b',
                },
              }}
            >
              Let's Chat
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
