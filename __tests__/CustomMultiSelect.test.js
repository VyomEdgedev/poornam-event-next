import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CustomMultiSelect from '@/common-component/CustomMultiSelect/CustomMultiSelect'

const theme = createTheme()

const TestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

describe('CustomMultiSelect Component', () => {
  const mockNames = [
    { _id: '1', name: 'Option 1' },
    { _id: '2', name: 'Option 2' },
    { _id: '3', name: 'Option 3' }
  ]

  it('renders with default props', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect names={mockNames} />
      </TestWrapper>
    )
    
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Select names...')).toBeInTheDocument()
  })

  it('renders with custom placeholder', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          placeholder="Choose options..."
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Choose options...')).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          label="Select your options"
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('aria-label', 'Select your options')
  })

  it('opens dropdown and shows options', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect names={mockNames} />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('handles multiple selection', () => {
    const mockOnChange = jest.fn()
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          onChange={mockOnChange}
          multiple={true}
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    const option1 = screen.getByText('Option 1')
    fireEvent.click(option1)
    
    const option2 = screen.getByText('Option 2')
    fireEvent.click(option2)
    
    expect(mockOnChange).toHaveBeenCalledTimes(2)
  })

  it('handles single selection when multiple is false', () => {
    const mockOnChange = jest.fn()
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          onChange={mockOnChange}
          multiple={false}
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    const option1 = screen.getByText('Option 1')
    fireEvent.click(option1)
    
    expect(mockOnChange).toHaveBeenCalledWith([mockNames[0]])
  })

  it('displays selected values as chips in multiple mode', () => {
    const selectedValues = [mockNames[0], mockNames[1]]
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          value={selectedValues}
          multiple={true}
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('displays selected value as text in single mode', () => {
    const selectedValues = [mockNames[0]]
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          value={selectedValues}
          multiple={false}
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('shows placeholder when no value selected', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          value={[]}
          placeholder="Select something..."
        />
      </TestWrapper>
    )
    
    expect(screen.getByText('Select something...')).toBeInTheDocument()
  })

  it('renders check icons for selected options', () => {
    const selectedValues = [mockNames[0]]
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          value={selectedValues}
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    // Check icon should be present for selected option
    const checkIcons = screen.getAllByTestId('CheckIcon')
    expect(checkIcons).toHaveLength(1)
  })

  it('handles empty names array', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect names={[]} />
      </TestWrapper>
    )
    
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Select names...')).toBeInTheDocument()
  })

  it('handles names with missing _id or name', () => {
    const incompleteNames = [
      { _id: '1', name: 'Option 1' },
      { name: 'Option without ID' },
      { _id: '3' },
      { _id: '4', name: 'Option 4' }
    ]
    
    render(
      <TestWrapper>
        <CustomMultiSelect names={incompleteNames} />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 4')).toBeInTheDocument()
    // Options without proper _id or name should be filtered out
  })

  it('applies custom styles through props', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          className="custom-select"
        />
      </TestWrapper>
    )
    
    const formControl = screen.getByRole('combobox').closest('.MuiFormControl-root')
    expect(formControl).toBeInTheDocument()
  })

  it('handles onChange with proper object mapping', () => {
    const mockOnChange = jest.fn()
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          onChange={mockOnChange}
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    const option1 = screen.getByText('Option 1')
    fireEvent.click(option1)
    
    expect(mockOnChange).toHaveBeenCalledWith([mockNames[0]])
  })

  it('handles selection of non-existent option gracefully', () => {
    const mockOnChange = jest.fn()
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          onChange={mockOnChange}
        />
      </TestWrapper>
    )
    
    // Simulate selecting a non-existent option
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'non-existent-id' } })
    
    expect(mockOnChange).toHaveBeenCalledWith([])
  })

  it('renders with proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          label="Choose your options"
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('aria-label', 'Choose your options')
    
    const input = select.querySelector('input')
    expect(input).toHaveAttribute('aria-label', 'Choose your options')
  })

  it('handles keyboard navigation', () => {
    render(
      <TestWrapper>
        <CustomMultiSelect names={mockNames} />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    
    // Test opening with Enter key
    fireEvent.keyDown(select, { key: 'Enter' })
    
    // Test opening with Space key
    fireEvent.keyDown(select, { key: ' ' })
  })

  it('maintains selection state correctly', () => {
    const selectedValues = [mockNames[0], mockNames[2]]
    const mockOnChange = jest.fn()
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          value={selectedValues}
          onChange={mockOnChange}
        />
      </TestWrapper>
    )
    
    // Should show both selected options as chips
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('handles deselecting items', () => {
    const selectedValues = [mockNames[0], mockNames[1]]
    const mockOnChange = jest.fn()
    
    render(
      <TestWrapper>
        <CustomMultiSelect 
          names={mockNames} 
          value={selectedValues}
          onChange={mockOnChange}
        />
      </TestWrapper>
    )
    
    const select = screen.getByRole('combobox')
    fireEvent.mouseDown(select)
    
    // Click on already selected option to deselect
    const option1 = screen.getByText('Option 1')
    fireEvent.click(option1)
    
    expect(mockOnChange).toHaveBeenCalled()
  })
})
