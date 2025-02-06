import styled from 'styled-components/native'
import { Animated } from 'react-native'
import AntIcon from '@expo/vector-icons/AntDesign'

export const Container = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.common.inputBackgroundColor};
  border-radius: 12px;
  margin: 10px 21px;
  height: 46px;
  padding-horizontal: 15px;
  border-width: 1px;
  border-color: ${props => props.theme.common.inputBorderColor};
`

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const SearchIcon = styled(AntIcon)`
  font-size: 20px;
  color: ${props => props.theme.common.inputIconColor};
`

export const ClearIcon = styled(AntIcon)`
  font-size: 18px;
  color: ${props => props.theme.common.inputIconColor};
  margin-left: 10px;
  opacity: 0.7;
`

export const StyledTextInput = styled.TextInput`
  flex: 1;
  color: ${props => props.theme.common.inputTextColor};
  font-family: 'Poppins-Regular';
  font-size: 14px;
  padding: 0;
`