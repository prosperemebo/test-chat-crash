import {
  ProfileBadgeWrapper,
  ProfileEditButtonWrapper,
  ProfileProgress,
  ProfileProgressText,
  ProfileProgressWrapper,
  UserProfileHeaderAvatarImage,
  UserProfileHeaderAvatarImageWrapper,
  UserProfileHeaderAvatarProgress,
} from './styles'
import i18n from '@/localization/i18n'
import { getProfileCompletionScore } from './utils/utils'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { IconButton } from '@/components/common'
import { useRouter } from 'expo-router'

import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Store } from '@/types'
import { OnlineStatusIconKey, UserImageAvatarProps } from './types'
import { onlineStatusIcons } from './constants'
import { useTheme } from 'styled-components/native'

const UserImageAvatar = ({
  user,
  disabled,
  showProgress = true,
  showBadge = false,
  showEdit = true,
}: UserImageAvatarProps) => {
  const userProfileCompletionScore = user ? getProfileCompletionScore(user) : 0
  const resetRotation = userProfileCompletionScore <= 95
  const onlineStatusIcon = onlineStatusIcons[user.avatar.onlineStatusIcon as OnlineStatusIconKey]

  const theme = useTheme()
  const router = useRouter()

  const goToEditProfile = () => {
    router.push('/(app)/settings/editProfile')
  }

  return (
    <UserProfileHeaderAvatarProgress disabled={disabled} onPress={goToEditProfile} showProgress={showProgress}>
      {showProgress && (
        <AnimatedCircularProgress
          size={130}
          width={4}
          rotation={resetRotation ? 210 : 180}
          fill={userProfileCompletionScore}
          tintColor='#FFB700'
          backgroundColor='#3E3F45'
          lineCap='round'
          arcSweepAngle={resetRotation ? 300 : 360}
        />
      )}
      <UserProfileHeaderAvatarImageWrapper showProgress={showProgress}>
        <UserProfileHeaderAvatarImage source={{ uri: user.avatar.secure }} />
      </UserProfileHeaderAvatarImageWrapper>

      {showEdit && (
        <ProfileEditButtonWrapper>
          <IconButton
            name='pencil'
            iconColor={theme.common.buttonGradientOrangeEnd}
            size={18}
            actionNeeded={resetRotation}
            disabled={true}
          />
        </ProfileEditButtonWrapper>
      )}

      {(!showProgress || showBadge) && onlineStatusIcon ? (
        <ProfileBadgeWrapper>
          <IconButton size={40} disabled={true} type='image' name={onlineStatusIcon} />
        </ProfileBadgeWrapper>
      ) : null}

      {showProgress && resetRotation && (
        <ProfileProgressWrapper>
          <ProfileProgress colors={[theme.common.buttonGradientOrangeStart, theme.common.buttonGradientOrangeEnd]}>
            <ProfileProgressText>
              {userProfileCompletionScore}% {i18n.t('tests:complete')}
            </ProfileProgressText>
          </ProfileProgress>
        </ProfileProgressWrapper>
      )}
    </UserProfileHeaderAvatarProgress>
  )
}

export default compose(
  inject((context: Store) => ({
    user: context.UserStore.user,
  })),
)(UserImageAvatar)