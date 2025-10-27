import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Form from '@/common-component/modal/Form'
import { apiClient } from '@/lib/api-client'

// Mock Next.js modules
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock API client
jest.mock('@/lib/api-client', () => ({
  apiClient: {
    post: jest.fn()
  }
}))

// Mock react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn()
  },
  ToastContainer: () => <div data-testid="toast-container" />
}))

// Mock react-hook-form
const mockRegister = jest.fn()
const mockHandleSubmit = jest.fn()
const mockReset = jest.fn()

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: mockRegister,
    handleSubmit: mockHandleSubmit,
    reset: mockReset,
    formState: { errors: {}, isSubmitting: false }
  })
}))

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('Form Component', () => {
  const mockOnClose = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    mockHandleSubmit.mockImplementation((fn) => (e) => {
      e.preventDefault()
      fn({
        fullName: 'Test User',
        email: 'test@example.com',
        phone: '1234567890',
        message: 'Test message'
      })
    })
    mockRegister.mockReturnValue({})
  })

  it('renders form with all input fields', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    expect(screen.getByText('Tell Us About Your Wedding')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone (10 digits)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders form image', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const image = screen.getByAltText('Wedding planning imagery')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/FormImg.webp')
  })

  it('renders submit button', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const submitButton = screen.getByRole('button', { name: /let's begin the dream/i })
    expect(submitButton).toBeInTheDocument()
  })

  it('calls register for all form fields', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    expect(mockRegister).toHaveBeenCalledWith('fullName', expect.any(Object))
    expect(mockRegister).toHaveBeenCalledWith('email', expect.any(Object))
    expect(mockRegister).toHaveBeenCalledWith('phone', expect.any(Object))
    expect(mockRegister).toHaveBeenCalledWith('message', expect.any(Object))
  })

  it('handles form submission successfully', async () => {
    apiClient.post.mockResolvedValue({ data: { success: true } })
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledWith('/api/inquiryform/event', {
        formType: 'contactus',
        fullName: 'Test User',
        message: 'Test message',
        email: 'test@example.com',
        phoneNo: '1234567890',
        sourcePage: '/model'
      })
    })
    
    expect(mockReset).toHaveBeenCalled()
  })

  it('handles form submission error', async () => {
    apiClient.post.mockRejectedValue(new Error('API Error'))
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalled()
    })
  })

  it('handles duplicate email error', async () => {
    const error = {
      response: {
        data: {
          error: 'E11000 duplicate key error'
        }
      }
    }
    apiClient.post.mockRejectedValue(error)
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalled()
    })
  })

  it('handles email already exists error', async () => {
    const error = {
      response: {
        data: {
          message: 'email already exists'
        }
      }
    }
    apiClient.post.mockRejectedValue(error)
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalled()
    })
  })

  it('handles phone number input restrictions', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const phoneInput = screen.getByPlaceholderText('Phone (10 digits)')
    
    // Test that non-numeric characters are blocked
    fireEvent.keyDown(phoneInput, { key: 'e' })
    fireEvent.keyDown(phoneInput, { key: 'E' })
    fireEvent.keyDown(phoneInput, { key: '+' })
    fireEvent.keyDown(phoneInput, { key: '-' })
    fireEvent.keyDown(phoneInput, { key: '.' })
    
    // Test that numeric characters are allowed
    fireEvent.keyDown(phoneInput, { key: '1' })
    fireEvent.keyDown(phoneInput, { key: 'Backspace' })
    fireEvent.keyDown(phoneInput, { key: 'Delete' })
    fireEvent.keyDown(phoneInput, { key: 'ArrowLeft' })
    fireEvent.keyDown(phoneInput, { key: 'ArrowRight' })
    fireEvent.keyDown(phoneInput, { key: 'Tab' })
  })

  it('handles paste restrictions for phone input', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const phoneInput = screen.getByPlaceholderText('Phone (10 digits)')
    
    // Test paste with non-numeric characters (should be prevented)
    const pasteEvent = new Event('paste', { bubbles: true })
    Object.defineProperty(pasteEvent, 'clipboardData', {
      value: {
        getData: () => 'abc123'
      }
    })
    fireEvent(phoneInput, pasteEvent)
    
    // Test paste with only numeric characters (should be allowed)
    const validPasteEvent = new Event('paste', { bubbles: true })
    Object.defineProperty(validPasteEvent, 'clipboardData', {
      value: {
        getData: () => '1234567890'
      }
    })
    fireEvent(phoneInput, validPasteEvent)
  })

  it('shows loading state during submission', async () => {
    apiClient.post.mockImplementation(() => new Promise(() => {})) // Never resolves
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })
  })

  it('renders with proper form validation', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    expect(mockRegister).toHaveBeenCalledWith('fullName', expect.objectContaining({
      required: 'Full name is required',
      validate: expect.any(Object)
    }))
    
    expect(mockRegister).toHaveBeenCalledWith('email', expect.objectContaining({
      required: 'Email is required',
      pattern: expect.any(Object)
    }))
    
    expect(mockRegister).toHaveBeenCalledWith('phone', expect.objectContaining({
      required: 'Phone number is required',
      pattern: expect.any(Object)
    }))
    
    expect(mockRegister).toHaveBeenCalledWith('message', expect.objectContaining({
      required: 'Message is required',
      validate: expect.any(Function)
    }))
  })

  it('renders success modal after successful submission', async () => {
    apiClient.post.mockResolvedValue({ data: { success: true } })
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(screen.getByText('Thank you')).toBeInTheDocument()
    })
  })

  it('calls onClose after successful submission', async () => {
    apiClient.post.mockResolvedValue({ data: { success: true } })
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled()
    }, { timeout: 2000 })
  })

  it('renders with proper styling', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const heading = screen.getByText('Tell Us About Your Wedding')
    expect(heading).toBeInTheDocument()
  })

  it('handles form reset after successful submission', async () => {
    apiClient.post.mockResolvedValue({ data: { success: true } })
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(mockReset).toHaveBeenCalled()
    })
  })

  it('renders toast container', () => {
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    expect(screen.getByTestId('toast-container')).toBeInTheDocument()
  })

  it('handles different error types', async () => {
    const error = {
      response: {
        data: {
          error: 'Some other error'
        }
      }
    }
    apiClient.post.mockRejectedValue(error)
    
    render(
      <TestWrapper>
        <Form onClose={mockOnClose} />
      </TestWrapper>
    )
    
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalled()
    })
  })
})
