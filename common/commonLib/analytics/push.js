//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  PUSH_OPENED: 'PUSH_OPENED',
  PUSH_OPENED_FOREGROUND: 'PUSH_OPENED_FOREGROUND',
  PUSH_OPENED_CLOSED: 'PUSH_OPENED_CLOSED',
}

export default function(amplitude) {
  return {
    opened({ type }) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PUSH_OPENED, { type })
    },
    openedForeground() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PUSH_OPENED_FOREGROUND)
    },
    openedClosed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PUSH_OPENED_CLOSED)
    },
  }
}
