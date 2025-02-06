//!!this file should be edited only on the top level (from common/commonLib folder)

const DATING_EVENTS = {
  ONBOARDING_SET_DATING: 'ONBOARDING_SET_DATING',
  ONBOARDING_SET_GENDERS: 'ONBOARDING_SET_GENDERS',
  SETTINGS_DATING_PRESSED: 'SETTINGS_DATING_PRESSED',
  SETTINGS_SET_DATING: 'SETTINGS_SET_DATING',
  SETTINGS_SET_DATING_FILTERS: 'SETTINGS_SET_DATING_FILTERS',
  DATING_PLAN_LINK_PRESSED: 'DATING_PLAN_LINK_PRESSED',
  TUTORIAL_DATING_PRESSED: 'TUTORIAL_DATING_PRESSED',
  PERSONAL_DATING_PRESSED: 'PERSONAL_DATING_PRESSED',
  PERSONAL_SET_DATING_FILTERS: 'PERSONAL_SET_DATING_FILTERS',
  PERSONAL_SET_DATING_AVATAR: 'PERSONAL_SET_DATING_AVATAR',
  PERSONAL_SET_DATING_ABOUT_ME: 'PERSONAL_SET_DATING_ABOUT_ME',
  MATCHING_DATING_PRESSED: 'MATCHING_DATING_PRESSED',
  MATCHING_SET_DATING_FILTERS: 'MATCHING_SET_DATING_FILTERS',
  INDIEGOGO_LINK_PRESSED: 'INDIEGOGO_LINK_PRESSED',
  MATCHING_FILTER_CHANGE_LOCATION_PREMIUM_POPUP:
    'MATCHING_FILTER_CHANGE_LOCATION_PREMIUM_POPUP',
};

export default function (amplitude) {
  return {
    onboardingSetDating() {
      amplitude?.logEvent(DATING_EVENTS.ONBOARDING_SET_DATING);
    },
    onboardingSetGenders(genders) {
      amplitude?.logEvent(DATING_EVENTS.ONBOARDING_SET_GENDERS, { genders });
    },
    settingsDatingPressed() {
      amplitude?.logEvent(DATING_EVENTS.SETTINGS_DATING_PRESSED);
    },
    settingsSetDating(status) {
      amplitude?.logEvent(DATING_EVENTS.SETTINGS_SET_DATING, { status });
    },
    settingsSetDatingFilters(filters) {
      amplitude?.logEvent(DATING_EVENTS.SETTINGS_SET_DATING_FILTERS, {
        filters,
      });
    },
    pressedDatingPlanLink() {
      amplitude?.logEvent(DATING_EVENTS.DATING_PLAN_LINK_PRESSED);
    },
    tutorialDatingPressed() {
      amplitude?.logEvent(DATING_EVENTS.TUTORIAL_DATING_PRESSED);
    },
    personalDatingPressed() {
      amplitude?.logEvent(DATING_EVENTS.PERSONAL_DATING_PRESSED);
    },
    personalSetDatingFilters(filters) {
      amplitude?.logEvent(DATING_EVENTS.PERSONAL_SET_DATING_FILTERS, {
        filters,
      });
    },
    personalSetDatingAvatar() {
      amplitude?.logEvent(DATING_EVENTS.PERSONAL_SET_DATING_AVATAR);
    },
    personalSetDatingAboutMe() {
      amplitude?.logEvent(DATING_EVENTS.PERSONAL_SET_DATING_ABOUT_ME);
    },
    matchingDatingPressed() {
      amplitude?.logEvent(DATING_EVENTS.MATCHING_DATING_PRESSED);
    },
    matchingSetDatingFilters(filters) {
      amplitude?.logEvent(DATING_EVENTS.MATCHING_SET_DATING_FILTERS, {
        filters,
      });
    },
    indiegogoLinkPressed() {
      amplitude?.logEvent(DATING_EVENTS.INDIEGOGO_LINK_PRESSED);
    },
    matchingFilterChangeLocationPremiumPopup() {
      amplitude?.logEvent(
        DATING_EVENTS.MATCHING_FILTER_CHANGE_LOCATION_PREMIUM_POPUP
      );
    },
  };
}
