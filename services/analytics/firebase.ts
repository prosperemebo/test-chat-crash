import firebaseAnalytics from '@react-native-firebase/analytics'

export const firebase = {
  // @ts-ignore
  trackEvent: (eventName, parameters) => {
    firebaseAnalytics()
      .logEvent(eventName, parameters)
      .then(() => {})
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
  },
  setUserId: (userId: string) => {
    firebaseAnalytics()
      .setUserId(userId)
      .then(() => {})
  },
}

export const initializeFirebaseAnalytics = async (isPermissionGranted: boolean) => {
  await firebaseAnalytics()
    .setAnalyticsCollectionEnabled(isPermissionGranted)
    .then(() => {})
}

export const setFirebaseUser = (userId: string) => {
  firebaseAnalytics()
    .setUserId(userId)
    .then(() => {})
}