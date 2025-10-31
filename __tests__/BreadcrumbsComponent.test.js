import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import BreadcrumbsComponent from '@/common-component/breadcrumbs/BreadcrumbsComponent'
import { loaderContext } from '@/contextApi/loaderContext'

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

describe('BreadcrumbsComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders nothing when no items provided', () => {
    const { container } = render(
      <TestWrapper>
        <BreadcrumbsComponent />
      </TestWrapper>
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing when empty items array provided', () => {
    const { container } = render(
      <TestWrapper>
        <BreadcrumbsComponent items={[]} />
      </TestWrapper>
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('renders breadcrumbs with basic items', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Current Page' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Current Page')).toBeInTheDocument()
  })

  it('renders home icon for home items', () => {
    const items = [
      { label: 'Home', href: '/', isHome: true }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByAltText('Home')).toBeInTheDocument()
  })

  it('renders home icon for root path items', () => {
    const items = [
      { label: 'Home', href: '/' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByAltText('Home')).toBeInTheDocument()
  })

  it('renders home icon for /home path items', () => {
    const items = [
      { label: 'Home', href: '/home' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByAltText('Home')).toBeInTheDocument()
  })

  it('does not render home icon when showHomeIcon is false', () => {
    const items = [
      { label: 'Home', href: '/', isHome: true }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} showHomeIcon={false} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.queryByAltText('Home')).not.toBeInTheDocument()
  })

  it('renders last item without link', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Current Page' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
    
    const currentPage = screen.getByText('Current Page')
    expect(currentPage.closest('a')).toBeNull()
  })

  it('handles navigation click', () => {
    const items = [
      { label: 'Home', href: '/' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    const homeLink = screen.getByText('Home')
    fireEvent.click(homeLink)
    
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('applies custom separator', () => {
    const customSeparator = <span data-testid="custom-separator"></span>
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Current Page' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} separator={customSeparator} />
      </TestWrapper>
    )
    
    expect(screen.getByTestId('custom-separator')).toBeInTheDocument()
  })

  it('respects maxItems prop', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Category 1', href: '/cat1' },
      { label: 'Category 2', href: '/cat2' },
      { label: 'Category 3', href: '/cat3' },
      { label: 'Current Page' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} maxItems={3} />
      </TestWrapper>
    )
    
    // Should render Home, Current Page, and one more item due to maxItems
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Current Page')).toBeInTheDocument()
  })

  it('applies custom homeIconColor', () => {
    const items = [
      { label: 'Home', href: '/', isHome: true }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} homeIconColor="#ff0000" />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByAltText('Home')).toBeInTheDocument()
  })

  it('applies custom sx styles', () => {
    const items = [
      { label: 'Home', href: '/' }
    ]
    
    const customSx = {
      backgroundColor: '#f0f0f0',
      padding: '20px'
    }
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} sx={customSx} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders multiple items correctly', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Smartphones', href: '/products/electronics/smartphones' },
      { label: 'iPhone 15' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Smartphones')).toBeInTheDocument()
    expect(screen.getByText('iPhone 15')).toBeInTheDocument()
  })

  it('handles items with onClick handlers', () => {
    const mockOnClick = jest.fn()
    const items = [
      { label: 'Home', href: '/', onClick: mockOnClick }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    const homeLink = screen.getByText('Home')
    fireEvent.click(homeLink)
    
    expect(mockOnClick).toHaveBeenCalled()
    expect(mockLoaderContext.setLoading).toHaveBeenCalledWith(true)
  })

  it('renders with default props', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Current Page' }
    ]
    
    render(
      <TestWrapper>
        <BreadcrumbsComponent items={items} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Current Page')).toBeInTheDocument()
    expect(screen.getByAltText('Home')).toBeInTheDocument() // Default showHomeIcon is true
  })
})
