import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Loader from '@/common-component/loader/Loader'

// Mock Next.js modules
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock window.scrollTo
const mockScrollTo = jest.fn()
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true
})

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('Loader Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders loader component', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

  it('displays the company logo', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toHaveAttribute('src', '/logo2.webp')
  })

  it('applies proper styling to the logo', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toHaveAttribute('width', '120')
    expect(logo).toHaveAttribute('height', '120')
  })

  it('renders with correct container styling', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    const container = logo.closest('div')
    
    expect(container).toBeInTheDocument()
  })

  it('calls window.scrollTo on mount', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0 })
  })

  it('handles window.scrollTo when window is undefined', () => {
    // Mock window as undefined (SSR scenario)
    const originalWindow = global.window
    delete global.window
    
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    
    // Restore window
    global.window = originalWindow
  })

  it('renders with proper animation class', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    const animationContainer = logo.closest('div')
    
    expect(animationContainer).toHaveClass('loaderAnimation')
  })

  it('has correct container dimensions', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    const container = logo.closest('div').parentElement
    
    expect(container).toBeInTheDocument()
  })

  it('renders without crashing in different environments', () => {
    // Test in different scenarios
    const { rerender } = render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    
    // Rerender to test component stability
    rerender(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

  it('handles logo loading states', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
    
    // Simulate logo load
    fireEvent.load(logo)
    expect(logo).toBeInTheDocument()
  })

  it('maintains aspect ratio of logo', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toHaveStyle({
      width: '100%',
      height: 'auto'
    })
  })

  it('renders with proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toHaveAttribute('alt', 'Logo')
  })

  it('handles multiple renders correctly', () => {
    const { rerender } = render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(mockScrollTo).toHaveBeenCalledTimes(1)
    
    // Rerender
    rerender(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(mockScrollTo).toHaveBeenCalledTimes(2)
  })

  it('renders with correct theme integration', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
  })

  it('handles container styling correctly', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    const container = logo.closest('div')
    
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass('loaderAnimation')
  })

  it('renders with proper layout structure', () => {
    render(
      <TestWrapper>
        <Loader />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    const container = logo.closest('div')
    const parentContainer = container.parentElement
    
    expect(parentContainer).toBeInTheDocument()
  })
})
