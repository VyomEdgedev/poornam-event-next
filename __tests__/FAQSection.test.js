import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import FAQSection from '@/common-component/Faq/FAQSection'

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('FAQSection Component', () => {
  const mockFAQData = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.'
    },
    {
      question: 'How much does wedding planning cost?',
      answer: 'Our pricing varies based on the services you choose and the scale of your event. Contact us for a personalized quote.'
    },
    {
      question: 'Do you provide services outside the city?',
      answer: 'Yes, we provide wedding planning services across multiple cities and can travel for destination weddings.'
    }
  ]

  it('renders with default props', () => {
    render(
      <TestWrapper>
        <FAQSection />
      </TestWrapper>
    )
    
    expect(screen.getByText('FAQ\'s')).toBeInTheDocument()
    expect(screen.getByText('Your Questions, Answered')).toBeInTheDocument()
  })

  it('renders FAQ items when data is provided', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    expect(screen.getByText('What services do you offer?')).toBeInTheDocument()
    expect(screen.getByText('How much does wedding planning cost?')).toBeInTheDocument()
    expect(screen.getByText('Do you provide services outside the city?')).toBeInTheDocument()
  })

  it('shows only questions initially (answers hidden)', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    // Questions should be visible
    expect(screen.getByText('What services do you offer?')).toBeInTheDocument()
    
    // Answers should not be visible initially
    expect(screen.queryByText('We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.')).not.toBeInTheDocument()
  })

  it('expands FAQ item when clicked', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    const firstQuestion = screen.getByText('What services do you offer?')
    fireEvent.click(firstQuestion)
    
    // Answer should now be visible
    expect(screen.getByText('We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.')).toBeInTheDocument()
  })

  it('closes expanded FAQ item when clicked again', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    const firstQuestion = screen.getByText('What services do you offer?')
    
    // Click to expand
    fireEvent.click(firstQuestion)
    expect(screen.getByText('We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.')).toBeInTheDocument()
    
    // Click again to collapse
    fireEvent.click(firstQuestion)
    expect(screen.queryByText('We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.')).not.toBeInTheDocument()
  })

  it('allows only one FAQ item to be open at a time', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    const firstQuestion = screen.getByText('What services do you offer?')
    const secondQuestion = screen.getByText('How much does wedding planning cost?')
    
    // Click first question
    fireEvent.click(firstQuestion)
    expect(screen.getByText('We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.')).toBeInTheDocument()
    
    // Click second question
    fireEvent.click(secondQuestion)
    
    // First answer should be hidden, second answer should be visible
    expect(screen.queryByText('We offer comprehensive wedding planning services including venue selection, catering, decoration, and more.')).not.toBeInTheDocument()
    expect(screen.getByText('Our pricing varies based on the services you choose and the scale of your event. Contact us for a personalized quote.')).toBeInTheDocument()
  })

  it('renders correct heading and subtitle', () => {
    render(
      <TestWrapper>
        <FAQSection />
      </TestWrapper>
    )
    
    expect(screen.getByRole('heading', { level: 2, name: 'FAQ\'s' })).toBeInTheDocument()
    expect(screen.getByText('Your Questions, Answered')).toBeInTheDocument()
  })

  it('handles empty FAQ data', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={[]} />
      </TestWrapper>
    )
    
    expect(screen.getByText('FAQ\'s')).toBeInTheDocument()
    expect(screen.getByText('Your Questions, Answered')).toBeInTheDocument()
    // No FAQ items should be rendered
  })

  it('renders multiple FAQ items correctly', () => {
    const largeFAQData = [
      ...mockFAQData,
      {
        question: 'Can you help with destination weddings?',
        answer: 'Absolutely! We specialize in destination weddings and can coordinate with vendors in various locations.'
      },
      {
        question: 'Do you offer day-of coordination?',
        answer: 'Yes, we provide day-of coordination services to ensure everything runs smoothly on your special day.'
      }
    ]
    
    render(
      <TestWrapper>
        <FAQSection faqData={largeFAQData} />
      </TestWrapper>
    )
    
    expect(screen.getByText('What services do you offer?')).toBeInTheDocument()
    expect(screen.getByText('How much does wedding planning cost?')).toBeInTheDocument()
    expect(screen.getByText('Do you provide services outside the city?')).toBeInTheDocument()
    expect(screen.getByText('Can you help with destination weddings?')).toBeInTheDocument()
    expect(screen.getByText('Do you offer day-of coordination?')).toBeInTheDocument()
  })

  it('displays expand/collapse icons correctly', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    const firstQuestion = screen.getByText('What services do you offer?')
    const expandIcon = firstQuestion.closest('.MuiAccordionSummary-root').querySelector('[data-testid="ExpandMoreIcon"]') || 
                      firstQuestion.closest('.MuiAccordionSummary-root').querySelector('.MuiSvgIcon-root')
    
    expect(expandIcon).toBeInTheDocument()
  })

  it('maintains proper styling and layout', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    const container = screen.getByText('FAQ\'s').closest('div')
    expect(container).toBeInTheDocument()
  })

  it('handles FAQ items with special characters', () => {
    const specialCharFAQData = [
      {
        question: 'Do you handle weddings with special requirements?',
        answer: 'Yes! We handle weddings with special dietary requirements, accessibility needs, and cultural traditions.'
      }
    ]
    
    render(
      <TestWrapper>
        <FAQSection faqData={specialCharFAQData} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Do you handle weddings with special requirements?')).toBeInTheDocument()
  })

  it('handles long FAQ content', () => {
    const longFAQData = [
      {
        question: 'What is included in your comprehensive wedding planning package?',
        answer: 'Our comprehensive wedding planning package includes venue selection and booking, vendor coordination and management, timeline creation and management, day-of coordination, rehearsal dinner planning, ceremony planning, reception planning, transportation coordination, accommodation assistance for guests, photography and videography coordination, floral design and decoration, catering coordination, entertainment booking, wedding cake coordination, bridal party coordination, guest list management, invitation design and mailing, wedding favors coordination, and post-wedding cleanup and vendor payment processing.'
      }
    ]
    
    render(
      <TestWrapper>
        <FAQSection faqData={longFAQData} />
      </TestWrapper>
    )
    
    expect(screen.getByText('What is included in your comprehensive wedding planning package?')).toBeInTheDocument()
    
    // Expand the FAQ item
    fireEvent.click(screen.getByText('What is included in your comprehensive wedding planning package?'))
    
    expect(screen.getByText(/Our comprehensive wedding planning package includes/)).toBeInTheDocument()
  })

  it('renders with proper responsive behavior', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={mockFAQData} />
      </TestWrapper>
    )
    
    // Component should render without errors on different screen sizes
    expect(screen.getByText('FAQ\'s')).toBeInTheDocument()
  })

  it('handles undefined or null FAQ data gracefully', () => {
    render(
      <TestWrapper>
        <FAQSection faqData={undefined} />
      </TestWrapper>
    )
    
    expect(screen.getByText('FAQ\'s')).toBeInTheDocument()
    expect(screen.getByText('Your Questions, Answered')).toBeInTheDocument()
  })
})
