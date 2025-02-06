import React, { useEffect, useRef, useState } from 'react'
import { Dimensions } from 'react-native'
import {
  BlurContainer,
  FilterButton,
  MessageHeader,
  HeaderContent,
  Message,
  MessageContainer,
  ScreenBody,
} from './styles'
import UserProfile from '../UserProfile/UserProfile'
import { MatchesInfoBodyProps } from './types'
import analytics from '@/services/analytics'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Store } from '@/types'
import { Loader } from '@/components/common'
import i18n from '@/localization/i18n'
import GradientButton from '@/components/common/GradientButton'
import Icon from '@expo/vector-icons/Ionicons'
import { ComposeChatModal, ComposeChatModalRef } from '@/components/chats/ComposeChat'
import { CometChat } from '@cometchat/chat-sdk-react-native'
import { useRouter } from 'expo-router'

const { width } = Dimensions.get('window')

const MatchesInfoBody: React.FC<MatchesInfoBodyProps> = ({
  handleModalOpen,
  getMatches,
  matches,
  isRequestRunning,
  resetMatchFilters,
  skipMatch,
}) => {
  const router = useRouter()

  const composeChat = useRef<ComposeChatModalRef>(null)

  const [connectionUserId, setConnectionUserId] = useState<string | null>(null)

  useEffect(() => {
    analytics.matches.navigationMatches()
    getMatches()
  }, [])

  function connectHandler(userId: string) {
    composeChat.current?.present()
    setConnectionUserId(userId)
  }

  function onConnect() {
    if (!connectionUserId) return

    composeChat.current?.dismiss()

    const currentMatch = matches[0]

    router.push({
      pathname: '/(app)/chats/conversation',
      params: {
        conversationType: CometChat.RECEIVER_TYPE.USER,
        conversationWith: connectionUserId,
        conversationTitle: currentMatch.username,
        conversationAvatar: currentMatch.avatar,
        conversationStatus: '',
      },
    })
  }

  return (
    <ScreenBody>
      <HeaderContent style={{ pointerEvents: 'box-none' }}>
        <FilterButton onPress={handleModalOpen}>
          <BlurContainer intensity={20} tint='dark'>
            <Icon name='filter' size={24} color='#fff' />
          </BlurContainer>
        </FilterButton>
      </HeaderContent>
      {isRequestRunning ? (
        <Loader />
      ) : matches.length > 0 ? (
        <UserProfile {...matches[0]} onSkip={skipMatch} onConnect={connectHandler} />
      ) : (
        <MessageContainer>
          <MessageHeader>{i18n.t('matches:noMatchesHeader')}</MessageHeader>
          <Message>{i18n.t('matches:noMatchesText')}</Message>
          <GradientButton onPress={resetMatchFilters} width={width * 0.7} buttonText={i18n.t('matches:resetFilters')} />
        </MessageContainer>
      )}

      <ComposeChatModal
        ref={composeChat}
        receiverType={CometChat.RECEIVER_TYPE.USER}
        receiverID={connectionUserId!}
        onSend={onConnect}
      />
    </ScreenBody>
  )
}

export default compose(
  inject((context: Store) => ({
    getMatches: context.MatchesStore.getMatches,
    matches: context.MatchesStore.matches,
    isRequestRunning: context.MatchesStore.isRequestRunning,
    resetMatchFilters: context.MatchesStore.resetMatchFilters,
    skipMatch: context.MatchesStore.skipMatch,
  })),
)(MatchesInfoBody)
