//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  GROUPCHAT_SAVE_PRESSED: 'GROUPCHAT_SAVE_PRESSED',
  GROUPCHAT_DELETE_PRESSED: 'GROUPCHAT_DELETE_PRESSED',
  GROUP_CHAT_CREATING_OPENED: 'GROUP_CHAT_CREATING_OPENED',
  SEARCH_MEMBERS_FOR_GROUP_CHAT_OPENED: 'SEARCH_MEMBERS_FOR_GROUP_CHAT_OPENED',
  INVITE_FRIENDS_TO_GROUP_CHAT_PRESSED: 'INVITE_FRIENDS_TO_GROUP_CHAT_PRESSED',
  INVITE_FRIENDS_TO_GROUP_CHAT_FROM_OUTSIDE_PRESSED: 'INVITE_FRIENDS_TO_GROUP_CHAT_FROM_OUTSIDE_PRESSED',
  LEAVE_GROUP_CHAT: 'LEAVE_GROUP_CHAT',
  DELETE_GROUP_CHAT: 'DELETE_GROUP_CHAT',
  RESTORE_GROUP_CHAT: 'RESTORE_GROUP_CHAT',
  REJOIN_GROUP_CHAT: 'REJOIN_GROUP_CHAT',
  PUBLIC_CHAT_JOIN_PRESSED: 'PUBLIC_CHAT_JOIN_PRESSED',
  PUBLIC_CHAT_LEAVE_PRESSED: 'PUBLIC_CHAT_LEAVE_PRESSED',
  PUBLIC_CHAT_RESTORE_PRESSED: 'PUBLIC_CHAT_RESTORE_PRESSED',
  KICK_USER_FROM_GROUP_CHAT: 'KICK_USER_FROM_GROUP_CHAT',
  CREATE_SESSION_PRESSED: 'CREATE_SESSION_PRESSED',
  START_CHAT_SESSION_REPLAY: 'START_CHAT_SESSION_REPLAY',
  END_CHAT_SESSION_REPLAY: 'END_CHAT_SESSION_REPLAY',
}

export default function (amplitude) {
  return {
    savePressed(id) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GROUPCHAT_SAVE_PRESSED, { id })
    },
    deletePressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GROUPCHAT_DELETE_PRESSED)
    },
    creatingOpened() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GROUP_CHAT_CREATING_OPENED)
    },
    searchMembersChatOpened() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SEARCH_MEMBERS_FOR_GROUP_CHAT_OPENED)
    },
    addFriendsPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.INVITE_FRIENDS_TO_GROUP_CHAT_PRESSED)
    },
    inviteFriendsFromOutsidePressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.INVITE_FRIENDS_TO_GROUP_CHAT_FROM_OUTSIDE_PRESSED)
    },
    leavePressed(id) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.LEAVE_GROUP_CHAT, { id })
    },
    deleteGroupChatPressed(id) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.DELETE_GROUP_CHAT, { id })
    },
    restoreGroupChat(id) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RESTORE_GROUP_CHAT, { id })
    },
    rejoinGroupChat(id) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REJOIN_GROUP_CHAT, { id })
    },
    publicChatJoinPressed(id, name) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PUBLIC_CHAT_JOIN_PRESSED, { id, name })
    },
    publicChatLeavePressed(id, name) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PUBLIC_CHAT_LEAVE_PRESSED, { id, name })
    },
    publicChatRestorePressed(id, name) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PUBLIC_CHAT_RESTORE_PRESSED, { id, name })
    },
    kickUser(connectionId, connectionName, userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.KICK_USER_FROM_GROUP_CHAT, { connectionId, connectionName, userId })
    },
    createSessionPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CREATE_SESSION_PRESSED)
    },
    startChatSessionReplay(sessionReplayProperties) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.START_CHAT_SESSION_REPLAY, sessionReplayProperties)
    },
    endChatSessionReplay() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.END_CHAT_SESSION_REPLAY)
    },
  }
}
