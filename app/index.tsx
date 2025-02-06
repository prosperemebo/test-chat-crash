import { useRouter } from 'expo-router'
import { useEffect } from 'react'

export default function Index() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/auth')
  }, [])

  return null
} 