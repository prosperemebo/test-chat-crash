import styled from 'styled-components/native'
import { TextInputMask } from 'react-native-masked-text'
import { StyleSheet } from 'react-native'

export const BirthdayTextInput = styled(TextInputMask)`
    font-size: 15px;
    font-family: 'Poppins-Regular';
    color: ${props => props.theme.common.inputTextColor};
    width: 100%;
`

export const ItemLabel = styled.Text`
  flex: 8;
  font-size: 15px;
  font-family: 'Poppins-Regular';
  margin-left: 0;
  padding-left: 0;
  color: ${props => props.theme.common.serviceTextColor};
`

export const BirthdayButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: ${props => props.theme.common.inputBorderColor};
  background-color: ${props => props.theme.common.inputBackgroundColor};
  width: 100%;
  padding: 15px;
`

export const DateInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${props => props.theme.common.inputBorderColor};
  background-color: ${props => props.theme.common.inputBackgroundColor};
  width: 100%;
  padding: 15px;
  margin-bottom: 5px;
`