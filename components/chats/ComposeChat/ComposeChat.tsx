import React, { useRef, useState } from 'react'
import ComposeChatMessage from './ComposeChatMessage'
import ComposeChatMediaRecorder from './ComposeChatMediaRecorder'

import { flowRight as compose } from 'lodash'
import { inject, observer } from 'mobx-react'
import { CometChat } from '@cometchat/chat-sdk-react-native'
import { ComposeChatProps } from './types'
import { MessageTypeConstants } from '@cometchat/chat-uikit-react-native/src/shared/constants/UIKitConstants'
import { Store } from '@/types'
import { getUnixTimestampInMilliseconds } from '@/utils'
import { CometChatUIEventHandler, MessageEvents, messageStatus } from '@cometchat/chat-uikit-react-native'

const ComposeChat = (props: ComposeChatProps) => {
  const { disableAudio, isBottomSheet, receiverID, receiverType, currentUser, parentMessageId, onSend } = props

  const messageInputRef = useRef<any>(null)
  const plainTextInput = useRef<string>('')
  const typingTimer = useRef<any>(null)

  const [inputMessage, setInputMessage] = useState<string>('')
  const [isRecordingAudio, setIsRecordingAudio] = useState(false)
  const [messagePreview, setMessagePreview] = useState<any>(null)

  function clearInputBox() {
    messageInputRef.current = ''
    setInputMessage('')
  }

  function sendTextMessage() {
    if (messagePreview != null) {
      editMessage(messagePreview.message)
      return
    }

    //     TODO: Add Sanitation for Mentions
    //     const finalTextInput = getRegexString(plainTextInput.current)
    const finalTextInput = plainTextInput.current

    if (finalTextInput.trim().length === 0 || !receiverID) {
      return
    }

    const textMessage: any = new CometChat.TextMessage(receiverID, finalTextInput, receiverType)

    textMessage.setSender(currentUser)
    textMessage.setReceiver(receiverType)
    textMessage.setText(finalTextInput)
    textMessage.setMuid(String(getUnixTimestampInMilliseconds()))

    //     parentMessageId && textMessage.setParentMessageId(parentMessageId as number)

    //     allFormatters.current.forEach((item) => {
    //       textMessage = item.handlePreMessageSend(textMessage)
    //     })

    //     setMentionsSearchData([])
    plainTextInput.current = ''

    clearInputBox()
    onSend?.()

    CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
      message: textMessage,
      status: messageStatus.inprogress,
    })

    //     TODO: User Privacy Settings
    //     if (!disableSoundForMessages) playAudio()

    CometChat.sendMessage(textMessage)
      .then((message: any) => {
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
          message: message,
          status: messageStatus.success,
        })
      })
      .catch((error: any) => {
        console.error('An error occured while sending message: ', error)

        textMessage.data.metaData = { error: true }

        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
          message: textMessage,
          status: messageStatus.error,
        })

        clearInputBox()
      })
  }

  /** edit message */
  const editMessage = (message: any) => {
    endTyping(null, null)

    //     TODO: Group Mentions sanitation
    //     const finalTextInput = getRegexString(plainTextInput.current)
    const finalTextInput = plainTextInput.current

    if (!finalTextInput.trim().length || !receiverID) {
      return
    }

    const messageText = finalTextInput.trim()
    const textMessage = new CometChat.TextMessage(receiverID, messageText, receiverType)
    textMessage.setId(message.id)

    //     parentMessageId && textMessage.setParentMessageId(parentMessageId as number)

    clearInputBox()

    messageInputRef.current.textContent = ''

    setMessagePreview(null)

    //     TODO: Handle User Preferences
    //     if (!disableSoundForMessages) playAudio()

    CometChat.editMessage(textMessage)
      .then((editedMessage: any) => {
        clearInputBox()

        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageEdited, {
          message: editedMessage,
          status: messageStatus.success,
        })
      })
      .catch((error: any) => {
        console.error('An error occurred while editing user: ', error)
      })
  }

  function recordAudioHandler() {
    setIsRecordingAudio(true)
  }

  function closeRecordAudioHandler() {
    setIsRecordingAudio(false)
  }

  function _sendRecordedAudio(recordedFile: string) {
    const fileObj = {
      name: `audio-recording${recordedFile.split('/audio-recording')[1]}`,
      type: 'audio/mp4',
      uri: recordedFile,
    }

    sendMediaMessage(receiverID, fileObj, MessageTypeConstants.audio, receiverType)
  }

  const sendMediaMessage = (_receiverID?: any, messageInput?: any, messageType?: any, _receiverType?: any) => {
    // TODO: Handle Attachments Functionality
    //     setShowActionSheet(false)

    if (!_receiverID || !currentUser) return

    const mediaMessage: CometChat.MediaMessage = new CometChat.MediaMessage(
      _receiverID,
      messageInput,
      messageType,
      _receiverType,
    )

    mediaMessage.setSender(currentUser)
    mediaMessage.setReceiver(_receiverType)
    mediaMessage.setType(messageType)
    mediaMessage.setMuid(String(getUnixTimestampInMilliseconds()))
    mediaMessage.setData({
      type: messageType,
      category: CometChat.CATEGORY_MESSAGE,
      name: messageInput['name'],
      file: messageInput,
      url: messageInput['uri'],
      sender: currentUser,
    })

    if (parentMessageId) {
      mediaMessage.setParentMessageId(parentMessageId as number)
    }

    const localMessage: CometChat.MediaMessage = new CometChat.MediaMessage(
      _receiverID,
      messageInput,
      messageType,
      _receiverType,
    )

    localMessage.setSender(currentUser)
    localMessage.setReceiver(_receiverType)
    localMessage.setType(messageType)
    localMessage.setMuid(String(getUnixTimestampInMilliseconds()))
    localMessage.setData({
      type: messageType,
      category: CometChat.CATEGORY_MESSAGE,
      name: messageInput['name'],
      file: messageInput,
      url: messageInput['uri'],
      sender: currentUser,
    })

    if (parentMessageId) {
      localMessage.setParentMessageId(parentMessageId as number)
    }

    localMessage.setData({
      type: messageType,
      category: CometChat.CATEGORY_MESSAGE,
      name: messageInput['name'],
      file: messageInput,
      url: messageInput['uri'],
      sender: currentUser,
      attachments: [messageInput],
    })

    CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
      message: localMessage,
      status: messageStatus.inprogress,
    })

    //     TODO: Handle User Preferences
    //     if (!disableSoundForMessages) playAudio()

    CometChat.sendMediaMessage(mediaMessage)
      .then((message: any) => {
        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
          message: message,
          status: messageStatus.success,
        })

        closeRecordAudioHandler()
      })
      .catch((error: any) => {
        closeRecordAudioHandler()

        localMessage.data.metaData = { error: true }

        CometChatUIEventHandler.emitMessageEvent(MessageEvents.ccMessageSent, {
          message: localMessage,
          status: messageStatus.error,
        })

        console.error('media message sent error', error)
      })
  }

  const startTyping = (endTypingTimeout?: any, typingMetadata?: any) => {
    // TODO: User Privacy Preferences
    //     if (disableTypingEvents) {
    //       return false
    //     }

    if (typingTimer.current) {
      clearTimeout(typingTimer.current)
      typingTimer.current = undefined
    }

    const metadata = typingMetadata || undefined
    const typingNotification = new CometChat.TypingIndicator(receiverID, receiverType, metadata)

    CometChat.startTyping(typingNotification)

    const typingInterval = endTypingTimeout || 500

    typingTimer.current = setTimeout(() => {
      endTyping(null, typingMetadata)
    }, typingInterval)

    return false
  }

  const endTyping = (event: any, typingMetadata: any) => {
    if (event) {
      event.persist()
    }

    // TODO: User Privacy Preferences
    //     if (disableTypingEvents) {
    //       return false
    //     }

    const metadata = typingMetadata || undefined
    const typingNotification = new CometChat.TypingIndicator(receiverID, receiverType, metadata)

    CometChat.endTyping(typingNotification)

    clearTimeout(typingTimer.current!)
    typingTimer.current = null

    return false
  }

  function changeTextHandler(txt: string) {
    setInputMessage(txt)
    plainTextInput.current = txt

    if (txt.trim().length) {
      startTyping()
    }
  }

  if (isRecordingAudio && !disableAudio) {
    return <ComposeChatMediaRecorder onClose={closeRecordAudioHandler} onSend={_sendRecordedAudio} />
  }

  return (
    <ComposeChatMessage
      inputMessage={inputMessage}
      onSend={sendTextMessage}
      disableAudio={disableAudio}
      isBottomSheet={isBottomSheet}
      onChangeText={changeTextHandler}
      messageInputRef={messageInputRef}
      onRecordMessage={recordAudioHandler}
    />
  )
}

export default compose(
  inject((context: Store) => ({
    currentUser: context.ChatStore.currentUser,
  })),
  observer,
)(ComposeChat)
