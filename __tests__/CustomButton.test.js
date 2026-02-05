import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CustomButton from '@/common-component/button/CustomButton'


const theme = createTheme()


const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('CustomButton Component', () => {
  it('renders with default props', () => {
    render(
      <TestWrapper>
        <CustomButton>Test Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Test Button')
  })

  it('renders with primary variant by default', () => {
    render(
      <TestWrapper>
        <CustomButton>Primary Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('renders with secondary variant', () => {
    render(
      <TestWrapper>
        <CustomButton variant="secondary">Secondary Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Secondary Button')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    
    render(
      <TestWrapper>
        <CustomButton onClick={handleClick}>Click Me</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(
      <TestWrapper>
        <CustomButton disabled>Disabled Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('accepts custom className', () => {
    render(
      <TestWrapper>
        <CustomButton className="custom-class">Custom Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('supports fullWidth prop', () => {
    render(
      <TestWrapper>
        <CustomButton fullWidth>Full Width Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('accepts aria-label', () => {
    render(
      <TestWrapper>
        <CustomButton ariaLabel="Custom aria label">Button</CustomButton>
      </TestWrapper>
    )
    
    const button = screen.getByRole('button', { name: 'Custom aria label' })
    expect(button).toBeInTheDocument()
  })
})
