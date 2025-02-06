import styled from 'styled-components/native'
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'

type ButtonType = {
  color?: string
}

type IconType = {
  iconColor?: string
  size?: number
  padding?: number
  color?: number
}

type ImageIconWrapperType = {
  size?: number
  padding?: number
}

export const BlurIconButton = styled.TouchableOpacity<ButtonType>`
  border-radius: 40px;
  ${props => props.color ? `background-color: ${props.color};` : ''}
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const BlurIconButtonWrapper = styled.View`
  border-radius: 60px;
  overflow: hidden;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
`

export const MaterialIcon = styled(MaterialCommunityIcon) <IconType>`
  color: ${props => props.iconColor || props.theme.common.iconButtonColor};
  font-size: ${props => props.size || '27'}px;
  padding: ${props => typeof props.padding === 'number' ? props.padding : 10}px;
  ${props => props.color ? `background-color: ${props.color};` : ''}
  position: absolute;
`

export const BlurBlock = styled(BlurView)`
    height: 100%;
    width: 100%;
`

export const ImageIconWrapper = styled.View<ImageIconWrapperType>`
  height: ${props => props.size || '27'}px;
  width: ${props => props.size || '27'}px;
  padding: ${props => props.padding || 10}px;
  position: absolute;
`

export const ImageIcon = styled(Image)`
  height: 100%;
  width: 100%;
`

export const ActionBadge = styled.View`
  position: absolute;
  right: 5px;
  z-index: 10;
  height: 7px;
  width: 7px;
  background-color: ${props => props.theme.common.inputTextError};
  border-radius: 5px;
`
