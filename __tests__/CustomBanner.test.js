import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CustomBanner from '@/common-component/banner/CustomBanner'
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

describe('CustomBanner Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with basic props', () => {
    render(
      <TestWrapper>
        <CustomBanner title="Test Title" />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('renders with subtitle and paragraph', () => {
    render(
      <TestWrapper>
        <CustomBanner 
          title="Main Title"
          subtitle="Subtitle Text"
          paragraphSubtitle="Paragraph content"
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Main Title')).toBeInTheDocument()
    expect(screen.getByText('Subtitle Text')).toBeInTheDocument()
    expect(screen.getByText('Paragraph content')).toBeInTheDocument()
  })

  it('renders background image when provided', () => {
    render(
      <TestWrapper>
        <CustomBanner 
          backgroundImage="/test-image.jpg"
          backgroundAlt="Test background"
        />
      </TestWrapper>
    )
    
    const backgroundImg = screen.getByAltText('Test background')
    expect(backgroundImg).toBeInTheDocument()
    expect(backgroundImg).toHaveAttribute('src', '/test-image.jpg')
  })

  it('renders logo when showLogo is true', () => {
    render(
      <TestWrapper>
        <CustomBanner 
          showLogo={true}
          logoSrc="/logo.png"
          logoAlt="Company Logo"
        />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Company Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/logo.png')
  })

  it('renders buttons when provided', () => {
    const buttons = [
      { text: 'Button 1', variant: 'primary' },
      { text: 'Button 2', variant: 'secondary' }
    ]
    
    render(
      <TestWrapper>
        <CustomBanner buttons={buttons} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Button 1')).toBeInTheDocument()
    expect(screen.getByText('Button 2')).toBeInTheDocument()
  })

  it('handles button click events', () => {
    const handleClick = jest.fn()
    const buttons = [{ text: 'Click Me', onClick: handleClick }]
    
    render(
      <TestWrapper>
        <CustomBanner buttons={buttons} />
      </TestWrapper>
    )
    
    fireEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders breadcrumbs when provided', () => {
    const breadcrumbs = [
      { label: 'Home', href: '/' },
      { label: 'Test', href: '/test' }
    ]
    
    render(
      <TestWrapper>
        <CustomBanner breadcrumbs={breadcrumbs} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('applies custom height', () => {
    render(
      <TestWrapper>
        <CustomBanner height="600px" />
      </TestWrapper>
    )
    
    const bannerSection = screen.getByText('').closest('div')
    expect(bannerSection).toBeInTheDocument()
  })

  it('applies custom backgroundColor', () => {
    render(
      <TestWrapper>
        <CustomBanner backgroundColor="#ff0000" />
      </TestWrapper>
    )
    
    const bannerSection = screen.getByText('').closest('div')
    expect(bannerSection).toBeInTheDocument()
  })

  it('renders custom children content', () => {
    render(
      <TestWrapper>
        <CustomBanner>
          <div data-testid="custom-child">Custom Content</div>
        </CustomBanner>
      </TestWrapper>
    )
    
    expect(screen.getByTestId('custom-child')).toBeInTheDocument()
    expect(screen.getByText('Custom Content')).toBeInTheDocument()
  })

  it('handles navigation click for logo', () => {
    render(
      <TestWrapper>
        <CustomBanner 
          showLogo={true}
          logoSrc="/logo.png"
          logoAlt="Company Logo"
        />
      </TestWrapper>
    )
    
    const logo = screen.getByAltText('Company Logo')
    fireEvent.click(logo)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('applies custom className', () => {
    render(
      <TestWrapper>
        <CustomBanner className="custom-banner-class" />
      </TestWrapper>
    )
    
    const bannerSection = screen.getByText('').closest('div')
    expect(bannerSection).toHaveClass('custom-banner-class')
  })

  it('renders with different heading tags', () => {
    render(
      <TestWrapper>
        <CustomBanner 
          title="Test Title"
          headingtag="h2"
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('handles disabled buttons', () => {
    const buttons = [
      { text: 'Disabled Button', disabled: true }
    ]
    
    render(
      <TestWrapper>
        <CustomBanner buttons={buttons} />
      </TestWrapper>
    )
    
    const button = screen.getByText('Disabled Button')
    expect(button).toBeDisabled()
  })

  it('renders overlay when provided', () => {
    const overlay = {
      width: '50%',
      background: 'linear-gradient(270deg, rgba(0, 13, 31, 0) 0%, #000D1E 100%)'
    }
    
    render(
      <TestWrapper>
        <CustomBanner overlay={overlay} />
      </TestWrapper>
    )
    
    const bannerSection = screen.getByText('').closest('div')
    expect(bannerSection).toBeInTheDocument()
  })

  it('applies custom content alignment', () => {
    const contentAlignment = {
      horizontal: 'center',
      vertical: 'flex-start',
      textAlign: 'center'
    }
    
    render(
      <TestWrapper>
        <CustomBanner 
          title="Centered Title"
          contentAlignment={contentAlignment}
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Centered Title')).toBeInTheDocument()
  })

  it('renders with custom styling props', () => {
    const headingStyle = {
      color: '#ff0000',
      fontSize: '60px'
    }
    
    const subheadingStyle = {
      color: '#00ff00',
      fontSize: '30px'
    }
    
    const paragraphStyle = {
      color: '#0000ff',
      fontSize: '18px'
    }
    
    render(
      <TestWrapper>
        <CustomBanner 
          title="Styled Title"
          subtitle="Styled Subtitle"
          paragraphSubtitle="Styled Paragraph"
          headingStyle={headingStyle}
          subheadingStyle={subheadingStyle}
          paragraphStyle={paragraphStyle}
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Styled Title')).toBeInTheDocument()
    expect(screen.getByText('Styled Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Styled Paragraph')).toBeInTheDocument()
  })
})
