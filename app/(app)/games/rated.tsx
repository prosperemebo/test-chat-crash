import { Text } from 'react-native'
import { Container, Header, MainBackground, PageContainer } from '@/components/common'
import i18n from '@/localization/i18n'
import { useRouter } from 'expo-router'

const RatedGames = () => {
  const router = useRouter()
  const goBack = () => {
    if (!router.canGoBack()) return

    router.back()
  }

  return <MainBackground>
    <PageContainer disableTopSafeArea={true}>
      <Header title={i18n.t('games:ratedGames')} withGoBack onGoBack={goBack}/>
      <Container>
        <Text>RatedGames</Text>
      </Container>
    </PageContainer>
  </MainBackground>
}

export default RatedGames