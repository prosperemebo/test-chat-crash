import { init as initGoogle, signIn as signInGoogle, logout as logoutGoogle } from './google'
import { signIn as signInFacebook, logout as logoutFacebook } from './facebook'
import { signIn as signInApple, logout as logoutApple } from './apple'
import { signIn as signInDiscord, logout as logoutDiscord } from './discord'
import { OAuthResponse } from '@/types'

//TODO error loging
export default class OAuthService {
  static async signInViaGoogle(): Promise<OAuthResponse> {
    return await signInGoogle()
  }

  static async signInViaFacebook(): Promise<OAuthResponse> {
    return await signInFacebook()
  }

  static async signInViaApple(): Promise<OAuthResponse> {
    return await signInApple()
  }

  static async signInViaDiscord(): Promise<OAuthResponse> {
    return await signInDiscord()
  }

  //Facebook initialized in analytics do to ios requirements
  static initializeOathServices = () => {
    initGoogle()
  }

  static logout() {
    logoutGoogle()
    logoutFacebook()
    logoutApple()
    logoutDiscord()
  }
}