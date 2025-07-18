import * as React from 'react';
import {useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Form from './Form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  outline: 'none',
  maxHeight: '90vh',
  overflowY: 'auto',
};

export default function ConnectModal({ open, setOpen }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  // Auto-open after 7 seconds (only if not already opened manually)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(prevOpen => !prevOpen ? true : prevOpen);
    }, 7000);

    return () => clearTimeout(timer);
  }, [setOpen]);

  const handleClose = () => setOpen(false);

  // Responsive dimensions
  const getModalDimensions = () => {
    if (isMobile) {
      return {
        width: '90vw',
        maxWidth: '400px',
      };
    } else if (isTablet) {
      return {
        width: '70vw',
        maxWidth: '600px',
      };
    } else {
      return {
        width: '700px',
      };
    }
  };

  const responsiveStyle = {
    ...style,
    ...getModalDimensions(),
  };

  return (
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
          <CloseIcon sx={{ fontSize: 24, color: "red" }} />
        </IconButton>
        
        {/* Form Content */}
        <Box sx={{ mt: 4 }}>
          <Form />
        </Box>
      </Box>
    </Modal>
  );
}