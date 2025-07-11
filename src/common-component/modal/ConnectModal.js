import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MyForm from '@/component/connectus/Form';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p:3,
  borderRadius: 2,
  outline: 'none',
  maxHeight: '90vh',
  overflow: 'hidden',
};

export default function ConnectModal({open, setOpen}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => setOpen(false);

  // Responsive dimensions
  const getModalDimensions = () => {
    if (isMobile) {
      return {
        width: '95vw',
        height: 'auto',
        maxHeight: '90vh',
        overflowY: 'auto',
        
      };
    } else if (isTablet) {
      return {
        width: '80vw',
        height: 'auto',
        maxHeight: '85vh',
        overflowY: 'auto',
      };
    } else {
      return {
        width: 800,
        height: 700,
      };
    }
  };

  const responsiveStyle = {
    ...style,
    ...getModalDimensions(),
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={responsiveStyle}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              '&:hover': {
                backgroundColor: (theme) => theme.palette.grey[100],
              },
            }}
            aria-label="close"
          >
            <CloseIcon sx={{ fontSize: 24, color:"red" }} />
          </IconButton>
          
          {/* Form Content */}
          <Box sx={{ mt: 2 }}>
            <MyForm />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}