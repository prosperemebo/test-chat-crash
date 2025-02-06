import 'react-native-reanimated'
import '@/utils/logs'
import { StatusBar } from 'expo-status-bar'
import { GeneralWrapper } from '@/components/wrappers'
import { Stack } from 'expo-router'

export default function RootLayout() {

  //TODO track analytics if enabled

  return (
    <GeneralWrapper>
      <Stack>
        <Stack.Screen name='auth' options={{ headerShown: false }} />
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
      </Stack>
      <StatusBar translucent={true} backgroundColor='transparent' style='light' />
    </GeneralWrapper>
  )
}
