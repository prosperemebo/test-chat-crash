import { Wrapper, ImageBlock, Image, TextBlock, Header, Description, ButtonsBlock } from './styles'
import { ScrollWrapper } from '@/components/onboarding'
import i18n from '@/localization/i18n'
import { LoginPageTermsAndConditions } from '@/components/auth'
import { Button } from '@/components/common'
import { TrackingPermissionBlockProps } from './types'

const AdsImage = require('@/assets/images/onboarding/permissions.png')

const TrackingPermissionBlock = ({ onAccept, onCancel }: TrackingPermissionBlockProps) => (
  <Wrapper>
    <ScrollWrapper>
      <ImageBlock>
        <Image source={AdsImage} contentFit={'contain'} />
      </ImageBlock>
      <TextBlock>
        <Header>{i18n.t('onb:helpGametree')}</Header>
        <Description>{i18n.t('onb:weUseAds')}</Description>
        <Description>{i18n.t('onb:adsExplanation')}</Description>
      </TextBlock>
      <ButtonsBlock>
        <Button title={i18n.t('onb:accept').toUpperCase()} type={'yellow'} onPress={onAccept} withGradient />
        <Button title={i18n.t('onb:notNow').toUpperCase()} type={'empty'} onPress={onCancel} />
      </ButtonsBlock>
      <LoginPageTermsAndConditions withOpacity={false} />
    </ScrollWrapper>
  </Wrapper>
)

export default TrackingPermissionBlock