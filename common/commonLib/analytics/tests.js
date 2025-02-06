//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  PERSONALITY_START_PRESSED: 'PERSONALITY_START_PRESSED',
  PERSONALITY_COMPLETED: 'PERSONALITY_COMPLETED',
  PERSONALITY_PICK_MANUALLY_PRESSED: 'PERSONALITY_PICK_MANUALLY_PRESSED',
  PERSONALITY_START_OVER_PRESSED: 'PERSONALITY_START_OVER_PRESSED',
  GAMER_DNA_START_PRESSED: 'GAMER_DNA_START_PRESSED',
  GAMER_DNA_COMPLETED: 'GAMER_DNA_COMPLETED',
  GAMER_DNA_START_OVER_PRESSED: 'GAMER_DNA_START_OVER_PRESSED',
  TEST_RESULT_SHARE_PRESSED: 'TEST_RESULT_SHARE_PRESSED',
  VALUES_START_PRESSED: 'VALUES_START_PRESSED',
  VALUES_COMPLETED: 'VALUES_COMPLETED',
  VALUES_START_OVER_PRESSED: 'VALUES_START_OVER_PRESSED',
}

export default function(amplitude) {
  return {
    personalityStartPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PERSONALITY_START_PRESSED)
    },
    personalityCompleted() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PERSONALITY_COMPLETED)
    },
    personalityPickManuallyPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PERSONALITY_PICK_MANUALLY_PRESSED)
    },
    personalityStartOverPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PERSONALITY_START_OVER_PRESSED)
    },
    gamerDNAStartPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMER_DNA_START_PRESSED)
    },
    gamerDNACompleted() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMER_DNA_COMPLETED)
    },
    gamerDNAStartOverPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GAMER_DNA_START_OVER_PRESSED)
    },
    valuesStartPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.VALUES_START_PRESSED)
    },
    valuesCompleted() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.VALUES_COMPLETED)
    },
    valuesStartOverPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.VALUES_START_OVER_PRESSED)
    },
    testResultSharePressed({ test, target }) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.TEST_RESULT_SHARE_PRESSED, { test, target })
    },
  }
}
