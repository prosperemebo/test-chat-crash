

// Aggregated Event Measurement(AEM) for iOS events
/// Aggregated Event Measurement (AEM) for iOS apps
/// allows for the measurement of app events from iOS 14.5+ users
/// who have opted out of app tracking.
// @ts-ignore
export const logFBPurchase = (purchaseAmount, currencyCode, parameters) => {
}
// @ts-ignore
export const logFBEvent = (eventName, parameters) => {
}


// setup facebook object
export const facebook = {
  logFBEvent,
  logFBPurchase,
}

export const initializeFacebookAnalytics = async (isPermissionGranted: boolean) => {
}