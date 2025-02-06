import { useTheme } from 'styled-components/native'
import { ViewStyle, TextStyle } from 'react-native'

export const useDropdownStyles = () => {
  const theme = useTheme()

  return {
    placeholderStyle: {
      color: theme.common.inputPlaceholderColor,
      fontSize: 18,
    } as TextStyle,

    selectedTextStyle: {
      color: theme.common.inputTextColor,
      fontSize: 18,
    } as TextStyle,

    containerStyle: {
      backgroundColor: theme.common.inputBackgroundColor,
      borderRadius: 12,
      borderColor: theme.auth.dividerColor,
      marginTop: 0,
      overflow: 'hidden',
      zIndex: 1000,
      maxHeight: 140,
    } as ViewStyle,

    itemContainerStyle: {
      borderRadius: 10,
      backgroundColor: 'transparent',
      padding: 12,
    } as ViewStyle,

    selectedStyle: {
      backgroundColor: theme.secondaryBg,
    } as ViewStyle,
  }
}