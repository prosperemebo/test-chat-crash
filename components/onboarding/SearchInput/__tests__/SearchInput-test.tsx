import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import SearchInput from '../SearchInput'
import { dark } from '@/theme'

const mockOnChangeText = jest.fn()

const renderComponent = (props = {}) => {
  return render(
    <ThemeProvider theme={dark}>
      <SearchInput
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Search games"
        {...props}
      />
    </ThemeProvider>,
  )
}

describe('<SearchInput />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    const { toJSON } = renderComponent()
    expect(toJSON()).toMatchSnapshot()
  })

  it('shows clear button when text is entered', () => {
    const { getByTestId, queryByTestId } = renderComponent({ value: 'test' })
    
    expect(getByTestId('clear-button')).toBeTruthy()
    expect(queryByTestId('clear-button')).not.toBeNull()
  })

  it('hides clear button when no text', () => {
    const { queryByTestId } = renderComponent({ value: '' })
    
    expect(queryByTestId('clear-button')).toBeNull()
  })

  it('calls onChangeText when clear button is pressed', () => {
    const { getByTestId } = renderComponent({ value: 'test' })
    
    fireEvent.press(getByTestId('clear-button'))
    expect(mockOnChangeText).toHaveBeenCalledWith('')
  })

  it('calls onChangeText when text is entered', () => {
    const { getByTestId } = renderComponent()
    
    fireEvent.changeText(getByTestId('search-input'), 'test')
    expect(mockOnChangeText).toHaveBeenCalledWith('test')
  })
})