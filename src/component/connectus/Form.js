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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClient } from "@/lib/api-client";
import SuccessModal from "@/common-component/modal/SuccessModal";
import { useForm } from "react-hook-form";
const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      weddingDate: "",
      location: "",
      numberOfGuests: "",
      yourMessage: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const onSubmit = async (data) => {
    return;

    setLoading(true);
    try {
      const payload = {
        formType: "contactus",
        fullName: data?.fullName,
        email: data?.email,
        phoneNo: data?.phone,
        weddingDate: data?.weddingDate,
        location: data?.location,
        numberOfGuests: data?.numberOfGuests,
        message: data?.yourMessage,
        sourcePage: "/connectus",
      };
      await apiClient.post("/api/userform/event", payload);

      reset();
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
              onSubmit={handleSubmit(onSubmit)}
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
                  {...register("fullName", {
                    required: "Full name is required",
                    validate: {
                      minLength: (value) => {
                        const length = (value || "").trim().length;
                        if (length > 0 && length < 3) {
                          return "Must be at least 3 characters";
                        }
                        return true;
                      },
                    },
                  })}
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
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
                  name="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter valid email",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
                  name="phone"
                  inputProps={{ maxLength: 10 }}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter valid 10-digit number",
                    },
                    onChange: (e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    },
                  })}
                  onKeyDown={(e) => {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                    ];
                    const blocked = ["e", "E", "+", "-", "."];
                    if (
                      blocked.includes(e.key) ||
                      (((e.key >= "a" && e.key <= "z") ||
                        (e.key >= "A" && e.key <= "Z")) &&
                        !allowedKeys.includes(e.key))
                    ) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    const pastedData = e.clipboardData.getData("text");
                    if (/[^0-9]/.test(pastedData)) {
                      e.preventDefault();
                    }
                  }}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
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
                  name="weddingDate"
                  fullWidth
                  inputProps={{
                    min: today,
                  }}
                  {...register("weddingDate", {
                    validate: (value) => {
                      if (!value) return true; 
                      return value >= today || "Date cannot be in the past";
                    },
                  })}
                  onBlur={(e) => {
                    const selected = e.target.value;
                    if (selected && selected < today) {
                      e.target.value = today;
                    }
                  }}
                  onFocus={(e) => e.target.showPicker?.()}
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
                  name="location"
                  {...register("location", {
                    required: "Location is required",
                    validate: (value) =>
                      (value || "").trim().length >= 3 ||
                      "Must be at least 3 characters",
                  })}
                  error={!!errors.location}
                  helperText={errors.location?.message}
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
                  name="numberOfGuests"
                  {...register("numberOfGuests", {
                    required: "Number of guests is required",
                    min: { value: 1, message: "Must be at least 1 guest" },
                  })}
                  onKeyDown={(e) => {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                    ];
                    const blocked = ["e", "E", "+", "-", "."];
                    if (
                      blocked.includes(e.key) ||
                      (((e.key >= "a" && e.key <= "z") ||
                        (e.key >= "A" && e.key <= "Z")) &&
                        !allowedKeys.includes(e.key))
                    ) {
                      e.preventDefault();
                    }
                  }}
                  onPaste={(e) => {
                    const pastedData = e.clipboardData.getData("text");
                    if (/[^0-9]/.test(pastedData)) {
                      e.preventDefault();
                    }
                  }}
                  error={!!errors.numberOfGuests}
                  helperText={errors.numberOfGuests?.message}
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
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                      {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                  }}
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
                  name="yourMessage"
                  {...register("yourMessage", {
                    required: "Message is required",
                    validate: (value) =>
                      (value || "").trim().length >= 3 ||
                      "Must be at least 3 characters",
                  })}
                  error={!!errors.yourMessage}
                  helperText={errors.yourMessage?.message}
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
                {isSubmitting || loading ? (
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
