import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Footer from '@/common-component/Footer/Footer'
import { loaderContext } from '@/contextApi/loaderContext'
import { apiClient } from '@/lib/api-client'

// Mock Next.js modules
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }) {
    return <a href={href} {...props}>{children}</a>
  }
})

jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

jest.mock('next/navigation', () => ({
  usePathname: () => '/test-path'
}))

// Mock API client
jest.mock('@/lib/api-client', () => ({
  apiClient: {
    get: jest.fn()
  }
}))

const theme = createTheme()

const mockLoaderContext = {
  loading: false,
  setLoading: jest.fn()
}

const mockPortfolioData = [
  { uid: 'service1', title: 'Wedding Planning Service 1' },
  { uid: 'service2', title: 'Wedding Planning Service 2' },
  { uid: 'service3', title: 'Wedding Planning Service 3' },
  { uid: 'service4', title: 'Wedding Planning Service 4' },
  { uid: 'service5', title: 'Wedding Planning Service 5' },
  { uid: 'service6', title: 'Wedding Planning Service 6' }
]

const TestWrapper = ({ children }) => (
  <loaderContext.Provider value={mockLoaderContext}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </loaderContext.Provider>
)

describe('Footer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    apiClient.get.mockResolvedValue({ data: mockPortfolioData })
  })

  it('renders footer with all main sections', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders company logo and description', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByText(/Born from a dream in 2017/)).toBeInTheDocument()
  })

  it('renders quick links navigation', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Connect us')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByText('Phone:')).toBeInTheDocument()
    expect(screen.getByText('9519066885,')).toBeInTheDocument()
    expect(screen.getByText('8839844233')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('eventspoornam@gmail.com')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const socialLinks = screen.getAllByRole('link')
    const socialMediaLinks = socialLinks.filter(link => 
      link.getAttribute('href')?.includes('facebook.com') ||
      link.getAttribute('href')?.includes('instagram.com') ||
      link.getAttribute('href')?.includes('twitter.com') ||
      link.getAttribute('href')?.includes('youtube.com') ||
      link.getAttribute('href')?.includes('linkedin.com')
    )
    
    expect(socialMediaLinks.length).toBeGreaterThan(0)
  })

  it('renders copyright information', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Poornam Events.`)).toBeInTheDocument()
  })

  it('renders policy links', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByText('Disclaimer')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('T&C')).toBeInTheDocument()
  })

  it('renders developer credit', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByText('Developed by')).toBeInTheDocument()
    expect(screen.getByText('Vyomedge')).toBeInTheDocument()
  })

  it('fetches and displays services data', async () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    await waitFor(() => {
      expect(apiClient.get).toHaveBeenCalledWith('/api/service/AllServicePages/event')
    })
    
    await waitFor(() => {
      expect(screen.getByText('Wedding Planning Service 1')).toBeInTheDocument()
    })
  })

  it('shows loading state while fetching services', () => {
    apiClient.get.mockImplementation(() => new Promise(() => {})) // Never resolves
    
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('handles API error gracefully', async () => {
    apiClient.get.mockRejectedValue(new Error('API Error'))
    
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })
    
    // Footer should still render even if API fails
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('limits services display to 5 items', async () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    await waitFor(() => {
      expect(screen.getByText('Wedding Planning Service 1')).toBeInTheDocument()
      expect(screen.getByText('Wedding Planning Service 5')).toBeInTheDocument()
      expect(screen.queryByText('Wedding Planning Service 6')).not.toBeInTheDocument()
    })
  })

  it('truncates long service titles', async () => {
    const longTitleData = [
      { uid: 'service1', title: 'This is a very long wedding planning service title that should be truncated' }
    ]
    apiClient.get.mockResolvedValue({ data: longTitleData })
    
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    await waitFor(() => {
      const truncatedTitle = screen.getByText(/This is a very long wedding planning service title that should be truncated.../)
      expect(truncatedTitle).toBeInTheDocument()
    })
  })

  it('renders View All Services link', async () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    await waitFor(() => {
      expect(screen.getByText('View All Services')).toBeInTheDocument()
    })
  })

  it('handles navigation clicks', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const homeLink = screen.getByText('Home').closest('a')
    fireEvent.click(homeLink)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('handles logo navigation click', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    fireEvent.click(logo)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('handles service link navigation clicks', async () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    await waitFor(() => {
      const serviceLink = screen.getByText('Wedding Planning Service 1').closest('a')
      fireEvent.click(serviceLink)
      
      expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
    })
  })

  it('handles phone number clicks', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const phoneLink = screen.getByText('9519066885,').closest('a')
    expect(phoneLink).toHaveAttribute('href', 'tel:9519066885')
    
    const phoneLink2 = screen.getByText('8839844233').closest('a')
    expect(phoneLink2).toHaveAttribute('href', 'tel:8839844233')
  })

  it('handles email link clicks', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const emailLink = screen.getByText('eventspoornam@gmail.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:eventspoornam@gmail.com')
  })

  it('opens social media links in new tab', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const socialLinks = screen.getAllByRole('link')
    const socialMediaLinks = socialLinks.filter(link => 
      link.getAttribute('href')?.includes('facebook.com') ||
      link.getAttribute('href')?.includes('instagram.com') ||
      link.getAttribute('href')?.includes('twitter.com') ||
      link.getAttribute('href')?.includes('youtube.com') ||
      link.getAttribute('href')?.includes('linkedin.com')
    )
    
    socialMediaLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('handles developer link navigation', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const developerLink = screen.getByText('Vyomedge').closest('a')
    expect(developerLink).toHaveAttribute('href', 'https://vyomedge.com/')
    expect(developerLink).toHaveAttribute('target', '_blank')
  })

  it('renders with proper responsive layout', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    // Component should render without errors
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('handles hover effects on links', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const homeLink = screen.getByText('Home').closest('a')
    
    // Test hover effect
    fireEvent.mouseEnter(homeLink)
    fireEvent.mouseLeave(homeLink)
    
    expect(homeLink).toBeInTheDocument()
  })

  it('renders developer logo', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Developer Logo')).toBeInTheDocument()
  })

  it('handles policy link navigation', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )
    
    const disclaimerLink = screen.getByText('Disclaimer').closest('a')
    expect(disclaimerLink).toHaveAttribute('href', '/disclaimer')
    
    const privacyLink = screen.getByText('Privacy Policy').closest('a')
    expect(privacyLink).toHaveAttribute('href', '/privacy-policy')
    
    const termsLink = screen.getByText('T&C').closest('a')
    expect(termsLink).toHaveAttribute('href', '/terms')
  })
})
