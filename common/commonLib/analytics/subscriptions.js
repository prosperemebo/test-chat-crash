//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  MEMBERSHIP_PAGE_VIEW: 'MEMBERSHIP_PAGE_VIEW',
  MEMBERSHIP_PAGE_NAVIGATE: 'MEMBERSHIP_PAGE_NAVIGATE',
  MEMBERSHIP_PAGE_PRODUCT_PRESSED: 'MEMBERSHIP_PAGE_PRODUCT_PRESSED',
  MEMBERSHIP_PAGE_MANAGE_BILLING_PRESSED: 'MEMBERSHIP_PAGE_MANAGE_BILLING_PRESSED',
  MEMBERSHIP_PAGE_CANCEL_SUBSCTIPTION_PRESSED:'MEMBERSHIP_PAGE_CANCEL_SUBSCTIPTION_PRESSED',
  MEMBERSHIP_PAGE_REFUND_PRESSED: 'MEMBERSHIP_PAGE_REFUND_PRESSED',
  PRODUCT_PURCHASE_STARTED:'PRODUCT_PURCHASE_STARTED',
  PRODUCT_PURCHASE_SUCCESFUL: 'PRODUCT_PURCHASE_SUCCESFUL',
  PRODUCT_PURCHASE_ERROR: 'PRODUCT_PURCHASE_ERROR',
}
const ADJUST_EVENTS = {
  MEMBERSHIP_PAGE_VIEW: 'jvs9n6',
  MEMBERSHIP_PAGE_PRODUCT_PRESSED: 'e9lzq4',
  PRODUCT_PURCHASE_STARTED:'37tgz2',
  PRODUCT_PURCHASE_SUCCESFUL: 'tffp7p',
  PRODUCT_PURCHASE_ERROR: 'i8w19y',
}
export default function(amplitude, facebook, adjust, firebase) {
  const send = (event, params) => {
    amplitude?.logEvent(event, params)
    facebook?.logFBEvent(event, params)
    firebase?.trackEvent(event, params)
  }
  return {
    membershipPageView({ screen, placement }) {
      adjust?.trackEvent(ADJUST_EVENTS.MEMBERSHIP_PAGE_VIEW)
      send(AMPLITUDE_EVENTS.MEMBERSHIP_PAGE_VIEW, { screenId: screen, placement })
    },
    membershipPageNavigate(from) {
      send(AMPLITUDE_EVENTS.MEMBERSHIP_PAGE_NAVIGATE, { from })
    },
    membershipManageBillingClicked(id){
      send(AMPLITUDE_EVENTS.MEMBERSHIP_PAGE_MANAGE_BILLING_PRESSED, { id })
    },
    membershipPageCancelSubscriptionPressed() {
      send(AMPLITUDE_EVENTS.MEMBERSHIP_PAGE_CANCEL_SUBSCTIPTION_PRESSED)
    },
    membershipPageRefundPressed() {
      send(AMPLITUDE_EVENTS.MEMBERSHIP_PAGE_REFUND_PRESSED)
    },
    membershipPageProductPressed(screenId, productId, price, currencyCode, gateway ) {
      adjust?.trackEvent(ADJUST_EVENTS.MEMBERSHIP_PAGE_PRODUCT_PRESSED)
      send(AMPLITUDE_EVENTS.MEMBERSHIP_PAGE_PRODUCT_PRESSED, { screenId, productId, price, currencyCode, gateway })
    },
    productPurchaseStarted(screenId, productId, price, currencyCode, gateway) {
      adjust?.trackEvent(ADJUST_EVENTS.PRODUCT_PURCHASE_STARTED)
      send(AMPLITUDE_EVENTS.PRODUCT_PURCHASE_STARTED, { screenId, productId, price, currencyCode, gateway })
    },
    productPurchaseSuccesful({ screenId, productId, price, ltv, currencyCode, gateway, duration, 
      paywallABTestName,
      paywallName }) {
      window?.fbq?.('track', 'Purchase', {value: ltv, currency: currencyCode})
      window?.ttq?.track?.('CompletePayment', {
        'content_type': 'membership', 
        'quantity': 1, 
        'description': duration, 
        'currency': currencyCode,
        'value': ltv,
      })
      window?.rdt?.('track', 'Purchase')

      adjust?.trackPurchase(ADJUST_EVENTS.PRODUCT_PURCHASE_SUCCESFUL, ltv, currencyCode)
      facebook?.logFBPurchase(
        ltv, currencyCode, { screenId, productId, price, ltv, currencyCode, gateway })
      amplitude?.logEvent(
        AMPLITUDE_EVENTS.PRODUCT_PURCHASE_SUCCESFUL, { screenId, productId, price, ltv, currencyCode, gateway, duration, paywallName, paywallABTestName })
      firebase?.trackEvent(AMPLITUDE_EVENTS.PRODUCT_PURCHASE_SUCCESFUL, { screenId, productId, price, ltv, currencyCode, gateway, duration, paywallName, paywallABTestName })
      firebase?.trackPurchase(productId, price, currencyCode, duration)
    },
    productPurchaseError(screenId, productId, price, currencyCode, gateway) {
      adjust?.trackEvent(ADJUST_EVENTS.PRODUCT_PURCHASE_ERROR,)
      send(AMPLITUDE_EVENTS.PRODUCT_PURCHASE_ERROR, { screenId, productId, price, currencyCode, gateway })
    },
  }
}
