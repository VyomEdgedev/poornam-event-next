import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  Divider,
  Paper,
  Slide,
  IconButton
} from '@mui/material';
import { Close as CloseIcon, Cookie as CookieIcon } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    analytics: false,
    marketing: false
  });

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true
    });
    setShowBanner(false);
    console.log('All cookies accepted');
  };

  const handleRejectNonEssential = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false
    });
    setShowBanner(false);
    console.log('Only necessary cookies accepted');
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    setShowPreferences(false);
    setShowBanner(false);
    console.log('Preferences saved:', preferences);
  };

  const handlePreferenceChange = (type) => (event) => {
    setPreferences(prev => ({
      ...prev,
      [type]: event.target.checked
    }));
  };

  if (!showBanner) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="success.main" align="center">
          ✅ Cookie preferences have been saved!
        </Typography>
        <Button 
          variant="outlined" 
          onClick={() => setShowBanner(true)}
          sx={{ mt: 2, display: 'block', mx: 'auto' }}
        >
          Show Cookie Banner Again
        </Button>
      </Box>
    );
  }

  return (
    <>
      {/* Cookie Banner */}
      <Paper
        elevation={8}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          p: 3,
          backgroundColor: '#1a1a1a',
          color: 'white',
          borderRadius: '16px 16px 0 0'
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
            <CookieIcon sx={{ fontSize: 32, color: '#ffa726', mt: 0.5 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                We Use Cookies (Not the Wedding Wale Wale)
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                This website uses cookies to give you a better, faster, and more personalized experience. 
                By continuing to browse, you agree to our use of cookies as per our Privacy Policy.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            flexWrap: 'wrap',
            justifyContent: { xs: 'stretch', sm: 'flex-end' }
          }}>
            <Button
              variant="contained"
              onClick={handleAcceptAll}
              sx={{
                backgroundColor: '#4caf50',
                '&:hover': { backgroundColor: '#45a049' },
                fontWeight: 'bold',
                flex: { xs: 1, sm: 'none' }
              }}
            >
              Accept All
            </Button>
            <Button
              variant="outlined"
              onClick={handleManagePreferences}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: '#ffa726', backgroundColor: 'rgba(255,167,38,0.1)' },
                flex: { xs: 1, sm: 'none' }
              }}
            >
              Manage Preferences
            </Button>
            <Button
              variant="text"
              onClick={handleRejectNonEssential}
              sx={{
                color: 'rgba(255,255,255,0.7)',
                '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.1)' },
                flex: { xs: 1, sm: 'none' }
              }}
            >
              Reject Non-Essential
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Manage Preferences Dialog */}
      <Dialog
        open={showPreferences}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowPreferences(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            m: 2
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pb: 1 
        }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Cookie Preferences
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setShowPreferences(false)}
            sx={{ color: 'grey.500' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ pt: 2 }}>
          {/* Necessary Cookies */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Necessary Cookies
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2" sx={{ color: 'success.main', fontWeight: 'bold' }}>
                  ✔ Always Active
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary">
              These are essential for the website to function properly (you can't turn these off).
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Analytics Cookies */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Analytics Cookies
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.analytics}
                    onChange={handlePreferenceChange('analytics')}
                    color="primary"
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Help us understand how users interact with our site so we can improve the experience.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Marketing Cookies */}
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Marketing Cookies
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.marketing}
                    onChange={handlePreferenceChange('marketing')}
                    color="primary"
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Allow us to show you personalized ads and offers on platforms like Instagram, Google, and YouTube.
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button
            onClick={handleSavePreferences}
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              fontWeight: 'bold',
              backgroundColor: '#1976d2',
              '&:hover': { backgroundColor: '#1565c0' }
            }}
          >
            Save My Preferences
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}