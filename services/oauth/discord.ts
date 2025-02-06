import { AuthRequest } from 'expo-auth-session'
import { OAuthResponse } from '@/types'
import config from '@/config'
import { doCustomFetch } from '@/utils/doFetch'
import 'react-native-get-random-values'
import { getUniqueId } from '@/utils/device'

const discordOAuth2Config = {
  clientId: '666589060562944001',
  redirectUrl: 'gametreeapp://discordauth',
  scopes: ['identify', 'email'],

  authorizationEndpoint: 'https://discord.com/oauth2/authorize',
}


export const signIn = async (): Promise<OAuthResponse> => {
  try {
    const codeRequest = new AuthRequest({
      clientId: discordOAuth2Config.clientId,
      redirectUri: discordOAuth2Config.redirectUrl,
      scopes: discordOAuth2Config.scopes,
    })

    const tokenData = await codeRequest.promptAsync({
      authorizationEndpoint: discordOAuth2Config.authorizationEndpoint,
    })

    if (tokenData.type !== 'success' || !tokenData.params.code) {
      return {
        success: false,
        status: '',
        data: {
          accessToken: '',
          refreshToken: '',
        },
      }
    }

    const uniqueId = await getUniqueId()
    const data = {
      codeVerifier: codeRequest.codeVerifier,
      code: tokenData.params.code,
      uniqueId,
    }
    const url = `${config.SERVER_API_URL}/oauth/discord/login`

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    }

    const loginResult = await doCustomFetch(url, options)

    if (!loginResult.data.accessToken) {
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
        accessToken: loginResult.data.accessToken,
        refreshToken: loginResult.data.refreshToken,
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

export const logout = () => {
  //no implementation
}