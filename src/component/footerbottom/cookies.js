import React, { useState, useEffect } from "react";
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
  IconButton,
} from "@mui/material";
import { Close as CloseIcon, Cookie as CookieIcon } from "@mui/icons-material";
import CustomButton from "@/common-component/button/CustomButton";
import Cookies from "js-cookie";

const COOKIE_KEY = "cookie_preferences";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const cookiePref = Cookies.get(COOKIE_KEY);
    if (cookiePref) {
      try {
        const parsed = JSON.parse(cookiePref);
        setPreferences({
          necessary: true,
          analytics: !!parsed.analytics,
          marketing: !!parsed.marketing,
        });
      } catch (e) {
        // If parsing fails, show banner
        setShowBanner(true);
      }
    } else {
      // If no cookie preferences exist, show banner
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (!showBanner) setShowPreferences(false);
  }, [showBanner]);

  if (!showBanner) return null;
  const savePreferencesToCookie = (prefs) => {
    Cookies.set(COOKIE_KEY, JSON.stringify(prefs), { expires: 365, sameSite: "Lax" });
  };
  const handleAcceptAll = () => {
    const newPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(newPrefs);
    savePreferencesToCookie(newPrefs);
    setShowBanner(false);

  };

  const handleRejectNonEssential = () => {
    const newPrefs = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(newPrefs);
    savePreferencesToCookie(newPrefs);
    setShowBanner(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    setShowPreferences(false);
    savePreferencesToCookie(preferences);
    setShowBanner(false);
  };

  const handlePreferenceChange = (type) => (event) => {
    setPreferences((prev) => ({
      ...prev,
      [type]: event.target.checked,
    }));
  };

  return (
    <>
      {/* Cookie Banner */}
      <Paper
        elevation={8}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          p: 2,
          backgroundColor: "rgba(1, 29, 74, 0.8)",
          color: "white",
          fontFamily: "Akatab,Sans-serif",
          borderRadius: "16px 16px 0 0",
        }}
      >
        <Box sx={{ mx: "auto", display: { xs: "block", sm: "block", md: "flex" }, justifyContent: "space-between" }}>
          <Box
            sx={{ width: { xs: "100%", sm: "100%", md: "60%" }, display: "flex", alignItems: "flex-start", gap: 1, mb: 0 }}
          >
            {/* <CookieIcon sx={{ fontSize: 32, color: '#ffa726', mt: 0.5 }} /> */}
            <Box sx={{ flex: 1, }}>
              <Typography
                component="h5"
                sx={{ fontWeight: "900", fontFamily: "Akatab,Sans-serif", mb: 1 }}
              >
                {`We Use Cookies (Not the Wedding Wale Wale)`}
              </Typography>
              <Typography
                component="p"
                sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.1, }}
              >
                {`This website uses cookies to give you a better, faster, and more personalized experience.  
                By continuing to browse, you agree to our use of cookies as per our Privacy Policy.`}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              alignItems: "center",
              gap: 2,
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "Center", gap: "10px", mt: 1, mb: 0.5 }}>
              <CustomButton
                ariaLabel={"Accept All"}
                onClick={handleAcceptAll}
                sx={{
                  fontWeight: "bold",

                }}
              >
                Accept All
              </CustomButton>
              <CustomButton
                ariaLabel={"Manage Preferences"}
                variant="outlined"
                onClick={handleManagePreferences}

                sx={{
                  borderColor: "white",
                  width: "250px",
                  color: "white",
                  "&:hover": {
                    borderColor: "#ffa726",
                    backgroundColor: "#DAA412",
                  },

                }}
              >
                Manage Preferences
              </CustomButton>
            </Box >
            <CustomButton
              ariaLabel={"Reject Non-Essential"}
              variant="outlined"
              onClick={handleRejectNonEssential}
              sx={{
                mt: 1,
                borderColor: "white",
                color: "rgba(255,255,255,0.7)",
                "&:hover": {
                  borderColor: "#DAA412",
                  color: "white",

                },

              }}
            >
              Reject Non-Essential
            </CustomButton>

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
            m: 2,
          },
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          {`Cookie Preferences`}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={() => setShowPreferences(false)}
          sx={{ color: "#DAA412" }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent sx={{ pt: 2 }}>
          {/* Necessary Cookies */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography component="p" sx={{ fontWeight: "900", fontFamily: "Akatab,Sans-serif" }}>
                {`Necessary Cookies`}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  component="p"
                  sx={{ color: "#DAA412", fontWeight: "bold" }}
                >
                  ✔ Always Active
                </Typography>
              </Box>
            </Box>
            <Typography component="p" color='#000000'>
              {`These are essential for the website to function properly (you can't turn these off).`}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Analytics Cookies */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography component="p" sx={{ fontWeight: "900", fontFamily: "Akatab,Sans-serif" }}>
                {`Analytics Cookies`}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.analytics}
                    onChange={handlePreferenceChange("analytics")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#DAA412",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "#DAA412",
                      },
                    }}
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>
            <Typography variant="p" color="#000000">
              {`Help us understand how users interact with our site so we can
              improve the experience.`}
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          {/* Marketing Cookies */}
          <Box sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography component="p" sx={{ fontWeight: "900", fontFamily: "Akatab,Sans-serif" }}>
                {`Marketing Cookies`}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.marketing}
                    onChange={handlePreferenceChange("marketing")}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#DAA412",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "#DAA412",
                      },
                    }}
                  />
                }
                label=""
                sx={{ m: 0 }}
              />
            </Box>
            <Typography variant="p" color="#000000">
              {`Allow us to show you personalized ads and offers on platforms like Instagram, Google, and YouTube.`}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <CustomButton ariaLabel={"save-preferences"} onClick={handleSavePreferences} size="large" fullWidth>
            {`Save My Preferences`}
          </CustomButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
