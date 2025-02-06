import { AccessToken, LoginManager, AuthenticationToken } from 'react-native-fbsdk-next'
import { Platform } from 'react-native'
import { v4 as uuid } from 'uuid'
import config from '@/config'
import { doCustomFetch } from '@/utils/doFetch'
import 'react-native-get-random-values'
import { getUniqueId } from '@/utils/device'

export const signIn = async () => {
  try {
    const nonce = uuid()

    const result = await LoginManager.logInWithPermissions(['email'], 'limited', nonce)

    if (result.isCancelled) {
      console.error('Login with FB was cancelled')
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    let accessToken = null

    if (Platform.OS === 'ios') {
      const data = await AuthenticationToken.getAuthenticationTokenIOS()
      accessToken = data?.authenticationToken
    } else {
      const data = await AccessToken.getCurrentAccessToken()
      accessToken = data?.accessToken
    }

    if (!accessToken) {
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    const url = `${config.SERVER_API_URL}/oauth/facebook/login`

    const uniqueId = await getUniqueId()
    const data = {
      token: accessToken,
      nonce,
      uniqueId,
    }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data,
    }

    const response = await doCustomFetch(url, options)

    if (!response.data.accessToken) {
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    return {
      success: true,
      status: '',
      data: {
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      },
    }
  } catch (error) {
    //TODO errors
    console.error(error)

    return {
      success: false,
      status: '',
      data: {
        accessToken: '',
        refreshToken: '',
      },
    }
  }
}

export const logout = () => {
  LoginManager.logOut()
}