import { createInstance, Identify, identify } from '@amplitude/analytics-react-native'
import { ReactNativeClient } from '@amplitude/analytics-types'
import config from '@/config'

export const initializeAmplitudeAnalytics = () => {
  const instance = createInstance()
  // @ts-ignore
  instance.init(config.AMPLITUDE_API_KEY)

  return instance
}

export const amplitudeProxy = (instance: ReactNativeClient | null) => {
  if (!instance) return null

  return {
    setUserId: (value: string | undefined) => {
      return instance.setUserId(value)
    },
    setUserProperties: (values: { [key:string]: any }) => {
      const identifyObj = new Identify()
      Object.keys(values).map(key => {
        identifyObj.set(key, values[key])
      })
      return identify(identifyObj)
    },
    logEvent: (key: string, value: { [key:string]: any }) => {
      return instance.track(key, value)
    },
  }
}