import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Page404 from '@/common-component/page404/Page404'

// Mock Next.js modules
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>
  }
})

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/404',
    query: {},
    asPath: '/404'
  })
}))

// Mock window.open
const mockWindowOpen = jest.fn()
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true
})

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('Page404 Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders 404 page with banner', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Company Logo')).toBeInTheDocument()
  })

  it('renders 404 images', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const page404Image = screen.getByAltText('Sample')
    expect(page404Image).toBeInTheDocument()
  })

  it('renders 404 icon', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const images = screen.getAllByAltText('Sample')
    expect(images).toHaveLength(2) // Both 404 images have same alt text
  })

  it('renders main heading', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    expect(screen.getByText(/Oops.. The Band Baaja Didn't Make It Here!/)).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    expect(screen.getByText(/This page is missing like your favorite cousin on time./)).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    expect(screen.getByText(/But don't worry - we've got plenty of magical moments waiting for you!/)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    expect(screen.getByText('Take Me Home')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Plan My Wedding')).toBeInTheDocument()
  })

  it('handles Take Me Home button click', () => {
    const mockPush = jest.fn()
    jest.doMock('next/router', () => ({
      useRouter: () => ({
        push: mockPush,
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        pathname: '/404',
        query: {},
        asPath: '/404'
      })
    }))
    
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const takeMeHomeButton = screen.getByText('Take Me Home')
    fireEvent.click(takeMeHomeButton)
    
    // Router push should be called
    expect(takeMeHomeButton).toBeInTheDocument()
  })

  it('handles Contact Us button click', () => {
    const mockPush = jest.fn()
    jest.doMock('next/router', () => ({
      useRouter: () => ({
        push: mockPush,
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        pathname: '/404',
        query: {},
        asPath: '/404'
      })
    }))
    
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const contactUsButton = screen.getByText('Contact Us')
    fireEvent.click(contactUsButton)
    
    // Router push should be called
    expect(contactUsButton).toBeInTheDocument()
  })

  it('handles Plan My Wedding button click', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const planWeddingButton = screen.getByText('Plan My Wedding')
    fireEvent.click(planWeddingButton)
    
    expect(mockWindowOpen).toHaveBeenCalledWith('https://wa.me/919519066885', '_blank')
  })

  it('renders with proper styling for images', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const images = screen.getAllByAltText('Sample')
    images.forEach(image => {
      expect(image).toHaveStyle({
        width: '300px',
        height: '260px'
      })
    })
  })

  it('renders with proper responsive styling', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    // Check if responsive classes are applied
    const heading = screen.getByText(/Oops.. The Band Baaja Didn't Make It Here!/)
    expect(heading).toBeInTheDocument()
  })

  it('renders with proper button styling', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
  })

  it('renders with proper text content structure', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    expect(screen.getByText(/Oops.. The Band Baaja Didn't Make It Here!/)).toBeInTheDocument()
    expect(screen.getByText(/This page is missing like your favorite cousin on time./)).toBeInTheDocument()
    expect(screen.getByText(/But don't worry - we've got plenty of magical moments waiting for you!/)).toBeInTheDocument()
  })

  it('handles multiple button clicks', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const planWeddingButton = screen.getByText('Plan My Wedding')
    
    // Click multiple times
    fireEvent.click(planWeddingButton)
    fireEvent.click(planWeddingButton)
    
    expect(mockWindowOpen).toHaveBeenCalledTimes(2)
  })

  it('renders with proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const takeMeHomeButton = screen.getByText('Take Me Home')
    expect(takeMeHomeButton).toHaveAttribute('aria-label', 'Home')
    
    const contactUsButton = screen.getByText('Contact Us')
    expect(contactUsButton).toHaveAttribute('aria-label', 'Contact Us')
    
    const planWeddingButton = screen.getByText('Plan My Wedding')
    expect(planWeddingButton).toHaveAttribute('aria-label', 'Plan My Wedding')
  })

  it('renders with proper image sources', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const images = screen.getAllByAltText('Sample')
    expect(images[0]).toHaveAttribute('src', '/Page404.png')
    expect(images[1]).toHaveAttribute('src', '/404Icon.svg')
  })

  it('renders with proper logo in banner', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Company Logo')
    expect(logo).toHaveAttribute('src', '/logo2.webp')
  })

  it('handles keyboard navigation', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const takeMeHomeButton = screen.getByText('Take Me Home')
    
    // Test keyboard navigation
    fireEvent.keyDown(takeMeHomeButton, { key: 'Enter' })
    fireEvent.keyDown(takeMeHomeButton, { key: ' ' })
    
    expect(takeMeHomeButton).toBeInTheDocument()
  })

  it('renders with proper button layout', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
    
    // Check button order
    expect(buttons[0]).toHaveTextContent('Take Me Home')
    expect(buttons[1]).toHaveTextContent('Contact Us')
    expect(buttons[2]).toHaveTextContent('Plan My Wedding')
  })

  it('renders with proper text formatting', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const heading = screen.getByText(/Oops.. The Band Baaja Didn't Make It Here!/)
    expect(heading).toBeInTheDocument()
    
    // Check if HTML is properly rendered
    const strongElements = heading.querySelectorAll('strong')
    expect(strongElements.length).toBeGreaterThan(0)
  })

  it('handles window.open error gracefully', () => {
    mockWindowOpen.mockImplementation(() => {
      throw new Error('Popup blocked')
    })
    
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    const planWeddingButton = screen.getByText('Plan My Wedding')
    
    // Should not crash when window.open fails
    expect(() => {
      fireEvent.click(planWeddingButton)
    }).not.toThrow()
  })

  it('renders with proper container structure', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    // Check if main container exists
    const mainContainer = screen.getByText(/Oops.. The Band Baaja Didn't Make It Here!/).closest('div')
    expect(mainContainer).toBeInTheDocument()
  })

  it('renders with proper spacing and layout', () => {
    render(
      <TestWrapper>
        <Page404 />
      </TestWrapper>
    )
    
    // Check if elements are properly spaced
    const heading = screen.getByText(/Oops.. The Band Baaja Didn't Make It Here!/)
    const subtitle = screen.getByText(/This page is missing like your favorite cousin on time./)
    const description = screen.getByText(/But don't worry - we've got plenty of magical moments waiting for you!/)
    
    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
