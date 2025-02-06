//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  SIDE_MENU_PERSONALITY_TEST_PRESSED: 'SIDE_MENU_PERSONALITY_TEST_PRESSED',
  SIDE_MENU_GAMER_TEST_PRESSED: 'SIDE_MENU_GAMER_TEST_PRESSED',
  SIDE_MENU_VALUES_TEST_PRESSED: 'SIDE_MENU_VALUES_TEST_PRESSED',
  SIDE_MENU_INVITE_FRIENDS_PRESSED: 'SIDE_MENU_INVITE_FRIENDS_PRESSED',
  SIDE_MENU_ACHIEVEMENTS_PRESSED: 'SIDE_MENU_ACHIEVEMENTS_PRESSED',
  SIDE_MENU_LEARN_XP_LEVELS_PRESSED: 'SIDE_MENU_LEARN_XP_LEVELS_PRESSED',
  SIDE_MENU_IMPROVE_RECOM_PRESSED: 'SIDE_MENU_IMPROVE_RECOM_PRESSED',
}

export default function (amplitude) {
  return {
    personalityTestPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_PERSONALITY_TEST_PRESSED)
    },
    gamerTestPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_GAMER_TEST_PRESSED)
    },
    valuesTestPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_VALUES_TEST_PRESSED)
    },
    pressedInviteFriends() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_INVITE_FRIENDS_PRESSED)
    },
    pressedAchievements() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_ACHIEVEMENTS_PRESSED)
    },
    pressedLearnXPLevels() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_LEARN_XP_LEVELS_PRESSED)
    },
    pressedImproveRecom() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SIDE_MENU_IMPROVE_RECOM_PRESSED)
    },
  }
}

// this file is no usage