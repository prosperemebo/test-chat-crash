import {
  Platform,
  NativeModules,
} from 'react-native'
import { locales } from '@/constants/locales'
import { getLocales } from 'expo-localization'

const normalizeLocale = (locale: string): string => {
  const normalizedLocale = locale.toLowerCase().split(/[_-]/)[0]
  
  if (normalizedLocale === 'ua' || normalizedLocale === 'uk') {
    return 'uk'
  }
  
  return normalizedLocale
}

const findMatchingLocale = (deviceLocale: string): string => {
  const normalizedDeviceLocale = normalizeLocale(deviceLocale)
  
  const matchedLocale = locales.find(
    supportedLocale => normalizeLocale(supportedLocale) === normalizedDeviceLocale,
  )
  
  return matchedLocale || 'en'
}

export default () => {
  let deviceLocale = 'en'

  if (Platform.OS === 'ios') {
    let locale = NativeModules.SettingsManager.settings.AppleLocale
    
    if (!locale) {
      locale = NativeModules.SettingsManager.settings.AppleLanguages?.[0]
    }
    
    if (locale) {
      deviceLocale = locale
    }
  } else if (Platform.OS === 'android') {
    deviceLocale = getLocales()[0].languageCode || 'en'
  }

  return findMatchingLocale(deviceLocale)
}
