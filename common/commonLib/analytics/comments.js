//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  COMMENTS_LIKE_PRESSED: 'COMMENTS_LIKE_PRESSED',
  COMMENTS_SEND_PRESSED: 'COMMENTS_SEND_PRESSED',
  COMMENTS_DELETE_PRESSED: 'COMMENTS_DELETE_PRESSED',
  COMMENTS_REPORT_PRESSED: 'COMMENTS_REPORT_PRESSED',
  COMMENTS_COPY_PRESSED: 'COMMENTS_COPY_PRESSED',
}

export default function(amplitude) {
  return {
    copyPressed(commentId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.COMMENTS_COPY_PRESSED, { commentId })
    },
    sendPressed(postId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.COMMENTS_SEND_PRESSED, { postId })
    },
    likePressed(commentId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.COMMENTS_LIKE_PRESSED, { commentId })
    },
    reportPressed(commentId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.COMMENTS_REPORT_PRESSED, { commentId })
    },
    deletePressed(commentId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.COMMENTS_DELETE_PRESSED, { commentId })
    }
  }
}
