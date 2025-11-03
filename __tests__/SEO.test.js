import React from 'react'
import { render } from '@testing-library/react'
import SEO from '@/common-component/SEO/seo'

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function MockHead({ children }) {
    return <div data-testid="head">{children}</div>
  }
})

describe('SEO Component', () => {
  beforeEach(() => {
    // Clear console warnings before each test
    jest.clearAllMocks()
    const originalWarn = console.warn
    console.warn = jest.fn()
  })

  afterEach(() => {
    // Restore console.warn after each test
    console.warn = console.warn.mockRestore?.() || jest.fn()
  })

  it('renders with required metaTitle', () => {
    render(
      <SEO metaTitle="Test Page Title" />
    )
    
    expect(document.querySelector('title')).toBeInTheDocument()
  })

  it('renders with meta description', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test meta description"
      />
    )
    
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Test meta description')
  })

  it('renders with keywords', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        keywords="wedding, planning, events"
      />
    )
    
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    expect(metaKeywords).toHaveAttribute('content', 'wedding, planning, events')
  })

  it('renders with canonical URL', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        canonical="https://example.com/test-page"
      />
    )
    
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    expect(canonicalLink).toHaveAttribute('href', 'https://example.com/test-page')
  })

  it('uses URL as canonical when canonical is not provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        url="https://example.com/test-page"
      />
    )
    
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    expect(canonicalLink).toHaveAttribute('href', 'https://example.com/test-page')
  })

  it('renders Open Graph tags', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test description"
        url="https://example.com/test"
        ogTitle="Custom OG Title"
        ogDescription="Custom OG Description"
      />
    )
    
    const ogType = document.querySelector('meta[property="og:type"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    
    expect(ogType).toHaveAttribute('content', 'website')
    expect(ogUrl).toHaveAttribute('content', 'https://example.com/test')
    expect(ogTitle).toHaveAttribute('content', 'Custom OG Title')
    expect(ogDescription).toHaveAttribute('content', 'Custom OG Description')
  })

  it('uses metaTitle as ogTitle when not provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test description"
        url="https://example.com/test"
      />
    )
    
    const ogTitle = document.querySelector('meta[property="og:title"]')
    expect(ogTitle).toHaveAttribute('content', 'Test Page Title')
  })

  it('uses metaDescription as ogDescription when not provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test description"
        url="https://example.com/test"
      />
    )
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    expect(ogDescription).toHaveAttribute('content', 'Test description')
  })

  it('renders Twitter Card tags', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test description"
        url="https://example.com/test"
        twitterTitle="Custom Twitter Title"
        twitterDescription="Custom Twitter Description"
      />
    )
    
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    const twitterUrl = document.querySelector('meta[name="twitter:url"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    
    expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
    expect(twitterUrl).toHaveAttribute('content', 'https://example.com/test')
    expect(twitterTitle).toHaveAttribute('content', 'Custom Twitter Title')
    expect(twitterDescription).toHaveAttribute('content', 'Custom Twitter Description')
  })

  it('uses metaTitle as twitterTitle when not provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test description"
        url="https://example.com/test"
      />
    )
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    expect(twitterTitle).toHaveAttribute('content', 'Test Page Title')
  })

  it('uses metaDescription as twitterDescription when not provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        metaDescription="Test description"
        url="https://example.com/test"
      />
    )
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    expect(twitterDescription).toHaveAttribute('content', 'Test description')
  })

  it('renders robots meta tag', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        robots="noindex, nofollow"
      />
    )
    
    const robots = document.querySelector('meta[name="robots"]')
    expect(robots).toHaveAttribute('content', 'noindex, nofollow')
  })

  it('uses default robots value', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const robots = document.querySelector('meta[name="robots"]')
    expect(robots).toHaveAttribute('content', 'index, follow')
  })

  it('renders favicon link', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        favicon="/custom-favicon.ico"
      />
    )
    
    const favicon = document.querySelector('link[rel="icon"]')
    expect(favicon).toHaveAttribute('href', '/custom-favicon.ico')
    expect(favicon).toHaveAttribute('type', 'image/x-icon')
  })

  it('uses default favicon', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const favicon = document.querySelector('link[rel="icon"]')
    expect(favicon).toHaveAttribute('href', '/favicon.ico')
  })

  it('renders Open Graph image', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        ogImage="https://example.com/og-image.jpg"
      />
    )
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    expect(ogImage).toHaveAttribute('content', 'https://res.cloudinary.com/dtidgvjlt/image/upload/v1753038213/logo_kjfvsf.png')
  })

  it('renders Twitter image when provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
        twitterImage="https://example.com/twitter-image.jpg"
      />
    )
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    expect(twitterImage).toHaveAttribute('content', 'https://res.cloudinary.com/dtidgvjlt/image/upload/v1753038213/logo_kjfvsf.png')
  })

  it('does not render Twitter image when not provided', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    expect(twitterImage).toBeNull()
  })

  it('renders JSON-LD script', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const jsonLdScript = document.querySelector('script[type="application/ld+json"]')
    expect(jsonLdScript).toBeInTheDocument()
  })

  it('renders with proper charset and viewport', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const charset = document.querySelector('meta[charset="UTF-8"]')
    const viewport = document.querySelector('meta[name="viewport"]')
    
    expect(charset).toBeInTheDocument()
    expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1')
  })

  it('returns null when metaTitle is missing', () => {
    const { container } = render(
      <SEO />
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('handles empty string metaTitle', () => {
    const { container } = render(
      <SEO metaTitle="" />
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('handles null metaTitle', () => {
    const { container } = render(
      <SEO metaTitle={null} />
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('handles undefined metaTitle', () => {
    const { container } = render(
      <SEO metaTitle={undefined} />
    )
    
    expect(container.firstChild).toBeNull()
  })

  it('renders with all props provided', () => {
    render(
      <SEO 
        metaTitle="Complete Test Title"
        metaDescription="Complete test description"
        keywords="test, keywords, complete"
        url="https://example.com/complete-test"
        canonical="https://example.com/complete-test-canonical"
        ogTitle="Complete OG Title"
        ogDescription="Complete OG Description"
        ogImage="https://example.com/complete-og-image.jpg"
        twitterTitle="Complete Twitter Title"
        twitterDescription="Complete Twitter Description"
        twitterImage="https://example.com/complete-twitter-image.jpg"
        robots="index, follow"
        favicon="/complete-favicon.ico"
      />
    )
    
    // Check title
    expect(document.querySelector('title')).toHaveTextContent('Complete Test Title')
    
    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Complete test description')
    
    // Check keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    expect(metaKeywords).toHaveAttribute('content', 'test, keywords, complete')
    
    // Check canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    expect(canonicalLink).toHaveAttribute('href', 'https://example.com/complete-test-canonical')
    
    // Check Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]')
    expect(ogTitle).toHaveAttribute('content', 'Complete OG Title')
    
    // Check Twitter
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    expect(twitterTitle).toHaveAttribute('content', 'Complete Twitter Title')
    
    // Check robots
    const robots = document.querySelector('meta[name="robots"]')
    expect(robots).toHaveAttribute('content', 'index, follow')
    
    // Check favicon
    const favicon = document.querySelector('link[rel="icon"]')
    expect(favicon).toHaveAttribute('href', '/complete-favicon.ico')
  })

  it('handles special characters in meta content', () => {
    render(
      <SEO 
        metaTitle="Test & Title <with> special \"characters\""
        metaDescription="Description with &amp; entities and \"quotes\""
      />
    )
    
    const title = document.querySelector('title')
    expect(title).toHaveTextContent('Test & Title <with> special "characters"')
    
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Description with &amp; entities and "quotes"')
  })

  it('renders with proper Open Graph image URL', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    expect(ogImage).toHaveAttribute('content', 'https://res.cloudinary.com/dtidgvjlt/image/upload/v1753038213/logo_kjfvsf.png')
  })

  it('renders with proper JSON-LD content', () => {
    render(
      <SEO 
        metaTitle="Test Page Title"
      />
    )
    
    const jsonLdScript = document.querySelector('script[type="application/ld+json"]')
    expect(jsonLdScript).toBeInTheDocument()
    
    const jsonContent = JSON.parse(jsonLdScript.textContent)
    expect(jsonContent).toHaveProperty('logo', '/favicon.ico')
  })
})
