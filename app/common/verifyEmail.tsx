import compose from 'lodash/flowRight'
import { inject } from 'mobx-react'
import { RouteParams, useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Store, StoreResponse } from "@/types"
import { LinearGradientBackground, Container, ActivityIndicator, CenterWrapper, Button, Title } from '@/components/common'
import i18n from '@/localization/i18n'
import { VerifyEmailSearchParams, VerifyEmailProps } from './types'


const VerifyEmail = (props: VerifyEmailProps) => {
  const { isRequestRunning, verifyEmail } = props
  const { email, verifyEmailToken } = useLocalSearchParams<RouteParams<VerifyEmailSearchParams>>()
  const [result, setResult] = useState<StoreResponse | null>(null)
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const result = await verifyEmail(email, verifyEmailToken)
      setResult(result)
    }
    init()
  }, [])

  const renderResult = () => {
    if (!result) return null

    if (result.success) {
      return <Title>{i18n.t('settings:emailVerified')}</Title>
    }

    return <Title>{i18n.t('errors:errorOccurs')}</Title>
  }

  const goBack = () => {
    router.replace('/(app)')
  }

  if (isRequestRunning || !result) {
    return <LinearGradientBackground colors={['#1F2025', '#643795', '#CA7AF5']} start={{ x: 0.65, y: 0.65 }}>
      <Container>
        <CenterWrapper>
          <ActivityIndicator size="large" />
        </CenterWrapper>
      </Container>
    </LinearGradientBackground>
  }

  return <LinearGradientBackground colors={['#1F2025', '#643795', '#CA7AF5']} start={{ x: 0.65, y: 0.65 }}>
    <Container>
      <CenterWrapper>
        <Title>{i18n.t('connections:verifyEmail')}</Title>
        {renderResult()}
        <Button title={i18n.t('common:close')} type="primary" onPress={goBack} />
      </CenterWrapper>
    </Container>
  </LinearGradientBackground>
}


export default compose(
  inject((context: Store) => ({
    isRequestRunning: context.UserStore.isRequestRunning,
    verifyEmail: context.UserStore.verifyEmail,
  })),
)(VerifyEmail)