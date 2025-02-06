import { OnboardingProgress } from '@/store/OnboardingStore'
import { RemoteConfigValues } from '@/store/ConfigStore'
import { LOGIN_METHODS } from '@/constants/general'

export interface AppProps {
  isAuthorized: boolean
  isOnboardingFinished: boolean
  getOnboardingProgress: () => OnboardingProgress,
  remoteConfigValues: RemoteConfigValues,
  lastUsedLoginMethod: LOGIN_METHODS | null,
  updateDeviceInfo: () => void
}

export interface SettingsProps {
  logout: () => void
}

export interface UserProfileProps {
  logout: () => void
}

export interface InputContainerProps {
  showError?: boolean
  addBottom?: boolean
}

export interface InputFieldProps {
  margin?: boolean
}

export interface InputIconProps {
  isError?: boolean
}
