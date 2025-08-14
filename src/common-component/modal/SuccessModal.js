import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  p: 4,
  borderRadius:3,
  backgroundColor:"#030b1d",
  border:"1px solid #DAA412"
};


const SuccessModal = ({open}) => {
  // const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
       onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
       
      <Box sx={style}>
        <Typography color="#fff" id="modal-modal-title" variant="h6" component="h2" textAlign={"center"} fontFamily={"Gloock, serif"}>
         {`Thank you`} 
        </Typography>
         <Typography color="#fff" id="modal-modal-title" variant="p" component="p" sx={{fontSize:18}} textAlign={"center"} fontFamily={"Akatab,Sans-serif"}>
         {`We will connect you soon`}
        </Typography>
        
      </Box>
    </Modal>
  );
};

export default SuccessModal;
