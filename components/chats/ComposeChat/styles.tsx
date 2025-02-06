import { Entypo } from '@expo/vector-icons'
import { BottomSheetTextInput, BottomSheetView } from '@gorhom/bottom-sheet'

import styled from 'styled-components/native'

type CompostChatWrapperType = {
  bottomInset?: number
}

export const ComposeChatBottomSheetModalWrapper = styled(BottomSheetView)`
  background-color: ${(props) => props.theme.chats.backgroundColor};
`

export const ComposeChatWrapper = styled.View<CompostChatWrapperType>`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  padding: 12px 8px ${(props) => props.bottomInset || 12}px;
  border-top-color: ${(props) => props.theme.chats.appbarBorderColor};
  background-color: ${(props) => props.theme.chats.backgroundColor};
`

export const ComposeChatInputFieldContainer = styled.View`
  flex-direction: row;
  padding: 8px 8px 8px 18px;
  background-color: ${(props) => props.theme.chats.inputColor};
  flex: 1;
  align-items: center;
  border-radius: 70px;
  margin-right: 8px;
`

export const ComposeChatBottomSheetInputField = styled(BottomSheetTextInput)`
  color: ${(props) => props.theme.primaryTextColor};
  flex: 1;
  padding: 0;
  font-size: 15px;
  font-family: 'Poppins-Regular';
`

export const ComposeChatInputField = styled.TextInput`
  color: ${(props) => props.theme.primaryTextColor};
  flex: 1;
  padding: 0;
  font-size: 15px;
  font-family: 'Poppins-Regular';
`

export const IconButton = styled.TouchableOpacity`
  padding: 10px;
`

export const EntypoIcon = styled(Entypo)`
  font-size: 28px;
  color: ${(props) => props.theme.chats.iconColor};
`
