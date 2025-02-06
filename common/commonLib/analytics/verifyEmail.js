//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  VERIFY_EMAIL_PRESSED: 'VERIFY_EMAIL_PRESSED',
  EMAIL_VERIFICATION_SEND: 'EMAIL_VERIFICATION_SEND',
  EMAIL_VERIFICATION_CANCEL: 'EMAIL_VERIFICATION_CANCEL',
  EMAIL_VERIFIED: 'EMAIL_VERIFIED',
}

export default function(amplitude) {
  return {
    verifyEmailPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.VERIFY_EMAIL_PRESSED)
    },
    emailVerificationSend() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EMAIL_VERIFICATION_SEND)
    },
    emailVerificationCancel() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EMAIL_VERIFICATION_CANCEL)
    },
    emailVerified() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EMAIL_VERIFIED)
    },
  }
}
