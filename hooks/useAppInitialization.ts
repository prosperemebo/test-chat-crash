import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { AdaptyService } from '@/services/Adapty'

export function useAppInitialization() {
  const [isReady, setReady] = useState(false)

  //order is important
  useEffect(() => {
    const init = async () => {
      setReady(true)
    }
    init()
  }, [])

  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  })

  return loaded && isReady
}