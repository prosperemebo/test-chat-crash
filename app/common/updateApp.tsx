import { AppVersionStatusEnumType } from '@/types'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { LinearGradientBackground } from '@/components/common'
import { UpdateApp } from '@/components/other'

type UpdateAppScreenParams = {
  type: AppVersionStatusEnumType
}

export default () => {
  const { type } = useLocalSearchParams() as unknown as UpdateAppScreenParams
  const router = useRouter()

  const goBack = () => {
    if (router.canGoBack()) {
      goBack()
    } else {
      router.replace('/(app)')
    }
  }

  return <LinearGradientBackground colors={['#1F2025', '#643795', '#CA7AF5']} start={{ x: 0.65, y: 0.65 }}>
    <UpdateApp type={type} goBack={goBack} />
  </LinearGradientBackground>
}