import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication'
import { Platform } from 'react-native'
import { v4 as uuid } from 'uuid'
import config from '@/config'
import { OAuthResponse } from '@/types'
import { doCustomFetch } from '@/utils/doFetch'
import { getUniqueId } from '@/utils/device'

export const signIn = async (): Promise<OAuthResponse> => {
  try {
    const dataCall = Platform.OS === 'android' ? androidFlow : iosFlow

    const data = await dataCall()

    if (!data.token) {
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    const url = `${config.SERVER_API_URL}/oauth/apple/login`

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
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken,
      },
    }
  } catch (error) {
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

const iosFlow = async () => {
  const rawNonce = uuid()
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL],
    nonce: rawNonce,
    nonceEnabled: true,
  })

  const { identityToken } = appleAuthRequestResponse

  if (!identityToken) {
    return {
      success: false,
      status: '',
      data: {
        accessToken: '',
        refreshToken: '',
      },
    }
  }

  const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user)

  // use credentialState response to ensure the user is authenticated
  if (credentialState === appleAuth.State.AUTHORIZED) {
    // user is authenticated
    const uniqueId = await getUniqueId()
    return { token: identityToken, nonce: rawNonce, uniqueId }
  }

  return {
    token: null,
  }
}

const androidFlow = async () => {
  const rawNonce = uuid()
  const state = uuid()

  appleAuthAndroid.configure({
    clientId: config.APPLE_ID_FOR_ANDROID,
    //never called.
    redirectUri: config.APPLE_SIGN_IN_REDIRECT_FOR_ANDROID,
    responseType: appleAuthAndroid.ResponseType.ALL,
    scope: appleAuthAndroid.Scope.EMAIL,
    nonce: rawNonce,
    nonceEnabled: true,
    state,
  })

  const authResponse = await appleAuthAndroid.signIn()

  const uniqueId = await getUniqueId()
  return {
    token: authResponse.id_token,
    nonce: rawNonce,
    uniqueId,
  }
}

export const logout = () => {
  //no implementation
}