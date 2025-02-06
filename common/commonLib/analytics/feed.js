//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  FEED_LIKE_PRESSED: 'FEED_LIKE_PRESSED',
  FEED_REPORT_POST_PRESSED: 'FEED_REPORT_POST_PRESSED',
  FEED_WHO_LIKED_PRESSED: 'FEED_WHO_LIKED_PRESSED',
  FEED_HIDE_POST_PRESSED: 'FEED_HIDE_POST_PRESSED',
  FEED_HIDE_GAME_PRESSED: 'FEED_HIDE_GAME_PRESSED',
  FEED_HIDE_USER_PRESSED: 'FEED_HIDE_USER_PRESSED',
  FEED_START_SESSION_REPLAY: 'FEED_START_SESSION_REPLAY',
  FEED_END_SESSION_REPLAY: 'FEED_END_SESSION_REPLAY',
}

export default function(amplitude) {
  return {
    likePressed(postId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_LIKE_PRESSED, { postId })
    },
    reportPostPressed(postId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_REPORT_POST_PRESSED, { postId })
    },
    whoLikedPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_WHO_LIKED_PRESSED)
    },
    hidePostPressed(postId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_HIDE_POST_PRESSED, { postId })
    },
    hideGamePressed(gameId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_HIDE_GAME_PRESSED, { gameId })
    },
    hideUserPressed(posterId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_HIDE_USER_PRESSED, { posterId })
    },
    startSessionReplay(sessionReplayProperties) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_START_SESSION_REPLAY, sessionReplayProperties)
    },
    endSessionReplay() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_END_SESSION_REPLAY)
    },
  }
}
