import { Platform } from 'react-native'
import { DisclosureText } from './styled'
import i18n from '@/localization/i18n'

const Disclosure = () => {
  if (Platform.OS === 'android') return <DisclosureText>
    {i18n.t('subscription:SubscriptionPaymentInformation', {
      platform: 'Google Play',
    })}
  </DisclosureText>
  
  return null
}

export default Disclosure