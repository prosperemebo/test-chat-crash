import {
  GoogleSignin,
  statusCodes,
  isSuccessResponse,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin'
import config from '@/config'
import { doCustomFetch } from '@/utils/doFetch'
import { OAuthResponse } from '@/types'
import { getUniqueId } from '@/utils/device'

export const init = () => {
}

export const signIn = async (): Promise<OAuthResponse> => {
  try {
    await GoogleSignin.hasPlayServices()

    const response = await GoogleSignin.signIn()

    if (!isSuccessResponse(response)) {
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    if (!response.data?.serverAuthCode) {
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    const serverAuthCode = response.data?.serverAuthCode

    const uniqueId = await getUniqueId()
    const data = {
      code: serverAuthCode,
      uniqueId,
    }

    const url = `${config.SERVER_API_URL}/oauth/google/login`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    const result = await doCustomFetch(url, options)

    if (!result.data.accessToken) {
      return {
        success: false,
        data: {
          accessToken: '',
          refreshToken: '',
        },
        status: '',
      }
    }

    return {
      success: true,
      status: '',
      data: {
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken,
      },
    }
  } catch (error) {
    //TODO finish errors
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break
        case statusCodes.SIGN_IN_CANCELLED:
          // Android only, play services not available or outdated
          break
        default:
        // some other error happened
      }
    } else {
      console.error('google oauth ', error)
    }

    return {
      success: false,
      data: {
        accessToken: '',
        refreshToken: '',
      },
      status: '',
    }
  }
}

export const logout = () => {
  GoogleSignin.signOut().catch(error => console.error('google oauth:', error))
}