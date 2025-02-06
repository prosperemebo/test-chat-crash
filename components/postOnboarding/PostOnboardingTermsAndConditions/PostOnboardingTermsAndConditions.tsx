import * as WebBrowser from 'expo-web-browser'
import HyperLink from 'react-native-hyperlink'
import { Notice } from '@/components/common'
import i18n from '@/localization/i18n'
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from '@/constants/general'

const PostOnboardingTermsAndConditions = () => {
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
  
  return <HyperLink
    // @ts-ignore
    linkStyle={style}
    linkText={(link: string) => {
      if (link === TERMS_AND_CONDITIONS_LINK) return i18n.t('login:terms_of_use')
      if (link === PRIVACY_POLICY_LINK) return i18n.t('login:privacy_policy')
      return link
    }}
    onPress={openLink}
  >
    <Notice marginTop={5}>
      {i18n.t('subscription:purchaseAgreementText', {
        termsOfUseLink: TERMS_AND_CONDITIONS_LINK,
        privacyPolicyLink: PRIVACY_POLICY_LINK,
      })}
    </Notice>
  </HyperLink>
}

export default PostOnboardingTermsAndConditions