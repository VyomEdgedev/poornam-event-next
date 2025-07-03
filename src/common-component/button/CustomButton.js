import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled button component matching Figma design
const StyledCustomButton = styled(Button)(({ theme, variant }) => ({
  width: '178px',
  height: '46px',
  borderRadius: '30px',
  padding: '10px 22px',
  textTransform: 'none',
  fontSize: '16px',
  fontWeight: 500,
  fontFamily: theme.typography.fontFamily,
  
  // Primary variant (solid background)
  ...(variant === 'primary' && {
    backgroundColor: '#D7A10F',
    color: '#FFFFFF',
    border: 'none',
    '&:hover': {
      backgroundColor: '#C4910E',
      boxShadow: '0 2px 8px rgba(215, 161, 15, 0.3)',
    },
    '&:active': {
      backgroundColor: '#B8850D',
    },
    '&:disabled': {
      backgroundColor: '#E8D8A8',
      color: '#A0A0A0',
    },
  }),
  
  // Secondary variant (with border)
  ...(variant === 'secondary' && {
    backgroundColor: '#D7A10F',
    color: '#FFFFFF',
    border: '1px solid #DAA412',
    '&:hover': {
      backgroundColor: '#C4910E',
      borderColor: '#C4910E',
      boxShadow: '0 2px 8px rgba(215, 161, 15, 0.3)',
    },
    '&:active': {
      backgroundColor: '#B8850D',
      borderColor: '#B8850D',
    },
    '&:disabled': {
      backgroundColor: '#E8D8A8',
      borderColor: '#D0D0D0',
      color: '#A0A0A0',
    },
  }),
}));

// Main component
const CustomButton = ({
  children,
  onClick,
  variant = 'primary', // 'primary' or 'secondary'
  disabled = false,
  type = 'button',
  className,
  ...props
}) => {
  return (
    <StyledCustomButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      disableRipple
      {...props}
    >
      {children}
    </StyledCustomButton>
  );
};

export default CustomButton;

// Usage Examples:
/*
// Primary button (solid background)
<CustomButton onClick={handleClick}>
  Plan My Wedding
</CustomButton>

// Secondary button (with border)
<CustomButton variant="secondary" onClick={handleClick}>
  Plan My Wedding
</CustomButton>

// Disabled state
<CustomButton disabled onClick={handleClick}>
  Plan My Wedding
</CustomButton>

// With custom props
<WeddingButton 
  onClick={handleSubmit}
  type="submit"
  className="custom-class"
>
  Submit Wedding Plan
</CustomButton>
*/