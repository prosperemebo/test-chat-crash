//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  REVIEWS_CREATE_PRESSED: 'REVIEWS_CREATE_PRESSED',
  REVIEWS_DELETE_PRESSED: 'REVIEWS_DELETE_PRESSED',
  REVIEWS_REPORT_PRESSED: 'REVIEWS_REPORT_PRESSED',
  REVIEWS_RATED: 'REVIEWS_RATED',
  REVIEWS_GO_TO_PRESSED: 'REVIEWS_GO_TO_PRESSED',
  REVIEWS_SHOW_INFO_PRESSED: 'REVIEWS_SHOW_INFO_PRESSED',
  REVIEWS_SAVE_PRESSED: 'REVIEWS_SAVE_PRESSED',
}

export default function (amplitude) {
  return {
    createPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_CREATE_PRESSED, { gameId })
    },
    deletePressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_DELETE_PRESSED, { gameId })
    },
    reportPressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_REPORT_PRESSED, { gameId })
    },
    rated(gameId, rating) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_RATED, { gameId, rating })
    },
    goToReviewPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_GO_TO_PRESSED)
    },
    showInfoPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_SHOW_INFO_PRESSED)
    },
    savePressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REVIEWS_SAVE_PRESSED, { gameId })
    },
  }
}
