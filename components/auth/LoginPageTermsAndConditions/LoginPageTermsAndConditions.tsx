import * as WebBrowser from 'expo-web-browser'
import i18n from '@/localization/i18n'
import { TERMS_AND_CONDITIONS_LINK, PRIVACY_POLICY_LINK } from '@/constants/general'
import { Notice } from '@/components/common'
import { Wrapper, Links } from './styles'
import { Props } from './types'

const LoginPageTermsAndConditions = (props: Props) => {
  const { withOpacity = true } = props

  const openLink = (url: string) => {
    WebBrowser.openBrowserAsync(url, {
      readerMode: true,
    })
  }

  const style = {
    fontSize: 12,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  }

  return <Wrapper withOpacity={withOpacity}>
    <Links
      // @ts-ignore
      linkStyle={style}
      linkText={link => {
        if (link === TERMS_AND_CONDITIONS_LINK) return i18n.t('login:terms_of_use')
        if (link === PRIVACY_POLICY_LINK) return i18n.t('login:privacy_policy')
        return link
      }}
      onPress={url => openLink(url)}
    >
      <Notice>
        {i18n.t('login:by_signing_t_p', {
          termsOfUseLink: TERMS_AND_CONDITIONS_LINK,
          privacyPolicyLink: PRIVACY_POLICY_LINK,
        })}
      </Notice>
    </Links>
  </Wrapper>
}

export default LoginPageTermsAndConditions