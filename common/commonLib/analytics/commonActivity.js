//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  FIRST_SCREEN: 'FIRST_SCREEN',
}

export default function(amplitude) {
  return {
    landingScreenVisited() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FIRST_SCREEN)
    },
  }
}
