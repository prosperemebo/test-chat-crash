import { CometChat } from '@cometchat/chat-sdk-react-native'
import { RefObject } from 'react'
import { NativeSyntheticEvent, TextInputSelectionChangeEventData } from 'react-native'

export interface ComposeChatMessageProps {
  onSend: () => void
  onRecordMessage: () => void
  disableAudio?: boolean
  isBottomSheet?: boolean
  onChangeText: (arg0: string) => void
  onSelectionChange?: (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => void
  messageInputRef?: RefObject<any>
  inputMessage: string
}

export interface ComposeChatMediaRecorderProps {
  shouldShow?: boolean
  onClose?: () => void
  options?: any[]
  onPause?: () => void
  onPlay?: () => void
  onSend?: (recordedFile: string) => void
  onStop?: (recordedFile: string) => void
  onStart?: () => void
}

export interface ComposeChatProps {
  disableAudio?: boolean
  isBottomSheet?: boolean
  receiverID?: string
  receiverType: typeof CometChat.RECEIVER_TYPE.USER | typeof CometChat.RECEIVER_TYPE.GROUP
  currentUser: CometChat.User
  parentMessageId?: string | number
  onSend?: () => void
}

export interface ComposeChatModalProps {
  receiverID?: string
  receiverType: typeof CometChat.RECEIVER_TYPE.USER | typeof CometChat.RECEIVER_TYPE.GROUP
  onSend?: () => void
}
