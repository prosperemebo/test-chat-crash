import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ImageContainer, DruidImage } from './styles'
import config from '@/config'

const source = { uri: `${config.STATIC_HOST}/images/druid.gif` }

export const Loader = () => {
  const { bottom } = useSafeAreaInsets()

  return <ImageContainer safeAreaBottom={bottom}>
    <DruidImage
      source={source}
      contentFit={'contain'}
      cachePolicy={'memory-disk'}
    />
  </ImageContainer>
}