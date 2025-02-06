//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  LOCATION_PERMISSION: 'LOCATION_PERMISSION',
  NOTIFICATION_PERMISSION: 'NOTIFICATION_PERMISSION',
  USER_PICKED_PLATFORMS: 'USER_PICKED_PLATFORMS',
  USER_PICKED_GENRES: 'USER_PICKED_GENRES',
  USER_PICKED_GAMES: 'USER_PICKED_GAMES',
  USER_COMPLETED_PERSONAL: 'USER_COMPLETED_PERSONAL',
  ONBAORDING_STEAM_SYNC: 'ONBAORDING_STEAM_SYNC',
  ONBOARDING_SET_FRIENDS: 'ONBOARDING_SET_FRIENDS',
  
  OB_SIGNUP_VIEW: 'OB_SIGNUP_VIEW',
  OB_SIGNUP_STARTED: 'OB_SIGNUP_STARTED',
  
  OB_LOGIN_VIEW: 'OB_LOGIN_VIEW',
  
  OB_IDFA_VIEW: 'OB_IDFA_VIEW',
  OB_IDFA_COMPLETE: 'OB_IDFA_COMPLETE',
  
  OB_GDPR_VIEW: 'OB_GDPR_VIEW',
  OB_GDPR_COMPLETE: 'OB_GDPR_COMPLETE',
  
  OB_PERSONAL_VIEW: 'OB_PERSONAL_VIEW',
  OB_PERSONAL_COMPLETE: 'OB_PERSONAL_COMPLETE',
  
  OB_GENRES_VIEW: 'OB_GENRES_VIEW',
  OB_GENRES_COMPLETE: 'OB_GENRES_COMPLETE',
  
  OB_PLATFORMS_VIEW: 'OB_PLATFORMS_VIEW',
  OB_PLATFORMS_COMPLETE: 'OB_PLATFORMS_COMPLETE',

  OB_GAMES_VIEW: 'OB_GAMES_VIEW',
  OB_GAMES_COMPLETE: 'OB_GAMES_COMPLETE',
  
  OB_COMPLETE: 'OB_COMPLETE',
  
  OB_LOGIN_ERROR: 'OB_LOGIN_ERROR', //TODO
  OB_SIGNUP_ERROR: 'OB_SIGNUP_ERROR', //TODO

  BIRTHDAY_CHANGED: 'BIRTHDAY_CHANGED',
  
  OB_START_SESSION_REPLAY: 'OB_START_SESSION_REPLAY',
  OB_END_SESSION_REPLAY: 'OB_END_SESSION_REPLAY',
}

export default function (amplitude, firebase) {
  const send = (event, params) => {
    amplitude?.logEvent(event, params)
    firebase?.trackEvent(event, params)
  }
  return {
    locationPermission(skipped) {
      send(AMPLITUDE_EVENTS.LOCATION_PERMISSION, { skipped })
    },
    notificationPermission() {
      send(AMPLITUDE_EVENTS.NOTIFICATION_PERMISSION)
    },
    //TODO  in update platforms in profile
    userPickedPlatforms() {
      send(AMPLITUDE_EVENTS.USER_PICKED_PLATFORMS)
    },
    //TODO  in update genres in profile
    userPickedGenres() {
      send(AMPLITUDE_EVENTS.USER_PICKED_GENRES)
    },
    userPickedGames(gamesIDs) {
      send(AMPLITUDE_EVENTS.USER_PICKED_GAMES, { gamesIDs })
    },
    //TODO USED in update personal in profile
    userCompletedPersonal(userData) {
      const { age, gender } = userData
      firebase?.setUserProperty('age', age)
      firebase?.setUserProperty('gender', gender)
      amplitude?.setUserProperties({ age, gender })
      send(AMPLITUDE_EVENTS.USER_COMPLETED_PERSONAL)
    },
    onboardingSteamSync({ skipped }) {
      send(AMPLITUDE_EVENTS.ONBAORDING_STEAM_SYNC, { skipped })
    },
    onboardingSetFriends() {
      send(AMPLITUDE_EVENTS.ONBOARDING_SET_FRIENDS)
    },
  
    //REWORK
  
    continueOnboarding(from = 'email') {
      send(AMPLITUDE_EVENTS.OB_SIGNUP_STARTED, { from })
    },
    
    logSignUpScreen() {
      send(AMPLITUDE_EVENTS.OB_SIGNUP_VIEW)
    },
    logLoginScreen() {
      send(AMPLITUDE_EVENTS.OB_LOGIN_VIEW)
    },
    
    logOBGDPRView() {
      send(AMPLITUDE_EVENTS.OB_GDPR_VIEW)
    },
    logOBGDPRComplete() {
      send(AMPLITUDE_EVENTS.OB_GDPR_COMPLETE)
    },
    
    logOBPersonalView() {
      send(AMPLITUDE_EVENTS.OB_PERSONAL_VIEW)
    },
    logOBPersonalComplete(username, dateOfBirth, gender, aboutMe) {
      send(AMPLITUDE_EVENTS.OB_PERSONAL_COMPLETE, { username, dateOfBirth, gender, aboutMe })
    },
    logOBBirthdayChanged() {
      send(AMPLITUDE_EVENTS.BIRTHDAY_CHANGED)
    },
    
    logOBGenresView() {
      send(AMPLITUDE_EVENTS.OB_GENRES_VIEW)
    },
    logOBGenresComplete(genres) {
      send(AMPLITUDE_EVENTS.OB_GENRES_COMPLETE, { genres })
    },
    
    logOBPlatformsView() {
      send(AMPLITUDE_EVENTS.OB_PLATFORMS_VIEW)
    },
    logOBPlatformsComplete(platforms) {
      send(AMPLITUDE_EVENTS.OB_PLATFORMS_COMPLETE, { platforms })
    },
    logOBGamesView() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_GAMES_VIEW)
    },
    logOBGamesComplete(gamesIDs) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_GAMES_COMPLETE, { gamesIDs })
    },
    logOBIDFAView() {
      send(AMPLITUDE_EVENTS.OB_IDFA_VIEW)
    },
    logOBIDFAComplete(result) {
      send(AMPLITUDE_EVENTS.OB_IDFA_COMPLETE, { IDFAResult: result })
    },
    
    logOBComplete() {
      send(AMPLITUDE_EVENTS.OB_COMPLETE)
    },
  
    trackLoginError(error) {
      send(AMPLITUDE_EVENTS.OB_LOGIN_ERROR, { error })
    },
    trackSignUpError(error) {
      send(AMPLITUDE_EVENTS.OB_SIGNUP_ERROR, { error })
    },
    logOBStartSessionReplay(sessionReplayProperties) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_START_SESSION_REPLAY, sessionReplayProperties)
    },
    logOBEndSessionReplay() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_END_SESSION_REPLAY)
    },
  }
}
