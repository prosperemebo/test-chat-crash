import styled from 'styled-components/native'
import { Animated, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

export const StyledDropdown = styled.View`
  background-color: ${props => props.theme.common.inputBackgroundColor};
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border-color: ${props => props.theme.auth.dividerColor};
  border-width: 1px;
`

export const AnimatedItemContainer = styled(Animated.View)`
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ItemLabel = styled.Text<{ isSelected: boolean }>`
  font-size: 16px;
  color: ${props => props.isSelected ? props.theme.common.gradientButtonColorStart : props.theme.common.inputTextColor};
  font-family: ${props => props.isSelected ? 'Poppins-Bold' : 'Poppins-Regular'};
`

export const CheckIcon = styled(Icon)`
  font-size: 20px;
  color: ${props => props.theme.common.gradientButtonColorStart};
`

export const TagContainer = styled.View`
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 350px;
  gap: 8px;
`

export const TagText = styled.Text`
  color: ${props => props.theme.common.inputTextColor};
  font-size: 16px;
  margin-right: 4px;
`

export const AnimatedTag = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.common.selectedItemBackgroundColor};
  padding: 4px 8px;
  border-radius: 10px;
  border-color:  ${props => props.theme.common.gradientButtonColorStart};
  border-width: 1px;
`

export const CloseButton = styled(TouchableOpacity)`
  margin-left: 4px;
`

export const AnimatedSingleValue = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
`

export const SingleValueText = styled.Text`
  color: ${props => props.theme.common.inputTextColor};
  font-size: 18px;
`

export const AnimatedChevronIcon = styled(Icon)`
  color: ${props => props.theme.common.gradientButtonColorStart};
  font-size: 20px;
`

export const CloseIcon = styled(Icon)`
  color: ${props => props.theme.common.gradientButtonColorStart};
  font-size: 18px;
`