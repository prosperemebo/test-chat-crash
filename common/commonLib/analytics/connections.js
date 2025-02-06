//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  CONNECTIONS_SEARCH_PRESSED: 'CONNECTIONS_SEARCH_PRESSED',
  CONNECTIONS_SEND_MESSAGE_PRESSED: 'CONNECTIONS_SEND_MESSAGE_PRESSED',
  CONNECTIONS_DELETE_CONNECTION_PRESSED: 'CONNECTIONS_DELETE_CONNECTION_PRESSED',
  CONNECTIONS_RESTORE_CONNECTION_PRESSED: 'CONNECTIONS_RESTORE_CONNECTION_PRESSED',
  CONNECTIONS_IMAGEPICKER_OPENED: 'CONNECTIONS_IMAGEPICKER_OPENED',
  CONNECTIONS_IMAGEPICKER_CLOSED: 'CONNECTIONS_IMAGEPICKER_CLOSED',
  CONNECTIONS_IMAGE_SENT: 'CONNECTIONS_IMAGE_SENT',
  CHAT_PRESSED: 'CHAT_PRESSED',
  DRUID_MESSAGE_BUTTON_PRESSED: 'DRUID_MESSAGE_BUTTON_PRESSED',
  WELCOME_MESSAGE_BUTTON_PRESSED: 'WELCOME_MESSAGE_BUTTON_PRESSED',
  SPECIFIC_USER_ERROR: 'SPECIFIC_USER_ERROR'
}

export default function(amplitude, firebase, facebook) {

  return {
    searchPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_SEARCH_PRESSED)
    },
    sendMessagePressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_SEND_MESSAGE_PRESSED)
      firebase?.trackEvent(AMPLITUDE_EVENTS.CONNECTIONS_SEND_MESSAGE_PRESSED)
      facebook?.logFBEvent(AMPLITUDE_EVENTS.CONNECTIONS_SEND_MESSAGE_PRESSED)
    },
    deleteConnectionPressed(connectionId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_DELETE_CONNECTION_PRESSED, { connectionId })
    },
    restoreConnectionPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_RESTORE_CONNECTION_PRESSED)
    },
    imagePickerOpened() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_IMAGEPICKER_OPENED)
    },
    imagePickerClosed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_IMAGEPICKER_CLOSED)
    },
    imageSent(){
      amplitude?.logEvent(AMPLITUDE_EVENTS.CONNECTIONS_IMAGE_SENT)
    },
    chatPressed(){
      amplitude?.logEvent(AMPLITUDE_EVENTS.CHAT_PRESSED)
    },
    druidMessageButtonPressed(buttonText){
      amplitude?.logEvent(AMPLITUDE_EVENTS.DRUID_MESSAGE_BUTTON_PRESSED, { buttonText })
    },
    welcomeMessageButtonPressed(link){
      amplitude?.logEvent(AMPLITUDE_EVENTS.WELCOME_MESSAGE_BUTTON_PRESSED, { link })
    },
    specificUserError(error){
      amplitude?.logEvent(AMPLITUDE_EVENTS.SPECIFIC_USER_ERROR, { error })
    }
  }
}