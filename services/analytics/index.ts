import { getLocales } from 'expo-localization'
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency'
import { firebase, initializeFirebaseAnalytics, setFirebaseUser } from './firebase'
import { facebook, initializeFacebookAnalytics } from './facebook'
import { amplitudeProxy, initializeAmplitudeAnalytics } from './amplitude'

import auth from '@/common/commonLib/analytics/auth'
import onboarding from '@/common/commonLib/analytics/onboarding'
import matches from '@/common/commonLib/analytics/matches'
import connections from '@/common/commonLib/analytics/connections'
import feed from '@/common/commonLib/analytics/feed'
import createPost from '@/common/commonLib/analytics/createPost'
import notifications from '@/common/commonLib/analytics/notifications'
import sideMenu from '@/common/commonLib/analytics/sideMenu'
import myProfile from '@/common/commonLib/analytics/myProfile'
import games from '@/common/commonLib/analytics/games'
import tests from '@/common/commonLib/analytics/tests'
import settings from '@/common/commonLib/analytics/settings'
import posts from '@/common/commonLib/analytics/posts'
import push from '@/common/commonLib/analytics/push'
import events from '@/common/commonLib/analytics/events'
import reviews from '@/common/commonLib/analytics/reviews'
import comments from '@/common/commonLib/analytics/comments'
import groupChats from '@/common/commonLib/analytics/groupChats'
import dating from '@/common/commonLib/analytics/dating'
import commonActivity from '@/common/commonLib/analytics/commonActivity'
import subscriptions from '@/common/commonLib/analytics/subscriptions'
import abTests from '@/common/commonLib/analytics/abTests'
import promotions from '@/common/commonLib/analytics/promotions'

const enabledCountries = new Set([
  'RU',
  'US',
  'BR',
  'VN',
  'IN',
  'GB',
  'UA',
  'MX',
  'IQ',
  'DE',
  'ID',
  'TH',
  'FR',
])

const initAmplitude = () => {
  const countryCode = getLocales()[0].regionCode

  if (!countryCode || !enabledCountries.has(countryCode)) {
    // eslint-disable-next-line no-console
    console.log(`Tracking disabled for country: ${countryCode}`)
    return null
  } else {
    // eslint-disable-next-line no-console
    console.log(`Tracking enabled for country: ${countryCode}`)
    return initializeAmplitudeAnalytics()
  }
}

export const initTracking = async () => {
  try {
    const { status } = await requestTrackingPermissionsAsync()
    const isPermissionGranted = status === 'granted'

    await initializeFacebookAnalytics(isPermissionGranted)
    await initializeFirebaseAnalytics(isPermissionGranted)

    return isPermissionGranted
  } catch (e) {
    console.error(e)
    return false
  }
}

export const setUserId = (userId: string) => {
  setFirebaseUser(userId)
  //TODO other providers
}

const initAnalyticsEvents = () => {
  // @ts-ignore
  const amplitude = amplitudeProxy(initAmplitude())
  const adjust = null //TODO

  return {
    auth: auth(amplitude, facebook, adjust, firebase),
    onboarding: onboarding(amplitude, firebase),
    matches: matches(amplitude),
    connections: connections(amplitude, firebase, facebook),
    feed: feed(amplitude),
    createPost: createPost(amplitude),
    notifications: notifications(amplitude),
    sideMenu: sideMenu(amplitude),
    myProfile: myProfile(amplitude),
    games: games(amplitude),
    tests: tests(amplitude),
    settings: settings(amplitude),
    push: push(amplitude),
    posts: posts(amplitude),
    events: events(amplitude),
    reviews: reviews(amplitude),
    comments: comments(amplitude),
    groupChats: groupChats(amplitude),
    dating: dating(amplitude),
    commonActivity: commonActivity(amplitude),
    subscriptions: subscriptions(amplitude, facebook, adjust, firebase),
    abTests: abTests(amplitude),
    promotions: promotions(amplitude),
  }
}

export default initAnalyticsEvents()