import { Switch } from 'react-native'
import {
  Container, InnerWrapper, InnerTextWrapper, Label, Icon, OnlyForPremiumView, OnlyForPremiumText, OnlyForPremiumImage,
} from './styles'
import i18n from '@/localization/i18n'
import { SettingsItemSwitchProps } from './types'

const premiumImage = require('@/assets/images/settings/premium.png')

const SettingsItemSwitch = ({ title, value, canChange, onChange, icon }: SettingsItemSwitchProps) => {
  const handleChange = () => {
    if (!canChange) return

    onChange(!value)
  }

  return <Container>
    <InnerWrapper onPress={handleChange}>
      <InnerTextWrapper>
        <Icon source={icon} />
        <Label>
          {title}
        </Label>
        {!canChange && (
          <OnlyForPremiumView>
            <OnlyForPremiumImage source={premiumImage} />
            <OnlyForPremiumText>{i18n.t('settings:onlyPremium').toUpperCase()}</OnlyForPremiumText>
          </OnlyForPremiumView>
        )}
      </InnerTextWrapper>
      <Switch value={value} onValueChange={handleChange} />
    </InnerWrapper>
  </Container>
}

export default SettingsItemSwitch