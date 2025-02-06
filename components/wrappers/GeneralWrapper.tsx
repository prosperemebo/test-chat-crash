import React, { useEffect, PropsWithChildren, useState } from 'react'
import { Provider } from 'mobx-react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native'
import { ThemeProvider as GlobalThemeProvider } from 'styled-components/native'
import { useColorScheme } from '@/hooks/useColorScheme'
import { useAppInitialization } from '@/hooks/useAppInitialization'
import { initAppConfiguration } from '@/utils/appConfiguration'
import { dark, light } from '@/theme'
import Store from '@/store'
import { ActivityIndicator, BackgroundImage, SplashLogo, SplashScreenContent } from '../common'
import { Platform } from 'react-native'
import { useAssets } from 'expo-asset'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

SplashScreen.preventAutoHideAsync().catch(console.warn)

initAppConfiguration()

const SPLASH_HIDE_DELAY = {
  ios: 1500,
  android: 1500,
}

const GeneralWrapper = (props: PropsWithChildren) => {
  const { children } = props
  const colorScheme = useColorScheme()
  const loaded = useAppInitialization()

  const [isLoadingApp, setIsLoadingApp] = useState(true)
  const [assets] = useAssets([
    require('@/assets/images/gradient_bg.png'),
    require('@/assets/images/in_app_logo_block.png'),
  ])

  useEffect(() => {
    if (assets) {
      SplashScreen.hide()
    }
  }, [assets])

  useEffect(() => {
    if (loaded) {
      const hideSplash = async () => {
        try {
          const delay = Platform.select(SPLASH_HIDE_DELAY) ?? 1500
          await new Promise((resolve) => global.setTimeout(resolve, delay))
          await SplashScreen.hideAsync()

          setIsLoadingApp(false)
        } catch (e) {
          console.warn('Error hiding splash screen:', e)
        }
      }

      hideSplash()
    }
  }, [loaded])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GlobalThemeProvider theme={colorScheme === 'dark' ? dark : light}>
        <NavThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <SafeAreaProvider>
            {loaded && (
              <Provider {...Store}>
                <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
              </Provider>
            )}
            {isLoadingApp && assets && !loaded ? (
              <BackgroundImage source={assets[0]} contentFit='cover'>
                <SplashScreenContent>
                  <SplashLogo source={assets[1]} contentFit='contain' />
                  <ActivityIndicator size='large' color='#FFFFFFC2' />
                </SplashScreenContent>
              </BackgroundImage>
            ) : null}
          </SafeAreaProvider>
        </NavThemeProvider>
      </GlobalThemeProvider>
    </GestureHandlerRootView>
  )
}

export default GeneralWrapper
