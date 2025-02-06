import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SmallTextLight, TitleText } from '@/styles/typography'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { WHITE } from '@/theme/color'
import { Ionicon } from '../common'

type ChatAppBarType = {
  border?: boolean
  marginBottom?: string
}

type SendButtonType = {
  disabled?: boolean
  colors?: []
}

export const ChatScreenWrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.common.backgroundColor};
`

export const ChatConversationWrapper = styled.View`
  flex: 1;
`

export const ChatAppBar = styled.View<ChatAppBarType>`
  width: 100%;
  min-height: 62px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 9px;
  border-bottom-width: ${(props) => (props.border ? '1px' : '0px')};
  border-color: ${(props) => props.theme.chats.appbarBorderColor};
  margin-bottom: ${(props) => props.marginBottom ?? '0px'};
`

export const ChatsAppBarTitle = styled(TitleText)`
  flex: 1;
  text-align: center;
  font-family: 'Poppins-Medium';
  font-size: 17px;
  font-weight: 500;
`

export const ChatsAppBarUser = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 10px;
  align-items: center;
  gap: 8px;
`

export const ChatsAppBarUserAvatar = styled(Image)`
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.chats.iconColor};
`

export const ChatsAppBarUserInfo = styled.View`
  flex: 1;
`

export const ChatsAppBarUserTitle = styled(TitleText)`
  font-family: 'Poppins-Medium';
  font-size: 15px;
  font-weight: 500;
  text-align: left;
`

export const ChatsAppBarUserSubTitle = styled(SmallTextLight)`
  color: ${(props) => props.theme.chats.iconColor};
  text-align: left;
`

export const SearchBar = styled.TouchableOpacity`
  margin: 0 20px 9px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 8px;
  background-color: ${(props) => props.theme.chats.inputColor};
  gap: 8px;
  padding: 6px 0;
`

export const SearchBarTitle = styled(TitleText)`
  font-family: 'Poppins-Regular';
  font-size: 17px;
  color: ${(props) => props.theme.chats.placeholderColor};
`

export const SearchBarIcon = styled(Ionicons)`
  font-size: 16px;
  color: ${(props) => props.theme.chats.placeholderColor};
`

export const IconButton = styled.TouchableOpacity`
  padding: 10px;
`

export const IonIcon = styled(Ionicons)`
  font-size: 28px;
  color: ${(props) => props.theme.chats.iconColor};
`

export const MaterialIcon = styled(MaterialCommunityIcons)`
  font-size: 28px;
  color: ${(props) => props.theme.chats.iconColor};
`

export const GradientIconWrapper = styled(LinearGradient).attrs((props) => {
  //   @ts-ignore
  if (props.disabled) {
    return {
      colors: [props.theme.common.buttonGradientGrayStart, props.theme.common.buttonGradientGrayEnd],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
    }
  } else {
    return {
      colors: [props.theme.common.buttonGradientPurpleStart, props.theme.common.buttonGradientPurpleEnd],
      start: { x: 0, y: 1 },
      end: { x: 1, y: 0 },
    }
  }
})<SendButtonType>`
  height: 40px;
  width: 40px;
  align-content: center;
  justify-content: center;
  border-radius: 40px;
`

export const MicrophoneButtonIcon = styled(MaterialCommunityIcons)`
  font-size: 20px;
  color: ${WHITE};
  text-align: center;
  width: 100%;
`

export const SendButtonIcon = styled(Ionicon)`
  font-size: 20px;
  color: ${WHITE};
  text-align: center;
  width: 100%;
`

export const StopButtonIcon = styled(MaterialIcon)`
  font-size: 20px;
  color: ${WHITE};
  text-align: center;
  width: 100%;
`

export const ButtonWrapper = styled.TouchableOpacity``
