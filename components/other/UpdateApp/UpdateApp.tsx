import { AppVersionStatusEnum } from '@/types'
import * as Linking from 'expo-linking'
import { getStoreURL } from '@/utils/checkAppVersion'
import { Container, TextWrapper, Text, Button, ButtonText, ButtonsBlock } from './styled'
import i18n from '@/localization/i18n'
import { UpdateAppProps } from './types'
import { forceConfig, suggestConfig } from './constants'

const STORE_URL = getStoreURL()

const UpdateApp = ({ type, goBack }: UpdateAppProps) => {
  const config = type === AppVersionStatusEnum.FORCE ? forceConfig : suggestConfig

  const openStore = () => {
    Linking.openURL(STORE_URL)
  }

  const { text, hasButton } = config

  return <Container>
    <TextWrapper>
      <Text>{i18n.t(text)}</Text>
    </TextWrapper>
    <ButtonsBlock>
      <Button onPress={openStore}>
        <ButtonText>{i18n.t('common:update')}</ButtonText>
      </Button>
      {hasButton && <Button onPress={goBack}>
        <ButtonText>{i18n.t('common:skip')}</ButtonText>
      </Button>}
    </ButtonsBlock>
  </Container>
}

export default UpdateApp