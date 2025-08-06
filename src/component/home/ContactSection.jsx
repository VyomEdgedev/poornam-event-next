import React, { useState } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import { apiClient } from "@/lib/api-client";
import SuccessModal from "@/common-component/modal/SuccessModal";
export default function ContactSection() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    fullName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // const handleLetChat = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const newErrors = {};
  //   if (!formData.name.trim()) newErrors.name = "Name is required";
  //   if (!formData.message.trim()) newErrors.message = "Message is required";

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     setLoading(false);
  //     return;
  //   }
  //   setTimeout(() => {
  //     toast.success("Successfully submitted!");
  //     setFormData({ name: "", message: "" });
  //     setLoading(false); // Stop loading after submit
  //     console.log("Form submitted:", formData);
  //   }, 1200);
  // };
  const handleLetChat = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "fullName is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const payload = {
        formType: "home",
        fullName: formData?.fullName,
        message: formData?.message,
        sourcePage: "/home",
      };
      const response = await apiClient.post("/api/userform/event", payload);
      setFormData({ fullName: "", message: "" });
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
      }, 1500);
    } catch (error) {
      const errorMsg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "";

      if (errorMsg.includes("E11000") || errorMsg.includes("duplicate key")) {
        toast.error("You are already registered!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 0, md: 14, lg: 5, xl: 10 },
        py: { xs: 4, sm: 6, md: 5 },
      }}
    >
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6, lg: 18 }}
        justifyContent="center"
        sx={{
          display: {
            xs: "grid",
            sm: "flex",
            md: "flex",
          },
        }}
      >
        {/* Left Text Side */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Gloock, serif",
              fontWeight: 400,
              mb: { xs: 1, sm: 1, md: 2 },
              lineHeight: 1.2,
            }}
            dangerouslySetInnerHTML={{
              __html: `Get in Touch with <br /> the Heart Behind <br /> the Brand`,
            }}
          />
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: "#000000",
              fontFamily: "Akatab, Sans-serif",
              fontWeight: 400,
            }}
          >
            {`Let’s connect and make your dream wedding a reality.`}
          </Typography>
        </Grid>

        {/* Right Form Side */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleLetChat}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "100%", sm: "400px", md: "600px" },
            }}
          >
            {/* Name Field */}
            <Box>
              <Typography
                variant="body1"
                component="label"
                htmlFor="user-name"
                sx={{
                  mb: 0.5,
                  fontFamily: "Akatab, Sans-serif",
                  fontWeight: 500,
                  color: "#000000",
                }}
              >
                {` Your Name`}
              </Typography>
              <TextField
                id="user-name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                variant="outlined"
                size="small"
                fullWidth
                error={!!errors.fullName}
                helperText={errors.fullName}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#011d4a", // Hover color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#011d4a", // Focus (click) color
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>

            {/* Message Field */}
            <Box>
              <Typography
                variant="body1"
                component="label"
                htmlFor="user-message"
                sx={{
                  mb: 0.5,
                  fontFamily: "Akatab, Sans-serif",
                  fontWeight: 500,
                  color: "#000000",
                }}
              >
                {`   Your Message`}
              </Typography>
              <TextField
                id="user-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={3}
                error={!!errors.message}
                helperText={errors.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#011d4a",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#011d4a",
                      borderWidth: 2,
                    },
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <CustomButton
              data-testid="notify-button"
              type="submit"
              variant="primary"
          sx={{
                width: { xs: "128px", sm: "120px", md: "120px" },
                fontFamily: "Akatab,Sans-serif",
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                fontWeight: 400,
                padding: "2px 8px",
              }}
            >
              {loading ? (
                <CircularProgress size={20} sx={{ color: "#fff" }} />
              ) : (
                "Let's Chat"
              )}
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
    </Box>
  );
}
