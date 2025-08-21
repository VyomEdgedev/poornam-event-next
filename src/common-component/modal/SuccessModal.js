import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  CircularProgress,
  Container,
} from "@mui/material";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClient } from "@/lib/api-client";
import SuccessModal from "@/common-component/modal/SuccessModal";
const MyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "",
    numberOfGuests: "",
    yourMessage: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    location: false,
    numberOfGuests: false,
    yourMessage: false,
  });
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const validators = {
    fullName: (v) => v.trim().length > 0,
    email: (v) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v.trim()),
    phone: (v) => /^[0-9]{10}$/.test(v),
    location: (v) => v.trim().length > 0,
    numberOfGuests: (v) => /^\d+$/.test(v) && Number(v) > 0,
    yourMessage: (v) => v.trim().length > 0,
  };

  const validateField = (name, value) => {
    const fn = validators[name];
    return fn ? fn(value ?? "") : true;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let next = value;
    
    if (name === "phone") {
      next = value.replace(/\D/g, "").slice(0, 10);
    }
    if (name === "numberOfGuests") {
      next = value.replace(/\D/g, "").slice(0, 5);
    }

    setFormData((prev) => ({ ...prev, [name]: next }));

    if (Object.prototype.hasOwnProperty.call(errors, name)) {
      setErrors((prev) => ({ ...prev, [name]: !validateField(name, next) }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
const newErrors = Object.keys(errors).reduce((acc, key) => {
      acc[key] = !validateField(key, formData[key]);
      return acc;
    }, {});

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        formType: "contactus",
        fullName: formData?.fullName,
        email: formData?.email,
        phoneNo: formData?.phone,
        weddingDate: formData?.weddingDate,
        location: formData?.location,
        numberOfGuests: formData?.numberOfGuests,
        message: formData?.message,
        sourcePage: "/connectus",
      };
      const response = await apiClient.post("/api/userform/event", payload);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        weddingDate: "",
        location: "",
        numberOfGuests: "",
        yourMessage: "",
      });
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
  const today = new Date().toISOString().split("T")[0];

  return (
    <Container>
      <Box
        sx={{
          py: 4,
          fontFamily: "Akatab, sans-serif",
        }}
      >
        <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
        <Grid
          container
          spacing={{ xs: 2, md: 5, lg: 6 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {/* Left Side - Title + Image */}
          <Grid container item size={{ xs: 12, sm: 6, md: 6 }}>
            <Box width={"100%"}>
              <Typography
                component="h2"
                sx={{
                  fontWeight: "400",
                  fontFamily: "Gloock, serif",
                  color: "#000000",
                  mb: 2,
                }}
              >
                {`Tell Us Everything `}
                <br />
                {`(Yes, Even the Drama)`}
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, sm: 450, md: 480, lg: 500, xl: 500 },
                  borderRadius: 2,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/FormImg.png"
                  alt="Wedding planning imagery"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Form */}
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: { xs: 0, sm: 0, md: 0 },
              }}
            >
              {/* Full Name */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {`Full Name `}
                </Typography>
                <TextField
                  placeholder="Your Full Name"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },
                      height: { xs: "30px", sm: "35px", md: "35px" },
                      width: { xs: "100%", sm: "100%", md: "100%" },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  helperText={errors.fullName ? "Full name is required" : ""}
                />
              </Box>

              {/* Email */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {` Email `}
                </Typography>
                <TextField
                  placeholder="Your Email"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },
                      height: { xs: "30px", md: "35px" },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email ? "Please enter a  email" : ""}
                />
              </Box>

              {/* Phone */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {`Phone`}
                </Typography>
                <TextField
                  placeholder="Your Phone"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  type="tel"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 10,
                  }}
                  onKeyDown={(e) => {
                    const blocked = ["e", "E", "+", "-", "."];
                    if (blocked.includes(e.key)) e.preventDefault();
                  }}
                  onPaste={(e) => {
                    const paste = e.clipboardData.getData("text");
                    if (/\D/.test(paste)) e.preventDefault();
                  }}
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },
                      height: { xs: "30px", md: "35px" },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  helperText={
                    errors.phone ? "Please enter a  phone number " : ""
                  }
                />
              </Box>

              {/* Wedding Date */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {` Wedding Date (optional)`}
                </Typography>
                <TextField
                  type="date"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    min: today,
                  }}
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },
                      height: { xs: "30px", md: "35px" },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleChange}
                />
              </Box>

              {/* Location */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {`Location`}
                </Typography>
                <TextField
                  placeholder="Venue Location"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },
                      height: { xs: "30px", md: "35px" },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  error={errors.location}
                  helperText={errors.location ? "Location is required" : ""}
                />
              </Box>

              {/* Number of Guests */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {`Number of Guests`}
                </Typography>
                <TextField
                  placeholder="Estimated Guests"
                  autoComplete="off"
                  type="number"
                  variant="outlined"
                  fullWidth
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },
                      height: { xs: "30px", md: "35px" },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  error={errors.numberOfGuests}
                  helperText={
                    errors.numberOfGuests ? "Number of guests is required" : ""
                  }
                />
              </Box>

              {/* Message */}
              <Box>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    mt: 1.5,
                    mb: 0.5,
                    fontWeight: "500",
                  }}
                >
                  {`What's on your mind?`}
                </Typography>
                <TextField
                  placeholder="Your Message"
                  variant="outlined"
                  fullWidth
                  autoComplete="off"
                  sx={{
                    fontFamily: "Akatab, sans-serif",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&:hover fieldset": {
                        borderColor: "#011d4a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#011d4a",
                      },

                      fontFamily: "Akatab, sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      fontFamily: "Akatab, sans-serif",
                    },
                  }}
                  name="yourMessage"
                  value={formData.yourMessage}
                  onChange={handleChange}
                  error={errors.yourMessage}
                  helperText={errors.yourMessage ? "Message is required" : ""}
                />
              </Box>

              {/* Submit Button */}
              <Button
                data-testid="notify-button"
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#DAA412",
                  color: "#fff",
                  borderRadius: "25px",
                  py: { xs: 1.5, md: 2 },
                  mt: 3,
                  width: { xs: "200px", md: "250px" },
                  textTransform: "none",
                  fontSize: { xs: "14px", md: "18px" },
                  fontFamily: "Akatab, sans-serif",
                  fontWeight: "400",
                  height: { xs: "45px", md: "50px" },
                  "&:hover": {
                    bgcolor: "#DAA412",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  `Let's Begin the Dream`
                )}
              </Button>
            </Box>
          </Grid>
        </Grid>
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default MyForm;

