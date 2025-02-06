import React, { useMemo } from 'react'
import i18n from '@/localization/i18n'

import { useTheme } from 'styled-components/native'
import { ComposeChatMessageProps } from './types'
import { ButtonWrapper, MicrophoneButtonIcon, GradientIconWrapper, SendButtonIcon } from '../styledComponents'
import {
  ComposeChatBottomSheetInputField,
  ComposeChatInputField,
  ComposeChatInputFieldContainer,
  ComposeChatWrapper,
  EntypoIcon,
  IconButton,
} from './styles'

const ComposeChatMessage = (props: ComposeChatMessageProps) => {
  const {
    onSend,
    onRecordMessage,
    onChangeText,
    onSelectionChange,
    disableAudio,
    isBottomSheet,
    messageInputRef,
    inputMessage,
  } = props

  const theme = useTheme()

  const InputField = useMemo(() => {
    if (isBottomSheet) {
      return ComposeChatBottomSheetInputField
    }

    return ComposeChatInputField
  }, [isBottomSheet])

  const textChangeHandler = (txt: string) => {
    // let removing = plainTextInput.current.length > txt.length
    // let adding = plainTextInput.current.length < txt.length
    // let textDiff = txt.length - plainTextInput.current.length
    // let notAtLast = selectionPosition.start + textDiff < txt.length

    // plainTextInput.current = txt
    // onChangeText && onChangeText(txt)
    // startTyping()

    // TODO: Mentions functionality for Group chats
    // let decr = 0

    // let newMentionMap = new Map(mentionMap.current)

    // mentionMap.current.forEach((value, key) => {
    //   let position = {
    //     start: parseInt(key.split('_')[0]),
    //     end: parseInt(key.split('_')[1]),
    //   }

    //   //Runs when cursor before the mention and before the last position

    //   if (
    //     notAtLast &&
    //     (selectionPosition.start - 1 <= position.start || selectionPosition.start - textDiff <= position.start)
    //   ) {
    //     if (removing) {
    //       decr = selectionPosition.end - selectionPosition.start - textDiff
    //       position = {
    //         start: position.start - decr,
    //         end: position.end - decr,
    //       }
    //     } else if (adding) {
    //       decr = selectionPosition.end - selectionPosition.start + textDiff
    //       position = {
    //         start: position.start + decr,
    //         end: position.end + decr,
    //       }
    //     }
    //     if (removing || adding) {
    //       let newKey = `${position.start}_${position.end}`
    //       position.start >= 0 && newMentionMap.set(newKey, value)
    //       newMentionMap.delete(key)
    //     }
    //   }

    //   // Code to delete mention from hashmap 👇
    //   let expctedMentionPos = plainTextInput.current.substring(position.start, position.end)

    //   if (expctedMentionPos !== `${value.promptText}`) {
    //     let newKey = `${position.start}_${position.end}`
    //     newMentionMap.delete(newKey)

    //     if (!ifIdExists(value.id, newMentionMap)) {
    //       let targetedFormatter: any = allFormatters.current.get(value.trackingCharacter)
    //       let existingCCUsers = [...targetedFormatter.getSuggestionItems()]
    //       let userPosition = existingCCUsers.findIndex((item: SuggestionItem) => item.id === value.id)
    //       if (userPosition !== -1) {
    //         existingCCUsers.splice(userPosition, 1)
    //         ;(targetedFormatter as CometChatMentionsFormatter).setSuggestionItems(existingCCUsers)
    //       }
    //     }
    //   }
    // })

    // mentionMap.current = newMentionMap

    // TDOO: Mentions Functionality for Groupchats
    // setFormattedInputMessage()

    onChangeText(txt)
  }

  return (
    <ComposeChatWrapper>
      <IconButton>
        <EntypoIcon name='attachment' />
      </IconButton>
      <ComposeChatInputFieldContainer>
        <InputField
          placeholderTextColor={theme.common.inputPlaceholderColor}
          placeholder={i18n.t('chat:messageBoxPlaceholder')}
          onSelectionChange={onSelectionChange}
          onChangeText={textChangeHandler}
          textAlignVertical='top'
          ref={messageInputRef}
          value={inputMessage}
          autoFocus
          multiline
        />

        {/* TODO: Emoji Keyboard */}
        {/* <ButtonWrapper>
          <EntypoIcon name='emoji-happy' />
        </ButtonWrapper> */}
      </ComposeChatInputFieldContainer>

      {inputMessage.trim().length === 0 && !disableAudio ? (
        <ButtonWrapper onPress={onRecordMessage}>
          <GradientIconWrapper>
            <MicrophoneButtonIcon name='microphone' />
          </GradientIconWrapper>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper onPress={onSend} disabled={inputMessage.trim().length === 0}>
          <GradientIconWrapper disabled={inputMessage.trim().length === 0}>
            <SendButtonIcon name='paper-plane' />
          </GradientIconWrapper>
        </ButtonWrapper>
      )}
    </ComposeChatWrapper>
  )
}

export default ComposeChatMessage
