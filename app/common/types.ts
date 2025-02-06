import { StoreResponse } from "@/types"

export interface VerifyEmailSearchParams {
  email: string
  verifyEmailToken: string
}

export interface VerifyEmailProps {
  isRequestRunning: boolean
  verifyEmail: (email: string, token: string) => Promise<StoreResponse>,
}

export interface VerifyEmailProps {
  shouldPrompt: boolean
  isPermitted: boolean
}

export interface ChatProps {
  logout: () => Promise<void>
  getPermissionStatus: () => Promise<VerifyEmailProps>
}

export interface LocationPermissionProps {
  updateLocation: () => void
  skipPermission: () => void
}