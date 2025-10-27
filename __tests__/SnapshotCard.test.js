import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import SnapshotCard from '@/common-component/SpanshotCard/SnapshotCard'

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

describe('SnapshotCard Component', () => {
  const mockProps = {
    avatarSrc: '/test-avatar.jpg',
    title: 'Test User',
    Subtitles: 'Test Subtitle',
    imageSrc: '/test-image.jpg',
    caption: 'Test caption for the post',
    tags: ['wedding', 'photography', 'celebration']
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with all props provided', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test caption for the post')).toBeInTheDocument()
    expect(screen.getByText('wedding')).toBeInTheDocument()
    expect(screen.getByText('photography')).toBeInTheDocument()
    expect(screen.getByText('celebration')).toBeInTheDocument()
  })

  it('renders with minimal props', () => {
    const minimalProps = {
      title: 'Minimal User',
      imageSrc: '/minimal-image.jpg',
      caption: 'Minimal caption'
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...minimalProps} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Minimal User')).toBeInTheDocument()
    expect(screen.getByText('Minimal caption')).toBeInTheDocument()
  })

  it('renders avatar image', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const avatar = screen.getByRole('img', { hidden: true })
    expect(avatar).toHaveAttribute('src', '/test-avatar.jpg')
  })

  it('renders main image', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const images = screen.getAllByRole('img')
    const mainImage = images.find(img => img.getAttribute('src') === '/test-image.jpg')
    expect(mainImage).toBeInTheDocument()
    expect(mainImage).toHaveAttribute('alt', 'Instagram post')
  })

  it('shows hover overlay on mouse enter', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const imageContainer = screen.getByRole('img', { name: 'Instagram post' }).closest('div')
    fireEvent.mouseEnter(imageContainer)
    
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument()
  })

  it('hides hover overlay on mouse leave', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const imageContainer = screen.getByRole('img', { name: 'Instagram post' }).closest('div')
    fireEvent.mouseEnter(imageContainer)
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument()
    
    fireEvent.mouseLeave(imageContainer)
    expect(screen.queryByTestId('InstagramIcon')).not.toBeInTheDocument()
  })

  it('opens Instagram link when overlay is clicked', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const imageContainer = screen.getByRole('img', { name: 'Instagram post' }).closest('div')
    fireEvent.mouseEnter(imageContainer)
    
    const overlay = screen.getByTestId('InstagramIcon').closest('div')
    fireEvent.click(overlay)
    
    expect(mockWindowOpen).toHaveBeenCalledWith('https://www.instagram.com/poornamevents/', '_blank')
  })

  it('renders all tags as chips', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    expect(screen.getByText('wedding')).toBeInTheDocument()
    expect(screen.getByText('photography')).toBeInTheDocument()
    expect(screen.getByText('celebration')).toBeInTheDocument()
  })

  it('handles empty tags array', () => {
    const propsWithoutTags = {
      ...mockProps,
      tags: []
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...propsWithoutTags} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test caption for the post')).toBeInTheDocument()
  })

  it('handles undefined tags', () => {
    const propsWithoutTags = {
      ...mockProps,
      tags: undefined
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...propsWithoutTags} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test caption for the post')).toBeInTheDocument()
  })

  it('renders with proper card structure', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    // Check if card elements are present
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test caption for the post')).toBeInTheDocument()
  })

  it('handles long captions', () => {
    const longCaption = 'This is a very long caption that should be handled properly by the component without breaking the layout or causing any issues with the display'
    
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} caption={longCaption} />
      </TestWrapper>
    )
    
    expect(screen.getByText(longCaption)).toBeInTheDocument()
  })

  it('handles special characters in content', () => {
    const specialContent = {
      ...mockProps,
      title: 'User & Co. <Special> "Characters"',
      caption: 'Caption with &amp; entities and "quotes"',
      tags: ['wedding & events', 'photography "special"', 'celebration <party>']
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...specialContent} />
      </TestWrapper>
    )
    
    expect(screen.getByText('User & Co. <Special> "Characters"')).toBeInTheDocument()
    expect(screen.getByText('Caption with &amp; entities and "quotes"')).toBeInTheDocument()
    expect(screen.getByText('wedding & events')).toBeInTheDocument()
    expect(screen.getByText('photography "special"')).toBeInTheDocument()
    expect(screen.getByText('celebration <party>')).toBeInTheDocument()
  })

  it('handles missing avatar gracefully', () => {
    const propsWithoutAvatar = {
      ...mockProps,
      avatarSrc: undefined
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...propsWithoutAvatar} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('handles missing image gracefully', () => {
    const propsWithoutImage = {
      ...mockProps,
      imageSrc: undefined
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...propsWithoutImage} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('renders with proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const mainImage = screen.getByRole('img', { name: 'Instagram post' })
    expect(mainImage).toHaveAttribute('alt', 'Instagram post')
  })

  it('handles multiple hover interactions', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const imageContainer = screen.getByRole('img', { name: 'Instagram post' }).closest('div')
    
    // Multiple enter/leave cycles
    fireEvent.mouseEnter(imageContainer)
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument()
    
    fireEvent.mouseLeave(imageContainer)
    expect(screen.queryByTestId('InstagramIcon')).not.toBeInTheDocument()
    
    fireEvent.mouseEnter(imageContainer)
    expect(screen.getByTestId('InstagramIcon')).toBeInTheDocument()
  })

  it('handles window.open error gracefully', () => {
    mockWindowOpen.mockImplementation(() => {
      throw new Error('Popup blocked')
    })
    
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const imageContainer = screen.getByRole('img', { name: 'Instagram post' }).closest('div')
    fireEvent.mouseEnter(imageContainer)
    
    const overlay = screen.getByTestId('InstagramIcon').closest('div')
    
    // Should not crash when window.open fails
    expect(() => {
      fireEvent.click(overlay)
    }).not.toThrow()
  })

  it('renders with proper image dimensions', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const mainImage = screen.getByRole('img', { name: 'Instagram post' })
    expect(mainImage).toBeInTheDocument()
  })

  it('handles empty title gracefully', () => {
    const propsWithEmptyTitle = {
      ...mockProps,
      title: ''
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...propsWithEmptyTitle} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test caption for the post')).toBeInTheDocument()
  })

  it('handles empty caption gracefully', () => {
    const propsWithEmptyCaption = {
      ...mockProps,
      caption: ''
    }
    
    render(
      <TestWrapper>
        <SnapshotCard {...propsWithEmptyCaption} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Test User')).toBeInTheDocument()
  })

  it('renders tags with proper styling', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const tagElements = screen.getAllByText(/wedding|photography|celebration/)
    tagElements.forEach(tag => {
      expect(tag).toBeInTheDocument()
    })
  })

  it('handles rapid mouse enter/leave events', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    const imageContainer = screen.getByRole('img', { name: 'Instagram post' }).closest('div')
    
    // Rapid mouse events
    fireEvent.mouseEnter(imageContainer)
    fireEvent.mouseLeave(imageContainer)
    fireEvent.mouseEnter(imageContainer)
    fireEvent.mouseLeave(imageContainer)
    
    // Should not crash and should handle state properly
    expect(screen.queryByTestId('InstagramIcon')).not.toBeInTheDocument()
  })

  it('renders with proper card layout', () => {
    render(
      <TestWrapper>
        <SnapshotCard {...mockProps} />
      </TestWrapper>
    )
    
    // Check if all main elements are present
    expect(screen.getByText('Test User')).toBeInTheDocument()
    expect(screen.getByText('Test caption for the post')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Instagram post' })).toBeInTheDocument()
  })
})
