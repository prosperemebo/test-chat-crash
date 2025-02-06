import React, { useEffect, useMemo, useRef, useState } from 'react'
import i18n from '@/localization/i18n'

import { KeyboardAvoidingView, Platform } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ActivityIndicator, CenterWrapper, PageContainer } from '@/components/common'

import { nBLACK40, nPURPLE } from '@/theme/color'
import {
  ChatAppBar,
  IconButton,
  MaterialIcon,
  ChatsAppBarUser,
  ChatScreenWrapper,
  ChatsAppBarUserInfo,
  ChatsAppBarUserTitle,
  ChatsAppBarUserAvatar,
  ChatsAppBarUserSubTitle,
  ChatConversationWrapper,
} from '@/components/chats/styledComponents'

/**
 * All code commented in this code prevents the expo-router decode error
 * We believe that cometchat-uikit causes this error
 */

// import {
//     CometChatMessageList,
//     CometChatContextProvider,
//     MessageListStyleInterface,
//   } from '@cometchat/chat-uikit-react-native'
//   import { listners } from '@cometchat/chat-uikit-react-native/src/CometChatMessageHeader/listners'
//   import { useCometChatTheme } from '@/hooks/useCometChatTheme'
// import ComposeChat from '@/components/chats/ComposeChat'
// import { CometChat } from '@cometchat/chat-sdk-react-native'

const Conversation = () => {
  const { conversationWith, conversationType, conversationTitle, conversationAvatar, conversationStatus } =
    useLocalSearchParams()

  // const conversation = useRef<CometChat.Conversation | any>(null)
  // const userStatusListenerId = useRef<string>(`user_status_${new Date().getTime()}`)
  // const messsageTypingListenerId = useRef<string>(`message_typing_${new Date().getTime()}`)
  // const cometChatTheme = useCometChatTheme()
  // const [isLoading, setIsLoading] = useState<boolean>(true)

  const user = useRef<CometChat.User | null>(null)
  const router = useRouter()
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [userStatus, setUserStatus] = useState<string>('')

  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const _user = await CometChat.getUser(conversationWith as string)
  //       const _conversation = await CometChat.getConversation(conversationWith as string, conversationType as string)

  //       user.current = _user
  //       conversation.current = _conversation

  //       setUserStatus(_user.getStatus() || '')
  //       setIsLoading(false)
  //     } catch (err: any) {
  //       // TODO: HANDLE ERRORS
  //       console.error('An Error occurred while loading chats', err)
  //     }
  //   }

  //   init()
  // }, [conversationType, conversationWith])

  // useEffect(() => {
  //   setUserStatus(user.current?.getStatus() || '')
  // }, [user.current])

  // useEffect(() => {
  //   if (user.current) {
  //     listners.addListener.userListener({
  //       userStatusListenerId: userStatusListenerId.current,
  //       handleUserStatus,
  //     })
  //   }

  //   listners.addListener.messageListener({
  //     msgTypingListenerId: messsageTypingListenerId.current,
  //     msgTypingIndicator: typingIndicatorHandler,
  //   })

  //   return () => {
  //     if (user.current) {
  //       listners.removeListner.removeUserListener({ userStatusListenerId })
  //     }

  //     listners.removeListner.removeMessageListener({ msgTypingListenerId: messsageTypingListenerId })
  //   }
  // }, [])

  // const conversationWithData = useMemo(() => {
  //   if (conversationType === CometChat.RECEIVER_TYPE.USER) {
  //     return { user: conversation.current?.['conversationWith'] as CometChat.User, group: undefined }
  //   }

  //   if (conversationType === CometChat.RECEIVER_TYPE.GROUP) {
  //     return { user: undefined, group: conversation.current?.['conversationWith'] as CometChat.Group }
  //   }

  //   return { user: undefined, group: undefined }
  // }, [conversationType, conversation.current])

  const goBack = () => {
    if (!router.canGoBack()) return

    router.back()
  }

  const handleUserStatus = (userDetails: any) => {
    if (userDetails.uid === user.current?.getUid()) setUserStatus(userDetails.status)
  }

  const typingIndicatorHandler = (typist: any, status: string) => {
    setIsTyping(status === 'typing')
  }

  const messagesConfig: any = {
    backgroundColor: nBLACK40,
  }

  return (
    <ChatScreenWrapper>
      <PageContainer>
        <ChatAppBar border={true}>
          <IconButton onPress={goBack}>
            <MaterialIcon name='arrow-u-left-top' />
          </IconButton>
          <ChatsAppBarUser>
            <ChatsAppBarUserAvatar source={{ uri: conversationAvatar }} />
            <ChatsAppBarUserInfo>
              <ChatsAppBarUserTitle numberOfLines={1}>{conversationTitle}</ChatsAppBarUserTitle>
              <ChatsAppBarUserSubTitle>
                {isTyping ? i18n.t('chat:typing') : userStatus || conversationStatus}
              </ChatsAppBarUserSubTitle>
            </ChatsAppBarUserInfo>
          </ChatsAppBarUser>
          <IconButton>
            <MaterialIcon name='phone' />
          </IconButton>
          <IconButton>
            <MaterialIcon name='dots-vertical' />
          </IconButton>
        </ChatAppBar>

        {/* {isLoading || (!conversationWithData.group && !conversationWithData.user) ? (
          <CenterWrapper {...messagesConfig}>
            <ActivityIndicator size='large' color={nPURPLE} />
          </CenterWrapper>
        ) : (
          <ChatConversationWrapper>
            <CometChatContextProvider theme={cometChatTheme}>
              <CometChatMessageList
                user={conversationWithData.user}
                group={conversationWithData.group}
                messageListStyle={messagesConfig}
              />
            </CometChatContextProvider>
          </ChatConversationWrapper>
        )}
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ComposeChat receiverID={user.current?.getUid()} receiverType={CometChat.RECEIVER_TYPE.USER} />
        </KeyboardAvoidingView> */}
      </PageContainer>
    </ChatScreenWrapper>
  )
}

export default Conversation
