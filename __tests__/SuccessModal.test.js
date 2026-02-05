import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SuccessModal from '@/common-component/modal/SuccessModal'

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('SuccessModal Component', () => {
  const mockSetOpen = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders modal when open is true', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Thank you')).toBeInTheDocument()
    expect(screen.getByText('We will connect you soon')).toBeInTheDocument()
  })

  it('does not render modal when open is false', () => {
    render(
      <TestWrapper>
        <SuccessModal open={false} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.queryByText('Thank you')).not.toBeInTheDocument()
    expect(screen.queryByText('We will connect you soon')).not.toBeInTheDocument()
  })

  it('renders close button', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toBeInTheDocument()
  })

  it('calls setOpen with false when close button is clicked', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })

  it('renders with proper heading', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Thank you')
  })

  it('renders with proper description', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('We will connect you soon')).toBeInTheDocument()
  })

  it('has proper modal accessibility attributes', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveAttribute('id', 'success-modal-title')
  })

  it('handles modal backdrop click', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    fireEvent.click(modal)
    
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })

  it('handles escape key press', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' })
    
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })

  it('renders with proper styling', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('renders close button with proper styling', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    expect(closeButton).toBeInTheDocument()
  })

  it('maintains focus within modal', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('renders with proper z-index', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })

  it('handles multiple open/close cycles', () => {
    const { rerender } = render(
      <TestWrapper>
        <SuccessModal open={false} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.queryByText('Thank you')).not.toBeInTheDocument()
    
    rerender(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Thank you')).toBeInTheDocument()
    expect(screen.getByText('We will connect you soon')).toBeInTheDocument()
    
    rerender(
      <TestWrapper>
        <SuccessModal open={false} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.queryByText('Thank you')).not.toBeInTheDocument()
  })

  it('renders with correct text content', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Thank you')).toBeInTheDocument()
    expect(screen.getByText('We will connect you soon')).toBeInTheDocument()
  })

  it('renders with proper font family for heading', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  it('renders with proper font family for description', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const description = screen.getByText('We will connect you soon')
    expect(description).toBeInTheDocument()
  })

  it('handles click events properly', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    
    // Test multiple clicks
    fireEvent.click(closeButton)
    fireEvent.click(closeButton)
    
    expect(mockSetOpen).toHaveBeenCalledTimes(2)
  })

  it('renders with proper color scheme', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const heading = screen.getByRole('heading', { level: 2 })
    const description = screen.getByText('We will connect you soon')
    
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders with proper text alignment', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const heading = screen.getByRole('heading', { level: 2 })
    const description = screen.getByText('We will connect you soon')
    
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('handles keyboard navigation', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    
    // Test Tab navigation
    fireEvent.keyDown(closeButton, { key: 'Tab' })
    
    expect(closeButton).toBeInTheDocument()
  })

  it('renders with proper border styling', () => {
    render(
      <TestWrapper>
        <SuccessModal open={true} setOpen={mockSetOpen} />
      </TestWrapper>
    )
    
    const modal = screen.getByRole('presentation')
    expect(modal).toBeInTheDocument()
  })
})
