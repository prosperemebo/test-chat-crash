import { Platform } from 'react-native'
import { STORE_URL_ANDROID, STORE_URL_IOS } from '@/constants/general'

export const getStoreURL = () => {
  if (Platform.OS === 'ios') {
    return STORE_URL_IOS
  } else {
    return STORE_URL_ANDROID
  }
}

const isValidPart = (x: string) => {
  return /^\d+$/.test(x)
}

export const checkAppVersion = (current: string, actual: string) => {
  const local_parts = current.split('.')
  const remote_parts = actual.split('.')

  if (!local_parts.every(isValidPart) || !remote_parts.every(isValidPart)) {
    return 0
  }

  const converted_local_parts = local_parts.map(Number)
  const converted_remote_parts = remote_parts.map(Number)

  if (converted_remote_parts[0] > converted_local_parts[0]
    || (converted_remote_parts[0] === converted_local_parts[0] && converted_remote_parts[1] > converted_local_parts[1])
  ) {
    // version has been changed, update is required
    return 2
  }

  if (converted_remote_parts[0] === converted_local_parts[0]
    && converted_remote_parts[1] === converted_local_parts[1] && converted_remote_parts[2] > converted_local_parts[2]
  ) {
    // only patch has been changed, update is ready but not required
    return 1
  }
  // versions are the same, no update needed
  return 0
}