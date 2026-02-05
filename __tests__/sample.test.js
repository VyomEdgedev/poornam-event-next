// Sample test to verify Jest setup
describe('Jest Setup Test', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should handle string operations', () => {
    const greeting = 'Hello Jest'
    expect(greeting).toContain('Jest')
    expect(greeting.length).toBeGreaterThan(0)
  })

  it('should handle array operations', () => {
    const numbers = [1, 2, 3, 4, 5]
    expect(numbers).toHaveLength(5)
    expect(numbers).toContain(3)
    expect(numbers[0]).toBe(1)
  })
})
