//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  MATCHES_FILTER_PRESSED: 'MATCHES_FILTER_PRESSED',
  MATCHES_SKIP_PRESSED: 'MATCHES_SKIP_PRESSED',

  MATCHES_REVIEW_POPUP_SHOWED: 'REVIEW_POPUP_SHOWED', // note: w/o `MATCHES` key on purpose, not typo

  MATCHES_CONNECT_PRESSED: 'MATCHES_CONNECT_PRESSED',
  MATCHES_CONNECT_SUCCESSFUL: 'MATCHES_CONNECT_SUCCESSFUL',

  MATCHES_PERSONALITY_WIKI_PRESSED: 'MATCHES_PERSONALITY_WIKI_PRESSED',

  MATCHES_PROFILE_IMAGE_PRESSED: 'MATCHES_PROFILE_IMAGE_PRESSED',
  MATCHES_REPORT_USER_PRESSED: 'MATCHES_REPORT_USER_PRESSED',
  MATCHES_EMPTY: 'MATCHES_EMPTY',
  EMAIL_VERIFICATION_ALERT_SHOWN: 'EMAIL_VERIFICATION_ALERT_SHOWN',
  MATCHES_BLOCK_USER_PRESSED: 'MATCHES_BLOCK_USER_PRESSED',
  MATCHES_BAN_USER_PRESSED: 'MATCHES_BAN_USER_PRESSED',
  MATCHES_BAN_BY_DEVICE_PRESSED: 'MATCHES_BAN_BY_DEVICE_PRESSED',
  MATCHES_MUTE_USER_PRESSED: 'MATCHES_MUTE_USER_PRESSED',
  MATCHES_UNMUTE_USER_PRESSED: 'MATCHES_UNMUTE_USER_PRESSED',
  GET_MATCHES_ERROR: 'GET_MATCHES_ERROR',
  ADD_CONNECTION_ERROR: 'ADD_CONNECTION_ERROR',
  SET_DATING_FILTERS_ERROR: 'SET_DATING_FILTERS_ERROR',
  SET_MATCH_FILTERS_ERROR: 'SET_MATCH_FILTERS_ERROR',
  NAVIGATION_MATCHES: 'NAVIGATION_MATCHES',
  MATCHES_FILTER_RESET: 'MATCHES_FILTER_RESET',
  MATCHES_FILTER_APPLIED: 'MATCHES_FILTER_APPLIED',
  MATCHES_LOAD_DONE: 'MATCHES_LOAD_DONE',
  MATCHES_START_SESSION_REPLAY: 'MATCHES_START_SESSION_REPLAY',
  MATCHES_END_SESSION_REPLAY: 'MATCHES_END_SESSION_REPLAY',
}

export default function (amplitude) {
  return {
    matchesLoadDone(time) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_LOAD_DONE, { time })
    },
    searchPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_SEARCH_PRESSED)
    },
    filterPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_FILTER_PRESSED)
    },
    skipPressed(skippedId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_SKIP_PRESSED, { skippedId })
    },
    connectPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_CONNECT_PRESSED, { userId })
    },
    connectSuccesful(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_CONNECT_SUCCESSFUL, { userId })
    },
    reviewPopUpShowed(result) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_REVIEW_POPUP_SHOWED, { result })
    },
    personalityWikiPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_PERSONALITY_WIKI_PRESSED, { userId })
    },
    profileImagePressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_PROFILE_IMAGE_PRESSED, { userId })
    },
    reportUserPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_REPORT_USER_PRESSED, { userId })
    },
    blockUserPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_BLOCK_USER_PRESSED, { userId })
    },
    banUserPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_BAN_USER_PRESSED, { userId })
    },
    banByDevicePressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_BAN_BY_DEVICE_PRESSED, { userId })
    },
    muteUserPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_MUTE_USER_PRESSED, { userId })
    },
    unmuteUserPressed(userId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_UNMUTE_USER_PRESSED, { userId })
    },
    noMatches() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_EMPTY)
    },
    getMatchesError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GET_MATCHES_ERROR, { error })
    },
    addConnectionError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.ADD_CONNECTION_ERROR, { error })
    },
    setDatingFiltersError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SET_DATING_FILTERS_ERROR, { error })
    },
    setMatchFiltersError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SET_MATCH_FILTERS_ERROR, { error })
    },
    emailVerificationAlertShown() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EMAIL_VERIFICATION_ALERT_SHOWN)
    },
    navigationMatches() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.NAVIGATION_MATCHES)
    },
    matchesFilterReset() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_FILTER_RESET)
    },
    matchesFilterApplied(
      ages,
      gameMatchFilter,
      gameTitleMatchFilter,
      personalityTypesMatchFilter,
      languages,
      genderMatchFilter,
      lastOnline,
      searchDistance,
      searchLocation,
      skillLevel,
      userPlatforms,
      filterType,
    ) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_FILTER_APPLIED, {
        ages,
        gameMatchFilter,
        gameTitleMatchFilter,
        personalityTypesMatchFilter,
        languages,
        genderMatchFilter,
        lastOnline,
        searchDistance,
        searchLocation,
        skillLevel,
        userPlatforms,
        filterType,
      })
    },
    matchesStartSessionReplay(sessionReplayProperties) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_START_SESSION_REPLAY, sessionReplayProperties)
    },
    matchesEndSessionReplay() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MATCHES_END_SESSION_REPLAY)
    },
  }
}
