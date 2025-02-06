import { Keyboard } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Container, HideKeyboardWrapper, KeyboardView } from './styles'
import { PageContainerProps } from './types'


export const PageContainer = (props: PageContainerProps) => {
  const { children, disableTopSafeArea = false } = props

  const insets = useSafeAreaInsets()

  const dismissKeyboardHandler = () => {
    Keyboard.dismiss()
  }

  const topInsets = disableTopSafeArea ? 0 : insets.top

  return <KeyboardView>
    <HideKeyboardWrapper onPress={dismissKeyboardHandler} accessible={false}>
      <Container bottomInset={insets.bottom} topInset={topInsets}>
        {children}
      </Container>
    </HideKeyboardWrapper>
  </KeyboardView>
}
