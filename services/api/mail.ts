import { doFetch } from '@/utils/doFetch'

type MailResponse = {
  success: boolean
}

export default class Mail {
  static async forgotPassword(email: string) {
    const url = '/mail/forgot-password'
    const options = {
      method: 'POST',
      data: {
        email: email,
      },
    }

    const result = await doFetch<MailResponse>(url, options)

    return result.data
  }

  static async verifyEmail(email: string) {
    const url = '/mail/verify-email'
    const options = {
      method: 'POST',
      data: {
        email: email,
      },
    }

    const result = await doFetch<MailResponse>(url, options)

    return result.data
  }

  static async changeEmail(email: string) {
    const url = '/mail/change-email'
    const options = {
      method: 'POST',
      data: {
        email: email,
      },
    }

    return doFetch<MailResponse>(url, options)
  }
}