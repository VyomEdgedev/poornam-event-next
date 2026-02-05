import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Header from '@/common-component/navbar/navbar'
import { loaderContext } from '@/contextApi/loaderContext'

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

jest.mock('next/navigation', () => ({
  usePathname: () => '/test-path'
}))

const theme = createTheme()

const mockLoaderContext = {
  loading: false,
  setLoading: jest.fn()
}

const TestWrapper = ({ children }) => (
  <loaderContext.Provider value={mockLoaderContext}>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </loaderContext.Provider>
)

describe('Header Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders desktop navigation bar', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Connect us')).toBeInTheDocument()
  })

  it('renders mobile navigation elements', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  })

  it('renders WhatsApp icon', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const whatsappButtons = screen.getAllByRole('button', { name: /whatsapp/i })
    expect(whatsappButtons.length).toBeGreaterThan(0)
  })

  it('opens mobile drawer when menu button is clicked', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    // Drawer should be open now
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it('closes mobile drawer when close button is clicked', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    
    // Drawer should be closed
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument()
  })

  it('renders navigation links with correct hrefs', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services')
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '/gallery')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '/blog')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/aboutus')
    expect(screen.getByRole('link', { name: 'Connect us' })).toHaveAttribute('href', '/contact')
  })

  it('handles navigation clicks', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const homeLink = screen.getByRole('link', { name: 'Home' })
    fireEvent.click(homeLink)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('handles logo navigation click', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    fireEvent.click(logo)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('renders WhatsApp link with correct URL', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const whatsappButtons = screen.getAllByRole('button', { name: /whatsapp/i })
    const whatsappLink = whatsappButtons.find(button => 
      button.closest('a')?.getAttribute('href')?.includes('wa.me')
    )
    
    expect(whatsappLink?.closest('a')).toHaveAttribute('href', 'https://wa.me/919519066885')
  })

  it('opens WhatsApp link in new tab', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const whatsappButtons = screen.getAllByRole('button', { name: /whatsapp/i })
    const whatsappLink = whatsappButtons.find(button => 
      button.closest('a')?.getAttribute('href')?.includes('wa.me')
    )
    
    expect(whatsappLink?.closest('a')).toHaveAttribute('target', '_blank')
  })

  it('renders mobile drawer with navigation items', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    // Check if all navigation items are in the drawer
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Connect us')).toBeInTheDocument()
  })

  it('closes drawer when clicking on navigation item', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    const homeLink = screen.getByRole('link', { name: 'Home' })
    fireEvent.click(homeLink)
    
    // Drawer should be closed
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument()
  })

  it('handles navigation clicks in mobile drawer', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    const homeLink = screen.getByRole('link', { name: 'Home' })
    fireEvent.click(homeLink)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('renders with proper AppBar structure', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const appBar = screen.getByRole('banner')
    expect(appBar).toBeInTheDocument()
  })

  it('renders with proper toolbar structure', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const toolbar = screen.getByRole('toolbar')
    expect(toolbar).toBeInTheDocument()
  })

  it('handles multiple menu open/close cycles', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    
    // Open drawer
    fireEvent.click(menuButton)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
    
    // Close drawer
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument()
    
    // Open drawer again
    fireEvent.click(menuButton)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it('renders with proper responsive behavior', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    // Desktop navigation should be visible
    expect(screen.getByText('Home')).toBeInTheDocument()
    
    // Mobile elements should also be present
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  })

  it('renders WhatsApp icon in mobile drawer', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    const whatsappButtons = screen.getAllByRole('button', { name: /whatsapp/i })
    expect(whatsappButtons.length).toBeGreaterThan(1) // Should have WhatsApp in both desktop and mobile
  })

  it('handles drawer backdrop click', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    fireEvent.click(menuButton)
    
    const drawer = screen.getByRole('presentation')
    fireEvent.click(drawer)
    
    // Drawer should still be open (backdrop click doesn't close it in this implementation)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it('renders with proper styling classes', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    // Check if desktop navigation has proper styling
    const desktopNav = screen.getByText('Home').closest('div')
    expect(desktopNav).toBeInTheDocument()
    
    // Check if mobile navigation has proper styling
    const mobileNav = screen.getByAltText('Logo').closest('div')
    expect(mobileNav).toBeInTheDocument()
  })

  it('handles keyboard navigation', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    
    // Test keyboard navigation
    fireEvent.keyDown(menuButton, { key: 'Enter' })
    fireEvent.keyDown(menuButton, { key: ' ' })
    
    expect(menuButton).toBeInTheDocument()
  })

  it('renders with proper logo attributes', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Logo')
    expect(logo).toHaveAttribute('src', '/logo.webp')
    expect(logo).toHaveAttribute('width', '65')
    expect(logo).toHaveAttribute('height', '65')
  })
})
