import styled, { css } from 'styled-components/native'
import { TooltipText } from '@/styles/typography'
import { Image } from 'expo-image'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ChipWrapperProps, IconProps, LabelProps } from './types'


export const ChipWrapper = styled.TouchableOpacity<ChipWrapperProps>`
  background-color: ${props => props.color || props.theme.headerBorderColor};
  padding: 2px 8px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${props => {
    if (props.large) {
      return css`
        padding: 6px 12px;
        border-radius: 5px;
      `
    } else if (props.medium) {
      return css`
        padding: 3px 8px;
      `
    }
  }}

  ${props => {
    if (props.shape === 'leaf') {
      return css`
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
      `
    } else if (props.shape === 'pill') {
      return css`
        border-radius: 30px;
      `
    } else {
      return css`
        border-radius: 10px;
      `
    }
  }}

  ${props =>
    props.onPress &&
    css`
      background-color: ${props.color || props.theme.secondaryBgLight};
      border-color: ${props.theme.secondaryBgLight};
      border-width: 1.5px;
      padding: 6px 12px;
      border-radius: 10px;
      min-width: ${props.width || '70px'};
    `}
`

export const ChipIconFastImage = styled(Image)`
  height: 15px;
  width: 15px;
  resize-mode: contain;
`

export const ChipIconImage = styled.Image`
  height: 12px;
  width: 12px;
  resize-mode: contain;
`

export const MaterialIcon = styled(Icon) <IconProps>`
  color: ${props => props.iconColor || props.theme.primaryTextColor};
  font-size: ${props => props.size || '16'}px;
  margin-right: ${props => (props.label ? '5px' : '0px')};
`

export const Ionicon = styled(Ionicons) <IconProps>`
  color: ${props => props.iconColor || props.theme.primaryTextColor};
  font-size: ${props => props.size || '16'}px;
  margin-right: ${props => (props.label ? '5px' : '0px')};
`

export const Label = styled(TooltipText) <LabelProps>`
  padding: 0 4px;

  ${props =>
    props.large &&
    css`
      color: ${props.textColor || props.theme.primaryTextColor};
      font-size: 13px;
      text-transform: capitalize;
      letter-spacing: 0.12px;
    `}
`
