import * as Application from 'expo-application'
import { Platform } from 'react-native'
import { REMOTE_CONFIG_PROPERTY } from '@/common/commonLib/constants'
import { RemoteConfigValues } from '@/store/ConfigStore'

export const useCheckUpdate = (remoteConfigValues: RemoteConfigValues) => {
  const actualVersion = remoteConfigValues[REMOTE_CONFIG_PROPERTY.ACTUAL_APP_VERSION]
  const localVersion = Application.nativeApplicationVersion || '1.0.0'

  // 2 = force, 1 = suggest
  const code = checkAppVersion(localVersion, actualVersion[Platform.OS])

  return {
    shouldUpdate: !!code,
    url: getStoreURL(),
    code: code,
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

  const local_partsNumber = local_parts.map(Number)
  const remote_partsNumber = remote_parts.map(Number)

  if (
    remote_partsNumber[0] > local_partsNumber[0]
    || (remote_partsNumber[0] === local_partsNumber[0]
      && remote_partsNumber[1] > local_partsNumber[1])
  ) {
    // version has been changed, update is required
    return 2
  }

  if (
    remote_partsNumber[0] === local_partsNumber[0]
    && remote_partsNumber[1] === local_partsNumber[1]
    && remote_partsNumber[2] > local_partsNumber[2]
  ) {
    // only patch has been changed, update is ready but not required
    return 1
  }
  // versions are the same, no update needed
  return 0
}
export const getStoreURL = () => {
  if (Platform.OS === 'ios') {
    return 'https://apps.apple.com/us/app/gametree-meet-new-friends/id1181404496'
  } else {
    return 'https://play.google.com/store/apps/details?id=com.gametreeapp'
  }
}