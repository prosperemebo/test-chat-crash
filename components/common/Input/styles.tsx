import React from "react"
import styled, { css } from "styled-components/native"
import { StyleSheet, TextInput } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Fontisto from '@expo/vector-icons/Fontisto'

type StyledIconProps = {
  isError: boolean
}

type ContainerProps = {
  showError: boolean
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth};
  border-color: ${(props) => props.theme.common.inputBorderColor};
  background-color: ${(props) => props.theme.common.inputBackgroundColor};
  ${props => {
  if (props.showError)
    return css`
        border-color: ${(props) => props.theme.common.inputErrorBorderColor};
      `
}}
  padding-vertical: 10px;
`

export const StyledIcon = styled(FontAwesome)<StyledIconProps>`
    font-size: 20px;
    color: ${props => (props.isError ? props.theme.common.inputTextError : props.theme.common.inputIconColor)};
    margin-right: 10px;
`

export const StyledIconN = styled(Fontisto)<StyledIconProps>`
    font-size: 20px;
    color: ${props => (props.isError ? props.theme.common.inputTextError : props.theme.common.inputIconColor)};
    margin-right: 10px;
`

export const StyledTextInput = styled(TextInput)`
    color: ${props => props.theme.common.inputTextColor};
    flex: 1;
    padding: 0;
    font-size: 14px;
    height: 32px;
    font-family: 'Poppins-Regular';
`

export const ErrorLabel = styled.Text`
  color: ${props => props.theme.common.inputTextError};
  font-size: 14px;
  font-family: 'Poppins-Regular';
  position: relative;
  margin-bottom: 5px;
`

export const ToggleButton = styled.TouchableOpacity``