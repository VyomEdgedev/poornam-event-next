import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import { apiClient } from "@/lib/api-client";
import SuccessModal from "./SuccessModal";
import { useForm } from "react-hook-form";
const Form = ({ onClose }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        formType: "contactus",
        fullName: data?.fullName,
        message: data?.message,
        email: data?.email,
        phoneNo: data?.phone,
        sourcePage: "/model",
      };
      await apiClient.post("/api/userform/event", payload);

      reset();
      setOpenSuccess(true);
      setTimeout(() => {
        setOpenSuccess(false);
        onClose?.();
      }, 1500);
    } catch (error) {
      const errorMsg =
        error?.response?.data?.error ||
        error?.response?.data?.message ||
        error?.message ||
        "";

      if (
        errorMsg.includes("E11000") ||
        errorMsg.includes("duplicate key")
      ) {
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
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: {xs:1, sm:3},
        p: 1,
      
      }}
    >
      <SuccessModal open={openSuccess} setOpen={setOpenSuccess} />
      {/* Left Side - Image */}
      <Box
        sx={{
          width: { xs: "100%", sm: "40%", md: "40%" },
          height: { xs: 155, sm:"auto"},
          position: "relative",
          borderRadius: 2,
        }}
      >
        <Image
          src="/FormImg.png"
          alt="Wedding planning imagery"
          fill
          style={{ objectFit: "cover" }}
           priority
        />
      </Box>

      {/* Right Side - Form */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{
          width: { xs: "100%", sm: "60%" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontWeight: "400",
            fontFamily: "Gloock, serif",
            color: "#000000",
            mb: { xs: 0, sm: 2 },
          }}
        >
          {`Tell Us About Your Wedding`}
        </Typography>

        {/* Full Name */}
        <TextField
          placeholder="Full Name"
          variant="outlined"
          fullWidth
          size="small"
            name="fullName"
          autoComplete="off"
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
                borderColor: "#011d4a",
              },
            "& input::placeholder": {
              color: "#222222",
              opacity: 1,
            },
          }}
        
        />

        {/* Email */}
        <TextField
          placeholder="Email"
          variant="outlined"
          fullWidth
          size="small"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
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
                borderColor: "#011d4a",
              },
            "& input::placeholder": {
              color: "#222222",
              opacity: 1,
            },
          }}
          name="email"
          type="email"
          autoComplete="off"
        />

        {/* Phone */}
        <TextField
          placeholder="Phone (10 digits)"
          variant="outlined"
          fullWidth
          size="small"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
            onChange: (e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
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
                borderColor: "#011d4a",
              },
            "& input::placeholder": {
              color: "#222222",
              opacity: 1,
            },
          }}
          name="phone"
          inputProps={{ maxLength: 10 }}
          type="tel"
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
        />

        {/* Message */}
        <TextField
          placeholder="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={2.5}
          size="small"
          {...register("message", {
            required: "Message is required",
            validate: (value) =>
              (value || "").trim().length >= 3 ||
              "Must be at least 3 characters",
          })}
          error={!!errors.message}
          helperText={errors.message?.message}
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
                borderColor: "#011d4a",
              },
            "& input::placeholder, & textarea::placeholder": {
  color: "#222222",
  opacity: 1,
},
          }}
          name="message"
          autoComplete="off"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
            disabled={loading}
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
          {(isSubmitting || loading) ? (
    <CircularProgress size={24} sx={{ color: "#fff" }} />
  ) : (
    `Let's Begin the Dream`
  )}
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
