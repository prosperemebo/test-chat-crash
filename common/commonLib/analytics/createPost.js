//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  CREATE_POST_ADD_LOCATION_PRESSED: 'CREATE_POST_ADD_LOCATION_PRESSED',
  CREATE_POST_ADD_GAME_PRESSED: 'CREATE_POST_ADD_GAME_PRESSED',
  CREATE_POST_NOTIFY_FRIENDS_PRESSED: 'CREATE_POST_NOTIFY_FRIENDS_PRESSED',
  CREATE_POST_SEND_PRESSED: 'CREATE_POST_SEND_PRESSED',
}

export default function(amplitude) {
  return {
    addLocationPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CREATE_POST_ADD_LOCATION_PRESSED)
    },
    addGamePressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CREATE_POST_ADD_GAME_PRESSED, { gameId })
    },
    notifyPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CREATE_POST_NOTIFY_FRIENDS_PRESSED)
    },
    sendPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.CREATE_POST_SEND_PRESSED)
    },
  }
}
