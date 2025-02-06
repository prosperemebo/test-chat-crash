import AlertService from '@/services/Alert'
import { ServiceItem } from '@/components/settings'
import { ServiceGroupContainer } from './styles'
import i18n from '@/localization/i18n'
import analytics from '@/services/analytics'
import { ServicesBlockProps } from './types'

const resetMatchesIcon = require('@/assets/images/settings/resetMatches.png')
const mailIcon = require('@/assets/images/settings/mail.png')

const ServicesBlock = ({ user }: ServicesBlockProps) => {
  const handleConfirmResetMatches = () => {
    analytics.settings.resetMatches()
    //TODO request
  }

  const handleResetMatchesPress = () => {
    AlertService.showInfoWithCustomButtons(
      i18n.t('settings:resetMatches'),
      i18n.t('settings:resetMatchesConfirm'),
      [
        {
          text: i18n.t('common:cancel'),
          onPress: () => false,
          style: 'cancel',
        },
        {
          text: i18n.t('common:yes'),
          onPress: handleConfirmResetMatches,
        },
      ],
      { cancelable: true },
    )
  }

  const handleEmailModal = () => {
    //TODO email verification
  }

  const isEmailVerified = user.profile.emailVerified

  const serviceText = isEmailVerified ? i18n.t('settings:resetEmail') : i18n.t('settings:verifyEmail')

  return <ServiceGroupContainer>
    <ServiceItem
      title={i18n.t('settings:resetMatches')}
      onPress={handleResetMatchesPress}
      icon={resetMatchesIcon}
      innerHeight={17.05}
    />
    <ServiceItem
      title={serviceText}
      onPress={handleEmailModal}
      icon={mailIcon}
      innerHeight={14.2}
    />
  </ServiceGroupContainer>
}

export default ServicesBlock