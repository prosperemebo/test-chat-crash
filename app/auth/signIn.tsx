import analytics from '@/services/analytics'
import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { PageContainer, ScrollContainer } from '@/components/common'
import { AuthLogoBlock, Divider, LoginPageTermsAndConditions, SocialLoginBlock, LoginEmailForm } from '@/components/auth'
import { AdaptyService } from '@/services/Adapty'
import { SignInProps as Props } from './types'
import { Keyboard, Platform } from 'react-native'
import BackgroundSwitcherWrapper from '@/components/wrappers/BackgroundSwitcherWrapper'

const GradientBg = require('@/assets/images/gradient_bg.png')

const SignIn = (props: Props) => {
  const { isRequestRunning } = props
  const router = useRouter()

  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      },
    )

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  useEffect(() => {
    analytics.commonActivity.landingScreenVisited()
    AdaptyService.logOnboarding(1)
  }, [])

  const authLoading = false

  const handleEmailLogin = async (email: string, password: string) => {
    handleLoginResult()
  }
  const handleFacebookLogin = async () => {
    handleLoginResult()
  }
  const handleGoogleLogin = async () => {
    handleLoginResult()
  }
  const handleDiscordLogin = async () => {
    handleLoginResult()
  }
  const handleAppleLogin = async () => {
    handleLoginResult()
  }

  const handleLoginResult = () => {
    router.replace('/(app)')
  }

  return (
    <BackgroundSwitcherWrapper
      imageSource={GradientBg}
      useImage={props.isNewDesign}
      colors={['#1F2025', '#643795', '#CA7AF5']}
      start={{ x: 0.65, y: 0.65 }}
    >
      <PageContainer>
        <ScrollContainer>
          {!isKeyboardVisible ? <AuthLogoBlock showHero={props.isNewDesign} caption={props.landingLabel} /> : null}
          <SocialLoginBlock
            isLoading={authLoading}
            isNewDesign={props.isNewDesign}
            onApplePress={handleAppleLogin}
            onDiscordPress={handleDiscordLogin}
            onGooglePress={handleGoogleLogin}
            onFacebookPress={handleFacebookLogin}
          />
          <Divider />
          <LoginEmailForm
            loading={isRequestRunning}
            onLoginPress={handleEmailLogin}
          />
          <LoginPageTermsAndConditions />
        </ScrollContainer>
      </PageContainer>
    </BackgroundSwitcherWrapper>
  )
}


export default SignIn
