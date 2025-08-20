import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
  borderRadius: 3,
  backgroundColor: "#030b1d",
  border: "1px solid #DAA412",
};

const SuccessModal = ({ open,setOpen }) => {
  return (
    <Modal
      open={open}
      onClose={()=>setOpen(false)}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          // onClick={onClose}
          onClick={()=>setOpen(false)}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#DAA412",
            "&:hover": { color: "#fff" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Typography
          color="#fff"
          id="success-modal-title"
          variant="h6"
          component="h2"
          textAlign="center"
          fontFamily="Gloock, serif"
        >
          Thank you
        </Typography>
        <Typography
          color="#fff"
          id="success-modal-description"
          variant="body1"
          component="p"
          sx={{ fontSize: 18 }}
          textAlign="center"
          fontFamily="Akatab, sans-serif"
        >
          We will connect you soon
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuccessModal;