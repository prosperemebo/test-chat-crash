import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BackdropCoverImage, UserProfileAppBar, UserProfileAppBarActions } from '@/components/profile'
import { IconButton } from '@/components/common'
import { UserInfoHeaderProps } from './types'

const UserInfoHeader = ({ goToProfilePreview, goToSettings, avatar }: UserInfoHeaderProps) => {
  const { top } = useSafeAreaInsets()

  return <>
    <BackdropCoverImage source={{ uri: avatar }} contentFit='cover' safeareaSize={top} />
    <UserProfileAppBar safeareaSize={top}>
      <UserProfileAppBarActions>
        <IconButton name={'eye-outline'} blur={true} onPress={goToProfilePreview} disabled={false} type={'material'} />
      </UserProfileAppBarActions>
      <UserProfileAppBarActions>
        <IconButton name={'cog-outline'} blur={true} onPress={goToSettings} disabled={false} type={'material'} />
      </UserProfileAppBarActions>
    </UserProfileAppBar>
  </>
}

export default UserInfoHeader