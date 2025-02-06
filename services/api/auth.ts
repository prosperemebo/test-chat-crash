import { doFetch } from '@/utils/doFetch'
import { LoginResult, LogoutResult, RefreshTokenResult, ResetPasswordResult } from '@/types'
import { getUniqueId } from '@/utils/device'

export default class AuthService {
  static async login(email: string, password: string) {
    const url = '/auth/login'
    const uniqueId = await getUniqueId()
    const options = {
      method: 'POST',
      data: { email, password, uniqueId },
    }

    return doFetch<LoginResult>(url, options)
  }

  static async logout() {
    const url = '/auth/logout'
    const options = {
      method: 'POST',
    }

    return doFetch<LogoutResult>(url, options)
  }

  static async refreshToken(refreshToken: string) {
    const url = '/auth/refresh-token'
    const options = {
      method: 'POST',
      data: { refreshToken },
    }

    return doFetch<RefreshTokenResult>(url, options)
  }

  static async resetPassword(password: string, token: string) {
    const url = '/auth/reset-password'
    const options = {
      method: 'POST',
      headers: {
        authorization: token,
      },
      data: { password },
    }

    return doFetch<ResetPasswordResult>(url, options)
  }
}