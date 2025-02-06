export interface OAuthResponse {
  success: boolean
  data: {
    accessToken: string
    refreshToken: string
  }
  status: string
}