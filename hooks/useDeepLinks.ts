import { useState, useEffect } from 'react'
import * as Linking from 'expo-linking'
import { DeepLinksResult } from '@/types'

//For future use
export const useDeepLinks = (): DeepLinksResult => {
  const [url, setURL] = useState<string | null>(null)

  useEffect(() => {
    const sub = Linking.addEventListener('url', handleUrlOpened)

    return () => {
      sub.remove()
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      const initialURL = await Linking.getInitialURL()

      setURL(initialURL)
    }

    init()
  }, [])

  useEffect(() => {
  }, [url])

  const handleUrlOpened = (event: Linking.EventType) => {
    const { url: newUrl } = event
    setURL(newUrl)
  }

  return {
    urlToGo: null,
  }
}
