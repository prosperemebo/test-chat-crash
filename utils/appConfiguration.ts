import * as SplashScreen from 'expo-splash-screen'
import { Image } from 'expo-image'
import { configure as configureMobx } from 'mobx'
import { configurePersistable } from 'mobx-persist-store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n, { init as initI18n } from '../localization/i18n'
import getDefaultLocale from '../localization/locale'
import config from '@/config'
import OAuthService from '@/services/oauth'

export function initAppConfiguration () {
  Image.prefetch(`${config.STATIC_HOST}/images/druid.gif`, 'memory-disk')

  initI18n()

  OAuthService.initializeOathServices()

  const fallbackLang = getDefaultLocale()
  i18n.changeLanguage(fallbackLang)

  configureMobx({})

  configurePersistable({
    storage: AsyncStorage,
  })
  
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync()
}