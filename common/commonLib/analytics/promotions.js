//!!this file should be edited only on the top level (from common/commonLib folder)

const AMPLITUDE_EVENTS = {
  VIEW_PROMOTION: 'VIEW_PROMOTION',
  PROMOTION_DISMISSED: 'PROMOTION_DISMISSED',
  PROMOTION_URL_PRESSED: 'PROMOTION_URL_PRESSED',
}

export default function(amplitude) {
  return {
    viewPromotion(promotionId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.VIEW_PROMOTION, { promotionId })
    },
    dismissPromotion(promotionId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PROMOTION_DISMISSED, { promotionId })
    },
    promotionUrlPressed(promotionId) {
      amplitude?.logEvent(AMPLITUDE_EVENTS.PROMOTION_URL_PRESSED, { promotionId })
    },
  }
}
