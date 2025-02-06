import { useRouter } from 'expo-router'
import { useTheme } from 'styled-components/native'
import analytics from '@/services/analytics'
import { IconButton } from '@/components/common'
import { ImproveRecommendationBannerWrapper, ImproveRecommendationBannerTitle, ButtonWrapper } from './styles'
import i18n from '@/localization/i18n'

const upgradeIcon = require('@/assets/images/profile/arrow.png')

const ImproveExperience = () => {
  const router = useRouter()

  const theme = useTheme()

  const handleImproveExperiencePress = () => {
    analytics.sideMenu.pressedImproveRecom()
    router.push('/(app)/settings/editProfile')
  }

  return <ImproveRecommendationBannerWrapper onPress={handleImproveExperiencePress}>
    <ButtonWrapper size={50}>
      <IconButton type='image' source={upgradeIcon} size={50} color={theme.profile.improveBackgroundColor} padding={17} disabled={true} />
    </ButtonWrapper>
    <ImproveRecommendationBannerTitle>{i18n.t('improve:titleLong')}</ImproveRecommendationBannerTitle>
    <ButtonWrapper size={30}>
      <IconButton type="material" name='chevron-right' color={theme.primaryTextColor} iconColor={theme.primaryBg} disabled={true} padding={0} size={30}/>
    </ButtonWrapper>
  </ImproveRecommendationBannerWrapper>
  
}

export default ImproveExperience