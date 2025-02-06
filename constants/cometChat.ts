import { AvatarStyle } from '@cometchat/chat-uikit-react-native/src/shared'
import { nBLACK10, nPURPLE, t76WHITE, WHITE } from '@/theme/color'
import {
  ConversationsStyle,
  ConversationsConfiguration,
} from '@cometchat/chat-uikit-react-native/src/CometChatConversations'
import { MessageComposerConfigurationInterface } from '@cometchat/chat-uikit-react-native'

export const CONVERSATION_LIST_STYLE_CONFIG = new ConversationsStyle({
  borderRadius: 0,
  backgroundColor: nBLACK10,
  separatorColor: 'red',
})

export const CONVERSATION_LIST_CONFIG = new ConversationsConfiguration({
  conversationsStyle: CONVERSATION_LIST_STYLE_CONFIG,
  hideSeparator: true,
  avatarStyle: new AvatarStyle({
    height: 55,
    width: 55,
  }),
  listItemStyle: {
    height: 78,
    titleFont: {
      fontFamily: 'Poppins-Medium',
      fontSize: 15,
      fontWeight: '500',
    },
    border: {
      borderColor: '#33353B',
      borderWidth: 1,
    },
  },
  dateStyle: {
    textColor: '#858995',
    textFont: {
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      fontWeight: '400',
    },
  },
})

export const MESSAGE_COMPOSER_CONFIG: MessageComposerConfigurationInterface = {
  messageComposerStyle: {
    backgroundColor: nBLACK10,
    borderRadius: 0,
    inputBackground: nBLACK10,
    dividerTint: '#57585B',
    actionSheetTitleFont: {
      fontFamily: 'Poppins-Regular',
    },
    actionSheetTitleColor: WHITE,
    actionSheetLayoutModeIconTint: nPURPLE,
    attachIconTint: t76WHITE,
    actionSheetSeparatorTint: '#57585B',
  },
}
