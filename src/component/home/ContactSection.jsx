import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Container } from "@mui/material";
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
    email:""
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
    if (!formData?.fullName?.trim()) newErrors.fullName = "Full Name is required";
    if (!formData?.message?.trim()) newErrors.message = "Message is required";
    if (!formData?.email?.trim()) newErrors.email = "Email is required";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(formData?.email?.trim() && !emailRegex.test(formData?.email)) newErrors.email = "Please enter a valid email";

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
        email:formData?.email
      };
      const response = await apiClient.post("/api/inquiryform/event", payload);
      setFormData({ fullName: "", message: "" ,email:"" });
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
    <Container>
      <Box py={5}
      >
        <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
        <Grid
          container
          spacing={{ xs: 2, md: 20 }} columns={{ xs: 12, sm: 12, md: 12 }}
          justifyContent="space-between"
        >
          {/* Left Text Side */}
          <Grid item size={{ xs: 12, sm: 5, md: 5 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Gloock, serif",
                fontWeight: 400,
                mb: { xs: 1, sm: 1, md: 2 },
               
              }}
              dangerouslySetInnerHTML={{
                __html: `Get in Touch with the Heart Behind the Brand`,
              }}
            />
            <Typography

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
          <Grid item size={{ xs: 12, sm: 7, md: 7 }}>
            <Box
              component="form"
              onSubmit={handleLetChat}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                // width: { xs: "100%", sm: "400px", md: "600px" },
              }}
            >
              {/* Name Field */}
              <Box>
                <Typography
                  component="p"
                  // component="label"
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
                  type="text"
                  value={formData.fullName}  
                  onChange={(e)=>  /^[A-Za-z\s]*$/.test(e.target.value) && handleChange(e)}
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

              {/* Email Field */}
              <Box>
                <Typography
                  htmlFor="email"
                  sx={{
                    mb: 0.5,
                    fontFamily: "Akatab, Sans-serif",
                    fontWeight: 500,
                    color: "#000000",
                  }}
                >
                  {`Your Email`}
                </Typography>
                <TextField
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email}
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
                component="p"
                  // component="label"
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
    </Container>
  );
}
