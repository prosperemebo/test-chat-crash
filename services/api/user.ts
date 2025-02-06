import { PlatformEnumType, User, GenreEnumType, GenderType, LanguagesType, NotifPreferences, Location } from '@/types'
import { doFetch } from '@/utils/doFetch'

export type OnboardingDTO = {
  genres: GenreEnumType[]
  platforms: PlatformEnumType[]
  gameIds: string[]
  username: string
  birthday: number
  gender: GenderType | null
}

type UserProfileDTO = {
  username: string
  gender: GenderType
  birthday: number
  aboutMe: string
  avatar: string
  colorName: string
  gallery: string[]
  statusIcon: string
  gamesIds: string[]
  platforms: PlatformEnumType[]
  genres: GenreEnumType[]
  coverImg: string
  languages: LanguagesType[]
  timezone: string
}

type UserSettingsDTO = {
  language: LanguagesType
  notifPreferences: NotifPreferences
  hideLocation: boolean
}

type UserLocationDTO = {
  lat: number
  lng: number
}

type ResponseType = {
  success: boolean
}

type UserDeviceInfoDTO = {
  userAgent: string
  carrier: string
  uniqueId: string
  systemName: string
  systemVersion: string
  webAgent: string
  timezone: string
  buildNumber: string
}

export default class UserService {
  static async getCurrentUser() {
    const url = '/user/current-user'
    const options = {
      method: 'GET',
    }

    const { data } = await doFetch<User>(url, options)

    return data
  }

  static async updateOnboardedUser(data: Partial<OnboardingDTO>) {
    const url = '/user/update-onboarded-user'
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<ResponseType>(url, options)
    const success = result.status === 200

    return { success }
  }

  static async updateUserProfile(data: Partial<UserProfileDTO>) {
    const url = '/user/update-user-profile'
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<ResponseType>(url, options)
    const success = result.status === 200

    return { success }
  }

  static async updateUserSettings(data: Partial<UserSettingsDTO>) {
    const url = '/user/update-user-settings'
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<ResponseType>(url, options)
    const success = result.status === 200

    return { success }
  }

  static async verifyEmail(email: string, token: string) {
    const url = '/user/verify-email'
    const options = {
      method: 'POST',
      data: {
        email,
      },
      headers: {
        authorization: token,
      },
    }

    const result = await doFetch<ResponseType>(url, options)

    return result.data
  }

  static async removeUser() {
    const url = '/user/remove-user'
    const options = {
      method: 'POST',
      data: {},
    }

    return doFetch<ResponseType>(url, options)
  }

  static async updateUserLocation(data: Partial<UserLocationDTO>) {
    const url = '/user/location'
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<{ data: { success: boolean, data: Location } }>(url, options)
    return result.data.data.data
  }

  static async updateDeviceInfo(data: UserDeviceInfoDTO) {
    const url = '/user/set-device-info'
    const options = {
      method: 'POST',
      data: data,
    }

    const result = await doFetch<{ success: boolean }>(url, options)
    const success = result.status === 200

    return { success }
  }
}