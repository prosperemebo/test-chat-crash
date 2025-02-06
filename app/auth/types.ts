import { StoreResponse, Banner } from '@/types'
import { LOGIN_METHODS } from '@/constants/general'

export interface ResetPasswordProps {
  forgotPassword: (email: string) => Promise<boolean>,
  setPassword: (password: string, token: string) => Promise<boolean>,
  isRequestRunning: boolean,
}

export interface SignInProps {
  loginEmail: (email: string, password: string) => Promise<StoreResponse>
  loginThirdParty: (type: LOGIN_METHODS) => Promise<StoreResponse>
  isRequestRunning: boolean
  isNewDesign: boolean,
  landingLabel: string,
}

export interface GamesProps {
  isGamesRequestRunning: boolean
  onboardingGames: Banner[]
  getInitialOnboardingGames: () => Promise<void>
  showToast: (message: string) => void
  loadMoreOnboardingGames: () => Promise<void>
  searchGames: (query: string) => Promise<void>
  setSelectedGames: (gameIds: string[]) => Promise<void>
}

export interface ToastProps {
  showToast: (message: string) => void
}

export interface PersonalProps extends ToastProps {
  updateUserProfileLanguages: () => void
  updateUserTimezone: () => void
  updateUserSettingsLanguage: () => void
}