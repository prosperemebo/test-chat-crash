import styled, { css } from 'styled-components/native'
import { Platform, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { InputContainerProps, InputFieldProps, InputIconProps } from './types'

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: ${props => props.theme.tGRAY20};
  background-color: ${props => props.theme.secondaryBg};
  ${props =>
    props.showError &&
    css`
      border-color: ${props => props.theme.inputErrorBorderColor};
    `}
  padding-vertical: 10px;
  margin: 10px 0;
  margin-bottom: ${props => (props.addBottom ? 10 : 0)}px;
`

export const InputField = styled.TextInput<InputFieldProps>`
  color: ${props => props.theme.primaryTextColor};
  flex: 1;
  padding: 0;
  font-size: 14px;
  height: 32px;
  font-family: 'Poppins-Regular';
  margin-bottom: ${props => (props.margin ? 10 : 0)}px;
  height: ${props => (props.multiline && Platform.OS !== 'android' ? '120px' : 'null')};
`

export const InputIcon = styled(FontAwesome) <InputIconProps>`
  font-size: 20px;
  color: ${props => (props.isError ? props.theme.common.inputTextError : props.theme.common.infoTextColor)};
  margin-right: 10px;
`

export const InputIcon5 = styled(FontAwesome5Icon)`
  font-size: 20px;
  color: ${props => props.theme.common.infoTextColor};
  margin-right: 10px;
`