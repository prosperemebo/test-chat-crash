import { SocialLoginButton } from '@/components/auth'
import { Container, LoadingIndicator } from './styles'
import { SocialLoginBlockProps } from './types'
import { Platform } from 'react-native'

const SocialLoginBlock = (props: SocialLoginBlockProps) => {
  const { isLoading, onFacebookPress, onGooglePress, onDiscordPress, onApplePress, isNewDesign = false } = props
  const androidDevice = Platform.OS === 'android'
  if (isLoading) return <Container center={true}>
    <LoadingIndicator size='large' color='#fff' />
  </Container>
  
  return <Container center={false}>
    <SocialLoginButton isNewDesign={isNewDesign} onPress={onFacebookPress} name={'facebook'} />
    <SocialLoginButton isNewDesign={isNewDesign} onPress={onGooglePress} name={'google'} />
    <SocialLoginButton isNewDesign={isNewDesign} onPress={onDiscordPress} name={'discord'} />
    {androidDevice ? null : <SocialLoginButton isNewDesign={isNewDesign} onPress={onApplePress} name={'apple'}/>}
  </Container>
}

export default SocialLoginBlock