import { Link, Stack, useRouter } from 'expo-router'
import { Text } from 'react-native'
import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { Store } from '@/types'
import { Container, StyledLink, LogoutButton } from './styles'

const NotFoundScreen = () => {
  const router = useRouter()

  const handleReset = () => {
    router.replace('/auth/signIn')
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Container>
        <Text>This screen doesn't exist.</Text>
        <StyledLink>
          <Link href="/(app)/home">
            <Text>Go to home screen!</Text>
          </Link>
        </StyledLink>
        <LogoutButton onPress={handleReset}>
          <Text>LOGOUT/RESET STORE</Text>
        </LogoutButton>
      </Container>
    </>
  )
}

export default NotFoundScreen