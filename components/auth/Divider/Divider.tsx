import { StyleDivider, DividerItem, DividerText } from './styles'
import i18n from '@/localization/i18n'

const Divider = () => {
  return <StyleDivider>
    <DividerItem />
    <DividerText>{i18n.t('login:or_continue_with_email')}...</DividerText>
    <DividerItem />
  </StyleDivider>
}

export default Divider