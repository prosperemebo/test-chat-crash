import { useRef, useEffect } from 'react'
import { Animated, TouchableOpacity } from 'react-native'
import { Container, IconWrapper, SearchIcon, StyledTextInput, ClearIcon } from './styles'

interface Props {
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
}

const SearchInput = ({ value, onChangeText, placeholder }: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [])

  const handleClear = () => {
    onChangeText('')
  }

  return (
    <Container style={{ opacity: animatedValue }}>
      <IconWrapper>
        <SearchIcon name="search1" />
      </IconWrapper>
      <StyledTextInput
        testID="search-input"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8791a5"
        autoCapitalize="none"
      />
      {value.length > 0 && (
        <TouchableOpacity testID="clear-button" onPress={handleClear}>
          <ClearIcon name="close" />
        </TouchableOpacity>
      )}
    </Container>
  )
}

export default SearchInput