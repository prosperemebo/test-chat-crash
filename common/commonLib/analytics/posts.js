//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  RUN_OUT_OF_POSTS: 'RUN_OUT_OF_POSTS',
  POSTS_FILTER_PRESSED: 'POSTS_FILTER_PRESSED',
  FEED_FILTER_APPLIED: 'FEED_FILTER_APPLIED',
}
  
export default function(amplitude) {
  return {
    runOutOfPosts() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.RUN_OUT_OF_POSTS)
    },
    filterPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.POSTS_FILTER_PRESSED)
    },
    filterApplied(filters) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FEED_FILTER_APPLIED, { filters })
    },
  }
}
  