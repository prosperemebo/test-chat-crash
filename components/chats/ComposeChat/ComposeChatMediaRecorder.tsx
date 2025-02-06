import React from 'react'
import { ComposeChatMediaRecorderProps } from './types'
import { ComposeChatWrapper } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { CometChatMediaRecorder } from '../CometChat/CometChatMediaRecorder'


const ComposeChatMediaRecorder = (props: ComposeChatMediaRecorderProps) => {
  const { bottom } = useSafeAreaInsets()

  const {
    onClose = () => {},
    onPause = () => {},
    onPlay = () => {},
    onSend = (recordedFile: String) => {},
    onStop = (recordedFile: String) => {},
    onStart = () => {},
  } = props

  return (
    <ComposeChatWrapper bottomInset={bottom * 2}>
      <CometChatMediaRecorder
        onClose={onClose}
        onPause={onPause}
        onPlay={onPlay}
        onSend={onSend}
        onStop={onStop}
        onStart={onStart}
      />
    </ComposeChatWrapper>
  )
}

export default ComposeChatMediaRecorder
