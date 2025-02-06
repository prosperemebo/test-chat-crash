import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

export const Container = styled.View`
    flex: 1;
`

export const TextWrapper = styled.View`
  padding-vertical: 17px;
  align-items: center;
  borderBottomWidth: ${StyleSheet.hairlineWidth};
  borderBottomColor: ${props => props.theme.other.updateApp.textBorderColor};
`

export const Text = styled.Text`
  width: 90%;
  color: ${props => props.theme.other.updateApp.textColor};
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  white-space: pre-line;
`

export const ButtonsBlock = styled.View`
  height: 44px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  width: 50%;
`
export const ButtonText = styled.Text`
  color: ${props => props.theme.other.updateApp.buttonTextColor};
  text-align: center;
  font-family: 'Poppins-Regular';
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
`