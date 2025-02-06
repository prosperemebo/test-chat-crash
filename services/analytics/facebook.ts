import { AEMReporterIOS, AppEventsLogger, Settings } from 'react-native-fbsdk-next'

// Aggregated Event Measurement(AEM) for iOS events
/// Aggregated Event Measurement (AEM) for iOS apps
/// allows for the measurement of app events from iOS 14.5+ users
/// who have opted out of app tracking.
// @ts-ignore
export const logFBPurchase = (purchaseAmount, currencyCode, parameters) => {
  let price = purchaseAmount.toFixed(2)
  price = parseFloat(price)
  AppEventsLogger.logPurchase(price, currencyCode, parameters)
  AEMReporterIOS.logAEMEvent('fb_mobile_purchase', price, currencyCode, parameters)
}
// @ts-ignore
export const logFBEvent = (eventName, parameters) => {
  AppEventsLogger.logEvent(eventName, parameters)
  AEMReporterIOS.logAEMEvent(eventName, parameters?.purchaseAmount || 0, parameters?.currencyCode, parameters)
}


// setup facebook object
export const facebook = {
  logFBEvent,
  logFBPurchase,
  AppEventsLogger,
}

export const initializeFacebookAnalytics = async (isPermissionGranted: boolean) => {
  Settings.initializeSDK()

  await Settings.setAdvertiserTrackingEnabled(isPermissionGranted)
  Settings.setAdvertiserIDCollectionEnabled(isPermissionGranted)
}