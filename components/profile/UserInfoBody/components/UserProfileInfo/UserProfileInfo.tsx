import { Container, UserData } from './styles'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Store, User } from '@/types'

const UserProfileInfo = ({ user }: { user: User }) => (
  <Container>
    <UserData colorName={user.profile.colorName}>
      {user.username}, {user.profile.age}
    </UserData>
  </Container>
)

export default compose(
  inject((context: Store) => ({
    user: context.UserStore.user,
  })),
)(UserProfileInfo)