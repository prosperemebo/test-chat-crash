import { useState } from 'react'
import { useTheme } from 'styled-components/native'
import { Container, StyledIcon, StyledIconN, StyledTextInput, ErrorLabel, ToggleButton } from './styles'
import { InputProps } from './types'
import { TextInputProps } from 'react-native'


const Input = (props: InputProps) => {
  const { error, iconName, type = 'general', value, onChangeText, placeholder, ...other } = props
  const theme = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const renderIcon = () => {
    switch (iconName) {
      case 'key':
      case 'envelope': {
        return <StyledIcon name={iconName} isError={!!error} />
      }
      case 'unlocked': {
        return <StyledIconN name={iconName} isError={!!error} />
      }
      default: return null
    }
  }

  const getExtraProps = (): TextInputProps => {
    if (type === 'email') {
      return {
        textContentType: 'emailAddress',
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        autoCorrect: false,
      }
    }

    if (type === 'password') {
      return {
        secureTextEntry: !showPassword,
        textContentType: 'password',
        autoCapitalize: 'none',
        autoCorrect: false,
      }
    }

    if (type === 'username') {
      return {
        autoCapitalize: 'none',
        autoCorrect: false,
        underlineColorAndroid: 'rgba(0, 0, 0, 0)',
        maxLength: 50,
      }
    }

    return {}
  }

  return <>
    <Container showError={!!error}>
      {renderIcon()}
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        placeholderTextColor={theme.common.inputPlaceholderColor}
        {...getExtraProps()}
        {...other}
      />
      {type === 'password' && <ToggleButton onPress={togglePassword}>
        <StyledIcon name={showPassword ? 'eye' : 'eye-slash'} isError={false} />
      </ToggleButton>
      }
    </Container>
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </>
}

export default Input