import ImproveExperience from './components/ImproveExperience'
import UserImageAvatar from './components/UserImageAvatar'
import UserProfileInfo from './components/UserProfileInfo'
import { ScreenBody, UserProfileHeaderContent, UserProfileContent, UserProfileSectionWrapper } from './styles'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Store, User } from '@/types'
import { useEffect } from 'react'

const UserInfoBody = ({ getUser }: { getUser: () => User }) => {
  useEffect(() => {
    getUser()
  }, [])
  return (
    <ScreenBody>
      <UserProfileHeaderContent>
        <UserImageAvatar />
        <UserProfileInfo />
      </UserProfileHeaderContent>
      <UserProfileContent>
        <UserProfileSectionWrapper>
          <ImproveExperience />
        </UserProfileSectionWrapper>
      </UserProfileContent>
    </ScreenBody>
  )
}

export default compose(
  inject((context: Store) => ({
    getUser: context.UserStore.getUser,
    user: context.UserStore.user,
  })),
)(UserInfoBody)