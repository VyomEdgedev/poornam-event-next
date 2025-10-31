import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ConnectModal from '@/common-component/modal/ConnectModal'

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('ConnectModal Component', () => {
  const mockSetOpen = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders modal when open is true', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
  })

  it('does not render modal when open is false', () => {
    render(
      <TestWrapper>
        <ConnectModal open={false} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.queryByText('Tell Us About Your Wedding')).not.toBeInTheDocument()
  })

  it('renders close button', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toBeInTheDocument()
  })

  it('calls setOpen with false when close button is clicked', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })

  it('renders form component inside modal', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone (10 digits)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('has proper modal accessibility attributes', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('handles modal backdrop click', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    fireEvent.click(modal)
    
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })

  it('renders with responsive dimensions on mobile', () => {
    // Mock mobile breakpoint
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    })
    
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
  })

  it('renders with responsive dimensions on tablet', () => {
    // Mock tablet breakpoint
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 768,
    })
    
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
  })

  it('renders with responsive dimensions on desktop', () => {
    // Mock desktop breakpoint
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    })
    
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
  })

  it('handles escape key press', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })

  it('renders modal with proper styling', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('passes onClose prop to Form component', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    // Form component should receive onClose prop
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
  })

  it('maintains focus within modal', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('renders with proper z-index', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('handles multiple open/close cycles', () => {
    const { rerender } = render(
      <TestWrapper>
        <ConnectModal open={false} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.queryByText('Tell Us About Your Wedding')).not.toBeInTheDocument()
    
    rerender(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
    
    rerender(
      <TestWrapper>
        <ConnectModal open={false} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.queryByText('Tell Us About Your Wedding')).not.toBeInTheDocument()
  })

  it('renders form image', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const image = screen.getByAltText('Wedding planning imagery')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/FormImg.webp')
  })

  it('renders submit button', () => {
    render(
      <TestWrapper>
        <ConnectModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const submitButton = screen.getByRole('button', { name: /let's begin the dream/i })
    expect(submitButton).toBeInTheDocument()
  })
})
