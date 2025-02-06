import { useRouter, Href } from 'expo-router'
import analytics from '@/services/analytics'
import {
  SubscriptionDetailContainer,
  LabelText,
  LabelSecondText,
  UnlockBenefitsContainer,
  UnlockBenefitsButton,
  UnlockBenefitsButtonText,
  ButtonBackground,
  StateLayer,
} from './styles'
import i18n from '@/localization/i18n'
import { SubscriptionInfoBlockProps } from './types'


const SubscriptionInfoBlock = (props: SubscriptionInfoBlockProps) => {
  const { from, hasMembership } = props
  const router = useRouter()
  const onPress = () => {
    const to = hasMembership ? '/(app)/settings/subscriptionManagement' : '/(app)/settings/subscription'

    analytics.subscriptions.membershipPageNavigate(from)
    router.push(to as Href)
  }

  const renderContent = () => {
    if (hasMembership) return <LabelText>{i18n.t('subscription:manageSubscriptionsText')}</LabelText>

    return <UnlockBenefitsContainer>
      <LabelText>
        {i18n.t('subscription:unlockAllBenefitsHeader')}
      </LabelText>
      <LabelSecondText>
        {i18n.t('subscription:unlockAllBenefitsDescription')}
      </LabelSecondText>
      <UnlockBenefitsButton onPress={onPress}>
        <UnlockBenefitsButtonText>{i18n.t('from $4.99/mo')}</UnlockBenefitsButtonText>
      </UnlockBenefitsButton>
    </UnlockBenefitsContainer>
  }

  //TODO check for angle of gradient
  return <SubscriptionDetailContainer disabled={!hasMembership} onPress={onPress}>
    <ButtonBackground>
      <StateLayer>
        {renderContent()}
      </StateLayer>
    </ButtonBackground>
  </SubscriptionDetailContainer>
}

export default SubscriptionInfoBlock