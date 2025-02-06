//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  MY_PROFILE_CHANGE_AVATAR_PRESSED: 'MY_PROFILE_CHANGE_AVATAR_PRESSED',
  MY_PROFILE_CHANGE_COVER_PRESSED: 'MY_PROFILE_CHANGE_COVER_PRESSED',
  MY_PROFILE_ADD_GAME_PRESSED: 'MY_PROFILE_ADD_GAME_PRESSED',
  MY_PROFILE_GAMER_DNA_WIKI_PRESSED: 'MY_PROFILE_GAMER_DNA_WIKI_PRESSED',
  MY_PROFILE_PLAYTIME_ADDED: 'MY_PROFILE_PLAYTIME_ADDED',
  MY_PROFILE_ABOUT_TEXT_ADDED: 'MY_PROFILE_ABOUT_TEXT_ADDED',
  MY_PROFILE_EDIT_PERSONAL_INFO_PRESSED: 'MY_PROFILE_EDIT_PERSONAL_INFO_PRESSED',
  MY_PROFILE_EDIT_GENRES_PRESSED: 'MY_PROFILE_EDIT_GENRES_PRESSED',
  MY_PROFILE_EDIT_PLATFORMS_PRESSED: 'MY_PROFILE_EDIT_PLATFORMS_PRESSED',
  MY_PROFILE_EDIT_NETWORKS_PRESSED: 'MY_PROFILE_EDIT_NETWORKS_PRESSED',
  MY_PROFILE_LEARN_DNA_PRESSED: 'MY_PROFILE_LEARN_DNA_PRESSED',
  MY_PROFILE_LEARN_TEST_RESULTS_PRESSED: 'MY_PROFILE_LEARN_TEST_RESULTS_PRESSED',
  MY_PROFILE_EDIT_DATING_INFO_PRESSED: 'MY_PROFILE_EDIT_DATING_INFO_PRESSED',
  GALLERY_IMAGE_SAVED: 'GALLERY_IMAGE_SAVED',
  GALLERY_IMAGE_REMOVED: 'GALLERY_IMAGE_REMOVED',
  EDIT_GALLERY_PRESSED: 'EDIT_GALLERY_PRESSED',
  UPLOAD_IMAGE_ERROR: 'UPLOAD_IMAGE_ERROR',
  SUBSCRIPTION_BUTTON_PRESSED: 'SUBSCRIPTION_BUTTON_PRESSED',
  PROFILE_START_SESSION_REPLAY: 'PROFILE_START_SESSION_REPLAY',
  PROFILE_END_SESSION_REPLAY: 'PROFILE_END_SESSION_REPLAY',
}

export default function (amplitude) {
  return {
    avatarPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_CHANGE_AVATAR_PRESSED)
    },
    coverPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_CHANGE_COVER_PRESSED)
    },
    addGamePressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_ADD_GAME_PRESSED)
    },
    gamerDnaPressed() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_GAMER_DNA_WIKI_PRESSED)
    },
    addedPlaytime(playStartTime, playEndTime) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_PLAYTIME_ADDED, { playStartTime, playEndTime })
    },
    addedAboutText() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_ABOUT_TEXT_ADDED)
    },
    pressedEditPersonalInfo() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_EDIT_PERSONAL_INFO_PRESSED)
    },
    pressedEditDatingInfo() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_EDIT_DATING_INFO_PRESSED)
    },
    pressedEditGenres() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_EDIT_GENRES_PRESSED)
    },
    pressedEditPlatforms() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_EDIT_PLATFORMS_PRESSED)
    },
    pressedEditNetworks() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_EDIT_NETWORKS_PRESSED)
    },
    pressedLearnTestResult() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.MY_PROFILE_LEARN_TEST_RESULTS_PRESSED)
    },
    galleryImageSaved(galleryType) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GALLERY_IMAGE_SAVED, { galleryType })
    },
    galleryImageRemoved(galleryType) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.GALLERY_IMAGE_REMOVED, { galleryType })
    },
    editGalleryPressed(source) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.EDIT_GALLERY_PRESSED, { source })
    },
    uploadImageError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.UPLOAD_IMAGE_ERROR, { error })
    },
    subscriptionButtonPressed(source) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.SUBSCRIPTION_BUTTON_PRESSED, { source })
    },
    startSessionReplay(sessionReplayProperties) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PROFILE_START_SESSION_REPLAY, sessionReplayProperties)
    },
    endSessionReplay() {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PROFILE_END_SESSION_REPLAY)
    },
  }
}
