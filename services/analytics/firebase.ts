import firebaseAnalytics from '@react-native-firebase/analytics'
import crashlytics from '@react-native-firebase/crashlytics'

export const firebase = {
  // @ts-ignore
  trackEvent: (eventName, parameters) => {
    firebaseAnalytics()
      .logEvent(eventName, parameters)
      .then(() => {})
      .catch(err => crashlytics().recordError(err))
  },
  // @ts-ignore
  trackPurchase: (productId, purchaseAmount, currencyCode, duration) => {
    const price = purchaseAmount.toFixed(2)
    firebaseAnalytics()
      .logEvent('purchase', {
        value: price, // Price of the subscription
        currency: currencyCode, // Currency
        item_category: 'subscription', // Category of the item
        item_name: productId, // Name of the subscription
        subscription_period: duration, // Subscription period
        // is_trial_period: true, // Whether it's a trial
        // Include any other relevant parameters
      })
      .then(() => {})
      .catch(err => crashlytics().recordError(err))
  },
}

export const initializeFirebaseAnalytics = async (isPermissionGranted: boolean) => {
  await firebaseAnalytics()
    .setAnalyticsCollectionEnabled(isPermissionGranted)
    .then(() => {})
    .catch(err => crashlytics().recordError(err))
}

export const setFirebaseUser = (userId: string) => {
  firebaseAnalytics()
    .setUserId(userId)
    .then(() => {})
    .catch(err => crashlytics().recordError(err))
}