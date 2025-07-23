import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: !formData.fullName.trim(),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !/^\d{10}$/.test(formData.phone),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // Handle form submission logic here
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 3,
        p: 2,
      }}
    >
      {/* Left Side - Image */}
      <Box
        sx={{
          width: { xs: "100%", sm: "40%", md: "40%" },
          height: { xs: 200, sm: 300, md: "65vh" },
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          src="/FormImg.png"
          alt="Wedding planning imagery"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          priority
        />
      </Box>

      {/* Right Side - Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          width: { xs: "100%", sm: "60%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: "400",
            fontFamily: "Gloock, serif",
            color: "#000000",
            mb: 2,
          }}
        >
          Tell Us About Your Wedding
        </Typography>

        {/* Full Name */}
        <TextField
          placeholder="Full Name"
          variant="outlined"
          fullWidth
          size="small"
          error={errors.fullName}
          helperText={errors.fullName ? "Full name is required" : ""}
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
              fontFamily: "Akatab, sans-serif",
              "& fieldset": {
                borderColor: "#808080",
                
              },
              "&:hover fieldset": {
                borderColor: "#011d4a",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#DAA412",
              },
            "& input::placeholder": {
              color: "#222222",
              opacity: 1,
            },
          }}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        {/* Email */}
        <TextField
          placeholder="Email"
          variant="outlined"
          fullWidth
          size="small"
          error={errors.email}
          helperText={errors.email ? "Please enter a valid email" : ""}
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
              fontFamily: "Akatab, sans-serif",
              "& fieldset": {
                borderColor: "#808080",
               
              },
              "&:hover fieldset": {
                borderColor: "#011d4a",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#DAA412",
              },
            "& input::placeholder": {
              color: "#222222",
              opacity: 1,
            },
          }}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Phone */}
        <TextField
          placeholder="Phone (10 digits)"
          variant="outlined"
          fullWidth
          size="small"
          error={errors.phone}
          helperText={
            errors.phone ? "Please enter a valid 10-digit phone number" : ""
          }
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
              fontFamily: "Akatab, sans-serif",
              "& fieldset": {
                borderColor: "#808080",
                
              },
              "&:hover fieldset": {
                borderColor: "#011d4a",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#DAA412",
              },
            "& input::placeholder": {
              color: "#222222",
              opacity: 1,
            },
          }}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Message */}
        <TextField
          placeholder="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          size="small"
          error={errors.message}
          helperText={errors.message ? "Message is required" : ""}
          sx={{
            "& .MuiInputBase-root": {
              fontFamily: "Akatab, sans-serif",
              "& fieldset": {
                borderColor: "#808080",
              },
              "&:hover fieldset": {
                borderColor: "#011d4a",
              },
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#DAA412",
              },
            "& input::placeholder, & textarea::placeholder": {
  color: "#222222",
  opacity: 1,
},
          }}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#DAA412",
            color: "#fff",
            borderRadius: "25px",
            py: 1.5,
            mt: 1,
            textTransform: "none",
            fontFamily: "Akatab, sans-serif",
            fontWeight: "600",
            "&:hover": {
              bgcolor: "#C4941A",
            },
          }}
        >
          {`Let's Begin the Dream`}
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
