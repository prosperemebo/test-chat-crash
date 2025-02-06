import styled from 'styled-components/native'
import { GrayButtonProps } from './types'
import { TouchableOpacity } from 'react-native'
import { BlurView } from 'expo-blur'

export const ScreenBody = styled.ScrollView.attrs(() => ({
  contentContainerStyle: { flexGrow: 1 },
}))`
  flex: 1;
`

export const HeaderContent = styled.View`
  position: absolute;
  width: 100%;
  z-index: 1;
  padding: 16px;
  pointer-events: box-none;
`

export const FilterButton = styled(TouchableOpacity)`
  overflow: hidden;
  width: 48px;
  height: 48px;
  align-self: flex-end;
`

export const BlurContainer = styled(BlurView)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  overflow: hidden;
`

export const MessageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 20px;
`

export const MessageHeader = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  font-size: 20px;
  margin-bottom: 10px;
`

export const Message = styled.Text`
  color: ${props => props.theme.secondaryTextColor};
  font-size: 16px;
  text-align: center;
`

export const GrayButton = styled.TouchableOpacity<GrayButtonProps>`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.secondaryBg};
  width: ${props => (props.buttonWidth ? props.buttonWidth + 'px' : 'auto')};
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
  margin: 5px;
  border-radius: 35px;
`

export const GrayButtonLabel = styled.Text`
  color: ${props => props.theme.common.serviceTextColor};
  font-size: 16px;
  font-weight: bold;
  padding-vertical: 10px;
  padding-horizontal: 16px;
`