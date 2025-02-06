import { ImageWrapper, Wrapper, Image, TextWrapper, Header, Description, SwitchWrapper } from './styles'
import { SwitchInput } from '@/components/common'
import i18n from '@/localization/i18n'
import { GDPRBlockProps } from './types'

export const GDPRImage = require('@/assets/images/onboarding/gdpr.png')

const GDPRBlock = (props: GDPRBlockProps) => {
  const { isAgreedToTerms, onAgreedToTerms, isLoading } = props

  return <Wrapper>
    <ImageWrapper>
      <Image source={GDPRImage} />
    </ImageWrapper>
    <TextWrapper>
      <Header>{i18n.t('onb:gdprHeader')}</Header>
      <Description>{i18n.t('onb:gdprExplanation')}</Description>
    </TextWrapper>
    <SwitchWrapper>
      <SwitchInput
        label={i18n.t('onb:iAgreeTermsAndConditions')}
        value={isAgreedToTerms}
        onValueChange={onAgreedToTerms}
        type="gdpr"
        disabled={isLoading}
        isLoading={isLoading}
      />
    </SwitchWrapper>
  </Wrapper>
}

export default GDPRBlock