import {
  Grid,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Container,
} from "@mui/material";
import CustomButton from "@/common-component/button/CustomButton";
import React, { useState } from "react";
import { apiClient } from "@/lib/api-client";
import { toast, ToastContainer } from "react-toastify";
function WeddingKit() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleNotifyClick = async () => {
    const newErrors = {};
    setSuccess("");

    if (!formData?.fullName?.trim()) newErrors.fullName = "Full Name is required";
    if (!formData?.email?.trim()) newErrors.email = "Email is required";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData?.email?.trim() && !emailRegex.test(formData?.email)) newErrors.email = "Please enter a valid email";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        formType: "contactus",
        email: formData.email.trim(),
        fullName: formData.fullName.trim(),
        sourcePage: "/services",
      };
      const response = await apiClient.post("/api/inquiryform/event", payload);
      setFormData({ email: "", fullName: "" })
      toast.success("Thank you! You are now subscribed.");
      setEmail("");
    } catch (error) {
      const errorMsg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "";

      if (errorMsg.includes("E11000") || errorMsg.includes("duplicate key") || errorMsg.includes("email already exists")) {
        toast.error("You are already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box py={{ xs: "5px", sm: "10px", md: "10px" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 5  }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Box textAlign="left">
              <Typography component="h2" sx={{ fontFamily: "Gloock, serif" }}>
                {`  Not Just a Wedding. Your Wedding.`}
              </Typography>
              <Typography
                component="p"
                color="#000000"
                sx={{ fontFamily: "Akatab, serif" }}
              >
                {`We're here to help you plan a wedding that's unforgettable, personal,
          and oh-so-magical. Drop your email, and we'll make sure you're the first
          to get our latest tips, updates, and exclusive ideas before anyone else.`}
              </Typography>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Box>
              <Box textAlign="left" sx={{marginBottom:2}}>
                <Typography
                  component="p"
                  sx={{
                    mb: 0.5,
                    fontFamily: "Akatab,Sans-serif",
                    fontWeight: "500",
                    color: "#000000",
                  }}
                >
                  Full Name*
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your full name "
                  variant="outlined"
                  name="fullName"
                  size="small"
                  value={formData.fullName}
                  onChange={(e) => /^[A-Za-z\s]*$/.test(e.target.value) && handleChange(e)}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                  disabled={loading}
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

              <Box textAlign="left">
                <Typography
                  component="p"
                  sx={{
                    mb: 0.5,
                    fontFamily: "Akatab,Sans-serif",
                    fontWeight: "500",
                    color: "#000000",
                  }}
                >
                  Email*
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your email address"
                  variant="outlined"
                  size="small"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                  error={!!errors.email}
                  helperText={errors.email}
                  disabled={loading}
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
              <Typography
                component="p"
                color="rgba(0, 0, 0, 0.5)"
                sx={{
                  mb: 0.5,
                  fontFamily: "Akatab,Sans-serif",
                  fontWeight: "500",
                }}
              >
                {` Big shhadi secrets and  surprises are on the way. stay tuned!`}
              </Typography>
              <Box textAlign={"left"}>
                {success && (
                  <Typography variant="p" color="success.main" sx={{ mt: 1 }}>
                    {success}
                  </Typography>
                )}

                <CustomButton
                  data-testid="notify-button"
                  onClick={handleNotifyClick}
                  sx={{ mt: 2, width: 130, height: 50 }}
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={20} sx={{ color: "#DAA412" }} />
                  ) : (
                    "Notify Me"
                  )}
                </CustomButton>
              </Box>
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
        />
      </Container>
    </Box>
  );
}

export default WeddingKit;
