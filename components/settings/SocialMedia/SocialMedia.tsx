import * as WebBrowser from 'expo-web-browser'
import { companyTiktokMediaLink, companyInstagramMediaLink, companyDiscordMediaLink, companyFacebookMediaLink } from '@/constants/general'
import { LinksContainerInner, SocialMediaImage, SocialMediaButton } from './styles'

const socialMediaData = [
  { name: 'tiktok', value: 'tiktok', link: companyTiktokMediaLink, img: require('@/assets/images/socialIcons/v3/tiktok.png'), innerWidth: 16, innerHeight: 19 },
  { name: 'instagram', value: 'instagram', link: companyInstagramMediaLink, img: require('@/assets/images/socialIcons/v3/instagram.png'), innerWidth: 16, innerHeight: 16 },
  { name: 'discord', value: 'discord', link: companyDiscordMediaLink, img: require('@/assets/images/socialIcons/v3/discord.png'), innerWidth: 20, innerHeight: 15 },
  { name: 'facebook', value: 'fb', link: companyFacebookMediaLink, img: require('@/assets/images/socialIcons/v2/facebook.png'), innerWidth: 10, innerHeight: 19 },
]

const SocialMedia = () => {
  const handlePress = (url: string) => {
    WebBrowser.openBrowserAsync(url)
  }

  return <LinksContainerInner>
    {socialMediaData.map((sm, i) => (
      <SocialMediaButton key={i} onPress={() => handlePress(sm.link)}>
        <SocialMediaImage source={sm.img} width={sm.innerWidth} height={sm.innerHeight} />
      </SocialMediaButton>
    ))}
  </LinksContainerInner>
}

export default SocialMedia