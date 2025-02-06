import { Platform } from 'react-native'
import { Wrapper, ImageBlock, Image, TextBlock, Header, Description, ButtonsBlock } from './styles'
import { ScrollWrapper } from '@/components/onboarding'
import { LoginPageTermsAndConditions } from '@/components/auth'
import { Button } from '@/components/common'
import i18n from '@/localization/i18n'
import { LocationPermissionProps } from './types'
import { Store } from '@/types'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'

const locationImage = require('@/assets/images/location.png')

const LocationPermission = ({ onAccept, onCancel, isRequestRunning }: LocationPermissionProps) => (
  <Wrapper>
    <ScrollWrapper>
      <ImageBlock>
        <Image source={locationImage} contentFit={'contain'} />
      </ImageBlock>
      <TextBlock>
        <Header>{i18n.t('onb:locationPermissionHeader')}</Header>
        {(Platform.OS === 'android' && Platform.Version < 23 && (
          <Description>{i18n.t('onb:permissionExplanation23')}</Description>
        )) || <Description>{i18n.t('onb:locationPermissionExplanation')}</Description>}
      </TextBlock>

      <ButtonsBlock>
        <Button title={i18n.t('onb:enableLocation').toUpperCase()} type={'yellow'} onPress={onAccept} loading={isRequestRunning} withGradient />
        <Button title={i18n.t('matches:skip').toUpperCase()} type={'empty'} onPress={onCancel} />
      </ButtonsBlock>
      <LoginPageTermsAndConditions withOpacity={false} />
    </ScrollWrapper>
  </Wrapper>
)

export default compose(
  inject((context: Store) => ({
    isRequestRunning: context.LocationStore.isRequestRunning,
  })),
)(LocationPermission)