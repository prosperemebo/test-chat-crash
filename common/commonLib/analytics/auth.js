//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  USER_LOGGED_IN: 'USER_LOGGED_IN', // legacy for adjust
  SIGN_UP_COMPLETED: 'SIGN_UP_COMPLETED', // legacy for adjust

  OB_STARTED: 'OB_STARTED',
  OB_SIGNUP_STARTED: 'OB_SIGNUP_STARTED',
  OB_LOGIN_COMPLETE: 'OB_LOGIN_COMPLETE',

  REQUESTED_PASSWORD_RESTORE: 'REQUESTED_PASSWORD_RESTORE',
  DEMO_SIGN_UP_ACCEPTED: 'DEMO_SIGN_UP_ACCEPTED',
  DEMO_SIGN_UP_REJECTED: 'DEMO_SIGN_UP_REJECTED',
  FRIENDS_QUERY_ERROR: 'FRIENDS_QUERY_ERROR', // missused

  FB_LOGIN_ERROR: 'FB_LOGIN_ERROR',
}

const ADJUST_EVENTS = {
  SIGN_UP_COMPLETED: 'st0hor',
  USER_LOGGED_IN: 'xwkanv',
}

export default function (amplitude, facebook, adjust, firebase) {
  return {
    promo(source) {
      amplitude?.setUserProperties({ source })
    },
    userSignUpCompleted: function (from = 'email', id, controlValue, mode) {
      if (id) amplitude?.setUserId(id)
      if (id) firebase?.setUserId(id)
      if (controlValue) amplitude?.setUserProperties({ ControlValue: Math.round(controlValue) })

      window?.fbq?.('track', 'CompleteRegistration')
      window?.ttq?.track?.('CompleteRegistration')
      window?.rdt?.('track', 'SignUp')

      if (mode) {
        amplitude?.setUserProperties({ overwolf: mode.isDesktopMode })
      }

      adjust?.trackEvent(ADJUST_EVENTS.SIGN_UP_COMPLETED)
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_SIGNUP_STARTED, { from })
      firebase?.trackEvent(AMPLITUDE_EVENTS.OB_SIGNUP_STARTED, { from })
    },
    logOBComplete(source) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_LOGIN_COMPLETE, { source })
      firebase?.trackEvent(AMPLITUDE_EVENTS.OB_LOGIN_COMPLETE, { source })
    },
    logOBStarted(source) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_STARTED, { source })
      firebase?.trackEvent(AMPLITUDE_EVENTS.OB_STARTED, { source })
    },
    emailSignUp(id, controlValue, mode) {
      this.userSignUpCompleted('email', id, controlValue, mode)
    },
    fbSignUp(id, controlValue, mode) {
      this.userSignUpCompleted('fb', id, controlValue, mode)
    },
    discordSignUp(id, controlValue, mode) {
      this.userSignUpCompleted('discord', id, controlValue, mode)
    },
    instagramSignUp(id, controlValue, mode) {
      this.userSignUpCompleted('inst', id, controlValue, mode)
    },
    googleSignUp(id, controlValue, mode) {
      this.userSignUpCompleted('google', id, controlValue, mode)
    },
    appleSignUp(id, controlValue, mode) {
      this.userSignUpCompleted('apple', id, controlValue, mode)
    },
    userLogedIn(from = 'email', id, controlValue, source, mode) {
      if (id) amplitude?.setUserId(id)
      if (id) firebase?.setUserId(id)

      if (controlValue) amplitude?.setUserProperties({ ControlValue: Math.round(controlValue) })
      if (source) this.promo(source)

      if (mode) {
        amplitude?.setUserProperties({ overwolf: mode.isDesktopMode })
      }

      adjust?.trackEvent(ADJUST_EVENTS.USER_LOGGED_IN)
      amplitude?.logEvent(AMPLITUDE_EVENTS.OB_LOGIN_COMPLETE, { from })
      firebase?.trackEvent(AMPLITUDE_EVENTS.OB_LOGIN_COMPLETE, { from })
    },
    fbLogin(id, controlValue, source, mode) {
      this.userLogedIn('fb', id, controlValue, source, mode)
    },
    fbLoginError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FB_LOGIN_ERROR, { error })
      firebase?.trackEvent(AMPLITUDE_EVENTS.FB_LOGIN_ERROR, { error })
    },
    googleLogin(id, controlValue, source, mode) {
      this.userLogedIn('gg', id, controlValue, source, mode)
    },
    discordLogin(id, controlValue, source, mode) {
      this.userLogedIn('discord', id, controlValue, source, mode)
    },
    instagramLogin(id, controlValue, source, mode) {
      this.userLogedIn('inst', id, controlValue, source, mode)
    },
    emailLogin(id, controlValue, source, mode) {
      this.userLogedIn('email', id, controlValue, source, mode)
    },
    appleLogin(id, controlValue, source, mode) {
      this.userLogedIn('apple', id, controlValue, source, mode)
    },

    demoLogin(id, source) {
      this.userLogedIn('demo', id, null, source)
    },
    friendsQueryError(error) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.FRIENDS_QUERY_ERROR, { error })
      firebase?.trackEvent(AMPLITUDE_EVENTS.FRIENDS_QUERY_ERROR, { error })
    },
    requestedPasswordRestore(from = '') {
      amplitude?.logEvent(AMPLITUDE_EVENTS.REQUESTED_PASSWORD_RESTORE)
      firebase?.trackEvent(AMPLITUDE_EVENTS.REQUESTED_PASSWORD_RESTORE, { from })
    },
    demoSignUpAccepted(from = '') {
      amplitude?.logEvent(AMPLITUDE_EVENTS.DEMO_SIGN_UP_ACCEPTED, { from })
      firebase?.trackEvent(AMPLITUDE_EVENTS.DEMO_SIGN_UP_ACCEPTED, { from })
    },
    demoSignUpRejected(from = '') {
      amplitude?.logEvent(AMPLITUDE_EVENTS.DEMO_SIGN_UP_REJECTED, { from })
      firebase?.trackEvent(AMPLITUDE_EVENTS.DEMO_SIGN_UP_REJECTED, { from })
    },
  }
}
