import React, { useEffect, useState } from 'react'
import TokenTestButtons from '@/components/TokenTestButtons'
import compose from 'lodash/flowRight'
import i18n from '@/localization/i18n'

import { Text } from 'react-native'
import { inject } from 'mobx-react'
import { nPURPLE } from '@/theme/color'
import { useRouter } from 'expo-router'
import { LogoutButton, LogoutText } from '../../common/styles'
import { ActivityIndicator, CenterWrapper, PageContainer } from '@/components/common'

import {
  SearchBar,
  ChatAppBar,
  SearchBarIcon,
  SearchBarTitle,
  ChatsAppBarTitle,
  ChatScreenWrapper,
  ChatConversationWrapper,
} from '@/components/chats/styledComponents'

// TODO: STEP 1: UNCOMMENT LINE 24 - 27
// import { CometChatContextProvider } from '@cometchat/chat-uikit-react-native/src/shared'
// import { CometChatConversations } from '@cometchat/chat-uikit-react-native/src/CometChatConversations'
// import { CONVERSATION_LIST_CONFIG } from '@/constants/cometChat'
// import { CometChatService } from '@/services/CometChat'

const Chat = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  // TODO: STEP 2: UNCOMMENT LINE 36 - 53
  // useEffect(() => {
  //   const init = async () => {
  //     try {
  //       const loggedInUser = await CometChatService.init()

  //       if (!loggedInUser) {
  //         throw Error('Failed to authenticate user')
  //       }

  //       setIsAuthenticated(Boolean(loggedInUser))
  //       setIsLoading(false)
  //     } catch (err: any) {
  //       console.error('Error occurred while loading chats:', err)
  //     }
  //   }

  //   init()
  // }, [])

  const conversationPressHandler = (conversation: any) => {
    const conversationWith: any = conversation.getConversationWith()

    router.push({
      pathname: '/(app)/chats/conversation',
      params: {
        conversationType: conversation.getConversationType(),
        conversationWith: (conversationWith as any)['uid'],
        conversationTitle: (conversationWith as any)['name'],
        conversationAvatar: (conversationWith as any)['avatar'],
        conversationStatus: (conversationWith as any)['status'],
      },
    })
  }

  const handleLogout = async () => {
    router.replace('/')
  }

  // TODO: CHAT LOADING STATE
  if (isLoading) {
    return (
      <PageContainer>
        <CenterWrapper>
          <ActivityIndicator size='large' color={nPURPLE} />
        </CenterWrapper>
      </PageContainer>
    )
  }

  // TODO: CHAT ERROR
  if (!isAuthenticated) {
    return (
      <PageContainer>
        <Text>An error occurred while loading chats!</Text>
        <LogoutButton onPress={handleLogout}>
          <LogoutText>Leave</LogoutText>
        </LogoutButton>
        <TokenTestButtons />
      </PageContainer>
    )
  }

  return (
    <ChatScreenWrapper>
      <PageContainer>
        <ChatAppBar>
          <ChatsAppBarTitle>{i18n.t('connections:connectionsTitle')}</ChatsAppBarTitle>
        </ChatAppBar>
        <SearchBar>
          <SearchBarIcon name='search' />
          <SearchBarTitle>Search friends and chats</SearchBarTitle>
        </SearchBar>
        <ChatConversationWrapper>

          // TODO: STEP 3: UNCOMMENT LINE 111 - 113
          {/* <CometChatContextProvider>
            <CometChatConversations title='' onItemPress={conversationPressHandler} {...CONVERSATION_LIST_CONFIG} />
          </CometChatContextProvider> */}

        </ChatConversationWrapper>
      </PageContainer>
    </ChatScreenWrapper>
  )
}

export default compose(
  inject((context: any) => ({
    currentUser: context.ChatStore.currentUser,
    setCurrentChatUser: context.ChatStore.setCurrentUser,
  })),
)(Chat)