import { Href } from 'expo-router'

export * from './user'
export * from './general'
export * from './oauth'
export * from './game'
export * from './api'
export * from './matches'

export interface DeepLinksResult {
  urlToGo: Href | null
}

export interface TokenResponse {
  accessToken: string
  refreshToken: string
  chatToken: string
}

export interface LoginResult {
  message: string
  data: TokenResponse
}

export interface LogoutResult {
  success: boolean
}

export interface RefreshTokenResult {
  message: string
  data: TokenResponse
}

export interface ResetPasswordResult {
  success: boolean
}