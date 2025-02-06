//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  EVENTS_CREATE_PRESSED: 'EVENTS_CREATE_PRESSED',
  EVENTS_EDIT_PRESSED: 'EVENTS_EDIT_PRESSED',
  EVENTS_DELETE_PRESSED: 'EVENTS_DELETE_PRESSED',
  EVENTS_DELETE_CANCELED: 'EVENTS_DELETE_CANCELED',
  EVENTS_DELETE_CONFIRMED: 'EVENTS_DELETE_CONFIRMED',
  EVENTS_SAVE_PRESSED: 'EVENTS_SAVE_PRESSED',
  EVENTS_REPORT_PRESSED: 'EVENTS_REPORT_PRESSED',
  EVENTS_KICK_PRESSED: 'EVENTS_KICK_PRESSED',
  EVENTS_KICK_CONFIRMED: 'EVENTS_KICK_CONFIRMED',
  EVENTS_KICK_CANCELED: 'EVENTS_KICK_CANCELED',
  EVENTS_JOIN_PRESSED: 'EVENTS_JOIN_PRESSED',
  EVENTS_LEAVE_PRESSED: 'EVENTS_LEAVE_PRESSED',
}

export default function(amplitude) {
  return {
    createPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_CREATE_PRESSED)
    },
    editPressed(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_EDIT_PRESSED, { eventId })
    },
    deletePressed(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_DELETE_PRESSED, { eventId })
    },
    deleteCanceled(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_DELETE_CANCELED, { eventId })
    },
    deleteConfirmed(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_DELETE_CONFIRMED, { eventId })
    },
    savePressed(gameName, gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_SAVE_PRESSED, { gameName, gameId })
    },
    reportPressed(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_REPORT_PRESSED, { eventId })
    },
    kickPressed(memberId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_KICK_PRESSED, { memberId })
    },
    kickConfirmed(memberId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_KICK_CONFIRMED, { memberId })
    },
    kickCanceled(memberId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_KICK_CANCELED, { memberId })
    },
    joinPressed(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_JOIN_PRESSED, { eventId })
    },
    leavePressed(eventId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EVENTS_LEAVE_PRESSED, { eventId })
    },
  }
}
