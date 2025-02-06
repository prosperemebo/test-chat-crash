//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  NOTIFICATION_READ_ALL_PRESSED: 'NOTIFICATION_READ_ALL_PRESSED',
  NOTIFICATION_DELETE_NOTIFICATION_PRESSED: 'NOTIFICATION_DELETE_NOTIFICATION_PRESSED',
  NOTIFICATION_OPENED: 'NOTIFICATION_OPENED',
  NOTIFICATION_PREFERENCES_CHANGED: 'NOTIFICATION_PREFERENCES_CHANGED',
}

export default function (amplitude) {
  return {
    readAllPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.NOTIFICATION_READ_ALL_PRESSED)
    },
    deletePressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.NOTIFICATION_DELETE_NOTIFICATION_PRESSED)
    },
    opened({ type }) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.NOTIFICATION_OPENED, { type })
    },
    preferencesChanged({ type, value }) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.NOTIFICATION_PREFERENCES_CHANGED, { type, value })
    },
  }
}
