export type RefreshTokenResult = {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type LoginResult = {
  data: {
    accessToken: string
    refreshToken: string
  }
}

export type LogoutResult = {
  data: {
    success: boolean
  }
}

export type ResetPasswordResult = {
  data: {
    success: boolean
  }
}